<template>
  <section class="home">
    <img alt="Vue logo" src="@/assets/vuelogo.png" />

    <tunes-song :song="song" />

    <hello-world msg="Welcome to my iTunes Demo Vue.js Single Page App" />
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
const HelloWorld = () => import("@/components/home/HelloWorld.vue");
const TunesSong = () => import("@/components/tunes/TunesSong.vue");

export default {
  name: "Home",
  components: {
    HelloWorld,
    TunesSong
  },
  data() {
    return {
      song: {
        id: 1077689379,
        artist: "Conro",
        audioFile:
          "https://audio-ssl.itunes.apple.com/itunes-assets/Music49/v4/a6/97/2e/a6972e56-ba1e-d421-24c8-806a469b3482/mzaf_1373444248721258614.plus.aac.p.m4a",
        cover:
          "https://is1-ssl.mzstatic.com/image/thumb/Music69/v4/74/87/b7/7487b723-fe12-5272-f7f6-6ad05ef0ff54/source/100x100bb.jpg",
        name: "On My Way Up",
        album: "On My Way Up - Single"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 25%;
}
</style>
