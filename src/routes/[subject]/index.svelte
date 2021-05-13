<script context="module">
    export async function load(ctx) {
        let subject = ctx.page.params.subject
        let subjectData = (await import(`../../json_collection/subjects/${subject}/${subject}.json`)).default;
        return {props: {subjectData}}
    }
</script>

<script>
    export let subjectData;
</script>

{#if subjectData}
{#each subjectData as category}
    <a href="{category.url}">{category.header}</a>
{/each}
{/if}