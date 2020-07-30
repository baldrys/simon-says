<template>
	<li
		:class="['tile', color, {active: isActive}, {disable: true}]"
		@click="click"
		@mousedown="clickDown"
		@mouseup="clickUp"
	></li>
</template>

<script>
export default {
	name: "SimonTile",
	data() {
		return {
			isActive: false,
		};
	},
	props: {
		id: Number,
		color: String,
		audio: HTMLAudioElement,
		isFieldDisabled: Boolean,
	},
	methods: {
		clickDown() {
			if (!this.isFieldDisabled) {
				this.isActive = true;
				this.audio.pause();
				this.audio.currentTime = 0;
				this.audio.play();
			}
		},
		clickUp() {
			if (!this.isFieldDisabled) {
				this.isActive = false;
			}
		},
		click() {
			if (!this.isFieldDisabled) {
				this.$emit("tileClicked", this.id);
			}
		},
	},
};
</script>

<style>
</style>