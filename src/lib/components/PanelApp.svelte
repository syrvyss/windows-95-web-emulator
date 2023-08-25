<script lang="ts">
  import type window from "$lib/classes/window";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let id: string;
  export let name: string;
  export let icon: string;

  export let minimized: boolean;
  export let focused: boolean;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="{focused
    ? 'bg-menu-active font-bold border-l-menu-shadow border-t-menu-shadow border-menu-highlight'
    : ''} items-center h-full btn w-48 flex gap-1 p-1 group"
  on:click={() => {
    if (focused) {
      minimized = true;
      dispatch("unfocus");
    } else {
      minimized = false;
      dispatch("focus", { id: id });
    }
  }}
>
  <img src={icon} class="w-5" alt="" />
  <p class="align-middle">{name}</p>
</div>
