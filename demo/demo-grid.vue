<!--------------------------------------------------
  name: layout.vue
  author: 喵大斯( h5devs.com/h5devs.net )
  created: 2019.07.15
---------------------------------------------------->

<template>
  <div class="demo-section">

    <section class="d-section is-card">
      <h2 class="d-section__head">
        <span class="d-section__head--main">带图标的标题</span>
        <span class="d-section__head--more"></span>
      </h2>
      <div class="colors d-section__body">

        <div class="d-grid">
          <div class="d-grid-item"></div>
          <div class="d-grid-item"></div>
          <div class="d-grid-item"></div>
          <div class="d-grid-item"></div>
          <div class="d-grid-item"></div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>

export default {
  name: 'demo-layout',
  data() {
    return {
      content: 'Template page: section.vue'
    };
  }
};
</script>

<style lang="scss">

.d-grid-item {
  background: #4487f7;
  border: .01rem dotted #222222;
  padding: .3rem;
  border-radius: .1rem;
}

</style>
