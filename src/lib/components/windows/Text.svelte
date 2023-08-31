<script>
  import Content from "../Content.svelte";
</script>

<slot name="contextMenu" />

<Content>
  <textarea
    class="overflow-scroll whitespace-nowrap w-full h-full resize-none block outline-none text-xs"
  />
</Content>
