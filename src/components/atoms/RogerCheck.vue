<template>
  <span>
     <input class="roger-checkbox"
            type="checkbox"
            name="name"
            :id="formedId"
            @click="handleCheck()"
     />
    <label class="label" :for="formedId">
      <slot/>
    </label>
  </span>
</template>

<script>
export default {
  name: 'RogerCheck',
  props: {
    name: {
      type: String,
      default: 'check'
    },
    id: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      formedId: this.getId()
    }
  },
  methods: {
    handleCheck (ev) {
      this.$emit('check', ev)
    },
    getId () {
      return `${this.name}-check-${this.id}`
    }

  }
}
</script>

<style scoped>
  .roger-checkbox {
    font-size: 1.2em;
  }

  input[type="checkbox"] {
    display: none;
  }

  .label {
    display: block;
    border: 1px solid #ababab;
    padding: 20px;
    width: 100%;
    height: 3em;
    box-sizing: border-box;
  }

  .label:hover {
    background: rgba(192, 0, 0, .4);
  }

  input[type=checkbox]:checked + .label {
    background-color: red;
  }
</style>
