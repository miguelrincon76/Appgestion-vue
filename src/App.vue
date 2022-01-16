<template>
  <v-main>
    <div id="nav">
      <v-app id="app">
        <div class="mx-4 flex">
          <router-view name="sidebar" />
          <router-view name="footer" />
          <router-view />
        </div>
      </v-app>
    </div>
  </v-main>
</template>

<script></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
