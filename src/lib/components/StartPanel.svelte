<script lang="ts">
  import programs from "$lib/classes/programs";
  export let opened = false;
</script>

<div
  class="{opened
    ? ''
    : 'hidden'} panel left-1 z-[51] bottom-7 mx-auto w-60 h-96 absolute grid grid-cols-5"
>
  <div class="bg-title-bar-secondary w-100 h-100 flex">
    <p
      class="select-none mx-auto mb-2 align-middle text-4xl text-white w-100 -rotate-180"
      style="writing-mode: vertical-rl; text-orientation: sideways;"
    >
      <span class="font-black text-neutral-400">Bingrows </span>
      <span class="font-extralight">89+1</span>
    </p>
  </div>

  <div class="col-span-4 grid auto-rows-auto">
    <div
      class="row-span-2 hover:bg-title-bar-primary hover:text-white flex justify-between items-center pl-2 pr-2"
    >
      <div class="flex items-center gap-2">
        <img
          class="[image-rendering:pixelated] select-none w-8 h-8 drag-none"
          src="/panel_icons/programs.png"
          alt=""
          draggable="false"
        />
        <p class="align-baseline select-none">
          <span class="underline">P</span>rograms
        </p>
      </div>
      <p class="font-bold inline align-baseline select-none">►</p>
    </div>
    <div
      class="row-span-2 hover:bg-title-bar-primary hover:text-white flex justify-between items-center pl-2 pr-2"
    >
      <div class="flex items-center gap-2">
        <img
          class="[image-rendering:pixelated] select-none w-8 h-8 drag-none"
          src="/panel_icons/documents.png"
          alt=""
          draggable="false"
        />
        <p class="align-baseline select-none">
          <span class="underline">D</span>ocuments
        </p>
      </div>
      <p class="font-bold inline align-baseline select-none">►</p>
    </div>
    <div
      class="row-span-2 hover:bg-title-bar-primary hover:text-white flex justify-between items-center pl-2 pr-2"
    >
      <div class="flex items-center gap-2">
        <img
          class="[image-rendering:pixelated] select-none w-8 h-8 drag-none"
          src="/panel_icons/settings.png"
          alt=""
          draggable="false"
        />
        <p class="align-baseline select-none">
          <span class="underline">S</span>ettings
        </p>
      </div>
      <p class="font-bold inline align-baseline select-none">►</p>
    </div>
    <div
      class="row-span-2 hover:bg-title-bar-primary hover:text-white flex justify-between items-center pl-2 pr-2"
    >
      <div class="flex items-center gap-2">
        <img
          class="[image-rendering:pixelated] select-none w-8 h-8 drag-none"
          src="/panel_icons/find.png"
          alt=""
          draggable="false"
        />
        <p class="align-baseline select-none">
          <span class="underline">F</span>ind
        </p>
      </div>
      <p class="font-bold inline align-baseline select-none">►</p>
    </div>
    <div
      class="row-span-2 hover:bg-title-bar-primary hover:text-white flex justify-between items-center pl-2 pr-2"
    >
      <div class="flex items-center gap-2">
        <img
          class="[image-rendering:pixelated] select-none w-8 h-8 drag-none"
          src="/panel_icons/help.png"
          alt=""
          draggable="false"
        />
        <p class="align-baseline select-none">
          <span class="underline">H</span>elp
        </p>
      </div>
      <p class="font-bold inline align-baseline select-none">►</p>
    </div>
    <div
      class="row-span-2 hover:bg-title-bar-primary hover:text-white flex justify-between items-center pl-2 pr-2"
    >
      <div class="flex items-center gap-2">
        <img
          class="[image-rendering:pixelated] select-none w-8 h-8 drag-none"
          src="/panel_icons/run.png"
          alt=""
          draggable="false"
        />
        <p class="align-baseline select-none">
          <span class="underline">R</span>un
        </p>
      </div>
      <p class="font-bold inline align-baseline select-none">►</p>
    </div>

    <hr class="border-t-menu-shadow border-b-menu-highlight border" />

    <div
      class="row-span-2 hover:bg-title-bar-primary hover:text-white flex justify-between items-center pl-2 pr-2"
    >
      <div class="flex items-center gap-2">
        <img
          class="[image-rendering:pixelated] select-none w-8 h-8 drag-none"
          src="/panel_icons/computer.png"
          alt=""
          draggable="false"
        />
        <p class="align-baseline select-none">
          Sh<span class="underline">u</span>t Down...
        </p>
      </div>
    </div>
  </div>
</div>
