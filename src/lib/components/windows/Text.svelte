<script lang="ts">
  import Content from "../Content.svelte";

  export let text: string;
</script>

<slot name="contextMenu" />

<Content>
  <textarea
    class="block h-full w-full resize-none overflow-scroll whitespace-nowrap text-xs outline-none"
    >{text}</textarea
  >
</Content>
