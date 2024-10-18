<script lang="ts">
	import type {CardTimeLine}  from '$lib/types/data';
	import { CardTimeLineList } from '$lib/types/content';
	import { onMount } from 'svelte';
	import ContentCard from './ContentCard.svelte';

	let cardTimelIneList:CardTimeLine[] = []

	onMount(()=>{
		if(!window.localStorage.getItem("CardTimeLineList")){
			window.localStorage.setItem("CardTimeLineList",JSON.stringify(CardTimeLineList))
		}
		cardTimelIneList = JSON.parse(window.localStorage.getItem("CardTimeLineList")!)

		console.log(cardTimelIneList);
		
	})

</script>

<div class="flex flex-col  items-center justify-start w-full h-screen  overflow-y-scroll">
    {#each cardTimelIneList as card, index}
	<div class="flex w-full justify-center">
		<div
		class="flex {card.rightSide ? 'justify-end' : 'justify-start'} items-center w-[784px]"
		>
		<div class={card.rightSide?"w-4 h-60" + ( card.seen ?" bg-primary":" bg-secondary") :"" }>

		</div>
			<ContentCard
				title={card.title}
				seen={card.seen}
				rightSide={card.rightSide}
				contentIndex={card.contentIndex}
				srcVideo={card.srcVideo}
			></ContentCard>
			<div class={card.rightSide?"":"w-4 h-60" + ( card.seen ?" bg-primary":" bg-secondary")}>
	
			</div>
		</div>
	</div>
	{/each}
</div>
