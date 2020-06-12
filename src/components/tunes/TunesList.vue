<template>
  <div>
    <ul class="tunes-list">
      <tunes-song v-for="song in songs" :key="song.id" :song="song" />
    </ul>
  </div>
</template>

<script>
import TunesSong from "@/components/tunes/TunesSong.vue";

export default {
  components: {
    TunesSong
  },
  data() {
    return {
      songs: []
    };
  },
  mounted() {
    this.$root.$on("new-songs-bro", data => (this.songs = data));
  }
};
</script>

<style scoped lang="scss">
.tunes-list {
  margin-top: 3em;
  padding-left: 0;
  list-style: none;
}
</style>
