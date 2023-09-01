<script>
  import Draggable from "../window_components/Draggable.svelte";
  import Content from "../Content.svelte";
</script>

<slot name="contextMenu" />
<div
  class="flex justify-between border border-transparent border-t-menu-highlight outline outline-1 outline-title-bar-secondary"
>
  <div class="flex w-full flex-col">
    <div
      class="flex h-12 w-full border border-transparent border-b-title-bar-secondary border-l-menu-highlight border-r-title-bar-secondary pl-0.5"
    >
      <Draggable />
      <div
        class="flex w-full flex-1 border border-transparent border-r-menu-shadow"
      >
        <div
          class="flex w-14 flex-col justify-around border-2 border-transparent hover:btn"
        >
          <img
            class="mx-auto w-6 drag-none [image-rendering:pixelated]"
            src="window_icons/back.png"
            alt=""
          />
          <p class="text-center text-xs">Back</p>
        </div>
        <div
          class="flex w-14 flex-col justify-around border-2 border-transparent hover:btn"
        >
          <img
            class="mx-auto w-6 drag-none [image-rendering:pixelated]"
            src="window_icons/forward.png"
            alt=""
          />
          <p class="text-center text-xs">Forward</p>
        </div>
        <div
          class="flex w-14 flex-col justify-around border-2 border-transparent hover:btn"
        >
          <img
            class="mx-auto w-6 drag-none [image-rendering:pixelated]"
            src="window_icons/stop.png"
            alt=""
          />
          <p class="text-center text-xs">Stop</p>
        </div>
        <div
          class="flex w-14 flex-col justify-around border-2 border-transparent hover:btn"
        >
          <img
            class="mx-auto w-6 drag-none [image-rendering:pixelated]"
            src="window_icons/refresh.png"
            alt=""
          />
          <p class="text-center text-xs">Refresh</p>
        </div>
        <div
          class="flex w-14 flex-col justify-around border-2 border-transparent hover:btn"
        >
          <img
            class="mx-auto w-6 drag-none [image-rendering:pixelated]"
            src="window_icons/home.png"
            alt=""
          />
          <p class="text-center text-xs">Home</p>
        </div>
      </div>
      <div
        class="ml-auto flex h-auto flex-col justify-between border border-transparent border-l-menu-highlight"
      >
        <img
          class="col h-full bg-black p-1 drag-none [image-rendering:pixelated]"
          src="desktop_icons/internet.png"
          alt=""
        />
      </div>
    </div>

    <div
      class="flex border border-transparent border-b-menu-highlight border-l-menu-highlight border-t-menu-highlight pl-0.5"
    >
      <Draggable />
      <div
        class="flex h-6 w-full flex-1 items-center gap-2 border border-transparent border-r-title-bar-secondary"
      >
        <p class="ml-1 text-xs">Address</p>
        <input
          class="mr-2 h-[80%] w-full border-2 border-menu-highlight border-l-menu-shadow border-t-menu-shadow outline-none"
          type="text"
        />
      </div>
      <div
        class="flex w-[46px] justify-between border border-transparent border-l-menu-highlight pl-0.5"
      >
        <Draggable />
        <p class="my-auto block text-xs">Links</p>
      </div>
    </div>
  </div>
</div>
<Content scroll={true}>
  <slot name="content" />
</Content>
