<script lang="ts">
	import TextCard from '../../lib/Components/TextCard.svelte';
	import ProgressBar from '$lib/Components/ProgressBar.svelte';
	import ContentCard from '$lib/Components/ContentCard.svelte';
	import InformativeCard from '$lib/Components/InformativeCard.svelte';
	import CodeMockup from '$lib/Components/CodeMockup.svelte';
	import {
		Codes,
		CardTimeLineList,
		CardWithImageList,
		progressBarValue,
		ContentPageList
	} from '../../lib/types/content';
	import VideoComponent from '$lib/Components/videoComponent.svelte';
	import TimeLine from '$lib/Components/TimeLine.svelte';
</script>

<div class="w-full h-max flex flex-col items-center bg-base-300">
	<div class="w-full h-full flex flex-col items-center gap-4 overflow-auto">
		<div class="flex gap-2 w-8/12 justify-center">
			<TextCard valor="Variavel"></TextCard>
			<TextCard valor="Tipo de Variavel"></TextCard>
		</div>
		<ProgressBar progress={progressBarValue}></ProgressBar>
		<TimeLine></TimeLine>
		<div class="w-full bg-black h-20">

		</div>
		{#each CardWithImageList as cardWithImage}
			<InformativeCard
				title={cardWithImage.title}
				description={cardWithImage.description}
				imageSrc={cardWithImage.imageSrc}
			></InformativeCard>
		{/each}
		<CodeMockup data={Codes}></CodeMockup>
	</div>
</div>
