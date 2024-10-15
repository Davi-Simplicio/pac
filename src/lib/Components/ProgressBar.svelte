<script>
	import { stringify } from "postcss";

    export let progress = 0;
</script>

<div class="w-8/12 h-8 flex">
    <progress class="progress progress-primary w-full h-full flex justify-center items-center bg-secondary" value={progress} max="100">
    </progress>
    <div class="flex justify-center items-center text-primary-content text-2xl font-semibold absolute {progress<5?"ml-6":""}" style="width:{(progress-(progress/3))}%">
        {progress.toFixed(2)}%
    </div>
</div>
