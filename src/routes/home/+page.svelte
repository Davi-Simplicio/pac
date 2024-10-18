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
	let progressBarValue = 0;

	function updateCardTimelineList() {
		const storedList = window.localStorage.getItem('CardTimeLineList');
		if (storedList) {
			cardTimelineList = JSON.parse(storedList);
			progressBarValue =
				(cardTimelineList.filter((card: { seen: boolean }) => card.seen).length /
					CardTimeLineList.length) *
				100;
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
		<div class="grid grid-cols-6 w-[65%] mt-4 ml-2 mb-10" >
			<TextCard valor="Lógica de Programação"></TextCard>
			<TextCard valor="Linguagem de Programação C"></TextCard>
			<TextCard valor="Declaração de variáveis"></TextCard>
			<TextCard valor="Comandos de Entrada e Saída"></TextCard>
			<TextCard valor="Condicional"></TextCard>
			<TextCard valor="Laços de Repetição"></TextCard>
		</div>

	</div>

	<div class="w-full h-full flex flex-col items-center gap-4">
		<ProgressBar progress={progressBarValue}></ProgressBar>
		<TimeLine></TimeLine>
	</div>
</div>
