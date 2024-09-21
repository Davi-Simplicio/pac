<script>

    let nome = "Davi"
    let items = ["Peru","Brazil", "Kuba"]
</script>


<div>
    {#if nome == "Davi"}
        Bem vindo Davi
    {/if}
    {#each items as item}
        <div class="flex flex-col">
            {item}
        </div>
    {/each}
    <quadroComTexto valor="Variavel"></quadroComTexto>
    <quadroComTexto valor="Texto"></quadroComTexto>

</div>