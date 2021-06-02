<script>
    import data from '../json/subjects.json';
    export let header;
    export let url;
</script>

<a href="{url}" class="card">
    <h1> {header} </h1>
</a>

<style>
    .card {
        display: block;
        height: 100%;
        padding: 0 20px;
        border: solid 2px #DDD;
        border-radius:10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        line-height: 300%;
        min-width: 300px;
        text-decoration: none;
        color:black;
    }

    @media only screen and (max-width: 600px) {
        .card {
            font-size: 0.6em;
        }
    }
</style>
