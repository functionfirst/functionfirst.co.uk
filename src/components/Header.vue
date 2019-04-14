<template>
  <header class="w-64 mr-2 items-stretch sticky pin-t pin-x">
    <g-link to="/" class="block no-underline whitespace-no-wrap text-grey-darkest hover:text-grey-darker">
      <h1 class="font-thin text-3xl">Alan Jenkins</h1>
      <h2 class="text-sm font-thin text-sm">Front-end Developer</h2>
    </g-link>

    <nav class="mt-12">
      <h3 class="mt-4 mb-2 mx-3 text-xs text-grey-darkest uppercase">Portfolio</h3>

      <portfolio-data>
        <div slot-scope="{ edges }">
          <g-link
            :to="node.path" v-for="({ node }) in edges"
            :key="node.id"
            class="flex justify-between p-3 no-underline block text-primary-dark rounded hover:underline hover:text-primary-light xhover:bg-grey-light"
            :class="{ 'bg-grey-lighter' : currentRoute === node.path }"
          >
            <span>{{ node.title }}</span>
            <span v-if="currentRoute === node.path">&rarr;</span>
          </g-link>
        </div>
      </portfolio-data>
    </nav>

    <div class="mt-4">
      <h3 class="mt-4 mb-2 mx-3 text-xs text-grey-darkest uppercase">About</h3>
      
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

<script>
import PortfolioData from '~/components/PortfolioData'

export default {
  components: {
    PortfolioData
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
}
</script>
