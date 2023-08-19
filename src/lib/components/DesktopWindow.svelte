<script context="module" lang="ts">
  let name = "";
  let icon = "";

  export const open_window = (name: string, icon: string) => {
    name = name;
    icon = icon;
  };

  export const close_window = (name: string) => {

  };


</script>

<script lang="ts">
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

  //$: console.log(moving)
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
    <div>
      <img src={icon} alt="">
      <p class="font-bold text-xs text-white">Test Article{name}</p>
    </div>
    <div class="flex">
      <div class="flex mr-0.5">
        <button>
          <img src="src/assets/window_icons/minimize.png"
               class="bg-menu border-2 border-b-menu-shadow border-r-menu-shadow border-menu-highlight w-4 select-none"
               alt="">
        </button>
        <button>
          <img src="src/assets/window_icons/maximize.png"
               class="bg-menu border-2 border-b-menu-shadow border-r-menu-shadow border-menu-highlight w-4 select-none"
               alt="">
        </button>
      </div>
      <button>
        <img src="src/assets/window_icons/close.png"
             class="bg-menu border-2 border-b-menu-shadow border-r-menu-shadow border-menu-highlight w-4 select-none"
             alt="">
      </button>
    </div>


  </a>
</section>