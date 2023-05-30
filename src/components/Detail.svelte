<script lang="ts">
	import type { Detail } from '../types';
	import { getDetailIcon } from '../utils/getIcon';
	import Rating from './Rating.svelte';

	export let detail: Detail;
</script>

<div>
	<h4>
		{detail.name ?? ''}
		{getDetailIcon(detail)}
	</h4>
	{#each detail.ratings as rating}
		<Rating {rating} />
	{/each}
	<div>
		{@html detail.descriptionHTML}
	</div>
</div>
