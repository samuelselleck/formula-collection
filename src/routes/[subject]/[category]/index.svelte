<svelte:head>
    <script type="text/javascript" id="MathJax-script" async src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'></script>
</svelte:head>

<script context="module">
    export async function load(ctx) {
        let { subject, category } = ctx.page.params
        let categoryData = (await import(`../../../json_collection/subjects/${subject}/${category}/${category}.json`)).default;
        return {props: {categoryData}}
    }
</script>

<script>
    export let categoryData;
</script>

{#if categoryData}
{#each categoryData as equation}
    <div>$${equation}$$</div>
{/each}
{/if}