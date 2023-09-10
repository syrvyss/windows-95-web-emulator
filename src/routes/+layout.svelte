<script lang="ts">
  import "../app.css";

  let continued = false;
  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= 950 && !continued}
  <div class="flex h-full w-full flex-col items-center bg-black">
    <p class="pb-4 pt-36 text-xl text-white">
      This site may not work well on smaller screens.
    </p>
    <button
      class=" w-[90%] rounded-sm bg-white p-1"
      on:click={() => {
        continued = true;
      }}>Continue</button
    >
  </div>
{:else}
  <slot />
{/if}
