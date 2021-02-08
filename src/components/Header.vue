<template>
  <header class="fixed bg-white flex flex-col-reverse md:flex-row pin-t pin-x z-20">
    <nav class="flex mx-auto md:max-w-xl pb-2">
      <g-link
        v-for="(item, index) in navigation"
        :key="index"
        :to="item.route"
        class="border-b-4 border-transparent py-3 px-3 mx-2 text-primary-dark hover:text-primary-light hover:border-primary"
        :class="{
            'border-primary-light': currentRoute === item.route
          }"
      >
        {{ item.title }}
      </g-link>
    </nav>
  </header>
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
