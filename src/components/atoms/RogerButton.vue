<template>
 <button @click="this.$emit('click')"
         :disabled="disabled"
         :class="classes"
         type="button"
 >
  <slot />
 </button>
</template>

<script>
export default {
  name: 'RogerButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const cls = this.type === 'text' ? ('-' + this.type) : ''
      return [`roger-button${cls}`]
    }
  },
  methods: {
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style scoped>
  .roger-button {
    padding: .6em 1.3em;
    background-color: transparent;
    border: 1px solid #565656;
    border-radius: 12px;
  }
  .roger-button:hover {
    background: rgba(190,190,190, .5);
    cursor: pointer;
  }
</style>
