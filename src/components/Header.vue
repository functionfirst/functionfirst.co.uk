<template>
  <header class="flex justify-between items-center mt-6 mb-12">
    <nav class="flex">
      <g-link
        v-for="(item, index) in nav"
        :key="index"
        :to="item.route"
        class="border-b-4 border-transparent py-2 px-3 mx-2 text-primary-dark hover:text-primary-light hover:border-primary"
        :class="{
          'border-primary-light': currentRoute === item.route
        }"
      >{{ item.title }}</g-link>
    </nav>

    <div>
      <ul class="list-reset flex justify-center">
        <li v-for="(icon, index) in social" :key="index" class="mx-1">
          <g-link
            :href="icon.link"
            :aria-label="icon.name"
            class="mx-2 block p-1 text-primary-dark hover:text-primary-light"
          >
            <component :is="icon.name" height="24" />
          </g-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import StackOverflow from "~/components/icons/StackOverflow";
import Github from "~/components/icons/Github";
import Linkedin from "~/components/icons/Linkedin";
import Twitter from "~/components/icons/Twitter";

const social = [
  {
    name: "Github",
    link: "https://github.com/functionfirst/"
  },
  {
    name: "StackOverflow",
    link: "http://stackoverflow.com/users/2025557/alan-jenkins"
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/aljenks/"
  },
  {
    name: "Twitter",
    link: "http://twitter.com/aljenks"
  }
];

const nav = [
  {
    title: "About",
    route: "/"
  },
  {
    title: "Projects",
    route: "/projects"
  }
];

export default {
  components: {
    StackOverflow,
    Github,
    Linkedin,
    Twitter
  },
  data() {
    return {
      nav,
      social
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
};
</script>
