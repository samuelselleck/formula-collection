<script context="module">
	export async function load(ctx) {
        console.log(ctx)
        return {props: {}}
    }
</script>

<script>
    import katex from 'katex'
    import { onMount } from 'svelte';

    export let equation;
    let a = 1;
    let equation_element;
    onMount(async => {
        katex.render(equation, equation_element, {throwOnError: false});
    });
</script>

<div class="equation" bind:this={equation_element}> </div>

<style>
    .equation {
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em !important;
    }
</style>