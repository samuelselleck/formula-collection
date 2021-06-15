
<svelte:head>
    <title> {header} </title>
</svelte:head>

<script context="module">
    import data from '../../json/subjects.json';

	export async function load(ctx) {
		let lang = ctx.page.params.lang
		let header = data.header[lang]
		let s = data.body
		let subjects = Object.keys(s).map(e => {
			return {url: `/${lang}/${e}`, header: s[e].header[lang]};
		})
        return {props: {subjects, header}}
    }
	
</script>

<script>
	import NavCard from '../../components/NavCard.svelte';
	
	export let subjects;
	export let header;
</script>

<h1>{header}</h1>
<div class="container">
	{#each subjects as card}
		<div class="cardholder">
			<NavCard {...card}/>
		</div>
	{/each}
</div>

<style>
	
	h1 {
		text-transform: uppercase;
		font-size: 4em;
	}
	
	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.cardholder {
		flex-grow: 1;
		padding: 0.3cm;
		min-width: min-content;
	}

	@media screen and (max-width: 700px) {
		h1 {
            font-size: 2em;
		}

		.cardholder {
			width: 100%;
		}
	}

</style>