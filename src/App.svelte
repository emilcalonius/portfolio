<script lang="ts">
  import Contact from "./lib/Contact.svelte";
  import Experience from "./lib/Experience.svelte";
  import Introduction from "./lib/Introduction.svelte";
  import Projects from "./lib/Projects.svelte";
  import { fade } from "svelte/transition";

  let y: number;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
</script>

<Introduction />
<Projects />
<Experience />
<Contact />
{#if y == 0}
  <div class="arrow" out:fade in:fade />
{/if}
{#if y > 0}
  <button on:click={scrollToTop} class="toTop" out:fade in:fade>Top</button>
{/if}

<svelte:window bind:scrollY={y} />

<style scoped>
  .toTop {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 1rem;
    background-color: var(--ec-pink);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    border: 0;
    z-index: 2;
  }

  .toTop:hover {
    background-color: hsl(2, 58%, 68%);
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 40px solid var(--ec-green-dark);
    animation: bounce 2s linear infinite;
    position: fixed;
    bottom: 2rem;
    left: 50%;
    margin-left: -30px;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(30%);
    }

    50% {
      transform: translateY(60%);
    }
  }
</style>
