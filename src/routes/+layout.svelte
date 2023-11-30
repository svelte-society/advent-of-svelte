<script>
    import "$lib/app.css";
</script>

<svelte:head>
    <title>Advent of Svelte</title>
</svelte:head>

<div>
<slot />
</div>

<style>
    div {
        background-color: black;
    }
</style>