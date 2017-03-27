<template>
<div class="hello">
  <section class="avatar"></section>
  <h1 class="title">{{ msg }}</h1>
  <h3 class="subtitle">{{ word }}</h3>
  <p class="block">
    <a class="button is-primary is-large" href="http://www.linkedin.com/in/tanisorn" target="_blank">
      <span class="icon is-large"><i class="fa fa-linkedin-square"></i></span>
      <span>Linkedin</span>
    </a>
    <a class="button is-primary is-large" href="http://github.com/zickfz" target="_blank">
      <span class="icon is-large"><i class="fa fa-github-square"></i></span>
      <span>Github</span>
    </a>
    <a class="button is-primary is-large" href="http://instagram.com/pomtn" target="_blank">
      <span class="icon is-large"><i class="fa fa-instagram"></i></span>
      <span>Instagram</span>
    </a>
    <a class="button is-primary is-large" href="https://facebook.com/tanisorn" target="_blank">
      <span class="icon is-large"><i class="fa fa-facebook-square"></i></span>
      <span>Facebook</span>
    </a>
  </p>
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello',
      word: " I'm Pom, I'm a developer living in Bangkok. "
    }
  }
}
</script>
