<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let name: string;
  export let icon: string;

  const dragMe = (node: any) => {
    let moving = false;
    let left = 300;
    let top = 100;

    node.style.position = "absolute";
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
    node.style.cursor = "move";
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
  class="bg-menu resize select-none border-2 border-b-menu-shadow border-r-menu-shadow border-menu-highlight w-96 h-52 top-10 p-0.5 left-10 absolute"
  use:dragMe
>
  <a
    href="/"
    class="flex p-0.5 justify-between bg-gradient-to-r from-blue-950 to-blue-600 w-full h-5 drag-none select-none"
    role="button"
  >
    <div class="flex gap-1">
      <img src={icon} alt="" class="w-4/5" />
      <p class="font-black text-xs text-white">{name}</p>
    </div>
    <div class="flex">
      <div class="flex mr-0.5">
        <button
          on:click={() => {
            dispatch("minimize", {
              name: name,
              icon: icon,
            });
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
            dispatch("maximize", {
              name: name,
              icon: icon,
            });
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
            name: name,
            icon: icon,
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
