<template>
  <div class="leading-loose text-black">
    <about-intro />

    <p class="my-6 md:flex justify-center">
      <cv-button />

      <pluralsight-button />
    </p>

    <about-info />
  </div>
</template>

<script>
import AboutInfo from "~/components/about/Info";
import AboutIntro from "~/components/about/Intro";
import CvButton from "~/components/about/CvButton";
import PluralsightButton from "~/components/about/PluralsightButton";

export default {
  components: {
    AboutInfo,
    AboutIntro,
    CvButton,
    PluralsightButton
  }
};
</script>
