<template>
  <header class="flex justify-between items-center mt-6 mb-12">
    <navigation />

    <social />
  </header>
</template>

<script>
import navigation from "~/components/Navigation";
import social from "~/components/Social";

export default {
  components: {
    navigation,
    social
  }
};
</script>
