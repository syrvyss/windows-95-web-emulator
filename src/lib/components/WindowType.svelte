<script lang="ts">
  import { onMount } from "svelte";

  import Internet from "$lib/components/windows/Internet.svelte";
  import Text from "./windows/Text.svelte";
  import ContextMenu from "./ContextMenu.svelte";
  import Content from "./Content.svelte";
  import programs from "$lib/classes/programs";

  import About from "./internet_sites/About.svelte";

  import { Octokit } from "@octokit/core";

  export let type: string;
  export let name: string;

  export let size: { x: number; y: number };

  let commitRawText = "";
  let projectRawText = "";

  if (type === "internet") {
    size = { x: 800, y: 600 };
  }

  onMount(() => {
    if (name === "Project info") {
      let text = programs.find((e) => e.name === "Project info")?.text;
      projectRawText = text ?? "";
    }

    const commitData = async (): Promise<string> => {
      if (name !== "Commit history") {
        return "";
      }

      const octokit = new Octokit();

      let fetched = await octokit
        .request("GET /repos/syrvyss/windows-95-web-emulator/commits", {
          owner: "OWNER",
          repo: "REPO",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })
        .then((e) => e.data)
        .catch(() => "Oops, my code sucks!");

      let tempText = "__main__\n\n";

      fetched.forEach((e: any) => {
        let string = `author: ${e.commit.author.name}\ndate: ${e.commit.author.date}\nmessage: ${e.commit.message}\n`;
        tempText += string;
      });

      return tempText;
    };

    commitData().then((e) => (commitRawText = e));
  });
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
