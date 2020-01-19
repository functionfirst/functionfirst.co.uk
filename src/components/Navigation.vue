<template>
  <nav class="flex">
    <g-link
      v-for="(item, index) in navigation"
      :key="index"
      :to="item.route"
      class="border-b-4 border-transparent py-2 px-3 mx-2 text-primary-dark hover:text-primary-light hover:border-primary"
      :class="{
          'border-primary-light': currentRoute === item.route
        }"
    >{{ item.title }}</g-link>
  </nav>
</template>

<script>
import { navigation } from "~/data/";

export default {
  data() {
    return {
      navigation
    };
  },

  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
};
</script>
