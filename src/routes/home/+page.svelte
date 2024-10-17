<script lang="ts">
	import TextCard from '../../lib/Components/TextCard.svelte';
	import ProgressBar from '$lib/Components/ProgressBar.svelte';
	import ContentCard from '$lib/Components/ContentCard.svelte';
	import InformativeCard from '$lib/Components/InformativeCard.svelte';
	import CodeMockup from '$lib/Components/codeMockup.svelte';
	import {
		Codes,
		CardTimeLineList,
		CardWithImageList,
		ContentPageList
	} from '../../lib/types/content';
	import VideoComponent from '$lib/Components/videoComponent.svelte';
	import TimeLine from '$lib/Components/TimeLine.svelte';
	import { onMount } from 'svelte';

	let cardTimelineList = [];
	let progressBarValue = 0

	function updateCardTimelineList() {
		const storedList = window.localStorage.getItem('CardTimeLineList');
		if (storedList) {
			cardTimelineList = JSON.parse(storedList);
			progressBarValue = (cardTimelineList.filter((card: { seen: boolean; }) => card.seen).length / CardTimeLineList.length) * 100;
		} else {
			cardTimelineList = []; // Handle case if there's no data
		}
	}

	onMount(() => {
		// Initial load from local storage
		updateCardTimelineList();

		// Listen for storage events
		window.addEventListener('CardTimeLineList', updateCardTimelineList);

		// Cleanup on component destroy
		return () => {
			window.removeEventListener('CardTimeLineList', updateCardTimelineList);
		};
	});
</script>

<div class="w-full h-max flex flex-col items-center bg-base-300">
	<div class="flex w-full h-full justify-center items-center gap-2">
		<button
			class="btn btn-primary"
			on:click={() => {
				const carrousel = document.getElementById('carrousel');
				console.log('carrousel:' + carrousel);
				carrousel ? (carrousel.scrollLeft -= 150) : '';
			}}
		>
			<h1>❮</h1>
		</button>
		<div class="grid grid-cols-7 gap-52 overflow-x-scroll w-[65%] mt-4 ml-2" id="carrousel">
			<TextCard valor="Lógica de Programação"></TextCard>
			<TextCard valor="Linguagem de Programação C"></TextCard>
			<TextCard valor="Bibliotecas básicas em C"></TextCard>
			<TextCard valor="Declaração de variáveis"></TextCard>
			<TextCard valor="Comandos de Entrada e Saída"></TextCard>
			<TextCard valor="Condicional"></TextCard>
			<TextCard valor="Laços de Repetição"></TextCard>
		</div>
		<button
			class="btn btn-primary"
			on:click={() => {
				const carrousel = document.getElementById('carrousel');
				console.log('carrousel:' + carrousel);
				carrousel ? (carrousel.scrollLeft += 150) : '';
			}}
		>
			<h1>❯</h1>
		</button>
	</div>

	<div class="w-full h-full flex flex-col items-center gap-4 overflow-auto">
		<ProgressBar progress={progressBarValue}></ProgressBar>
		<TimeLine></TimeLine>
		<div class="w-full bg-black h-20"></div>
		{#each CardWithImageList as cardWithImage}
			<InformativeCard
				title={cardWithImage.title}
				description={cardWithImage.description}
				imageSrc={cardWithImage.imageSrc}
			></InformativeCard>
		{/each}
	</div>
</div>
