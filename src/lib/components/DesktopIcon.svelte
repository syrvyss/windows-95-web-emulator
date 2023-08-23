<script lang="ts">
  import type window from "$lib/classes/window";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let name: string;
  export let icon: string;
</script>

<a
  href="/"
  class="flex flex-col group w-14 items-center cursor-pointer"
  on:dblclick={() => {
    dispatch("open", {
      name: name,
      icon: icon,
    });
  }}
>
  <img
    class="w-10 select-none group-active:bg-blue-799 bg-clip-border"
    src={icon}
    alt=""
    draggable="false"
  />
  <p
    class="mt-1 w-full border group-focus:border-gray-100 group-active:bg-blue-800 border-teal-700 border-dotted bg-clip-content text-xs text-center text-white select-none"
  >
    {name}
  </p>
</a>
