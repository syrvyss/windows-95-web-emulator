<script lang="ts">
  import DesktopIcon from "$lib/components/DesktopIcon.svelte";
  import DesktopWindow from "$lib/components/DesktopWindow.svelte";

  import { programs } from "$lib/classes/programs";
</script>

<body class="bg-teal-700 font-sans">
<section class="p-2 flex flex-col gap-5">
  {#each programs as item}
    <DesktopIcon {...item}></DesktopIcon>
  {/each}
</section>

<DesktopWindow></DesktopWindow>

<footer
  class="flex gap-1 fixed bottom-0 w-full h-10 bg-menu border-t-2 border-menu-highlight p-0.5"
>
  <div
    class="flex border-2 active:bg-menu-active active:border-menu-shadow active:border-b-menu-highlight active:border-r-menu-highlight border-menu-highlight border-r-menu-shadow border-b-menu-shadow w-20 p-1"
  >
    <img class="select-none" src="src/assets/desktop_icons/logo.png" alt="" />
    <p class="align-baseline ml-1 font-bold select-none">Start</p>
  </div>

  <div
    class="border-l-2 border-r-2 border-l-menu-shadow border-r-menu-highlight"
  />
</footer>
</body>
