<!--------------------------------------------------
  name: guide.vue
  author: mudas( mschool.tech )
  created: 2019.07.15
---------------------------------------------------->

<template>
  <div class="demo-guide">
    <h2 class="demo-guide__head">组件</h2>
    <div class="demo-guide__component">
      <router-link class="demo-guide__component--unit"
                   v-for="(name,index) in Object.keys(components)"
                   :to="components[name]"
                   :key="index">
        {{components[name]|metaName}}【{{name}}】
        <span class="desc">{{components[name]|desc}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Components from '@/components';

export default {
  name: 'guide',
  data() {
    return {
      components: Components
    };
  },

  filters: {
    metaName(value) {
      const { beta: { title } } = value;
      return title;
    },
    desc(value) {
      const { beta: { desc } } = value;
      return desc;
    }
  },

  methods: {}
};
</script>

<style lang="scss">
@import "~dodui/theme/common/var";

.demo-guide {

  padding: .2rem;

  .demo-guide__head {
    font-size: .2rem;
    height: .5rem;
    line-height: .5rem;
    border-bottom: .01rem solid #c0c4cc;
  }

  .demo-guide__component {
    display: flex;
    flex-wrap: wrap;

    .demo-guide__component--unit {
      flex: 1;
      color: $--color-text-primary;
      background: #ffffff;
      margin: .1rem;
      padding: .1rem;
      border-radius: .04rem;
      box-shadow: $--box-shadow-light;

      .desc {
        color: $--color-text-placeholder;
        display: block;
      }
    }

  }

}
</style>
