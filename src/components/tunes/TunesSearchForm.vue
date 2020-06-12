<template>
	<form @submit.prevent="getMusic()">
		<input @keyup="search()" ref="searchInput" v-model="query" type="text" />
	</form>
</template>

<script>
import axios from "axios";
import { debounce } from "lodash-es";

export default {
	data() {
		return {
			query: "logic",
			limit: 10,
		};
	},
	methods: {
		search: debounce(function() {
			this.getMusic();
		}, 500),
		getMusic() {
			axios
				.get(
					`https://itunes.apple.com/search?term=${encodeURI(
						this.query
					)}&entity=musicTrack&limit=${this.limit}`
				)
				.then((response) => {
					let iTunesSongs = response.data.results
						.filter((song) => song.kind === "song")
						.map((song) => this.extractData(song));
					this.$root.$emit("new-songs-bro", iTunesSongs);
				});
		},
		extractData({
			trackId: id,
			artistName: artist,
			previewUrl: audioFile,
			artworkUrl100: cover,
			trackName: name,
			collectionName: album,
		}) {
			return { id, artist, audioFile, cover, name, album };
		},
	},
	mounted() {
		this.$refs.searchInput.focus();
	},
};
</script>

<style scoped lang="scss">
input {
	width: 100%;
	display: block;

	padding: {
		top: 0.5em;
		bottom: 0.5em;
		left: 2.95em;
		right: 0.75em;
	}

	color: #333;
	font-size: 1.5em;
	font-weight: 700;

	border: none;
	border-radius: 0.5em;
	background: white;
	box-sizing: border-box;

	outline: none;
	appearance: none;

	background: {
		image: url("../../assets/search.svg");
		repeat: no-repeat;
		position-y: 50%;
		position-x: 1em;
		color: white;
		size: 1em;
	}
}

@media screen and (max-width: 520px) {
	input {
		font-size: 1.15em;
	}
}
</style>
