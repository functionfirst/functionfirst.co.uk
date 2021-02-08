<template>
  <ul class="list-reset flex justify-center md:justify-start">
    <li v-for="(icon, index) in social" :key="index" class="mr-2">
      <g-link
        :to="icon.link"
        :aria-label="icon.name"
        class="hover:bg-grey-lighter rounded p-2 w-12 h-12 flex items-center justify-center text-primary-dark hover:text-primary-light"
      >
        <component
          :is="icon.name"
          height="24"
          width="24"
        />
      </g-link>
    </li>
  </ul>
</template>

<script>
import Github from "~/components/icons/Github";
import Linkedin from "~/components/icons/Linkedin";
import StackOverflow from "~/components/icons/StackOverflow";
import { social } from "~/data/";

export default {
  components: {
    Github,
    Linkedin,
    StackOverflow
  },

  data() {
    return {
      social
    };
  }
};
</script>
