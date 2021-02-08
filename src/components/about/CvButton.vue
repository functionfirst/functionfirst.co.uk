<template>
  <g-link
    to="https://docs.google.com/document/d/1xtrGsfAjW8s9hdqVEkJMyMfiJOYWCiiVVHyKB5Oxtes/edit?usp=sharing"
    class="flex items-center rounded shadow-md p-6 bg-primary hover:bg-primary-dark hover:text-grey-lightest text-white"
  >
    <GoogleDrive height="36" class="mr-4" />

    <div class="leading-none">
      <h2 class="text-lg font-medium">View Curriculum Vitae</h2>
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
