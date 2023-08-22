<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let desktopWindow: { name: string; icon: string; id: string };

  export let focused = false;
  export let minimize = false;
  let maximize = false;

  let windowPos = { x: 0, y: 0 };

  $: focusStyling = () => {
    if (focused) {
      return "z-index: 99;";
    } else {
      return "";
    }
  };

  $: minimizeStyling = () => {
    if (minimize) {
      return "display: none;";
    } else {
      return "";
    }
  };

  $: maximizeStyling = () => {
    if (maximize) {
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

<a
  style="{minimizeStyling()}{maximizeStyling()}{focusStyling()}"
  class="drag-none cursor-default bg-menu resize select-none border-2 border-b-menu-shadow border-r-menu-shadow border-menu-highlight w-96 h-52 p-0.5 absolute"
  href=""
  on:mousedown={() => {
    dispatch("focus", {
      id: desktopWindow.id,
    });
  }}
>
  <a
    href="/"
    class="flex p-0.5 justify-between bg-gradient-to-r from-blue-950 to-blue-600 w-full h-5 cursor-default drag-none select-none"
    role="button"
    use:dragMe
    on:dblclick={() => {
      maximize = !maximize;
    }}
  >
    <div class="flex gap-1">
      <img src={desktopWindow.icon} alt="" class="w-4/5 drag-none" />
      <p class="font-black text-xs text-white">{desktopWindow.name}</p>
    </div>
    <div class="flex">
      <div class="flex mr-0.5">
        <button
          on:click={() => {
            minimize = !minimize;
          }}
        >
          <img
            src="src/assets/window_icons/minimize.png"
            class="bg-menu btn w-4 drag-none"
            alt=""
          />
        </button>
        <button
          on:click={() => {
            maximize = !maximize;
          }}
        >
          <img
            src="src/assets/window_icons/maximize.png"
            class="bg-menu btn w-4 drag-none"
            alt=""
          />
        </button>
      </div>
      <button
        on:click={() => {
          dispatch("close", {
            id: desktopWindow.id,
          });
        }}
      >
        <img
          src="src/assets/window_icons/close.png"
          class="bg-menu btn w-4 drag-none"
          alt=""
        />
      </button>
    </div>
  </a>
</a>
