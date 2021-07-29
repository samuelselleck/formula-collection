<script context="module">
    import { getEquations} from '$lib/page_tree.js';
    export async function load(ctx) {
        let {lang, subject, category} = ctx.page.params
        let compact = ctx.page.query.has("compact")
        return {props: {compact, ...getEquations(lang, subject, category)}}
    }
</script>

<svelte:head>
    <title> {header} </title>
</svelte:head>

<script>
    import EquationBox from '../../../../components/EquationBox.svelte';
    export let compact;
    export let paragraphs;
    export let header;
</script>

{#if paragraphs}
{#each paragraphs as parts}
    <EquationBox {...parts} {compact}/>
{/each}
{/if}

<style>

</style>