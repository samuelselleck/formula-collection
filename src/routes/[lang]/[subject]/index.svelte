<script context="module">
    import data from '../../../json/subjects.json';

    export async function load(ctx) {
        let lang = ctx.page.params.lang
        let subject = ctx.page.params.subject
        let header = data.body[subject].header[lang]
        let s = data.body[subject].body
        let categories = Object.keys(s).map(e => {
            return {url: `/${lang}/${subject}/${e}`, header: s[e].header[lang]};
        })
        return {props: {categories, header}}
    }
</script>

<svelte:head>
    <title> {header} </title>
</svelte:head>

<script>
    import NavCard from '../../../components/NavCard.svelte'
    export let categories;
    export let header;
</script>

<h1>{header}</h1>
    {#if categories}
    {#each categories as card}
        <div class="cardholder">
            <NavCard {...card}/>
        </div>
    {/each}
    {/if}

<style>
    .cardholder {
		padding: 0.3cm;
	}
</style>