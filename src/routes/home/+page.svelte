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
		progressBarValue,
		ContentPageList
	} from '../../lib/types/content';
	import VideoComponent from '$lib/Components/videoComponent.svelte';
	import TimeLine from '$lib/Components/TimeLine.svelte';
</script>

<div class="w-full h-max flex flex-col items-center bg-base-300">


	<div class="carousel w-full">
		<div id="slide1" class="carousel-item relative w-full">
		  <TextCard valor="Lógica"></TextCard>
		  <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<a href="#slide4" class="btn btn-circle">❮</a>
			<a href="#slide2" class="btn btn-circle">❯</a>
		  </div>
		</div>
		<div id="slide2" class="carousel-item relative w-full">
		  <img
			src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
			class="w-full" />
		  <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<a href="#slide1" class="btn btn-circle">❮</a>
			<a href="#slide3" class="btn btn-circle">❯</a>
		  </div>
		</div>
		<div id="slide3" class="carousel-item relative w-full">
		  <img
			src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
			class="w-full" />
		  <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<a href="#slide2" class="btn btn-circle">❮</a>
			<a href="#slide4" class="btn btn-circle">❯</a>
		  </div>
		</div>
		<div id="slide4" class="carousel-item relative w-full">
		  <img
			src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
			class="w-full" />
		  <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<a href="#slide3" class="btn btn-circle">❮</a>
			<a href="#slide1" class="btn btn-circle">❯</a>
		  </div>
		</div>
	  </div>
	<div class="w-full h-full flex flex-col items-center gap-4 overflow-auto">
		<div class="flex gap-2 w-8/12 justify-center">
			<TextCard valor="Variavel"></TextCard>
			<TextCard valor="Tipo de Variavel"></TextCard>
		</div>
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
		<CodeMockup data={Codes}></CodeMockup>
	</div>
</div>
