
<svelte:head>
    <title> Formula Collection </title>
</svelte:head>

<script>
    import data from '../json/subjects.json';
    import NavCard from '../components/NavCard.svelte';

	let s = data.body
    let subjects = Object.keys(s).map(e => {
		return {url: e, header: s[e].header};
	})
</script>


<main>
	<h1>{data.header}</h1>
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
		width:100%;
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

	@media screen and (max-width: 600px) {
		h1 {
			font-size: 2em;
		}
	}

</style>