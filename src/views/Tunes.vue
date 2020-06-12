<template>
  <div class="contact">
    <h1>iTunes</h1>
    <tunes-search-form />
    <tunes-list />
  </div>
</template>

<script>
import TunesSearchForm from "@/components/tunes/TunesSearchForm.vue";
import TunesList from "@/components/tunes/TunesList.vue";

export default {
  name: "Tunes",
  components: {
    TunesSearchForm,
    TunesList
  }
};
</script>
