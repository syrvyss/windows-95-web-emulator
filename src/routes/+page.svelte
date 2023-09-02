<script lang="ts">
  // Copyright (C) 2023 Nikolaj Lübker

  import DesktopIcon from "$lib/components/DesktopIcon.svelte";
  import DesktopWindow from "$lib/components/DesktopWindow.svelte";
  import PanelApp from "$lib/components/PanelApp.svelte";
  import StartPanel from "$lib/components/StartPanel.svelte";

  import programs from "$lib/classes/programs";
  import type window from "$lib/classes/window";

  let openedWindows = new Array<window>();
  let focusedWindow: window | undefined;
  let panelOpen = false;

  const handleOpen = (event: CustomEvent) => {
    let window = {
      name: event.detail.name,
      icon: event.detail.icon,
      type: event.detail.type,
      id: crypto.randomUUID(),
      minimized: false,
      maximized: false,
      position: { x: 100, y: 100 },
      size: { x: 400, y: 250 },
    };

    openedWindows.push(window);
    focusedWindow = window;
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

      focusedWindow = e;
    });
  };

  const handleUnfocus = () => (focusedWindow = undefined);
</script>

<body
  class="relative -z-10 h-screen overflow-clip bg-background-blue font-sans"
>
  <button
    class="absolute h-full w-full cursor-default"
    on:click={() => {
      focusedWindow = undefined;
      panelOpen = false;
    }}
  />
  <section class="flex flex-col gap-5 p-2">
    {#each programs as programInfo}
      <DesktopIcon on:open={handleOpen} {...programInfo} />
    {/each}
  </section>

  {#key openedWindows.length}
    {#each openedWindows as item}
      <DesktopWindow
        {...item}
        on:minimize={handleMinimize}
        on:close={handleClose}
        on:focus={handleFocus}
        on:unfocus={handleUnfocus}
        bind:minimized={item.minimized}
        bind:maximized={item.maximized}
        bind:position={item.position}
        bind:size={item.size}
        focused={focusedWindow === item}
      />
    {/each}
  {/key}

  <StartPanel opened={panelOpen} />

  <footer
    class="fixed bottom-0 z-50 flex h-8 w-screen gap-1 border-t-2 border-menu-highlight bg-menu p-0.5 text-sm"
  >
    <button
      class="{panelOpen
        ? 'border-menu-highlight border-l-menu-shadow border-t-menu-shadow bg-menu-active'
        : ''} btn-strong flex min-w-[70px] items-center gap-1 p-1 active:bg-menu"
      on:click={() => {
        handleUnfocus();
        panelOpen = !panelOpen;
      }}
    >
      <img
        alt=""
        draggable="false"
        class="w-5 select-none [image-rendering:pixelated]"
        src="/desktop_icons/logo.png"
      />
      <p class="select-none font-bold">Start</p>
    </button>

    {#each openedWindows as window}
      <PanelApp
        {...window}
        on:focus={handleFocus}
        on:unfocus={handleUnfocus}
        bind:minimized={window.minimized}
        focused={focusedWindow === window}
      />
    {/each}
  </footer>
</body>
