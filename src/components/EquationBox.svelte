
<script>
    import Equation from './Equation.svelte';

    export let equations;
    export let header;
</script>

<div class="equationbox"> 
    <h3> {header} </h3>
    {#each equations as equation}
        <Equation {equation}></Equation>
    {/each}
</div>

<style>
    .equationbox {
        font-family: 'Open Sans', sans-serif;
        text-decoration: underline;
        margin: 20px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>