<script lang="ts">
	import TextCard from '../../lib/Components/TextCard.svelte';
	import ProgressBar from '../../lib/Components/ProgressBar.svelte';

	import {
		Codes,
		CardTimeLineList,
		CardWithImageList,
		ContentPageList
	} from '../../lib/types/content';
	import TimeLine from '../../lib/Components/TimeLine.svelte';
	import { onMount } from 'svelte';
	import MonkeyScreen from '../../lib/Components/MonkeyScreen.svelte';
	import CatolicaLogo from '../../lib/Icons/catolicaLogo.svelte';

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
	<div class="mt-[25%]">
		<div class="flex flex-col gap-4 py-24">
			<div class="text-neutral-content text-[calc(var(--font-size)+24px)]">Aprenda Mais</div>
			<div class="bg-primary text-primary-content py-2 flex justify-center rounded-md px-4">
				O Futuro Está Aqui
			</div>
		</div>
	</div>
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
				<a class="  md:after:content-['__•__']" href="https://github.com/gabriel-Koehler">Gabriel Koehler</a>
				<a class="  md:after:content-['__•__']" href="https://www.linkedin.com/in/arthurbretzke/">Arthur Bretzke</a>
				<a class=" " href="https://www.linkedin.com/in/igor-guilherme-deretti-972475294/">Igor Guilherme Deretti</a>
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
