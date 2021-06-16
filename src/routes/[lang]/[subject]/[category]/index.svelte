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
    export let equationSets;
    export let header;
</script>

<h1>{header}</h1>
{#if equationSets}
{#each equationSets as equations}
    <EquationBox {...equations}/>
{/each}
{/if}

<style>
</style>