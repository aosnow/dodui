<!--------------------------------------------------
  name: layout.vue
  author: 喵大斯( h5devs.com/h5devs.net )
  created: 2019.07.15
---------------------------------------------------->

<template>
  <div class="demo-grid main">

    <dl class="d-title">
      <dt class="d-title__main">网格布局</dt>
      <dd class="d-title__sub">网格共分成10列，多余的列将自动换行。未设置列宽的默认列会自动撑满容器</dd>
    </dl>
    <div class="d-grid">
        <div class="d-grid-item">1</div>
        <div class="d-grid-item actived">2</div>
        <div class="d-grid-item">3</div>
        <div class="d-grid-item">4</div>
        <div class="d-grid-item">5</div>

        <div class="d-grid-item actived">6</div>
        <div class="d-grid-item">7</div>
        <div class="d-grid-item">8</div>
        <div class="d-grid-item">9</div>
        <div class="d-grid-item actived">10</div>
      </div>

    <dl class="d-title">
      <dt class="d-title__main">网格固定定宽</dt>
      <dd class="d-title__sub">不论在任何屏幕尺寸下，列宽都占比相同</dd>
    </dl>
    <div class="d-grid">
      <div class="d-grid-item actived">side</div>
      <div class="d-grid-item col-2">body</div>
      <div class="d-grid-item actived">side</div>
    </div>

    <dl class="d-title">
      <dt class="d-title__main">网格响应式列宽</dt>
      <dd class="d-title__sub">响应式列宽 <code>col-xs-*、col-sm-*、col-md-*、col-lg-*、col-xl-*</code></dd>
    </dl>
    <div class="d-grid is-wrap">
      <div class="d-grid-item col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-5">1</div>
      <div class="d-grid-item actived">2</div>
    </div>

    <dl class="d-title">
      <dt class="d-title__main">网格列偏移</dt>
      <dd class="d-title__sub">以列为单位，对指定列进行偏移，同样支持固定偏移量和响应式偏移量</dd>
    </dl>
    <div class="d-grid">
      <div class="d-grid-item actived">side</div>
      <div class="d-grid-item">body</div>
      <div class="d-grid-item actived col-2 col-offset-2">side</div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'demo-layout',
  data() {
    return {
      content: 'Template page: card.vue'
    };
  }
};
</script>

<style lang="scss">

.d-grid-item {
  color: #ffffff;
  background: #0a96ff;
  border: .01rem solid rgba(0, 0, 0, 0.1);
  text-align: center;

  &.actived {
    background: #67d480;
  }
}

</style>
