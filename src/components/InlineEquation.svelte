<script>
    import katex from 'katex'
    export let body;
    $: equation_html = katex.renderToString(body, {throwOnError: false});
</script>

<span class="inline"> {@html equation_html} </span>

<style>
    .inline {
        display: inline;
        padding: 5px;
    }
</style>