<template>
  <div class="max-w-sm md:max-w-xl mx-auto px-4">
    <Header />

    <slot />

    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
