<script>

    export let quantity;
    export let units;
    export let starting;

    let selectedFrom = units.find(u => u.unit.includes(starting.from));
    let selectedTo = units.find(u => u.unit.includes(starting.to));

    let fromValue = starting.value;
    let toValue;

    function updateToValue() {
        toValue = selectedTo.apply(selectedFrom.inverse(fromValue)).toPrecision(7)
    }
    function updateFromValue() {
        fromValue = selectedFrom.apply(selectedTo.inverse(toValue)).toPrecision(7)
    }

    $: selectedFrom, selectedTo, updateToValue()

</script>

<div>
    <h3>{quantity}: </h3>

    <span class="together">
        <input class="unit-selector" step="any" lang="en_EN" type="number" value={fromValue} 
            on:input={e => { if(e.target.value) { fromValue = e.target.value}; updateToValue()}}/>

        <select class="unit-selector" bind:value={selectedFrom}>
            {#each units as unit}
                <option value={unit}>
                    {unit.unit}
                </option>
            {/each}
        </select>
    </span>

    <span class="text result"> is </span>

    <span class="together">
        <input class="unit-selector" type="number" value={toValue} 
            on:input={e => {if(e.target.value) { toValue = e.target.value}; updateFromValue()}}/>

        <select class="unit-selector" bind:value={selectedTo}>
            {#each units as unit}
                <option value={unit}>
                    {unit.unit}
                </option>
            {/each}
        </select>
    </span>
</div>

<style>
    h3 {
        display: inline-block;
        width: 200px;
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

    .together {
        white-space: nowrap;
    }
</style>