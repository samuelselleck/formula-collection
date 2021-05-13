
<svelte:head>
    <!--<script defer src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'></script>-->
    <title> Formula Collection </title>
</svelte:head>

<script>
    import subjects from '../json_collection/subjects.json';
    import NavCard from '../components/NavCard.svelte';

</script>
<h1>Formula Collection</h1>
<main>
	
	{#each subjects as card}
		<div class="cardholder">
			<NavCard {...card}/>
		</div>
	{/each}

</main>

<style>
	h1 {
		text-transform: uppercase;
		text-align: center;
		font-size: 4em;
		font-weight: 100;
	}

	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		text-align: center;
		padding: 0;
		margin: 0;
	}

	.cardholder {
		flex-grow: 1;
		padding: 8px;
		width: min-content;
	}

</style>