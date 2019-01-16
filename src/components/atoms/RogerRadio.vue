<template>
  <span>
     <input class="roger-checkbox"
            type="radio"
            :name="name"
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
  name: 'RogerRadio',
  props: {
    name: {
      type: String,
      default: 'radio'
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
      return `${this.name}-radio-${this.id}`
    }

  }
}
</script>

<style scoped>
  .roger-checkbox {
    font-size: 1.2em;
  }

  input[type="radio"] {
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
    content: "\f111";
    display: inline-flex;
    width: 28px;
    height: 20px;
  }
  .label:hover {
    background: rgba(192, 192, 192, .4);
    cursor: pointer;
  }

  input[type=radio]:checked + .label {
    color: #fc7e00;
  }
  input[type=radio]:checked + .label::before {
    font-family: "Font Awesome 5 Free";
    content: "\f058";
    display: inline-flex;
    width: 28px;
    height: 20px;
    color: #fc7e00;
  }
</style>
