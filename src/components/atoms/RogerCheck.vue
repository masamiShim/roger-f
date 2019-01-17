<template>
  <span>
     <input class="roger-checkbox"
            type="checkbox"
            :name="name"
            :id="formedId"
            :checked="checked"
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
    },
    checked: {
      type: Boolean,
      default: false
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
    text-align: left;
    display: block;
    padding: 0 12px;
    line-height: 2em;
    width: 100%;
    height: 2em;
    box-sizing: border-box;
  }
  .label::before {
    font-family: "Font Awesome 5 Free";
    content: "\f0c8";
    display: inline-flex;
    width: 28px;
    height: 20px;
  }
  .label:hover {
    background: rgba(192, 192, 192, .4);
    cursor: pointer;
  }

  input[type=checkbox]:checked + .label {
    color: #fc7e00;
  }
  input[type=checkbox]:checked + .label::before {
    font-family: "Font Awesome 5 Free";
    content: "\f14a";
    display: inline-flex;
    width: 28px;
    height: 20px;
    color: #fc7e00;
  }
</style>
