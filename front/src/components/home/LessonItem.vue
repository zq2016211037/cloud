<template>
  <div class="lesson_item">
      <div class="pic">
          <img src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDQmr4USIicRvRDuPvoqxSrFkP1eCFdO8KtXGvDsncvSjZGute2heeGBCiblPsebfE4s/356" alt="">
      </div>
      <p class="lesson_name">{{lessonObj.name}}</p>
      <p class="university">共{{lessonObj.chapters}}节 | {{lessonObj.university}}</p>
      <p class="price_number">
        <span class="price">${{lessonObj.price}}</span>
        <span class="number">{{lessonObj.number}}人最近报名</span>
      </p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.lesson_item{
  width: 220px;
  .pic{
    img{
      width: 220px;
    }
  }
  p{
    text-align: left;
    padding: 0 10px;
  }
  .lesson_name{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
  .university{
    font-size: 13px;
    color: #666;
    line-height: 32px;
  }
  .price_number{
    .price{
      color: #f4621f;
      padding-right: 10px;
    }
    .number{
      font-size: 13px;
      color: #666;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    lessonObj: {
      default () {
        return {
          name: '腾讯认证讲师精品课JS/Vue/React/ES6/Webpack/Node【青盟科技..',
          university: '青盟科技',
          price: 34,
          number: 2345,
          chapters: 88
        }
      },
      type: Object
    }
  }
}
</script>
