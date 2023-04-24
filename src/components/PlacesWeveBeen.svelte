<script setup lang="ts">
	import { tripList } from '../constants/trips';
	import { prettifyAddress } from '../utils/stringManipulation';
	import { base } from '$app/paths';
</script>

<h1>Places we've been</h1>
<div class="subheading">In decreasing order of cool</div>
<div class="tripsContainer">
	{#each tripList as trip}
		<div class="tripBox">
			<h2 class="tripTitle">
				{#if trip.iconName}
					<img
						class="boxIcon"
						src={`${base}/images/${trip.iconName}`}
						alt={`Picture of ${trip.name}`}
					/>
				{/if}
				{trip.name}
			</h2>
			<div class="detailsBox">
				{#if trip.description}
					<div>{trip.description}</div>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.tripsContainer {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	}
	@media (max-width: 400px) {
		.tripsContainer {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}
	}

	.tripBox {
		max-width: 510px;
		padding: 5px;
		margin-right: 50px;
	}

	.tripTitle {
		font-family: 'Indie Flower';
		margin-bottom: 5px;
		margin-top: 10px;
		display: flex;
	}

	.tripTitle a {
		margin-right: 10px;
		align-items: center;
		display: flex;
	}

	.tripBox div {
		margin-bottom: 5px;
	}

	.boxIcon {
		max-width: 40px;
		max-height: 40px;
		vertical-align: bottom;
		margin-right: 5px;
	}

	h1 {
		font-family: 'Architects Daughter';
		margin-bottom: 5px;
	}

	.detailsBox {
		padding: 5px 0px;
		margin: 5px 0px;
	}

	.subheading {
		margin-bottom: 15px;
		font-style: italic;
		font-family: 'Architects Daughter';
		font-size: 1.2em;
	}
</style>
