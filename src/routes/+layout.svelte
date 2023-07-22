<script>
  import "../app.css";
  import { Github } from "#/components/Icons";
  import Link from "#/components/Link.svelte";
</script>

<header class="fixed top-0 z-50 w-full bg-gray-900">
  <nav class="flex h-16 items-center justify-between px-5">
    <a href="/" class="text-lg font-semibold sm:text-2xl">Product Craft</a>
    <div class="flex items-center gap-x-3">
      <Link
        href="https://github.com/moaqz/product-craft"
        classname="primary-button"
      >
        <Github />
        Star on Github
      </Link>
    </div>
  </nav>
</header>
<main>
  <slot />
</main>
