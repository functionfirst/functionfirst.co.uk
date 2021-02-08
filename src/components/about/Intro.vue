<template>
  <section class="md:border-b">
    <div class="relative max-w-sm md:max-w-xl mx-auto ">
      <header class="md:absolute inset-0 md:max-w-xs z-10 pt-24 md:py-32 px-4">
        <p class="leading-none mb-2 text-xl">Hello, my name is</p>

        <h1 class="font-medium mb-8 text-4xl">Alan Jenkins</h1>

        <p class="leading-normal my-4 text-lg font-light">
          I'm a Senior Front End Developer currently working for the folks at <g-link href="https://www.visualsoft.co.uk/">Visualsoft Ltd</g-link>.
        </p>

        <p class="leading-normal text-lg font-medium">
          Passionate about building great web applications and putting the user first. 
        </p>

        <social class="mt-4" />
      </header>

      <g-image
        src="~/assets/images/profile.jpg"
        width="1024"
        class="hidden md:block"
      />
    </div>
  </section>
</template>

<script>
import social from "~/components/Social";

export default {
  components: {
    social
  }
};
</script>
