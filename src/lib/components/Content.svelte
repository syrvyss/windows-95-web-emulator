<script>
  export let scroll = false;

  $: scrollStyling = scroll ? "overflow-scroll" : "";
</script>

<div
  class="{scrollStyling} h-full border-menu-shadow border-2 border-b-menu-active
  border-r-menu-active"
>
  <slot />
</div>
