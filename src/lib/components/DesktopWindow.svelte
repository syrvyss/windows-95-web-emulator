<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let desktopWindow: { name: string; icon: string; id: string };

  let minimize = false;
  let maximize = false;

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
      return "";
    }
  };

  const dragMe = (node: any) => {
    let moving = false;
    let left = 0;
    let top = 0;

    node.style.position = "absolute";
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
    node.style.userSelect = "none";

    node.addEventListener("mousedown", () => {
      moving = true;
    });

    window.addEventListener("mousemove", (e) => {
      if (moving) {
        left += e.movementX;
        top += e.movementY;
        node.style.top = `${top}px`;
        node.style.left = `${left}px`;
      }
    });

    window.addEventListener("mouseup", () => {
      moving = false;
    });
  };
</script>

<section
  style="{minimizeStyling()}{maximizeStyling()}"
  class="bg-menu resize select-none border-2 border-b-menu-shadow border-r-menu-shadow border-menu-highlight w-96 h-52 p-0.5 absolute"
  use:dragMe
>
  <a
    href="/"
    class="flex p-0.5 justify-between bg-gradient-to-r from-blue-950 to-blue-600 w-full h-5 cursor-default drag-none select-none"
    role="button"
  >
    <div class="flex gap-1">
      <img src={icon} alt="" class="w-4/5 drag-none" />
      <p class="font-black text-xs text-white">{name}</p>
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
            class="bg-menu btn w-4"
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
            class="bg-menu btn w-4"
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
          class="bg-menu btn w-4"
          alt=""
        />
      </button>
    </div>
  </a>
</section>
