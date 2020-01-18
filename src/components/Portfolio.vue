<template>
  <portfolio-data>
    <div slot-scope="{ edges }" class>
      <div class="md:flex relative" v-for="{ node } in edges" :key="node.id">
        <g-link :to="node.path" class="block md:w-1/3 md:pb-20">
          <g-image
            :alt="`Abstract screenshot of ${node.title}`"
            :src="node.image"
            v-if="node.image"
            class="block w-full"
          />
        </g-link>

        <div class="mt-4 md:mt-0 md:ml-16 flex-1 md:border-l md:pl-16 pb-16 md:border-grey-light">
          <p
            class="hidden md:flex absolute text-sm -mx-24 w-16 h-16 justify-center items-center mt-16 text-white bg-black rounded-full px-3 py-2 font-thin mb-4"
          >{{ node.year }}</p>

          <h2 class="leading-loose text-sm font-medium md:text-xl">
            <g-link :to="node.path" class="block">{{ node.title }}</g-link>
          </h2>

          <p class="leading-normal" v-html="node.intro"></p>

          <div class="flex flex-wrap mt-4" v-if="node.technology">
            <div
              v-for="(tag, index) in node.technology"
              :key="index"
              class="flex mr-1 mb-1 uppercase border-full bg-grey-darkest text-grey-lightest px-3 py-1 text-xs rounded-full"
            >{{ tag }}</div>
          </div>
        </div>
      </div>
    </div>
  </portfolio-data>
</template>

<script>
import PortfolioData from "~/components/PortfolioData";

export default {
  components: {
    PortfolioData
  }
};
</script>
