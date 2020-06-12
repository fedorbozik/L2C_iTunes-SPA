<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      Hot singles in your area.
      <br />
      Hotter vue in your
      <a href="https://vuejs.org" target="_blank" rel="noopener"
        >documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
