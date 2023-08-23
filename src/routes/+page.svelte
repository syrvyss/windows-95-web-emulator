<script lang="ts">
  import DesktopIcon from "$lib/components/DesktopIcon.svelte";
  import DesktopWindow from "$lib/components/DesktopWindow.svelte";
  import PanelApp from "$lib/components/PanelApp.svelte";

  import type window from "$lib/classes/window";

  let openedWindows = new Array<window>();

  const handleOpen = (event: CustomEvent) => {
    openedWindows.push({
      name: event.detail.name,
      icon: event.detail.icon,
      id: crypto.randomUUID(),
    });
    openedWindows = openedWindows;
  };

  const handleMinimize = (event: CustomEvent) => {
    openedWindows = openedWindows.filter((e: window) => {
      if (e.id !== event.detail.id) {
        return;
      }
      e.minimized = true;
    });
  };

  const handleClose = (event: CustomEvent) => {
    openedWindows = openedWindows.filter((e: window) => {
      return e.id !== event.detail.id;
    });
  };

  const handleFocus = (event: CustomEvent) => {
    openedWindows.forEach((e: window) => {
      if (e.id !== event.detail.id) {
        return;
      }
      openedWindows.forEach((e: window) => (e.focused = false));
      e.focused = true;
    });
  };

  const handleOpenMinimize = (event: CustomEvent) => {
    openedWindows.forEach((e: window) => {
      if (e.id !== event.detail.id) {
        return;
      }
      openedWindows.forEach((e: window) => (e.focused = false));
      e.focused = true;
      e.minimized = false;
    });
  };
</script>

<body class="bg-teal-700 font-sans">
  <section class="p-2 flex flex-col gap-5">
    {#each programs as programInfo}
      <DesktopIcon on:open={handleOpen} {...programInfo} />
    {/each}
  </section>

  {#each openedWindows as item}
    <DesktopWindow
      on:close={handleClose}
      on:focus={handleFocus}
      minimize={minimized === item.id}
      focused={focused === item.id}
      desktopWindow={item}
    />
  {/each}

  <footer
    class="flex gap-1 fixed bottom-0 w-full h-10 bg-menu border-t-2 border-menu-highlight p-0.5"
  >
    <div class="flex btn active:bg-menu-active w-20 p-1">
      <img alt="" class="select-none" src="src/assets/desktop_icons/logo.png" />
      <p class="align-baseline ml-1 font-bold select-none">Start</p>
    </div>

    <div
      class="border-l-2 border-r-2 border-l-menu-shadow border-r-menu-highlight"
    />

    {#each openedWindows as item}
      <PanelApp on:openMinimize={handleOpenMinimize} desktopWindow={item} />
    {/each}
  </footer>
</body>
