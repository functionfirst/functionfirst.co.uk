<template>
  <header class="mb-6 md:flex shadow p-6 md:p-12 items-start rounded bg-primary text-white">
    <g-image
      src="~/assets/images/profile.jpg"
      width="140"
      class="md:mr-12 rounded shadow hidden md:block"
    />

    <div>
      <p class="leading-none text-grey-light">Hello, my name is</p>
      <h1 class="font-medium text-4xl">Alan Jenkins</h1>

      <p class="leading-normal text-2xl font-light">
        I'm a hard-working and motivated designer, developer and manager with over
        15 years of experience in all aspects of a web project.
      </p>

      <div class="md:block" :class="show ? 'block' : 'hidden'">
        <p class="my-4">
          Passionate about building great web applications and products with a strong foundation in
          UI design and UX, I strive for simple processes and efficiency wherever possible.
        </p>

        <p>
          Currently a
          <span class="font-bold">Senior Front-end Developer</span> in the Optimisation team for the folks at
          <g-link
            class="text-grey-lightest hover:text-grey-lighter underline"
            href="https://www.visualsoft.co.uk"
          >Visualsoft Ltd</g-link>.
          Previously, Associate Software Engineer at
          <g-link
            class="text-grey-lightest hover:text-grey-lighter underline"
            href="https://sage.com/en-gb/"
          >Sage Group Plc</g-link>&nbsp;and Product Manager for the folks at
          <g-link
            class="text-grey-lightest hover:text-grey-lighter underline"
            href="https://www.claromentis.com/"
          >Claromentis</g-link>.
        </p>
      </div>

      <div class="flex items-center justify-center mt-4 md:hidden" v-show="!show">
        <button @click="show = !show" class="bg-white text-primary rounded px-3 py-2">Read more...</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
