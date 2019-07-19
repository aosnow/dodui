<!--------------------------------------------------
  name: section.vue
  author: 喵大斯( h5devs.com/h5devs.net )
  created: 2019.07.15
---------------------------------------------------->

<template>
  <div class="demo-section">
    <section class="d-section">
      <h2 class="d-section__head">
        <span class="d-section__head--main">常用主色</span>
        <span class="d-section__head--more"><a href="#">链接示例 &gt;</a></span>
      </h2>
      <div class="colors d-section__body">
        <div class="color primary"><code>#1e9fff</code><br><span>primary</span></div>
        <div class="color success"><code>#67c23a</code><br><span>success</span></div>
        <div class="color warning"><code>#e6a23c</code><br><span>warning</span></div>
        <div class="color danger"><code>#f56c6c</code><br><span>danger</span></div>
        <div class="color info"><code>#909399</code><br><span>info</span></div>
      </div>
      <div class="d-section__foot">
        <span class="d-section__foot--main">此 Card 为默认样式</span>
        <span class="d-section__foot--more">详细说明</span>
      </div>
    </section>

    <section class="d-section is-card">
      <h2 class="d-section__head">
        <span class="d-section__head--logo">
          <span class="d-image" :style="`background-image:url(${backGroundUrl})`"></span>
        </span>
        <span class="d-section__head--main">带图标的标题</span>
        <span class="d-section__head--more"><a href="#">链接示例 &gt;</a></span>
      </h2>
      <div class="colors d-section__body">
        <div class="color primary"><code>#1e9fff</code><br><span>primary</span></div>
        <div class="color success"><code>#67c23a</code><br><span>success</span></div>
        <div class="color warning"><code>#e6a23c</code><br><span>warning</span></div>
        <div class="color danger"><code>#f56c6c</code><br><span>danger</span></div>
        <div class="color info"><code>#909399</code><br><span>info</span></div>
      </div>
    </section>

    <section class="d-section is-card is-shadow">
      <h2 class="d-section__head">
        <span class="d-section__head--main">常用主色（左右两侧内容自适应，过长则省略）</span>
        <span class="d-section__head--more"><a href="#">超长长度链接示例 &gt;</a></span>
      </h2>
      <div class="colors d-section__body">
        <div class="color primary"><code>#1e9fff</code><br><span>primary</span></div>
        <div class="color success"><code>#67c23a</code><br><span>success</span></div>
        <div class="color warning"><code>#e6a23c</code><br><span>warning</span></div>
        <div class="color danger"><code>#f56c6c</code><br><span>danger</span></div>
        <div class="color info"><code>#909399</code><br><span>info</span></div>
      </div>
      <div class="d-section__foot">
        <span class="d-section__foot--main">此 Card 包含 <code>is-card is-shadow</code> 样式</span>
        <span class="d-section__foot--more">请查看详细说明</span>
      </div>
    </section>
  </div>
</template>

<script>
import Bg from './assets/st.png';

export default {
  name: 'demo-section',
  data() {
    return {
      backGroundUrl: Bg,
      content: 'Template page: section.vue'
    };
  }
};
</script>

<style lang="scss">
@import "./css/section";

.d-image {
  width: 100%;
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
