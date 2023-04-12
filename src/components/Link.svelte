<script lang="ts">
  export let href: string;
  export let classname: string = "font-semi-bold underline text-green-300";
</script>

<a {href} target="_blank" rel="noreferrer" class={classname}>
  <slot />
</a>
