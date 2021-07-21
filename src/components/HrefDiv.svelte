<script>
    export let url;
    export let active;
    export let external = false;
</script>

{#if active}
<a href={url} target={external ? "_blank" : "_self"}>
    <slot/>
</a>
{:else}
<div>
    <slot/>
</div>
{/if}

<style>
    a {
        text-decoration: none;
        color: black;
        display: block;
    }
</style>
