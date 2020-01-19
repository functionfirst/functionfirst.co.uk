<template>
  <g-link
    to="https://app.pluralsight.com/profile/alan-jenkins2"
    class="flex md:w-1/3 items-center rounded shadow-md p-6 bg-grey-darkest text-grey-lighter hover:text-white hover:bg-black md:mx-2 mt-6 md:mt-0"
  >
    <PluralSight width="42" class="mr-4" />

    <div class="leading-none">
      <h3 class="text-lg font-medium">Pluralsight</h3>
      <p class="text-xs mt-2">Review Skill Assessments</p>
    </div>
  </g-link>
</template>

<script>
import PluralSight from "~/components/icons/PluralSight";

export default {
  components: {
    PluralSight
  }
};
</script>
