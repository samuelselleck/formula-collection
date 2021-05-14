<script context="module">
    import katex from 'katex'
    import data from '../../../json/subjects.json';

    export async function load(ctx) {
        let { subject, category } = ctx.page.params
        let s = data.subjects[subject].categories[category].equations
        let equations = s.map(raw => katex.renderToString(raw, {throwOnError: false}))
        return {props: {equations}}
    }
</script>

<script>
    export let equations;
</script>

{#if equations}
{#each equations as equation}
    <div class="equation">{@html equation}</div>
{/each}
{/if}

<style>
    .equation {
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>