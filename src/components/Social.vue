<template>
  <ul class="list-reset flex justify-center">
    <li v-for="(icon, index) in social" :key="index" class="mx-1">
      <g-link
        :to="icon.link"
        :aria-label="icon.name"
        class="mx-2 block p-1 text-primary-dark hover:text-primary-light"
      >
        <component :is="icon.name" height="24" />
      </g-link>
    </li>
  </ul>
</template>

<script>
import Github from "~/components/icons/Github";
import Linkedin from "~/components/icons/Linkedin";
import StackOverflow from "~/components/icons/StackOverflow";
import Twitter from "~/components/icons/Twitter";
import { social } from "~/data/";

export default {
  components: {
    Github,
    Linkedin,
    StackOverflow,
    Twitter
  },

  data() {
    return {
      social
    };
  }
};
</script>
