<template>
  <header class="flex flex-col-reverse md:flex-row justify-between items-center my-6">
    <navigation />

    <social class="mb-6 md:mb-0" />
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
