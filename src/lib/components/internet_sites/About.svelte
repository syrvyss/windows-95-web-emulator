<article
  class="[font-family:'comic sans'] flex min-h-screen flex-col bg-white bg-[length:200px_200px] font-comic"
>
  <nav class="flex w-full gap-9 p-5 text-blue-500 underline">
    <a class="visited:text-blue-800" href="#myself">Myself</a>
    <a class="visited:text-blue-800" href="#experience">Experience</a>
    <a class="visited:text-blue-800" href="#interests">Interests</a>
    <a class="visited:text-blue-800" href="#projects">Past projects</a>
  </nav>

  <section class="mt-20 flex h-80 flex-col px-5">
    <h2 class="text-center text-5xl">Nikolaj</h2>
    <h2 class="-mt-3 text-center text-5xl">Lübker</h2>

    <div class="mx-auto flex flex-col items-center">
      <p>V</p>
      <p class="-mt-3">V</p>
    </div>
    <div class="flex justify-center">
      <img
        class="-mr-[14.1rem] -mt-[7.7rem] h-20 rotate-[75deg] drag-none [image-rendering:pixelated]"
        src="web_icons/keyboard.png"
        alt=""
      />
    </div>
    <h2 class="-mr-96 pr-7 text-right">hello :-)</h2>

    <div class="w-50 mx-auto">
      <img src="web_icons/dancing.png" alt="" />
    </div>
  </section>

  <section id="myself" class="flex h-80 flex-col">
    <h2 class="text-center text-xl font-black text-yellow-300 underline">
      About Myself
    </h2>

    <p class="text-center">
      I am a {new Date().getFullYear() - 2003} year old Software Student at LEGO
      Education, mostly working within a full-stack environment. I spend a lot of
      time on personal programming projects, and I am also very passionate about
      open-source software
      <span class="text-xs"
        >(this is also why I've taken the decision to GPL this project).</span
      >
    </p>
  </section>

  <section id="experience" class="flex h-80 flex-col px-5">
    <h2 class="text-center text-xl font-black text-yellow-300 underline">
      Which technologies do I have experience in?
    </h2>
    <p class="text-center">
      I have work experience in programming languages such as TypeScript,
      JavaScript, and C++, mostly using web technologies such as React. A lot of
      my personal projects are in lower-level languages such as Rust. I also
      have additional experience in C# as part of my schooling.
      <br />
      Apart from work experience, I have experience in Svelte
      <span class="text-xs"> (which has been used for this project)</span>,
      Machine-Learning, Data-Science, Compilers
      <span class="text-xs"> (and lexers & parsers)</span>, UNIX operating
      systems, and more.
    </p>
  </section>

  <section id="interests" class="flex h-80 flex-col px-5">
    <h2 class="text-center text-xl font-black text-yellow-300 underline">
      What are you interested in?
    </h2>
    <p class="text-center">
      I am very interested in everything open-source, I try to use as much
      public software as I can, and I use Linux as my personal operating system.
      Apart from technology, I like learning more about academic subjects such
      as History, Culture, and Language. I also read books in my free time <span
        class="text-xs"
      >
        (non-fiction, fantasy, mostly.)
      </span>
    </p>
  </section>
  <section id="projects" class="flex h-80 flex-col px-5">
    <h2 class="text-center text-xl font-black text-yellow-300 underline">
      What are your past projects?
    </h2>
    <p class="text-center">I don't have many public repositories, sorry!</p>
  </section>
</article>
