<script lang="ts" context="module">
	export type ToastData = {
		description: string
	}

	const {
		elements: { content, description },
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastData>()

	export const addToast = helpers.addToast
</script>

<script lang="ts">
	import { createToaster, melt } from '@melt-ui/svelte'
	import { flip } from 'svelte/animate'
	import { backIn, backOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'
</script>

<div class="fixed bottom-0 right-0 z-50 sm:m-8 m-4 flex flex-col items-end gap-2" use:portal>
	{#each $toasts as { id, data } (id)}
		<div
			use:melt={$content(id)}
			animate:flip={{ duration: 500 }}
			in:fly={{ duration: 600, easing: backOut, x: '100%' }}
			out:fly={{ delay: 6000, duration: 600, easing: backIn, x: '100%' }}
			class="rounded-lg bg-neutral-700/50 backdrop-blur-md text-white text-sm shadow-md"
		>
			<div
				class="relative flex w-full max-w-[calc(100vw-2rem)] items-center justify-between gap-4 px-5 py-4"
			>
				<div>
					<div use:melt={$description(id)}>
						{data.description}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
