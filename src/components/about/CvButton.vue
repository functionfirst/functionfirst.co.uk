<template>
  <g-link
    to="https://docs.google.com/document/d/1xtrGsfAjW8s9hdqVEkJMyMfiJOYWCiiVVHyKB5Oxtes/edit?usp=sharing"
    class="flex md:w-1/3 items-center rounded shadow-md p-6 bg-primary hover:bg-primary-dark hover:text-grey-lightest text-white md:mx-2"
  >
    <GoogleDrive width="32" class="mr-6" />

    <div class="leading-none">
      <h3 class="text-lg font-medium">View Curriculum Vitae</h3>
      <p class="text-xs mt-2">Google Doc</p>
    </div>
  </g-link>
</template>

<script>
import GoogleDrive from "~/components/icons/GoogleDrive";

export default {
  components: {
    GoogleDrive
  }
};
</script>
