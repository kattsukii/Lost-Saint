<script lang="ts">
export let href: string;
</script>
  
  <a
    {href}
    target="_blank"
    {...$$restProps}
    class=""
  >
    <slot />
  </a>
  
  <style>
    /* Define your styles here */
  </style>
  