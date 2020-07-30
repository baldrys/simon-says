<template>
	<div class="wrapper">
		<h1>Семён говорит</h1>
		<div class="game-board">
			<div class="simon">
				<ul>
					<SimonTile
						v-for="tile in simonTiles"
						:key="tile.id"
						:id="tile.id"
						:color="tile.color"
						:audio="tile.audio"
						@tileClicked="tileClick"
						:class="{ active: tile.active }"
						:isFieldDisabled="isFieldDisabled"
					/>
				</ul>
			</div>
		</div>
		<div class="game-info">
			<h2>
				Раунд:
				<span>{{ this.round }}</span>
			</h2>
			<button @click="startGame">Старт</button>
			<p v-if="isEnd">
				Вы проиграли после
				<span>{{ this.round }}</span> раундов!
			</p>
		</div>
		<div class="game-options">
			<h2>Выберите уровень:</h2>
			<div v-for="(mode, i) in modes" :key="i">
				<input :value="mode" type="radio" v-model="currentMode" />
				{{ mode.name }}
			</div>

			<br />
		</div>
	</div>
</template>

<script>
import SimonTile from "./SimonTile.vue";

export default {
	name: "SimonGame",
	components: {
		SimonTile,
	},
	data() {
		return {
			sequence: [],
			copy: [],
			round: 0,
			active: true,
			isFieldDisabled: true,
			isEnd: false,
			simonTiles: [
				{
					id: 1,
					color: "red",
					active: false,
					audioFile: require("@/assets/audio/1.mp3"),
				},
				{
					id: 2,
					color: "blue",
					active: false,
					audioFile: require("@/assets/audio/2.mp3"),
				},
				{
					id: 3,
					color: "yellow",
					active: false,
					audioFile: require("@/assets/audio/3.mp3"),
				},
				{
					id: 4,
					color: "green",
					active: false,
					audioFile: require("@/assets/audio/4.mp3"),
				},
			],
			modes: {
				easy: {
					name: "Легкий",
					speed: 1.5 * 1000,
				},
				medium: {
					name: "Средний",
					speed: 1.0 * 1000,
				},
				hard: {
					name: "Сложный",
					speed: 0.4 * 1000,
				},
			},
			currentMode: null,
		};
	},
	created() {
		this.currentMode = this.modes.easy;
		this.simonTiles.forEach((tile) => {
			tile.audio = new Audio(tile.audioFile);
		});
	},
	methods: {
		startGame() {
			this.isEnd = false;
			this.sequence = [];
			this.copy = [];
			this.round = 0;
			this.active = true;
			this.newRound();
		},
		newRound() {
			this.round++;
			this.sequence.push(this.randomNumber());
			this.copy = this.sequence.slice(0);
			this.animateSeq();
		},
		tileClick(id) {
			const desiredResponse = this.copy.shift();
			this.active = desiredResponse === id;
			this.checkLose();
		},
		checkLose() {
			if (this.copy.length === 0 && this.active) {
				this.newRound();
			} else if (!this.active) {
				this.endGame();
			}
		},
		endGame() {
			this.isEnd = true;
			this.isFieldDisabled = true;
		},
		playSound(id) {
			const simonTile = this.simonTiles.find((tile) => tile.id === id);
			simonTile.audio.pause();
			simonTile.audio.currentTime = 0;
			simonTile.audio.play();
		},
		lightUp(id) {
			let simonTile = this.simonTiles.find((tile) => tile.id === id);
			simonTile.active = true;
			window.setTimeout(() => {
				simonTile.active = false;
			}, this.currentMode.speed / 2);
		},
		animateSeq() {
			let i = 0;
			this.isFieldDisabled = true;
			let interval = setInterval(() => {
				this.playSound(this.sequence[i]);
				this.lightUp(this.sequence[i]);

				i++;
				if (i >= this.sequence.length) {
					clearInterval(interval);
					this.isFieldDisabled = false;
				}
			}, this.currentMode.speed);
		},
		randomNumber() {
			return Math.floor(Math.random() * 4 + 1);
		},
	},
};
</script>

<style>
</style>