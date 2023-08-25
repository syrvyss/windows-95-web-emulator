<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let name: string;
  export let icon: string;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<button
  class="flex z-10 flex-col group w-14 items-center cursor-pointer"
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
</button>
