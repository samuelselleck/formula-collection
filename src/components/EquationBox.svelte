
<script>
    import { goto } from '$app/navigation';
    import Equation from './Equation.svelte';
    import Text from './Text.svelte';

    const components = {
        "text": Text,
        "equation": Equation,
    }

    export let parts;
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
    {#each parts as part}
        <svelte:component this={components[part.component]} body={part.body}/>
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