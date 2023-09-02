<script lang="ts">
  import programs from "$lib/classes/programs";
  export let opened = false;
</script>

<div
  class="{opened
    ? ''
    : 'hidden'} panel absolute bottom-7 left-1 z-[51] mx-auto grid h-96 w-60 grid-cols-5"
>
  <div class="w-100 h-100 flex bg-title-bar-secondary">
    <p
      class="w-100 mx-auto mb-2 -rotate-180 select-none align-middle text-4xl text-white"
      style="writing-mode: vertical-rl; text-orientation: sideways;"
    >
      <span class="font-black text-neutral-400">Bingrows </span>
      <span class="font-extralight">89+1</span>
    </p>
  </div>

  <div class="col-span-4 grid auto-rows-auto">
    <div
      class="row-span-2 flex items-center justify-between pl-2 pr-2 hover:bg-title-bar-primary hover:text-white"
    >
      <div class="flex items-center gap-2">
        <img
          class="h-8 w-8 select-none drag-none [image-rendering:pixelated]"
          src="/panel_icons/programs.png"
          alt=""
          draggable="false"
        />
        <p class="select-none align-baseline">
          <span class="underline">P</span>rograms
        </p>
      </div>
      <p class="inline select-none align-baseline font-bold">►</p>
    </div>
    <div
      class="row-span-2 flex items-center justify-between pl-2 pr-2 hover:bg-title-bar-primary hover:text-white"
    >
      <div class="flex items-center gap-2">
        <img
          class="h-8 w-8 select-none drag-none [image-rendering:pixelated]"
          src="/panel_icons/documents.png"
          alt=""
          draggable="false"
        />
        <p class="select-none align-baseline">
          <span class="underline">D</span>ocuments
        </p>
      </div>
      <p class="inline select-none align-baseline font-bold">►</p>
    </div>
    <div
      class="row-span-2 flex items-center justify-between pl-2 pr-2 hover:bg-title-bar-primary hover:text-white"
    >
      <div class="flex items-center gap-2">
        <img
          class="h-8 w-8 select-none drag-none [image-rendering:pixelated]"
          src="/panel_icons/settings.png"
          alt=""
          draggable="false"
        />
        <p class="select-none align-baseline">
          <span class="underline">S</span>ettings
        </p>
      </div>
      <p class="inline select-none align-baseline font-bold">►</p>
    </div>
    <div
      class="row-span-2 flex items-center justify-between pl-2 pr-2 hover:bg-title-bar-primary hover:text-white"
    >
      <div class="flex items-center gap-2">
        <img
          class="h-8 w-8 select-none drag-none [image-rendering:pixelated]"
          src="/panel_icons/find.png"
          alt=""
          draggable="false"
        />
        <p class="select-none align-baseline">
          <span class="underline">F</span>ind
        </p>
      </div>
      <p class="inline select-none align-baseline font-bold">►</p>
    </div>
    <div
      class="row-span-2 flex items-center justify-between pl-2 pr-2 hover:bg-title-bar-primary hover:text-white"
    >
      <div class="flex items-center gap-2">
        <img
          class="h-8 w-8 select-none drag-none [image-rendering:pixelated]"
          src="/panel_icons/help.png"
          alt=""
          draggable="false"
        />
        <p class="select-none align-baseline">
          <span class="underline">H</span>elp
        </p>
      </div>
      <p class="inline select-none align-baseline font-bold">►</p>
    </div>
    <div
      class="row-span-2 flex items-center justify-between pl-2 pr-2 hover:bg-title-bar-primary hover:text-white"
    >
      <div class="flex items-center gap-2">
        <img
          class="h-8 w-8 select-none drag-none [image-rendering:pixelated]"
          src="/panel_icons/run.png"
          alt=""
          draggable="false"
        />
        <p class="select-none align-baseline">
          <span class="underline">R</span>un
        </p>
      </div>
      <p class="inline select-none align-baseline font-bold">►</p>
    </div>

    <hr class="border border-b-menu-highlight border-t-menu-shadow" />

    <div
      class="row-span-2 flex items-center justify-between pl-2 pr-2 hover:bg-title-bar-primary hover:text-white"
    >
      <div class="flex items-center gap-2">
        <img
          class="h-8 w-8 select-none drag-none [image-rendering:pixelated]"
          src="/panel_icons/computer.png"
          alt=""
          draggable="false"
        />
        <p class="select-none align-baseline">
          Sh<span class="underline">u</span>t Down...
        </p>
      </div>
    </div>
  </div>
</div>
