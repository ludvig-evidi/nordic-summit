<script>
	import { Navbar } from '$components'
	import '../app.css'
</script>

<svelte:head>
	<title>Nordic Summit 2023</title>
</svelte:head>

<Navbar />

<main class="p-4 lg:p-8">
	<slot />
</main>
