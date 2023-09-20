<script>
	import { Fredag, Lørdag, Hotell, Informasjon, addToast } from '$components'
	import { onMount } from 'svelte'

	function create() {
		addToast({
			data: {
				description: '💡 Trykk på et arrangement for veibeskrivelsen!'
			}
		})
	}

	onMount(() => {
		create()
	})
</script>

<div class="pb-10">
	<h2 class="font-display ml-1 mb-3 text-lg font-medium tracking-tight text-teal-600 sm:text-4xl">
		Program
	</h2>

	<ul class="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
		<Fredag />
		<Lørdag />
	</ul>
</div>

<div class="pb-2">
	<h2 class="font-display ml-1 mb-3 text-lg font-medium tracking-tight text-teal-600 sm:text-4xl">
		Annen informasjon
	</h2>

	<ul class="space-y-6">
		<Hotell />
		<Informasjon />
	</ul>
</div>
