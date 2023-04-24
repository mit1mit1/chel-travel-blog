<script lang="ts">
	import PlacesWeveBeen from '../components/PlacesWeveBeen.svelte';
	import SupportUs from '../components/SupportUs.svelte';
	import AboutUs from '../components/AboutUs.svelte';
	import Contact from '../components/Contact.svelte';
	const tabs = ['About us', "Places we've been", 'Contact', 'Support'];
	let selectedTab = 'About us';
	let expandedContainer = false;

	const selectTab = (tab: string) => {
		if (selectedTab === tab && expandedContainer === false) {
			expandedContainer = true;
		} else {
			expandedContainer = false;
		}
		selectedTab = tab;
	};
</script>

<body class="app" data-sveltekit-preload-data="hover">
	<div class={`navContainer ${expandedContainer ? 'expandedContainer' : ''}`}>
		{#each tabs as tab}
			<button on:click={() => selectTab(tab)} class={tab === selectedTab ? 'selectedTab' : ''}>
				{#if tab === selectedTab && expandedContainer === false}
					<i class="fa-solid fa-bars phoneOnly buttonIcon" />
				{/if}
				{tab}
			</button>
		{/each}
	</div>
	<div style="display: contents">
		<div class="pageContainer">
			{#if selectedTab === 'About us'}
				<AboutUs />
			{:else if selectedTab === "Places we've been"}
				<PlacesWeveBeen />
			{:else if selectedTab === 'Support'}
				<SupportUs />
			{:else if selectedTab === 'Contact'}
				<Contact />
			{/if}
		</div>
	</div>
</body>

<style>
	.buttonIcon {
		float: left;
		padding-top: 2px;
	}

	@media (min-width: 500px) {
		.phoneOnly {
			display: none;
		}
	}

	:global(h1) {
		font-family: 'Architects Daughter';
		display: none;
	}
	@media (min-width: 500px) {
		:global(h1) {
			display: block;
		}
	}

	.navContainer {
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-bottom: 20px;
	}
	@media (min-width: 500px) {
		.navContainer {
			display: flex;
			justify-content: space-evenly;
			margin-bottom: 0px;
		}
	}

	.navContainer button {
		margin-bottom: 5px;
		transition-duration: 0.4s;
		border: none;
		padding: 8px 12px;
		width: 100%;
		font-size: 1.15em;
		font-family: 'Quicksand', sans-serif;
		cursor: pointer;
		color: black;
		min-height: 50px;
		overflow: hidden;
		transition: max-height 0.5s ease-out;
		display: none;
	}
	@media (min-width: 500px) {
		.navContainer button {
			display: inline-block;
		}
	}

	.navContainer button.selectedTab {
		display: inline-block;
	}

	.navContainer.expandedContainer button {
		transition: max-height 0.5s ease-out;
		display: inline-block;
	}

	.navContainer button:hover {
		background-color: #c4c3c3;
	}

	.navContainer .selectedTab {
		background-color: #d7d7d7;
	}

	.pageContainer {
		margin-left: 18px;
		margin-right: 18px;
		font-family: Quicksand;
	}
	@media (max-width: 270px) {
		.pageContainer {
			overflow-wrap: anywhere;
		}
	}

	.app {
		background-color: #f8f8f8;
		min-height: 100%;
		margin: 0px;
	}
</style>
