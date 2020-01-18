<template>
  <div class="leading-loose text-black">
    <about-intro />

    <p class="my-6 md:flex justify-center">
      <cv-button />

      <pluralsight-button />
    </p>

    <div class="md:flex justify-between">
      <div class="flex-1 md:px-4">
        <h3 class="font-thin mb-4 text-2xl">Expertise</h3>

        <ul class="list-reset">
          <li class="p-3">Front-end Development</li>
          <li class="border-t p-3">Designing User-interfaces</li>
          <li class="border-t p-3">Prototyping (Hi &amp; Lo-fidelity)</li>
          <li class="border-t p-3">Roadmaps</li>
          <li class="border-t p-3">Web application development</li>
          <li class="border-t p-3">Website Design</li>
          <li class="border-t p-3">Wire-framing</li>
        </ul>
      </div>
      <div class="flex-1 md:px-4 mt-8 md:mt-0">
        <h3 class="font-thin mb-4 text-2xl">Personal</h3>

        <ul class="list-reset">
          <li class="p-3">Attention to detail</li>
          <li class="border-t p-3">Dedicated</li>
          <li class="border-t p-3">Good Communication &amp; Personal skills</li>
          <li class="border-t p-3">Hard Working</li>
          <li class="border-t p-3">Lateral Thinking</li>
          <li class="border-t p-3">Problem Solving</li>
          <li class="border-t p-3">Supportive &amp; Team focused</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AboutIntro from "~/components/about/Intro";
import CvButton from "~/components/about/CvButton";
import PluralsightButton from "~/components/about/PluralsightButton";
import GoogleDrive from "~/components/icons/GoogleDrive";
import PluralSight from "~/components/icons/PluralSight";

export default {
  components: {
    AboutIntro,
    CvButton,
    PluralsightButton,
    GoogleDrive,
    PluralSight
  }
};
</script>
