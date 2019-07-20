<!--------------------------------------------------
  name: card.vue
  author: 喵大斯( h5devs.com/h5devs.net )
  created: 2019.07.15
---------------------------------------------------->

<template>
  <div class="demo-card main">
    <div class="d-card">
      <h2 class="d-card__head">
        <span class="d-card__head--main">常用主色</span>
        <span class="d-card__head--more"><a href="#">链接示例 &gt;</a></span>
      </h2>
      <div class="colors d-card__body">
        <div class="color primary"><code>#1e9fff</code><br><span>primary</span></div>
        <div class="color success"><code>#67c23a</code><br><span>success</span></div>
        <div class="color warning"><code>#e6a23c</code><br><span>warning</span></div>
        <div class="color danger"><code>#f56c6c</code><br><span>danger</span></div>
        <div class="color info"><code>#909399</code><br><span>info</span></div>
      </div>
      <div class="d-card__foot">
        <span class="d-card__foot--main">此 Card 为默认样式</span>
        <span class="d-card__foot--more">详细说明</span>
      </div>
    </div>

    <div class="d-card is-card">
      <h2 class="d-card__head">
        <span class="d-card__head--logo">
          <span class="d-image" :style="`background-image:url(${backGroundUrl})`"></span>
        </span>
        <span class="d-card__head--main">带图标的标题</span>
        <span class="d-card__head--more"><a href="#">链接示例 &gt;</a></span>
      </h2>
      <div class="colors d-card__body">
        <div class="color primary"><code>#1e9fff</code><br><span>primary</span></div>
        <div class="color success"><code>#67c23a</code><br><span>success</span></div>
        <div class="color warning"><code>#e6a23c</code><br><span>warning</span></div>
        <div class="color danger"><code>#f56c6c</code><br><span>danger</span></div>
        <div class="color info"><code>#909399</code><br><span>info</span></div>
      </div>
    </div>

    <div class="d-card is-card is-shadow">
      <h2 class="d-card__head">
        <span class="d-card__head--main">常用主色（左右两侧内容自适应，过长则省略）</span>
        <span class="d-card__head--more"><a href="#">超长长度链接示例 &gt;</a></span>
      </h2>
      <div class="colors d-card__body">
        <div class="color primary"><code>#1e9fff</code><br><span>primary</span></div>
        <div class="color success"><code>#67c23a</code><br><span>success</span></div>
        <div class="color warning"><code>#e6a23c</code><br><span>warning</span></div>
        <div class="color danger"><code>#f56c6c</code><br><span>danger</span></div>
        <div class="color info"><code>#909399</code><br><span>info</span></div>
      </div>
      <div class="d-card__foot">
        <span class="d-card__foot--main">此 Card 包含 <code>is-card is-shadow</code> 样式</span>
        <span class="d-card__foot--more">请查看详细说明</span>
      </div>
    </div>
  </div>
</template>

<script>
import Bg from './assets/st.png';

export default {
  name: 'demo-card',
  data() {
    return {
      backGroundUrl: Bg,
      content: 'Template page: card.vue'
    };
  }
};
</script>

<style lang="scss">
@import "~dodui/theme/common/var";

$theme: 'primary', 'success', 'warning', 'danger', 'info';
$theme-map: (
  primary: $--color-primary,
  success: $--color-success,
  warning: $--color-warning,
  danger: $--color-danger,
  info: $--color-info
);

.d-image {
  width: 100%;
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.demo-card {

  .colors {
    display: flex;
    flex-wrap: wrap;

    .color {
      flex: 0 0 1rem;
      color: $--color-white;
      /*margin: 0.1rem;*/
      padding: 0.05rem;
      text-align: center;

      > span {
        color: rgba($--color-white, 0.6);
      }

      &:last-child {
        margin-right: 0;
      }

      @each $name, $color in $theme-map {
        &.#{$name} {
          background-color: $color;
        }
      }
    }

  }
}
</style>
