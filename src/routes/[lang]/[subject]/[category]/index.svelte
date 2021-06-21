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
    import { onMount } from 'svelte';
    import EquationBox from '../../../../components/EquationBox.svelte';
    export let paragraphs;
    export let header;
    onMount(async () => console.log(header))
</script>

<h1>{header}</h1>
{#if paragraphs}
{#each paragraphs as parts}
    <EquationBox {...parts}/>
{/each}
{/if}

<style>
</style>