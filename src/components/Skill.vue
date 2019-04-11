<template>
  <div class="my-4 rounded text-black">
    <div class="font-bold">{{ name }}</div>

    <div class="my-1 border border-primary-dark">
      <div class="bg-primary h-1" :style="progressStyle"></div>
    </div>

    <div class="flex justify-between">
      <div class="text-sm">
        {{ value }}
        <span class="text-grey-darkest">/</span>
        256
      </div>
      <div class="text-xs font-thin uppercase">{{ level }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    level: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    progressStyle() {
      return {
        width: `${100 / 256 * this.value}%`
      }
    }
  }
}
</script>
