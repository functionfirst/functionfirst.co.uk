<template>
  <footer class="py-8 mt-8 flex flex-col items-center">
    <ul class="list-reset flex justify-between">
      <li v-for="(icon, index) in social" :key="index" class="mx-1">
        <a
          :href="icon.link"
          :aria-label="icon.name"
          class="mx-2 block p-1 text-primary-dark hover:text-primary-light"
          rel="noreferrer"
          target="_blank"
        >
          <component :is="icon.name" height="32" width="32" />
        </a>
      </li>
    </ul>
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

