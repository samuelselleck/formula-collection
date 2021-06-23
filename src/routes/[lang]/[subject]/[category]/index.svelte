<script context="module">
    import { getEquations} from '$lib/page_tree.js';
    export async function load(ctx) {
        let {lang, subject, category} = ctx.page.params
        return {props: getEquations(lang, subject, category)}
    }
</script>

<svelte:head>
    <title> {header} </title>
</svelte:head>

<script>
    import EquationBox from '../../../../components/EquationBox.svelte';
    export let paragraphs;
    export let header;
</script>

<br/>
{#if paragraphs}
{#each paragraphs as parts}
    <EquationBox {...parts}/>
{/each}
{/if}

<style>
</style>