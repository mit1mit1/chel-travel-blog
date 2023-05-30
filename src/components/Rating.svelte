<script lang="ts">
	import type { Rating } from '../types';

	export let rating: Rating;
</script>

<div>
	{rating.rater ? `${rating.rater}: ` : ''}
	{rating.numerator}/{rating.denominator}
</div>
