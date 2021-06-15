<script context="module">
    import data from '../../json/subjects.json';

	export async function load(ctx) {
		let lang = ctx.page.params.lang

        return {props: {lang}}
    }
</script>

<svelte:head>
    <!--Open sans font-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <!--Katex stylesheet-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.10/dist/katex.min.css" integrity="sha384-0cCFrwW/0bAk1Z/6IMgIyNU3kfTcNirlObr4WjrUU7+hZeD6ravdYJ3kPWSeC31M" crossorigin="anonymous">
</svelte:head>

<script>
	export let lang;
</script>

<main class="page-container" lang={lang}>
<slot></slot>
</main>