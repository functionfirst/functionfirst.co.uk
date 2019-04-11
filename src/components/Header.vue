<template>
  <header class="w-64 mr-2 items-stretch sticky pin-t pin-x">
    <g-link to="/" class="block no-underline whitespace-no-wrap">
      <h1 class="text-grey-darkest font-thin text-3xl">Alan Jenkins</h1>
      <h2 class="text-grey-darkest text-sm font-thin text-sm">Front-end Developer</h2>
    </g-link>

    <nav class="mt-12">
      <h3 class="mb-2 text-xs text-grey-darkest uppercase mt-4">Portfolio</h3>
      <g-link
        :to="node.path" v-for="({ node }) in $static.portfolio.edges"
        :key="node.id"
        class="flex justify-between p-3 no-underline block text-primary-dark rounded hover:underline hover:text-primary-light xhover:bg-grey-light"
        :class="{ 'bg-grey-lighter' : currentRoute === node.path }"
      >
        <span>{{ node.title }}</span>
        <span v-if="currentRoute === node.path">&rarr;</span>
      </g-link>
    </nav>

    <div class="mt-4">
      <h3 class="mb-2 text-xs text-grey-darkest uppercase mt-4">About</h3>
      
      <g-link
        to="/experience"
        class="flex justify-between p-3 no-underline block text-primary-dark rounded hover:underline hover:text-primary-light xhover:bg-grey-light"
        :class="{ 'bg-grey-lighter' : currentRoute === '/experience' }"
      >
        <span>Experience & Skills</span>
        <span v-if="currentRoute === '/experience'">&rarr;</span>
      </g-link>
    </div>
  </header>
</template>

<static-query>
query Portfolio {
  portfolio: allPortfolioPost(sortBy: "DESC") {
    edges {
      node {
        id
        title
        path
        role
        image (width: 200)
        intro
        technology
        integrations
        deployed
        hosting
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
}
</script>
