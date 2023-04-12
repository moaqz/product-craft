<script lang="ts">
  import { Copy } from "#/components/Icons";

  export let text: string;
  const charts = text.length;
  const words = text.split(" ").length;

  let copied = false;

  function handleClick() {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setInterval(() => (copied = false), 3000);
        copied = true;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  let lines = text.split("\n");
</script>

<div class="flex flex-col rounded-md border border-gray-800 bg-gray-700 p-4">
  {#each lines as line}
    <p>{line}</p>
  {/each}
  <div class="mt-4 flex items-center justify-between">
    <button class="primary-button rounded" on:click={handleClick}>
      {#if !copied}
        <Copy />
        Copy
      {:else}
        Copied!
      {/if}
    </button>
    <p class="text-sm text-gray-400">{words} words / {charts} chars</p>
  </div>
</div>
