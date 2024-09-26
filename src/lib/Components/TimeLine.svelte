<script>
	import { CardTimeLineList } from '$lib/types/content';
	import ContentCard from './ContentCard.svelte';
</script>

<div class="flex flex-col  items-center justify-start w-full h-screen gap-8 overflow-y-scroll">
    {#each CardTimeLineList as card, index}
		<div
			class="flex {card.rightSide ? 'justify-end' : 'justify-start'} items-center w-[51%]"
		>
			<ContentCard
				title={card.title}
				seen={card.seen}
				rightSide={card.rightSide}
				contentIndex={index}
			></ContentCard>
		</div>
	{/each}
</div>
