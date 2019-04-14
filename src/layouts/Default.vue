<template>
  <div class="flex flex-col max-w-3xl mx-auto relative min-h-screen">
    <div class="flex flex-1 flex-col md:flex-row">
      <Header :show="show" @toggle="toggleMenu()" />
      <div class="flex-1 mt-24">
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
  },
  data () {
    return {
      show: false
    };
  },
  methods: {
    toggleMenu() {
      this.show = !this.show;
    }
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
