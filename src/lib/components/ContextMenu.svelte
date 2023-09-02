<script lang="ts">
  import contextMenu from "$lib/classes/context_menu";

  export let type: string;

  let context_menu_entries = contextMenu.find((x) => {
    return x.type === type;
  })!.entries;
</script>

<div class="h-[24px] flex-1 border-menu">
  {#each context_menu_entries as entry}
    <button
      class="inline-flex h-full cursor-default items-center px-1 text-center text-xs active:bg-title-bar-primary active:text-white"
      >{entry}</button
    >
  {/each}
</div>
