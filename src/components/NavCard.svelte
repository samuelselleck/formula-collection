<script>
    import data from '../json/subjects.json';
    export let header;
    export let url;
</script>

<a href="{url}" class="card normal-border">
    <h1> {header} </h1>
</a>

<style>
    .card {
        display: block;
        text-align: center;
        height: 100%;
        padding: 0 20px;
        text-decoration: none;
        color:black;
    }
</style>
