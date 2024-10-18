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
	import MonkeyScreen from '$lib/Components/MonkeyScreen.svelte';

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
	<MonkeyScreen></MonkeyScreen>
	<div class="flex w-full h-full justify-center items-center">
		<div class="flex justify-center w-[90%] mt-4 mb-10 gap-2" >
			<TextCard index="0" valor="Lógica de Programação"></TextCard>
			<TextCard index="1" valor="Linguagem de Programação C"></TextCard>
			<TextCard index="2" valor="Declaração de variáveis"></TextCard>
			<TextCard index="3" valor="Comandos de Entrada e Saída"></TextCard>
			<TextCard index="4" valor="Condicional"></TextCard>
			<TextCard index="5" valor="Laços de Repetição"></TextCard>
		</div>
	</div>

	<div class="w-full h-full flex flex-col items-center gap-4">
		<ProgressBar progress={progressBarValue}></ProgressBar>
		<TimeLine></TimeLine>
	</div>
</div>
