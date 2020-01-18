<template>
  <footer
    class="border-t border-grey-lighter py-8 mt-8 flex flex-col items-center"
  >
    <p class="text-sm">
      <g-link
        href="https://github.com/functionfirst/functionfirst.co.uk"
        class="flex items-center text-primary-dark hover:text-primary-light hover:underline"
      >
        View source code on
        <Github class="mx-1" width="18" />
        Github
      </g-link>
    </p>
  </footer>
</template>

<script>
import Github from "~/components/icons/Github";

export default {
  components: {
    Github
  }
};
</script>
