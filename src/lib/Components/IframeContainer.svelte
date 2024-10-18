<script lang="ts">
	export let src: string;
    export let title: string = "Site";
    export let width: string = "800px"
    export let height: string = "700px"
</script>

<div class="flex justify-center">
    <iframe src={src}  title={title} width={width} height={height}>
</div>
