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
    background-color: #00a8fc;
    color: #efefef;
    border: 1px solid #007efc;
    border-radius: 12px;
    width: 100%;
  }
  .roger-button:hover {
    background: rgba(0,119,179, .8);
    cursor: pointer;
  }
</style>
