<template>
  <portfolio-data>
    <div slot-scope="{ edges }" class="flex flex-wrap items-stretch px-2">
      <div :to="node.slug" class="px-2 pb-2 w-1/2 xl:w-1/3" v-for="({ node }) in edges" :key="node.id">
        <g-link :to="node.path" class="block shadow-lg no-underline text-white relative overflow-hidden">
          <g-image :alt="`Abstract screenshot of ${node.title}`" :src="node.image" v-if="node.image" class="block w-full" />

          <div class="absolute pin p-6 text-grey-lightest flex flex-col items-center justify-center md:items-start md:justify-between bg-black">
            <h2 class="text-sm font-thin uppercase text-center md:text-xl">
              {{ node.title }}
            </h2>

            <div class="hidden md:block leading-normal" v-html="node.intro"></div>
          </div>
        </g-link>
      </div>
    </div>
  </portfolio-data>
</template>

<script>
import PortfolioData from '~/components/PortfolioData'

export default {
  components: {
    PortfolioData
  }
}
</script>

<style scoped lang="sass">
a
  > div
    transform: translateY(100%)
    transition: transform .3s ease-in-out
  &:hover
    > div
      transform: translateY(0)
</style>
