<script lang="ts">
    import programs from "$lib/classes/programs";
    let minimized = false;
</script>

<div
    class="{minimized
        ? 'hidden'
        : ''} panel bottom-8 mx-auto w-60 h-96 absolute grid grid-cols-5"
>
    <div class="bg-title-bar-secondary w-100 h-100 flex">
        <p
            class="select-none mx-auto mb-2 align-middle text-4xl text-white w-100 -rotate-180"
            style="writing-mode: vertical-rl; text-orientation: sideways;"
        >
            <span class="font-black">Bingrows </span>
            <span class="font-extralight">89+1</span>
        </p>
    </div>

    <div class="col-span-4 grid grid-rows-[7]">
        <div class="flex justify-between pl-2 pr-2">
            <div class="flex items-center gap-2">
                <img class="w-10 h-10" src="/desktop_icons/folder.png" alt="" />
                <p class="align-baseline">
                    <span class="underline">P</span>rograms
                </p>
            </div>
            <p class="font-bold">></p>
        </div>
        <div class="flex justify-between pl-2 pr-2">
            <div class="flex items-center gap-2">
                <img class="w-10 h-10" src="/desktop_icons/folder.png" alt="" />
                <p><span class="underline">P</span>rograms</p>
            </div>
            <p class="font-bold">></p>
        </div>
        <div class="flex justify-between pl-2 pr-2">
            <div class="flex items-center gap-2">
                <img class="w-10 h-10" src="/desktop_icons/folder.png" alt="" />
                <p><span class="underline">P</span>rograms</p>
            </div>
            <p class="font-bold">></p>
        </div>
        <div class="flex justify-between pl-2 pr-2">
            <div class="flex items-center gap-2">
                <img class="w-10 h-10" src="/desktop_icons/folder.png" alt="" />
                <p><span class="underline">P</span>rograms</p>
            </div>
            <p class="font-bold">></p>
        </div>
        <div class="flex justify-between pl-2 pr-2">
            <div class="flex items-center gap-2">
                <img class="w-10 h-10" src="/desktop_icons/folder.png" alt="" />
                <p><span class="underline">P</span>rograms</p>
            </div>
            <p class="font-bold">></p>
        </div>
        <ul />
        <div class="flex justify-between pl-2 pr-2">
            <div class="flex items-center gap-2">
                <img class="w-10 h-10" src="/desktop_icons/folder.png" alt="" />
                <p>Shut Down...</p>
            </div>
        </div>
    </div>
</div>
