<template>
  <header
    class="bg-grey-lightest md:w-64 items-stretch fixed z-10 border-b border-grey-lighter pin-x pin-t bg-grey-lightest md:static"
  >
    <div class="flex justify-between items-center">
      <g-link to="/" class="p-4 block no-underline whitespace-no-wrap text-grey-darkest hover:text-grey-darker">
        <h1 class="font-thin text-3xl">Alan Jenkins</h1>
        <h2 class="text-sm font-thin text-sm">Front-end Developer</h2>
      </g-link>

      <button class="flex flex-col md:hidden py-1 px-2 rounded m-3 items-center" @click="$emit('toggle')">
        <Close v-if="show" height="18" width="18" class="mb-2" />
        <Open v-else height="18" width="18" class="mb-2" />
        <span class=" text-xs text-grey-darkest">Menu</span>
      </button>
    </div>

    <nav class="h-screen mt-8" :class="[ show ? '' : 'hidden md:block']">
      <h3 class="mt-4 mb-2 mx-3 text-xs text-grey-darkest uppercase">Portfolio</h3>

      <portfolio-data>
        <div slot-scope="{ edges }">
          <g-link
            :to="node.path" v-for="({ node }) in edges"
            :key="node.id"
            @click.native="$emit('toggle')"
            class="flex justify-between p-3 no-underline block text-primary-dark rounded hover:underline hover:text-primary-light xhover:bg-grey-light"
            :class="{ 'bg-grey-lighter' : currentRoute === node.path }"
          >
            <span>{{ node.title }}</span>
            <span v-if="currentRoute === node.path">&rarr;</span>
          </g-link>
        </div>
      </portfolio-data>

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
    </nav>
  </header>
</template>

<script>
import Close from '~/components/icons/Close'
import Open from '~/components/icons/Open'
import PortfolioData from '~/components/PortfolioData'

export default {
  components: {
    Close,
    Open,
    PortfolioData
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
}
</script>
