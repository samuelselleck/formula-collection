<script context="module">
    import data from '../../../json/subjects.json';

    export async function load(ctx) {
        let { subject, category } = ctx.page.params
        const equation_page = data.body[subject].body[category]
        const s = equation_page.body
        let equation_sets = Object.keys(s).map(e => {
            return {header: s[e].header, equations: s[e].body};
        })
        let header = equation_page.header
        return {props: {equation_sets, header}}
    }
</script>

<svelte:head>
    <title> {header} </title>
</svelte:head>

<script>
    import EquationBox from '../../../components/EquationBox.svelte';
    export let equation_sets;
    export let header;
</script>

<h1>{header}</h1>
{#if equation_sets}
{#each equation_sets as equations}
    <EquationBox {...equations}/>
{/each}
{/if}

<style>
</style>