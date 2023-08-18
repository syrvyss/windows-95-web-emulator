<script context="module" lang="ts">
  let name = "";
  let icon = "";

  export const open_window = (name: string, icon: string) => {
    name = name;
    icon = icon;
  };

  export const close_window = (name: string) => {

  };


</script>

<script lang="ts">
  export let name: string, icon: string;
</script>
