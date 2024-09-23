<script lang="ts">
    import TextCard from "../../lib/Components/TextCard.svelte"
    import ProgressBar from "$lib/Components/ProgressBar.svelte";
	import RightContentCard from "$lib/Components/RightContentCard.svelte";
    import LeftContentCard from "$lib/Components/LeftContentCard.svelte";
	import InformativeCard from "$lib/Components/informativeCard.svelte";
	import CodeMockup from "$lib/Components/codeMockup.svelte";
	import type { Code } from "$lib/types/data";


    let imageSrc = "$lib/images/health.png"
    let title = "Saúde"
    let description = "é usada na saúde"
    let codes:Code[] = [
        {
            id: "1",
            prefix: "html",
            code: "<h1>Olá Mundo</h1>"
        },
        {
            id: "2",
            prefix: "css",
            code: "h1{\n\tcolor: red;\n}"
        }
    ]
</script>


<div class="w-full h-max flex flex-col items-center">
    <div class="w-full h-full flex flex-col items-center gap-4 overflow-auto">
        <div class="flex gap-2 w-8/12 justify-center">
            <TextCard valor="Variavel"></TextCard>
            <TextCard valor="Texto"></TextCard>
        </div>
        <ProgressBar progress={50} ></ProgressBar>
        <RightContentCard seen={false} title="Tipos de Variaveis"></RightContentCard>
        <LeftContentCard seen={true} title="Tipos de Variaveis"></LeftContentCard>
        <InformativeCard title={title} description={description} imageSrc={imageSrc}></InformativeCard>
        <CodeMockup data={codes}></CodeMockup>
    </div>

</div>