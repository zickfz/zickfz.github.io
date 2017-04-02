<template lang="html">
  <div id="projects"  >
       <div class="notification is-primary">
          List of projects, from github
        </div>
    <div class="columns is-centered">
<div class="card column" v-for="(item, index) in projects"  >
  <header class="media-content" >
    <p class="title">
      {{item.name}}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      {{item.description}}
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
   data() {
    return {
      projects: []
    }
  },methods: {
    loadProjects() {
      this.axios.get('https://api.github.com/users/zickfz/repos').then((response) => {
        this.projects = response.data
      }, (err) => {
        console.log(err)
      })
    }
  },mounted() {
      this.loadProjects();
    }
}
</script>

<style lang="css" scoped>
  .card{
    margin: 0.5em;
  }
  .hero.is-primary .title {
    color: #363636;
    text-decoration:underline;
}
</style>