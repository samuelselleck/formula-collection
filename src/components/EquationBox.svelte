
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
    $: external = url.includes("http")

    function navigate_to_interactive() {
        if (interactive) {
            goto(url)
        }
    }
</script>

<a  class:disable={!interactive} href={interactive ? url : "javascript:void(0)"} target={external ? "_blank" : "_self"} class={interactive ? 'normal-border' : 'non-interactive'}> 
    <h2> {header} </h2>
    {#each parts as part}
        <svelte:component this={components[part.component]} body={part.body}/>
    {/each}
</a>

<style>

    .disable {
        cursor: default;
    }
    a {
        text-decoration: none;
        color: black;
        display: block;
        margin: 20px;
        text-align: center;
    }

    .non-interactive {
        border: solid 0.15em black;
    }
</style>