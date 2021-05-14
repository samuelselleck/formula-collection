<script context="module">
    import data from '../../../json/subjects.json';

    export async function load(ctx) {
        let { subject, category } = ctx.page.params
        let equations = data.subjects[subject].categories[category].equations
        return {props: {equations}}
    }
</script>

<script>
    import Equation from '../../../components/Equation.svelte';
    export let equations;
</script>

{#if equations}
{#each equations as equation}
    <Equation {equation}/>
{/each}
{/if}