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
        let subject = ctx.page.params.subject
        let category = ctx.page.params.category
        let pathHeaders = getPathHeaders(lang, ctx.page.params)
        let path = ctx.page.path.substr(3);
        let interactive = ctx.page.path.includes("interactive")
        let compact = ctx.page.query.has("compact")
        let languages = Object.entries(data["metadata"]["languages"]).map(e => ({
            text: e[1],
            url: `/${e[0]}${path}`
        }))
        return {props: {subject, category, compact, lang, languages, pathHeaders, interactive}}
    }
</script>

<script>
    import { goto } from '$app/navigation';
import PdfDownloader from '../../components/PdfDownloader.svelte';
    export let subject;
    export let category;
    export let compact;
	export let lang;
    export let languages;
    export let pathHeaders;
    export let interactive;

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
    {#if !interactive}
    <span class="spacer">
        <span class="hideifsmall">
        {#if pathHeaders.length == 1}
            <PdfDownloader url="/latex/{lang}-complete.pdf"/>
        {:else if pathHeaders.length == 2}
            <PdfDownloader url="/latex/{lang}-{subject}.pdf"/>
        {:else if pathHeaders.length > 2}
            <PdfDownloader url="/latex/{lang}-{subject}-{category}.pdf"/>
            <a class="spacer" href={compact ? "?" : "?compact"}> {compact ? "Normal View" : "Compact View"} </a>
            |
        {/if}
        </span>
        {#if languages}
            {#each languages as language}
                <button class="lang-button" on:click={changeLang(language.url)}>{language.text}</button>
            {/each}
        {/if}
    </span>
    {/if}
</nav>

<main class:page-container={!compact} class:compact lang={lang}>
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
        background: white;
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        z-index: 1;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .compact {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .spacer {
        margin: 10px;
    }

    .nowrap {
        white-space: nowrap;
    }

    @media screen and (max-width: 800px) {
        .hideifsmall {
            display: none;
        }
	}
</style>