<script>
    import { goto } from '$app/navigation';
    import Equation from './Equation.svelte';
    import Text from './Text.svelte';
    import InlineEquation from './InlineEquation.svelte'
    import HrefDiv from './HrefDiv.svelte';

    const components = {
        "text": Text,
        "equation": Equation,
        "inline_equation": InlineEquation,
    }

    export let compact = false;
    export let parts;
    export let header;
    export let url;

    let interactive = !url.includes("NONE")
    let external = url.includes("http")

</script>

<HrefDiv active={interactive} {url} {external}>
    <div class={interactive ? 'normal-border' : 'non-interactive'} class:compact>
        <h2> {header} </h2>
        {#each parts as part}
            <svelte:component this={components[part.component]} body={part.body} {compact}/>
        {/each}
    </div>
</HrefDiv>

<style>

    div {
        margin: 20px;
        text-align: center;
    }

    .compact {
        margin: 2px;
        padding: 10px;
        zoom: 0.6;
        border: none !important;
    }

    .non-interactive {
        border: solid 0.15em black;
    }
</style>