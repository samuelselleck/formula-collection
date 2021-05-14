<script context="module">
    import data from '../../json/subjects.json';

    export async function load(ctx) {
        let subject = ctx.page.params.subject
        let s = data.subjects[subject].categories
        let categories = Object.keys(s).map(e => {
            return {url: `${subject}/${e}`, header: s[e].header};
        })
        return {props: {categories}}
    }
</script>

<script>
    import NavCard from '../../components/NavCard.svelte'
    export let categories;
</script>

{#if categories}
{#each categories as card}
    <NavCard {...card}/>
    <br/>
{/each}
{/if}