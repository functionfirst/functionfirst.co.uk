<template>
  <div class="text-black">
    <about-intro />

    <div class="my-12 sm:flex items-center justify-center md:max-w-xl mx-auto px-4">
      <cv-button class="sm:mr-2" />

      <pluralsight-button class="sm:ml-2 mt-4 sm:mt-0" />
    </div>

    <div class="max-w-sm md:max-w-xl mx-auto px-4">
      <about-info />
    </div>
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
