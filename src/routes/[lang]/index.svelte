
<svelte:head>
    <title> {header} </title>
</svelte:head>

<script context="module">
    import data from '../../json/subjects.json';
	import { getSubjects } from '$lib/page_tree.js'

	export async function load(ctx) {
		let lang = ctx.page.params.lang
        return {props: getSubjects(lang)}
    }
	
</script>

<script>
	import NavCard from '../../components/NavCard.svelte';
	export let subjects;
	export let header;
</script>

<br/>
<div class="container">
	{#each subjects as card}
		<div class="cardholder">
			<NavCard {...card}/>
		</div>
	{/each}
</div>

<style>
	
	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.cardholder {
		flex-grow: 1;
		padding: 0.3cm;
		min-width: min-content;
	}

</style>