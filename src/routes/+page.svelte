<script lang="ts">
  import DesktopIcon from "$lib/components/DesktopIcon.svelte";
  import DesktopWindow from "$lib/components/DesktopWindow.svelte";
  import PanelApp from "$lib/components/PanelApp.svelte";

  import programs from "$lib/classes/programs";
  import type window from "$lib/classes/window";

  let openedWindows = new Array<window>();
  let focusedWindow: window | undefined;

  const handleOpen = (event: CustomEvent) => {
    let window = {
      name: event.detail.name,
      icon: event.detail.icon,
      id: crypto.randomUUID(),
      minimized: false,
      maximized: false,
      position: { x: 100, y: 100 },
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
  class="bg-background-blue overflow-clip h-screen relative -z-10 font-sans"
>
  <button
    class="w-full h-full absolute cursor-default"
    on:click={() => (focusedWindow = undefined)}
  />
  <section class="p-2 flex flex-col gap-5">
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
        focused={focusedWindow === item}
      />
    {/each}
  {/key}

  <footer
    class="flex gap-1 z-50 text-sm fixed bottom-0 w-screen h-8 bg-menu border-t-2 border-menu-highlight p-0.5"
  >
    <div
      class="flex min-w-[70px] items-center gap-1 btn-strong active:bg-menu-active p-1"
    >
      <img alt="" class="select-none w-5" src="/desktop_icons/logo.png" />
      <p class="font-bold select-none">Start</p>
    </div>

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
