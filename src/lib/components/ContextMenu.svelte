<script lang="ts">
  import programs from "$lib/classes/programs";
  import type window from "$lib/classes/window";
  import contextMenu from "$lib/classes/context_menu";

  export let type: string;

  let context_menu_entries = contextMenu.find((x) => {
    return x.type === type;
  })!.entries;
</script>

<div class="flex-1 h-[24px] relative border-menu">
  {#each context_menu_entries as entry}
    <button
      class="text-xs px-1 h-full active:bg-title-bar-primary active:text-white inline-flex items-center text-center"
      >{entry}</button
    >
  {/each}
</div>
