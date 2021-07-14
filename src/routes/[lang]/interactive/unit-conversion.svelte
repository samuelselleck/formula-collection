<script>
    import { unit, scale, translate, combine} from "$lib/bijective";
    import Converter from "../../../components/Converter.svelte";

    let lengthConversion = {
        quantity: "Length",
        units: [
            {unit: "Meters", ...unit()},
            {unit: "Feet",  ...scale(3.2808399)},
            {unit: "Kilometers", ...scale(1/1000)}
        ],
        starting: {from: "Meters", to: "Feet", value: 1}
    }

    let temperatureConversion = {
        quantity: "Temperature",
        units: [
            {unit: "Celsius", ...unit()},
            {unit: "Farenheit",  ...combine(scale(1.8), translate(32))},
            {unit: "Kelvin", ...translate(273.15)}
        ],
        starting: {from: "Celsius", to: "Farenheit", value: 25}
    }

</script>
<h1> Unit Conversion </h1>

<div class="centering normal-border">
    <Converter {...lengthConversion}/>
    <Converter {...temperatureConversion}/>
</div>

<style>
    .centering {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>