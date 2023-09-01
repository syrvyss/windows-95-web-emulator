<script lang="ts">
  import Content from "../Content.svelte";

  export let text: string;
</script>

<slot name="contextMenu" />

<Content>
  <textarea
    class="overflow-scroll whitespace-nowrap w-full h-full resize-none block outline-none text-xs"
    >{text}</textarea
  >
</Content>
