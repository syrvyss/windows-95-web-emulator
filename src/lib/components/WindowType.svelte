<script lang="ts">
  import { page } from '$app/stores';

  import Internet from "$lib/components/windows/Internet.svelte";
  import Text from "./windows/Text.svelte";
  import ContextMenu from "./ContextMenu.svelte";
  import Content from "./Content.svelte";
  import programs from "$lib/classes/programs";

  import About from "./internet_sites/About.svelte";

  export let type: string;
  export let name: string;

  export let size: { x: number; y: number };

  let commitRawText = `${$page.data.commitHistory}`;
  let projectRawText = "";

  if (type === "internet") {
    size = { x: 800, y: 600 };
  }

  if (name === "Project info") {
    let text = programs.find((e) => e.name === "Project info")?.text;
    projectRawText = text ?? "";
  }
</script>

{#if type === "text"}
  {#if name === "Commit history"}
    <Text text={commitRawText}>
      <ContextMenu slot="contextMenu" {type} />
    </Text>
  {/if}
  {#if name === "Project info"}
    <Text text={projectRawText}>
      <ContextMenu slot="contextMenu" {type} />
    </Text>
  {/if}
{/if}

{#if type === "folder"}
  <ContextMenu {type} />
  <Content />
{/if}

{#if type === "internet"}
  <Internet>
    <ContextMenu slot="contextMenu" {type} />
    <About slot="content" />
  </Internet>
{/if}
