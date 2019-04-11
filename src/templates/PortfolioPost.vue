<template>
  <Layout>
    <h1 class="pl-8 border-b leading-loose text-3xl font-thin">
      {{ $page.portfolioPost.title }}
      <span class="text-sm">{{ $page.portfolioPost.year }}</span>
    </h1>
    
    <div class="lg:flex flex-row-reverse leading-normal">
      <div class="flex lg:block lg:w-1/3">
        <div class="mx-8 flex-1" v-if="$page.portfolioPost.role">
          <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Role</h3>
          {{ $page.portfolioPost.role }}
        </div>

        <div class="mx-8 flex-1" v-if="$page.portfolioPost.technology">
          <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Technology</h3>

          <div v-for="(tech, index) in $page.portfolioPost.technology" :key="index">
            {{ tech }}
          </div>
        </div>

        <div class="mx-8 flex-1" v-if="$page.portfolioPost.integrations">
          <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Integrations</h3>

          {{ $page.portfolioPost.integrations }}
        </div>

        <div class="mx-8 flex-1" v-if="$page.portfolioPost.github">
          <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Github</h3>
          
          <a
            :href="$page.portfolioPost.github"
            class="lg:flex items-center text-primary-dark no-underline hover:text-primary-light"
            target="_blank"
          >
            <Github width="18" height="18" class="mr-1" />
            {{ $page.portfolioPost.title }}
          </a>
        </div>
      </div>
      <div class="md:mx-8 lg:w-2/3 leading-normal">
        <div class="content" v-html="$page.portfolioPost.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query portfolio ($path: String!) {
  portfolioPost (path: $path) {
    title
    content
    year
    github
    technology
    role
    integrations
  }
}
</page-query>

<script>
import Github from '~/components/icons/Github'

export default {
  components: {
    Github
  },
  metaInfo () {
    return {
      title: `${this.$page.portfolioPost.title} - functionfirst`
    }
  }
}
</script>

<style lang="sass">
.content
  > p:first-child
      font-size: 1.4rem
      font-weight: 300

  p
    margin-top: 1rem
    margin-bottom: 1rem

  h2, h3
    font-weight: 400
</style>
