<script>
  import Draggable from "../window_components/Draggable.svelte";
  import Content from "../Content.svelte";
</script>

<slot name="contextMenu" />
<div
  class="flex justify-between outline outline-1 outline-title-bar-secondary border border-transparent border-t-menu-highlight"
>
  <div class="flex flex-col w-full">
    <div
      class="h-12 border border-transparent border-r-title-bar-secondary border-b-title-bar-secondary border-l-menu-highlight flex w-full pl-0.5"
    >
      <Draggable />
      <div
        class="flex-1 flex w-full border border-transparent border-r-menu-shadow"
      >
        <div
          class="flex flex-col justify-around w-14 hover:btn border-2 border-transparent"
        >
          <img
            class="[image-rendering:pixelated] w-6 drag-none mx-auto"
            src="window_icons/back.png"
            alt=""
          />
          <p class="text-xs text-center">Back</p>
        </div>
        <div
          class="flex flex-col justify-around w-14 hover:btn border-2 border-transparent"
        >
          <img
            class="[image-rendering:pixelated] w-6 drag-none mx-auto"
            src="window_icons/forward.png"
            alt=""
          />
          <p class="text-xs text-center">Forward</p>
        </div>
        <div
          class="flex flex-col justify-around w-14 hover:btn border-2 border-transparent"
        >
          <img
            class="[image-rendering:pixelated] w-6 drag-none mx-auto"
            src="window_icons/stop.png"
            alt=""
          />
          <p class="text-xs text-center">Stop</p>
        </div>
        <div
          class="flex flex-col justify-around w-14 hover:btn border-2 border-transparent"
        >
          <img
            class="[image-rendering:pixelated] w-6 drag-none mx-auto"
            src="window_icons/refresh.png"
            alt=""
          />
          <p class="text-xs text-center">Refresh</p>
        </div>
        <div
          class="flex flex-col justify-around w-14 hover:btn border-2 border-transparent"
        >
          <img
            class="[image-rendering:pixelated] w-6 drag-none mx-auto"
            src="window_icons/home.png"
            alt=""
          />
          <p class="text-xs text-center">Home</p>
        </div>
      </div>
      <div
        class="ml-auto h-auto flex flex-col justify-between border border-transparent border-l-menu-highlight"
      >
        <img
          class="[image-rendering:pixelated] col drag-none bg-black p-1 h-full"
          src="desktop_icons/internet.png"
          alt=""
        />
      </div>
    </div>

    <div
      class="pl-0.5 flex border border-transparent border-t-menu-highlight border-l-menu-highlight border-b-menu-highlight"
    >
      <Draggable />
      <div
        class="flex-1 flex h-6 w-full items-center gap-2 border border-transparent border-r-title-bar-secondary"
      >
        <p class="text-xs ml-1">Address</p>
        <input
          class="w-full outline-none h-[80%] mr-2 border-2 border-menu-highlight border-l-menu-shadow border-t-menu-shadow"
          type="text"
        />
      </div>
      <div
        class="pl-0.5 flex justify-between w-[46px] border border-transparent border-l-menu-highlight"
      >
        <Draggable />
        <p class="text-xs block my-auto">Links</p>
      </div>
    </div>
  </div>
</div>
<Content scroll={true}>
  <slot name="content" />
</Content>
