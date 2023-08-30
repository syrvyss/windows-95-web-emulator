<script lang="ts">
  import programs from "$lib/classes/programs";
  import type window from "$lib/classes/window";
  import contextMenu from "$lib/classes/context_menu";

  export let type: string;

  let context_menu_entries = contextMenu.find((x) => {
    return type === type;
  })!.entries;
</script>

<div class="flex h-6 relative border-menu">
  {#each context_menu_entries as entry}
    <button
      class="text-xs px-1 active:bg-title-bar-primary active:text-white inline-flex items-center text-center p-0"
      >{entry}</button
    >
  {/each}
</div>
