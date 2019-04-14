<template>
  <portfolio-data>
    <div slot-scope="{ edges }" class="flex flex-wrap items-stretch -mx-4">
      <div :to="node.slug" class="px-4 py-4 w-1/2 xl:w-1/3" v-for="({ node }) in edges" :key="node.id">
        <g-link :to="node.path" class="block shadow-lg no-underline text-white relative overflow-hidden">
          <g-image :alt="`Abstract screenshot of ${node.title}`" :src="node.image" v-if="node.image" class="block w-full" />

          <div class="absolute pin p-6 text-grey-lightest flex flex-col justify-between bg-black">
            <h2 class="text-xl font-thin uppercase">
              {{ node.title }}
            </h2>

            <div class="leading-normal" v-html="node.intro"></div>
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
