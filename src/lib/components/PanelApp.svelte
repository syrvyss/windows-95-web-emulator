<script lang="ts">
  import type window from "$lib/classes/window";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let id: string;
  export let name: string;
  export let icon: string;
  export let type: string;

  export let minimized: boolean;
  export let focused: boolean;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="{focused
    ? 'border-menu-highlight border-l-menu-shadow border-t-menu-shadow bg-menu-active font-bold dots'
    : ''} group btn-strong flex h-full w-48 items-center gap-1 p-1"
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
  <img
    src={icon}
    draggable="false"
    class=" w-5 [image-rendering:pixelated]"
    alt=""
  />
  <p class="truncate align-middle">
    {name} - {type[0].toUpperCase() + type.slice(1)}
  </p>
</div>
