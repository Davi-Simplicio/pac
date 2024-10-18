<script lang="ts">
	import { Codes } from '$lib/types/content';
	import type { Content, Code } from '../types/data';
	import CodeMockup from './codeMockup.svelte';
	import IframeContainer from './IframeContainer.svelte';
	import ImageContainer from './ImageContainer.svelte';
	import Paragraph from './Paragraph.svelte';
	import Title from './Title.svelte';
	import VideoComponent from './videoComponent.svelte';

	export let contents: Content[];
</script>

<div class="flex items-center flex-col gap-6 w-full">
	{#each contents as content}
        {#if content.type == "video"}
            {#if typeof content.content === 'string'}
                <VideoComponent src={content.content}></VideoComponent>
            {/if}
        {:else if content.type == "code"}
            <CodeMockup data={content.content}></CodeMockup>
        {:else if content.type == "title"}
            <Title text={content.content}></Title>
        {:else if content.type == "text"}
            <Paragraph text={content.content}></Paragraph>
        {:else if content.type == "image"}
            <ImageContainer src={content.content}></ImageContainer>
        {:else if content.type == "iframe"}
            <IframeContainer src={content.content}></IframeContainer>
        {/if}
	{/each}
</div>
