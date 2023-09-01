<script>
  export let scroll = false;

  $: scrollStyling = scroll ? "overflow-scroll" : "";
</script>

<div
  class="{scrollStyling} h-full border-2 border-menu-shadow border-b-menu-active
  border-r-menu-active"
>
  <slot />
</div>
