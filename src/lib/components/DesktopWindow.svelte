<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let name: string;
  export let icon: string;
  export let id: string;

  export let focused: boolean;
  export let minimized = false;
  export let maximized = false;

  let windowPos = { x: 0, y: 0 };

  $: focusStyling = () => {
    if (focused) {
      return "z-index: 99;";
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
      return `top: ${windowPos.y}px; left: ${windowPos.x}px;`;
    }
  };

  const dragMe = (node: any) => {
    let moving = false;

    node.style.position = "relative";
    node.style.userSelect = "none";

    node.addEventListener("mousedown", () => {
      moving = true;
    });

    window.addEventListener("mousemove", (e: any) => {
      if (moving) {
        windowPos.x += e.movementX;
        windowPos.y += e.movementY;
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
  class="z-10 drag-none cursor-default bg-menu select-none panel w-96 h-52 p-0.5 absolute"
  on:mousedown={() => {
    dispatch("focus", {
      id: id,
    });
  }}
>
  <!-- svelte-ignore a11y-interactive-supports-focus -->
  <div
    class="flex p-0.5 justify-between bg-gradient-to-r {focused
      ? 'bg-title-bar-primary'
      : 'bg-title-bar-secondary'} w-full h-5 cursor-default drag-none select-none"
    role="button"
    use:dragMe
    on:dblclick={() => {
      maximized = !maximized;
    }}
  >
    <div class="flex gap-1">
      <img src={icon} alt="" class="w-4/5 drag-none" />
      <p class="font-black text-xs text-white">{name}</p>
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
</div>
