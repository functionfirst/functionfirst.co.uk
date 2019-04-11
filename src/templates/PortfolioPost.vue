<template>
  <Layout>
    <div class="flex leading-normal">
      <div class="md:mx-8 leading-normal max-w-md">
        <h1 class="border-b leading-loose text-3xl font-thin">{{ $page.portfolioPost.title }}</h1>
        
        <div class="content" v-html="$page.portfolioPost.content"></div>
      </div>
      <div class="w-1/3">
        <template v-if="$page.portfolioPost.role">
          <h3 class="text-grey-darkest mb-1 text-sm font-thin">Role</h3>
          {{ $page.portfolioPost.role }}
        </template>

        <template v-if="$page.portfolioPost.technology">
          <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Technology</h3>

          <div v-for="(tech, index) in $page.portfolioPost.technology" :key="index">
            {{ tech }}
          </div>
        </template>

        <template v-if="$page.portfolioPost.integrations">
          <h3 class="text-grey-darkest mb-1 text-sm font-thin mt-4">Integrations</h3>

          {{ $page.portfolioPost.integrations }}
        </template>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query portfolio ($path: String!) {
  portfolioPost (path: $path) {
    title
    content
    technology
    role
    integrations
  }
}
</page-query>

<script>
export default {
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
