<script lang="ts">
  export let type: string;
</script>

{#if type === "text"}
  <textarea class="w-full h-full resize-none block outline-none text-xs" />
{/if}
