<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ContextMenu from "./ContextMenu.svelte";
  import WindowType from "./WindowType.svelte";

  const dispatch = createEventDispatcher();

  export let name: string;
  export let icon: string;
  export let id: string;
  export let type: string;

  export let focused: boolean;
  export let minimized = false;
  export let maximized = false;

  export let position = { x: 100, y: 100 };
  export let size = { x: 800, y: 600 };

  $: focusStyling = () => {
    if (focused) {
      return "z-index: 11;";
    } else {
      return "";
    }
  };

  $: minimizeStyling = () => {
    if (minimized) {
      return "display: none;";
    } else {
      return "";
    }
  };

  $: maximizeStyling = () => {
    if (maximized) {
      return `top: 0; left: 0; height: 100%; width: 100%;`;
    } else {
      return `top: ${position.y}px; left: ${position.x}px;`;
    }
  };

  const dragMe = (node: any) => {
    let moving = false;

    node.addEventListener("mousedown", () => {
      moving = true;
    });

    window.addEventListener("mousemove", (e: any) => {
      if (moving) {
        position.x += e.movementX;
        position.y += e.movementY;
      }
    });

    window.addEventListener("mouseup", () => {
      moving = false;
    });
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  style="height:{size.y}px; width:{size.x}px;{minimizeStyling()}{maximizeStyling()}{focusStyling()}"
  class="panel z-10 flex cursor-default select-none flex-col bg-menu drag-none h-[{size.y}px] w-[{size.x}px] absolute p-0.5"
  on:mousedown={() => {
    dispatch("focus", {
      id: id,
    });
  }}
>
  <!-- svelte-ignore a11y-interactive-supports-focus -->
  <div
    class="relative flex justify-between p-0.5 {focused
      ? 'bg-title-bar-primary'
      : 'bg-title-bar-secondary'} h-5 w-full cursor-default select-none drag-none"
    role="button"
    use:dragMe
    on:dblclick={() => {
      maximized = !maximized;
    }}
  >
    <div class="flex gap-1">
      <img src={icon} alt="" class="h-full drag-none" />
      <p class="text-xs font-black text-white">
        {name} - {type[0].toUpperCase() + type.slice(1)}
      </p>
    </div>
    <div class="flex">
      <div class="mr-0.5 flex">
        <button
          on:click={() => {
            minimized = true;
            dispatch("unfocus");
          }}
        >
          <img
            src="/window_icons/minimize.png"
            class="btn-strong w-4 bg-menu drag-none"
            alt=""
          />
        </button>
        <button
          on:click={() => {
            maximized = !maximized;
          }}
        >
          <img
            src="/window_icons/maximize.png"
            class="btn-strong w-4 bg-menu drag-none"
            alt=""
          />
        </button>
      </div>
      <button
        on:click={() => {
          dispatch("close", {
            id: id,
          });
        }}
      >
        <img
          src="/window_icons/close.png"
          class="btn-strong w-4 bg-menu drag-none"
          alt=""
        />
      </button>
    </div>
  </div>

  <WindowType {name} bind:size {type} />
</div>
