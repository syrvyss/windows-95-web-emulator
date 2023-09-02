<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let name: string;
  export let icon: string;
  export let type: string;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<button
  class="group z-10 flex w-14 cursor-default flex-col items-center"
  on:dblclick={() => {
    dispatch("open", {
      name: name,
      icon: icon,
      type: type,
    });
  }}
>
  <img
    class="group-active:bg-blue-799 w-10 select-none bg-clip-border [image-rendering:pixelated]"
    src={icon}
    alt=""
    draggable="false"
  />
  <p
    class="mt-1 w-full select-none border border-dotted border-transparent bg-clip-content text-center text-xs text-white group-focus:border-gray-100 group-active:bg-blue-800"
  >
    {name}
  </p>
</button>
