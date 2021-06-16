
<script>
    import { goto } from '$app/navigation';
    import Equation from './Equation.svelte';

    export let equations;
    export let header;
    export let url;

    $: interactive = !url.includes("NONE")

    function navigate_to_interactive() {
        if (interactive) {
            goto(url)
        }
    }
</script>

<div on:click={navigate_to_interactive} class={interactive ? 'normal-border' : 'non-interactive'}> 
    <h3> {header} </h3>
    {#each equations as equation}
        <Equation {equation}></Equation>
    {/each}
</div>

<style>
    div {
        margin: 20px;
        text-align: center;
    }

    .non-interactive {
        border: solid 0.15em black;
    }
</style>