<script lang="ts">
  import Internet from "$lib/components/windows/Internet.svelte";
  import Text from "./windows/Text.svelte";
  import ContextMenu from "./ContextMenu.svelte";
  import Content from "./Content.svelte";

  export let type: string;
</script>

{#if type === "text"}
  <ContextMenu {type} />
  <Text>
    <Content />
  </Text>
{/if}

{#if type === "folder"}
  <ContextMenu {type} />
{/if}

{#if type === "internet"}
  <ContextMenu {type} />
  <Internet>
    <Content />
  </Internet>
{/if}
