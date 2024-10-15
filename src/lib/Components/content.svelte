<script lang="ts">
	import type { Content } from '../types/data';
	import VideoComponent from './videoComponent.svelte';

	export let contents: Content[];
</script>

<div class="mockup-code min-w-[60%] max-w-[60%] min-h-64">
	{#each contents as content}
        {#if content.type == "video"}
            <VideoComponent src={content.content}></VideoComponent>
        {:else if content.type == "code"}

        {:else if content.type == "title"}

        {:else if content.type == "text"}

        {:else if content.type == "image"}
            
        {/if}
	{/each}
</div>
