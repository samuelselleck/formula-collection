<script>
    import { unit, scale, translate, combine} from "$lib/bijective";
    import Converter from "../../../components/Converter.svelte";

    let conversions = [
        {
            quantity: "Length",
            units: [
                {unit: "Meters (m)", ...unit()},
                {unit: "Feet (ft)",  ...scale(3.2808399)},
                {unit: "Inch (in)", ...scale(39.3700787)},
            ],
            starting: {from: "Meters", to: "Feet", value: 1}
        },
        {
            quantity: "Temperature",
            units: [
                {unit: "Celsius (°C)", ...unit()},
                {unit: "Farenheit (°F)",  ...combine(scale(1.8), translate(32))},
                {unit: "Kelvin (K)", ...translate(273.15)}
            ],
            starting: {from: "Celsius", to: "Farenheit", value: 25}
        },
        {
            quantity: "Speed",
            units: [
                {unit: "Meters per Second (m/s)", ...unit()},
                {unit: "Kilometers per Hour (km/h)",  ...scale(3.6)},
                {unit: "Miles per Hour (mph)", ...scale(2.236936)},
            ],
            starting: {from: "Meters per Second", to: "Kilometers per Hour", value: 1}
        },
        {
            quantity: "Weight",
            units: [
                {unit: "Kilogram (kg)", ...unit()},
                {unit: "Gram (g)", ...scale(1000)},
                {unit: "Dalton (u)", ...scale(6.022173643e+26)},
            ],
            starting: {from: "Kilogram", to: "Gram", value: 1}
        },
        {
            quantity: "Energy",
            units: [
                {unit: "Joule (J)", ...unit()},
                {unit: "Electron Volt (eV)", ...scale(6.24150913e18)},
            ],
            starting: {from: "Joule", to: "Electron Volt", value: 1}
        },
        {
            quantity: "Pressure",
            units: [
                {unit: "Pascal (Pa)", ...unit()},
                {unit: "Standard Atmosphere (atm)", ...scale(9.86923e-6)},
                {unit: "Bar", ...scale(1e-5)},
                {unit: "Millibar", ...scale(1e-2)},
                {unit: "Torr (mmHg)", ...scale(133.322368)},
            ],
            starting: {from: "Standard Atmosphere", to: "Pascal", value: 1}
        },
        {
            quantity: "Electric Charge",
            units: [
                {unit: "Coulomb (C)", ...unit()},
                {unit: "Electron Charges", ...scale(1/9.86923e-6)},
                {unit: "Faraday", ...scale(1/96485.33289)}
            ],
            starting: {from: "Coulomb", to: "Electron Charges", value: 1}
        },
        {
            quantity: "Angle",
            units: [
                {unit: "Radians (rad)", ...unit()},
                {unit: "Degrees (°/deg)", ...scale(180/Math.PI)},
            ],
            starting: {from: "Degrees", to: "Radians", value: 90}
        },
        {
            quantity: "Power",
            units: [
                {unit: "Watt (W)", ...unit()},
                {unit: "Horsepower (hp)", ...scale(1/745.7)},
            ],
            starting: {from: "Watt", to: "Horsepower", value: 1}
        },
    ]
</script>

<h1> Unit Conversion </h1>

<div class="centering normal-border">
    {#each conversions as conversion}
    <Converter {...conversion}/>
    {/each}
</div>

<style>
    .centering {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>