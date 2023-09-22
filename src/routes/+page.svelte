<script>
	import { Fredag, Lørdag, Hotell, Informasjon, addToast } from '$components'
	import { onMount } from 'svelte'
	import { animate, inView } from 'motion'

	function create() {
		addToast({
			data: {
				description: '💡 Trykk på et arrangement for veibeskrivelse!'
			}
		})
	}

	onMount(() => {
		create()

		inView('#animationSelector', () => {
			animate(
				'.animationCard2',
				{ y: [100, 0], opacity: 1 },
				{ delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
			)
		})
	})
</script>

<div class="pb-10">
	<h2 class="font-display ml-1 mb-3 text-lg font-medium tracking-tight text-teal-600 sm:text-4xl">
		Program
	</h2>

	<ul class="flex flex-col gap-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
		<Fredag />
		<Lørdag />
	</ul>
</div>

<div class="pb-2">
	<h2
		id="animationSelector"
		class="font-display ml-1 mb-3 text-lg font-medium tracking-tight text-teal-600 sm:text-4xl animationCard2 opacity-0"
	>
		Annen informasjon
	</h2>

	<ul class="flex flex-col gap-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
		<div class="animationCard2 opacity-0">
			<Hotell />
		</div>
		<Informasjon />
	</ul>
</div>
