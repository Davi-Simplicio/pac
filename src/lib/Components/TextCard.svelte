<script lang="ts">
    export let valor
    export let index: string;

    function seenContent() {	
		setTimeout(() => {
			let cardlist = JSON.parse(window.localStorage.getItem("CardTimeLineList")!)
			cardlist[index].seen = true
			window.localStorage.setItem("CardTimeLineList",JSON.stringify(cardlist))
		}, 1);

	}
</script>

<a href="/PaginaConteudo/{index}">
    <button class="w-48 h-20 bg-secondary text-secondary-content flex justify-center items-center rounded-lg border-solid border-[1px] border-base-200 cursor-pointer"
    on:click={(e)=>{
       seenContent();
   }}>
       <div class="flex justify-center items-center text-center">
           {valor}
       </div>
   </button>
</a>
