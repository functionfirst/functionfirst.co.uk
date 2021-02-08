<template>
  <div class="md:flex justify-between leading-loose">
    <div class="flex-1 md:px-4" v-for="(item, key) in about" :key="key">
      <h2 class="font-thin mb-4 text-2xl">{{ item.title }}</h2>

      <ul class="list-reset">
        <li class="border-t p-3" v-for="(label, i) in item.data" :key="i">{{label}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { about } from "~/data/";

export default {
  data() {
    return {
      about
    };
  }
};
</script>