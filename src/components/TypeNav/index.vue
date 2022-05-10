<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="leave" @mouseenter="showCategory">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <!-- 一级分类 -->
            <div class="item bo" v-for="(c1, index) in categoryList" :key="c1.categoryId" @mouseenter="changeIndex(index)" :class="{ current: currentIndex === index }">
              <h3>
                <a :data-categoryname="c1.categoryName" :data-category1id="c1.categoryId">{{ c1.categoryName }}</a>
                <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
              </h3>
              <!-- 二级三级分类 -->
              <!-- 注意block、none需要写字符串格式，否则是变量 -->
              <div class="item-list clearfix" :style="{ display: index == currentIndex ? 'block' : 'none' }">
                <div class="subitem">
                  <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <a :data-categoryname="c2.categoryName" :data-category2id="c2.categoryId">{{ c2.categoryName }}</a>
                      <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a :data-categoryname="c3.categoryName" :data-category3id="c3.categoryId">{{ c3.categoryName }}</a>
                        <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import throttle from 'lodash/throttle'
  export default {
    name: 'TypeNav',
    data() {
      return {
        currentIndex: -1,
        show: false
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.home.categoryList
      })
    },
    methods: {
      changeIndex: throttle(function (index) {
        this.currentIndex = index
      }, 1),
      leave() {
        if (this.$route.path !== '/home') this.show = false
        this.currentIndex = -1
      },
      // 利用编程时导航+事件委派解决卡顿问题
      goSearch(event) {
        const { categoryname, category1id, category2id, category3id } = event.target.dataset
        const location = { name: 'search' }
        const query = { categoryName: categoryname } //注意属性名大小写要与后端api匹配

        if (categoryname) {
          if (category1id) {
            query.category1Id = category1id //注意属性名大小写要与后端api匹配
          } else if (category2id) {
            query.category2Id = category2id //注意属性名大小写要与后端api匹配
          } else if (category3id) {
            query.category3Id = category3id //注意属性名大小写要与后端api匹配
          }
          location.query = query
          this.$router.push(location)
        }
      },
      showCategory() {
        this.show = true
      }
    },
    mounted() {
      // if (this.$store.state.home.categoryList.length === 0) this.$store.dispatch('categoryList')  //放在APP组件中性能更好

      // 挂载完毕根据路径确定以及导航是否展示
      if (this.$route.path === '/home') this.show = true
    }
  }
</script>

<style scoped lang="less">
  .type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;

      .all {
        width: 210px;
        height: 45px;
        background-color: #e1251b;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }

      .nav {
        a {
          height: 45px;
          margin: 0 22px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
        }
      }

      .sort {
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;

        .all-sort-list2 {
          .item {
            h3 {
              line-height: 28px;
              font-size: 14px;
              font-weight: 400;
              overflow: hidden;
              padding: 0 20px;
              margin: 0;

              a {
                color: #333;
              }
            }

            .item-list {
              display: none;
              position: absolute;
              width: 734px;
              min-height: 460px;
              background: #f7f7f7;
              left: 210px;
              border: 1px solid #ddd;
              top: 0;
              z-index: 9999 !important;

              .subitem {
                float: left;
                width: 650px;
                padding: 0 4px 0 8px;

                dl {
                  border-top: 1px solid #eee;
                  padding: 6px 0;
                  overflow: hidden;
                  zoom: 1;

                  &.fore {
                    border-top: 0;
                  }

                  dt {
                    float: left;
                    width: 54px;
                    line-height: 22px;
                    text-align: right;
                    padding: 3px 6px 0 0;
                    font-weight: 700;
                  }

                  dd {
                    float: left;
                    width: 415px;
                    padding: 3px 0 0;
                    overflow: hidden;

                    em {
                      float: left;
                      height: 14px;
                      line-height: 14px;
                      padding: 0 8px;
                      margin-top: 5px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }

            // &:hover {
            //   .item-list {
            //     display: block;
            //   }
            // }
          }
          /* .item:hover {
                                                                                                                                                                                                                                    background-color: skyblue;
                                                                                                                                                                                                                                  } */
          // 使用另一种方法练习
          .current {
            background-color: orange;
          }
        }
      }
      // 分类过渡动画
      .sort-enter {
        height: 0;
      }
      .sort-enter-to {
        height: 461px;
      }
      .sort-enter-active {
        overflow: hidden;
        transition: all 0.5s;
      }
    }
  }
</style>