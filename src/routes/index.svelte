
<svelte:head>
    <title> {header} </title>
</svelte:head>

<script context="module">
    import data from '../json/subjects.json';

	export async function load(ctx) {
		let header = data.header
		let s = data.body
		let subjects = Object.keys(s).map(e => {
			return {url: `/${e}`, header: s[e].header};
		})
        return {props: {subjects, header}}
    }
	
</script>

<script>
	import NavCard from '../components/NavCard.svelte';
	
	export let subjects;
	export let header;
</script>

<main>
	<h1>{header}</h1>
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