<template lang="html">
  <div id="projects"  >
    <div class="columns is-centered">
      <div class="column is-half ">
        <div class="notification is-primary">
          List of projects, from github
        </div>
        <div class="">
          <table>
            <thead>
              <tr >
                <th>Project Name</th>
                <th>URL</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in projects">
                <td>{{item.name}}</td>
                <td>{{item.html_url}}</td>
                <td>{{item.description}}</td>
              </tr>
            </tbody>
          </table>
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
