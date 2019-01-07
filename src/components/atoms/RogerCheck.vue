<template>
  <span>
     <input class="roger-checkbox"
            type="checkbox"
            name="name"
            @click="handleCheck()"
     />
    <slot/>
  </span>
</template>

<script>
export default {
  name: 'RogerCheck',
  props: {
    name: {
      type: String,
      default: 'check'
    }
  },
  methods: {
    handleCheck (ev) {
      this.$emit('check', ev)
    }
  }
}
</script>

<style scoped>
  .roger-checkbox {
    font-size: 1.2em;
  }
</style>
