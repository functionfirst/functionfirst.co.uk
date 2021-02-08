<template>
  <g-link
    to="https://app.pluralsight.com/profile/alan-jenkins2"
    class="flex items-center rounded shadow-md p-6 bg-grey-darkest text-grey-lighter hover:text-white hover:bg-black"
  >
    <PluralSight height="36" class="mr-4" />

    <div class="leading-none">
      <h2 class="text-lg font-medium">Pluralsight</h2>
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
