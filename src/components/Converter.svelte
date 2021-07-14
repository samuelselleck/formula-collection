<script>

    export let quantity;
    export let units;
    export let starting;

    let selectedFrom = units.find(u => u.unit == starting.from);
    let selectedTo = units.find(u => u.unit == starting.to);

    let fromValue = starting.value;
    $: result = selectedTo.apply(selectedFrom.inverse(fromValue)).toFixed(5);
    
</script>

<div>
    <h3>{quantity}: </h3>

    <input class="unit-selector" type="number" bind:value={fromValue}/>

    <select class="unit-selector" bind:value={selectedFrom}>
        {#each units as unit}
            <option value={unit}>
                {unit.unit}
            </option>
        {/each}
    </select>

    <span class="text result"> is {result} </span>

    <select class="unit-selector" bind:value={selectedTo}>
        {#each units as unit}
            <option value={unit}>
                {unit.unit}
            </option>
        {/each}
    </select>
</div>

<style>
    h3 {
        display: inline;
    }
    .unit-selector {
        padding:10px;
        width: 10em;
    }

    .text {
        padding: 10px;
    }

    .result {
        font-weight: bold;
    }
</style>