<script lang="ts">
  export let name: string, icon: string;
</script>

<div class="flex flex-col w-20 items-center active:bg-blue-700 cursor-pointer">
  <img class="w-11" src="{icon}" alt="" />
  <p
    class="w-full mt-1 text-xs bg-teal-700 text-center text-white block select-none"
  >
    {name}
  </p>
</div>
