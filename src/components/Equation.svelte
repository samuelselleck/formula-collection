<script>
    import katex from 'katex'
    export let body;
    $: equation_html = katex.renderToString(body, {throwOnError: false, displayMode: true});
</script>

<div class="equation scrollbox"> {@html equation_html} </div>

<style>
    .equation {
        margin: 20px;
        display: block;
        justify-content: center;
        align-items: center;
        font-size: 1.2em !important;
        overflow: auto hidden;
    }
    @media (hover: none) {
        .scrollbox {
            overflow: auto;
            background-image: 
        
            /* Shadows */ 
            linear-gradient(to right, white, white),
            linear-gradient(to right, white, white),
        
            /* Shadow covers */ 
            linear-gradient(to right, rgba(0,0,0,.1), rgba(255,255,255,0)),
            linear-gradient(to left, rgba(0,0,0,.1), rgba(255,255,255,0));   

            background-position: left center, right center, left center, right center;
            background-repeat: no-repeat;
            background-color: white;
            background-size: 40px 100%, 40px 100%, 20px 100%, 20px 100%;
            
            /* Opera doesn't support this in the shorthand */
            background-attachment: local, local, scroll, scroll;
        }
    }
</style>