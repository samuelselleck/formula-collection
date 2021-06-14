
<script>
    import Equation from './Equation.svelte';

    export let equations;
    export let header;
</script>

<div class="equationbox normal-border"> 
    <h3> {header} </h3>
    {#each equations as equation}
        <Equation {equation}></Equation>
    {/each}
</div>

<style>
    .equationbox {
        margin: 20px;
        text-align: center;
    }
</style>