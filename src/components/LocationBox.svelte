<script lang="ts">
	import type { LocationInfo } from '../types';
	export let location: LocationInfo;
</script>

<div>
	<h2>{location.name}</h2>
	<h3>
		{location.caption ?? ""}
	</h3>
	{#each location.childLocations as childLocation}
		<svelte:self location={childLocation}></svelte:self>
	{/each}
</div>
