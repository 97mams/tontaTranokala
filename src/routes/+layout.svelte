<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    let { children } = $props();
    import "../style.css";
</script>

<Header />

<div class="max-w-4xl m-auto h-[calc(100vh-7.2rem)]">
    {@render children()}
</div>

<Footer />