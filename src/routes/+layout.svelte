<script>
	import { Navbar, Toaster } from '$components'
	import '../app.css'
</script>

<svelte:head>
	<title>Nordic Summit 2023</title>
</svelte:head>

<Toaster />

<Navbar />

<main class="p-4 lg:p-8">
	<slot />
</main>
