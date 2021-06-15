<svelte:head>
    <!--Open sans font-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <!--Katex stylesheet-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.10/dist/katex.min.css" integrity="sha384-0cCFrwW/0bAk1Z/6IMgIyNU3kfTcNirlObr4WjrUU7+hZeD6ravdYJ3kPWSeC31M" crossorigin="anonymous">
</svelte:head>

<script context="module">
    import data from '../../json/subjects.json';

	export async function load(ctx) {
		let lang = ctx.page.params.lang
        let path = ctx.page.path.substr(3);
        let languages = Object.entries(data["metadata"]["languages"]).map(e => ({
            text: e[1],
            url: `/${e[0]}${path}`
        }))
        return {props: {lang, languages}}
    }
</script>

<script>
	export let lang;
    export let languages;
</script>

<div class="language-container">
    {#if languages}
        {#each languages as language}
            <a class="lang-button" href={language.url}>{language.text}</a>
        {/each}
    {/if}
</div>
<main class="page-container" lang={lang}>
<slot></slot>
</main>

<style>
    .language-container {
        position: fixed;
        top: -10px;
    }

    .lang-button {
        margin: 10px;
        color:black;
    }
</style>