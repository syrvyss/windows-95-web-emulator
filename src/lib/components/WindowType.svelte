<script lang="ts">
  import Internet from "$lib/components/windows/Internet.svelte";
  import Text from "./windows/Text.svelte";
  import ContextMenu from "./ContextMenu.svelte";
  import Content from "./Content.svelte";

  export let type: string;
  export let size: { x: number; y: number };

  if (type === "internet") {
    size = { x: 800, y: 600 };
  }
</script>

{#if type === "text"}
  <Text>
    <ContextMenu slot="contextMenu" {type} />
  </Text>
{/if}

{#if type === "folder"}
  <ContextMenu {type} />
  <Content />
{/if}

{#if type === "internet"}
  <Internet>
    <ContextMenu slot="contextMenu" {type} />
  </Internet>
{/if}
