<script context="module">
	export async function load(ctx) {
        console.log(ctx)
        return {props: {}}
    }
</script>

<script>
    import katex from 'katex'
    export let equation;
    let equation_html = katex.renderToString(equation, {throwOnError: false, displayMode: true});
</script>

<div class="equation"> {@html equation_html} </div>

<style>
    .equation {
        margin: 20px;
        display: block;
        justify-content: center;
        align-items: center;
        font-size: 1.2em !important;
        overflow: auto hidden;
    }
</style>