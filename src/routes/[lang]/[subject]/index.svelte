<script context="module">
    import { getCategories } from '$lib/page_tree.js'
    export async function load(ctx) {
        let {lang, subject} = ctx.page.params
        return {props: getCategories(lang, subject)}
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

<br/>
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