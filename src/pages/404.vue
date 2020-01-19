<template>
  <Layout>
    <div class="bg-white p-8">
      <h1 class="text-5xl font-medium">OOPS!</h1>

      <h1 class="text-3xl font-medium my-4">Sorry, this page isn't here.</h1>

      <p class="leading-normal text-lg">
        <a href="Javascript:history.back(-1)">Go back</a>
        , or head over to the
        <g-link to="/">Homepage</g-link>to choose another
        direction
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Sorry, this page isn't here  - web design and development portfolio"
  }
};
</script>
