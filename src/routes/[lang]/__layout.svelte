<svelte:head>
    <!--Open sans font-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <!--Katex stylesheet-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.10/dist/katex.min.css" integrity="sha384-0cCFrwW/0bAk1Z/6IMgIyNU3kfTcNirlObr4WjrUU7+hZeD6ravdYJ3kPWSeC31M" crossorigin="anonymous">
</svelte:head>

<script context="module">
    import data from '../../json/subjects.json';
    import { getPathHeaders } from '$lib/page_tree';

	export async function load(ctx) {
		let lang = ctx.page.params.lang
        let pathHeaders = getPathHeaders(lang, ctx.page.params)
        let path = ctx.page.path.substr(3);
        let languages = Object.entries(data["metadata"]["languages"]).map(e => ({
            text: e[1],
            url: `/${e[0]}${path}`
        }))
        return {props: {lang, languages, pathHeaders}}
    }
</script>

<script>
    import { goto } from '$app/navigation';
	export let lang;
    export let languages;
    export let pathHeaders;

    const changeLang = async url => {
        goto(url, {replaceState: true, noscroll: true})
    }
</script>

<nav>
    <span class="spacer">
        {#if pathHeaders}
            <a class="nowrap" href={pathHeaders[0].url}>{pathHeaders[0].header}</a>
            {#each pathHeaders.slice(1) as header}
                <span class="spacer"> > </span>
                <a class="nowrap" href={header.url}>{header.header}</a>
            {/each}
        {/if}
    </span>
    <span class="spacer">
        {#if languages}
            {#each languages as language}
                <button class="lang-button" on:click={changeLang(language.url)}>{language.text}</button>
            {/each}
        {/if}
    </span>
</nav>

<main class="page-container" lang={lang}>
<slot></slot>
</main>

<style>
    button {
        background: none !important;
        border: none;
        padding: 0 !important;
        text-decoration: underline;
        cursor: pointer;
        margin: 10px;
    }

    a, button {
        color: black;
        text-decoration: none;
    }

    nav {
        display: flex;
        justify-content: space-between;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .spacer {
        margin: 10px;
    }

    .nowrap {
        white-space: nowrap;
    }
</style>