<script lang="ts">
	import type { LocationInfo } from '../types';
	import { getTypeIcon } from '../utils/getIcon';
	import Rating from './Rating.svelte';
	import Detail from './Detail.svelte';
	export let location: LocationInfo;
	let parentLocations: Array<LocationInfo> = [];
	let hasParent = !!parentLocations.length;
</script>

<div>
	<h2>
		{location.name}
		{getTypeIcon(location)}
	</h2>

	<h3>
		{location.caption ?? ''}
	</h3>
	{#if location.url}
		<div>
			<a href={location.url}>{location.url}</a>
		</div>
	{/if}
	{#each location.ratings as rating}
		<Rating {rating} />
	{/each}
	
	{#each location.details ?? [] as detail}
		<Detail {detail} />
	{/each}

	{#each location.childLocations as childLocation}
		<button
			on:click={() => {
				parentLocations.push(location);
				parentLocations = [...parentLocations];
				location = childLocation;
				hasParent = !!parentLocations.length;
			}}
		>
			{childLocation.name}
			{getTypeIcon(childLocation)}
		</button>
	{/each}
	{#if hasParent}
		<button
			on:click={() => {
				if (parentLocations.length) {
					location = parentLocations.pop() ?? location;
					hasParent = !!parentLocations.length;
					parentLocations = [...parentLocations];
				}
			}}
			>Back up to {parentLocations[parentLocations.length - 1].name}
			{getTypeIcon(parentLocations[parentLocations.length - 1])}</button
		>
	{/if}
</div>
