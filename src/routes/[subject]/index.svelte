<script context="module">
    import data from '../../json/subjects.json';

    export async function load(ctx) {
        let subject = ctx.page.params.subject
        let header = data.body[subject].header
        let s = data.body[subject].body
        let categories = Object.keys(s).map(e => {
            return {url: `/${subject}/${e}`, header: s[e].header};
        })
        return {props: {categories, header}}
    }
</script>

<svelte:head>
    <title> {header} </title>
</svelte:head>

<script>
    import NavCard from '../../components/NavCard.svelte'
    export let categories;
    export let header;
</script>

<h1>{header}</h1>

{#if categories}
{#each categories as card}
    <NavCard {...card}/>
    <br/>
{/each}
{/if}

<style>
    h1 {
        text-align: center;
    }
</style>