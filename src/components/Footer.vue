<template>
  <footer class="border-t border-grey-lighter pt-8 mt-8 flex flex-col items-center">
    <ul class="list-reset flex justify-center">

      <li v-for="(icon, index) in social" :key="index" class="mx-1">
        <a
          :href="icon.link"
          class="mx-2 block p-1 text-primary-dark hover:text-primary-light"
          rel="noreferrer"
          target="_blank"
        >
          <component :is="icon.name" height="32" width="32" />
          <span class="hidden">{{ icon.name }}</span>
        </a>
      </li>
    </ul>

    <p class="mt-4">
      <a
        href="https://github.com/functionfirst/functionfirst.co.uk"
        class="flex items-center no-underline text-sm text-primary-dark hover:text-primary-light hover:underline"
        rel="noreferrer"
        target="_blank"
      >
        View source code on <Github class="mx-1" width="18" height="18" /> Github
      </a>
    </p>
  </footer>  
</template>

<script>
import StackOverflow from '~/components/icons/StackOverflow'
import Github from '~/components/icons/Github'
import Linkedin from '~/components/icons/Linkedin'
import Twitter from '~/components/icons/Twitter'

const social = [
  {
    name: 'Github',
    link: 'https://github.com/functionfirst/',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/aljenks/',
  },
  {
    name: 'StackOverflow',
    link: 'http://stackoverflow.com/users/2025557/alan-jenkins',
  },
  {
    name: 'Twitter',
    link: 'http://twitter.com/aljenks',
  }
]

export default {
  components: {
    StackOverflow,
    Github,
    Linkedin,
    Twitter,
  },
  data () {
    return {
      social
    };
  }
}
</script>

