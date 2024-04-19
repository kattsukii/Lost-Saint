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
    a {
      text-decoration: underline;
      padding: 0 0 1px;
    }
  </style>
  