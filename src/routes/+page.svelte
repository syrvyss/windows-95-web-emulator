<script lang="ts">
  import DesktopIcon from "$lib/components/DesktopIcon.svelte";
  import DesktopWindow from "$lib/components/DesktopWindow.svelte";
  import PanelApp from "$lib/components/PanelApp.svelte";

  import programs from "$lib/classes/programs";
  import type window from "$lib/classes/window";

  let openedWindows = new Array<window>();

  const handleOpen = (event: CustomEvent) => {
    openedWindows.forEach((e: window) => (e.focused = false));
    openedWindows.push({
      name: event.detail.name,
      icon: event.detail.icon,
      id: crypto.randomUUID(),
      minimized: false,
      maximized: false,
      focused: true,
    });
    openedWindows = openedWindows;
  };

  const handleMinimize = (event: CustomEvent) => {
    openedWindows = openedWindows.filter((e: window) => {
      if (e.id !== event.detail.id) {
        return;
      }
      e.minimized = true;

      openedWindows = openedWindows;
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

      openedWindows = openedWindows;
    });
  };

  const handleOpenMinimize = (event: CustomEvent) => {
    openedWindows.forEach((e: window) => {
      if (e.id !== event.detail.id) {
        return;
      }
      e.minimized = false;

      openedWindows.forEach((e: window) => (e.focused = false));
      e.focused = true;

      openedWindows = openedWindows;
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
      on:minimize={handleMinimize}
      on:close={handleClose}
      on:focus={handleFocus}
      bind:minimized={item.minimized}
      bind:maximized={item.maximized}
      bind:focused={item.focused}
      name={item.name}
      icon={item.icon}
      id={item.id}
    />
  {/each}

  <footer
    class="flex gap-1 fixed bottom-0 w-full h-10 bg-menu border-t-2 border-menu-highlight p-0.5"
  >
    <div class="flex btn active:bg-menu-active w-20 p-1">
      <img alt="" class="select-none" src="/desktop_icons/logo.png" />
      <p class="align-baseline ml-1 font-bold select-none">Start</p>
    </div>

    <div
      class="border-l-2 border-r-2 border-l-menu-shadow border-r-menu-highlight"
    />

    {#each openedWindows as window}
      <PanelApp
        on:openMinimize={handleOpenMinimize}
        bind:desktopWindow={window}
      />
    {/each}
  </footer>
</body>
