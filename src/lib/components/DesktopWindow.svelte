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
  style="{minimizeStyling()}{maximizeStyling()}{focusStyling()}"
  class="flex flex-col z-10 drag-none cursor-default bg-menu select-none panel w-96 h-52 p-0.5 absolute"
  on:mousedown={() => {
    dispatch("focus", {
      id: id,
    });
  }}
>
  <!-- svelte-ignore a11y-interactive-supports-focus -->
  <div
    class="flex p-0.5 justify-between relative {focused
      ? 'bg-title-bar-primary'
      : 'bg-title-bar-secondary'} w-full h-5 cursor-default drag-none select-none"
    role="button"
    use:dragMe
    on:dblclick={() => {
      maximized = !maximized;
    }}
  >
    <div class="flex gap-1">
      <img src={icon} alt="" class="h-full drag-none" />
      <p class="font-black text-xs text-white">
        {name} - {type[0].toUpperCase() + type.slice(1)}
      </p>
    </div>
    <div class="flex">
      <div class="flex mr-0.5">
        <button
          on:click={() => {
            minimized = true;
            dispatch("unfocus");
          }}
        >
          <img
            src="/window_icons/minimize.png"
            class="bg-menu btn-strong w-4 drag-none"
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
            class="bg-menu btn-strong w-4 drag-none"
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
          class="bg-menu btn-strong w-4 drag-none"
          alt=""
        />
      </button>
    </div>
  </div>
  <WindowType {type} />
</div>
