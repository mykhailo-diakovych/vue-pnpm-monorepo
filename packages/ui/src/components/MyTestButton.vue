<template>
  <button style="background: white; color: #747bff">
    <slot /> TESTasd
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "MyTestButton"
})

</script>