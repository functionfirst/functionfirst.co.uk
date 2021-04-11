<template>
  <layout>
    <div class="md:max-w-xl mx-auto mt-16 px-4">
      <h1 class="leading-none text-3xl font-thin text-black">
        {{ portfolio.title }}
        <span class="text-sm">{{ portfolio.year }}</span>
      </h1>

      <div class="md:flex flex-row-reverse leading-normal">
        <div class="md:w-64 relative">
          <div class="md:sticky pin-t pt-16">
            <div v-if="portfolio.website" class="mb-4 flex justify-center">
              <g-link
                :to="portfolio.website"
                class="inline-flex items-center shadow bg-accent rounded px-3 py-2 text-white w-full hover:bg-accent-dark hover:text-grey-lighter"
              >
                <NewWindow width="18" class="mr-2" />View Live Site
              </g-link>
            </div>

            <div v-if="portfolio.github" class="mb-4 flex justify-center">
              <g-link
                :to="portfolio.github"
                class="inline-flex items-center shadow bg-primary rounded px-3 py-2 text-white w-full hover:bg-primary-dark hover:text-grey-lighter"
              >
                <Github width="24" height="24" class="mr-2" />View the Source Code
              </g-link>
            </div>

            <template v-if="portfolio.role">
              <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Role</h3>

              <ul class="mt-4 md:m-0">
                <li>{{ portfolio.role }}</li>
              </ul>
            </template>

            <template v-if="portfolio.technology">
              <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Technology</h3>

              <ul class="mt-4 md:m-0">
                <li v-for="(tech, index) in portfolio.technology" :key="index">{{ tech }}</li>
              </ul>
            </template>

            <template v-if="portfolio.deployed">
              <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Deployed</h3>

              <ul class="mt-4 md:m-0">
                <li>{{ portfolio.deployed }}</li>
              </ul>
            </template>

            <template v-if="portfolio.integrations">
              <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Integrations</h3>

              <ul class="mt-4 md:m-0">
                <li>{{ portfolio.integrations }}</li>
              </ul>
            </template>
          </div>
        </div>

        <div class="md:mr-8 flex-1 leading-loose">
          <div class="content" v-html="portfolio.content"></div>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query portfolio ($path: String!) {
  portfolioPost (path: $path) {
    title
    content
    year
    deployed
    github
    technology
    role
    website
    integrations
  }
}
</page-query>

<script>
import Github from "~/components/icons/Github";

import NewWindow from "~/components/icons/NewWindow";

export default {
  components: {
    Github,
    NewWindow
  },

  computed: {
    portfolio() {
      return this.$page.portfolioPost;
    }
  },

  metaInfo() {
    return {
      title: `${this.portfolio.title} - functionfirst`
    };
  }
};
</script>

<style lang="sass">
.content
  > p:first-child
      font-size: 1.4rem
      font-weight: 300
      line-height: 1.4

  p
    margin-top: 2rem
    margin-bottom: 2rem

  h2, h3
    font-weight: 600

    + p
      margin-top: 0
</style>
