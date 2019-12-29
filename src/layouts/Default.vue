<template>
  <div class="flex flex-col max-w-lg mx-auto relative min-h-screen">
    <Header />

    <slot/>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: {
    Header
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
