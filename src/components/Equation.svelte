<script context="module">
	export async function load(ctx) {
        console.log(ctx)
        return {props: {}}
    }
</script>

<script>
    import katex from 'katex'
    export let equation;
    let equation_html = katex.renderToString(equation, {throwOnError: false});
</script>

<div class="equation"> {@html equation_html} </div>

<style>
    .equation {
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em !important;
    }
</style>