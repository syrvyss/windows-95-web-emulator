<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let desktopWindow: { name: string; icon: string; id: string };
</script>

<a
  class="h-full btn w-48 flex active:bg-menu-active gap-1 p-1 group"
  href="/"
  on:click={() => {
    dispatch("openMinimize", {
      id: desktopWindow.id,
    });
  }}
>
  <img src={desktopWindow.icon} alt="" class="" />
  <p class="align-middle group-active:font-bold">{desktopWindow.name}</p>
</a>
