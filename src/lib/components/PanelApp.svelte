<script lang="ts">
  import type window from "$lib/classes/window";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let desktopWindow: window;
</script>

<a
  class="{focused
    ? 'bg-menu-active font-bold border-l-menu-shadow border-t-menu-shadow border-menu-highlight'
    : ''} h-full btn w-48 flex gap-1 p-1 group"
  href="/"
  on:click={() => {
    desktopWindow.minimized = !desktopWindow.minimized;
  }}
>
  <img src={icon} alt="" class="" />
  <p class="align-middle">{name}</p>
</a>
