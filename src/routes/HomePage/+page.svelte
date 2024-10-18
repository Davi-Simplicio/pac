<script lang="ts">
	import TextCard from '../../lib/Components/TextCard.svelte';
	import ProgressBar from '$lib/Components/ProgressBar.svelte';
	import ContentCard from '$lib/Components/ContentCard.svelte';
	import InformativeCard from '$lib/Components/InformativeCard.svelte';
	import CodeMockup from '$lib/Components/codeMockup.svelte';
	import MonkeyScreen from '$lib/Components/MonkeyScreen.svelte';

	import CatolicaLogo from '$lib/Icons/catolicaLogo.svelte';

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

<MonkeyScreen></MonkeyScreen>
<div class="w-full h-max flex flex-col items-center bg-base-300">
	<div class="flex w-full h-full justify-center items-center gap-2">
		<div class="grid grid-cols-6 w-[65%] mt-4 ml-2 mb-10">
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
	<div>
		<div class="flex flex-col gap-4 py-24">
			<div class="text-neutral-content text-[calc(var(--font-size)+24px)]">Aprenda Mais</div>
			<div class="bg-primary text-primary-content py-2 flex justify-center rounded-md px-4">
				O Futuro Está Aqui
			</div>
		</div>
	</div>

	<!-- footer -->
	<div class="bg-base-200 w-full justify-around p-6 text-neutral-content gap-4  md:items-center flex md:flex-row flex-col">
		<!-- esquerdo catolica -->
		<div class=" flex gap-2">
			<!-- catolica logo -->
			<div class="w-10 pt-6 h-full flex items-start">
				<span><CatolicaLogo /></span>
			</div>
			<!-- title -->
			<div class="flex flex-col justify-center">
				<div class="text-[calc(var(--font-size)+2px)]">Catolica SC</div>
				<!-- contato basico catolica -->
				<div class="flex-col flex">
					<div>(47) 99250-1230</div>
					<a href="https://www.catolicasc.org.br/fale-conosco/">Fale Conosco</a>
					<a href='https://www.catolicasc.org.br/academicos/biblioteca/biblioteca-informacoes-de-contato/'>Informações de Contato</a>
				</div>
			</div>
		</div>

		<!-- meio desenvolvedores -->
		<div class=" flex flex-col justify-center md:items-center gap-2 md:p-none pl-12">
			<!-- title -->
			<div class="text-[calc(var(--font-size)+2px)]">Desenvolvedores</div>
			<!-- gits -->
			<div class=" md:flex-row flex flex-col justify-center md:flex-wrap gap-2">
				<a class="  md:after:content-['__•__']" href="https://github.com/Davi-Simplicio/"
					>Davi Simplicio</a
				>
				<a class="  md:after:content-['__•__']" href="https://github.com/KaiqueFLH"
					>Kaique F. L. Homem</a
				>
				<a class="  md:after:content-['__•__']" href="https://github.com/VitorRinkawetsky"
					>Vitor Rinkawetsky</a
				>
				<a class=" " href="https://github.com/gabriel-Koehler">Gabriel Koehler</a>
			</div>
		</div>
		<!-- conteudos -->
		<div class="md:p-none pl-12">
			<!-- title -->
			<div class=" text-[calc(var(--font-size)+2px)]" >Conteudos</div>
			<!-- Content pages -->
			<div class=" !text-[calc(var(--font-size)-2px)]">
				{#each ContentPageList as item}
					<a class="!text-[calc(var(--font-size)-2px)] underline underline-offset-4 hover:text-primary" href="/PaginaConteudo/{ContentPageList.indexOf(item)}">
						<div>{item.title}</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
