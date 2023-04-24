<script setup lang="ts">
	import WavingBeaniePerson from './WavingBeaniePerson.svelte';
</script>

<h1>About us</h1>
<div class="aboutMeBox">
	<WavingBeaniePerson beanieMainColor="yellow" beanieSecondaryColor="black" />
	<div class="aboutMeText">
		<div>Hi there! I'm Mitch. I like beanies.</div>
		<div>
			I'm a huge nerd for maths, music theory, old dead German philosophy and <i
				>The Lord of the Rings</i
			>.
		</div>
		<div>My favorite part of trip planning is adding Excel calculations to our itinerary.</div>
		<div>
			As a country kid who moved to the city, I love smelling air that smells like real air, and
			looking at green and leafy things.
		</div>
	</div>
</div>
<div class="aboutMeBox">
	<div class="aboutMeText">
		<div>
			Hi there! I'm Rachel. I also like beanies, at least until our graphics designer gets some
			better character art done.
		</div>
		<div>
			I'm a huge nerd for architecture, actual music, less-old-less-dead-less-German philosophy, and <i
				>The Lord of the Rings</i
			>.
		</div>
		<div>My favorite part of trip planning is looking at all the cool places we'll get to see.</div>
		<div>
			As a die hard "Grand Designs" fan-girl, I love getting to see awesome buildings in the flesh.
			Though fresh air and green-leafy things are cool too.
		</div>
	</div>
	<WavingBeaniePerson beanieMainColor="purple" beanieSecondaryColor="black" />
</div>

<style>
	.aboutMeBox {
		display: flex;
	}

	.aboutMeBox div {
		margin-bottom: 15px;
	}

	.aboutMeText {
		display: inline-block;
		vertical-align: top;
		max-width: 520px;
	}
</style>
