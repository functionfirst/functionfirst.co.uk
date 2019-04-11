<template>
  <div class="flex flex-col max-w-3xl mx-auto relative min-h-screen p-2 md:p-8">
    <div class="flex flex-1">
      <Header />
      <div class="flex-1">
        <slot/>
      </div>
    </div>

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

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
