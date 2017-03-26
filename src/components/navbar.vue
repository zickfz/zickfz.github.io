<template lang="html">
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="../assets/logo.png" alt="Logo">
          </a>
        </div>
        <div class="nav-right nav-menu" >
          <span class="nav-item">
          <router-link class="is-info" to="/">
            <span>Home</span>
          </router-link>
         </span>
          <span class="nav-item">
            <router-link  class="button is-info is-inverted" to="/projects">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>project</span>
            </router-link>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style lang="css">

</style>
