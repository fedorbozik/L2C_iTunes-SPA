<template>
  <div class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/tunes">Tunes</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  margin: 2em auto 2.5em;
  padding: 0 1.25em;
  display: inline-block;

  vertical-align: middle;
  background: transparent;
  white-space: nowrap;

  border: 3px solid white;
  border-radius: 2.5em;

  a {
    font: {
      size: 2.25em;
      style: normal;
      family: "Lexend Tera", helvetica, arial, sans-serif;
    }

    color: white;
    font-size: 1.1em;
    font-weight: 800;
    text-decoration: none;

    cursor: pointer;
    padding: 0.575em 0.65em;
    display: inline-block;

    &.router-link-exact-active {
      color: #fffa0d;
    }
  }
}
</style>
