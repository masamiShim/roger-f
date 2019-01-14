<template>
  <div class="roger-court-item">
    <span class="roger-court-check">
      <RogerCheck :id="id"
                  :courtId="courtId"
                  :name="name"
                  @check="handleCheck(id, courtId)">

        <span class="roger-court-item-name">{{ courtName }}</span>
        <span class="roger-court-item-time">{{ time }}～</span>
        <span class="roger-court-item-num">{{ courtNum }}面</span>
      </RogerCheck>
    </span>
  </div>
</template>

<script>
import RogerCheck from '@/components/atoms/RogerCheck'

export default {
  name: 'RogerCourtItem',
  components: {RogerCheck},
  props: {
    id: {
      type: Number,
      required: true
    },
    courtId: {
      type: Number,
      required: true
    },
    name: {
      type: String
    },
    courtName: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    courtNum: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleCheck (id, courtId) {
      // vuexで管理してるやつ
      this.$store.dispatch('toggleSelect', {id, courtId})
    }
  }
}
</script>

<style scoped>
  .roger-court-item {
    width: 100%;
  }

  .roger-court-check {
    width: 10%;
  }

  .roger-court-item-name {
    width: 40%;
  }

  .roger-court-item-time {
    width: 30%;
  }

  .roger-court-item-num {
    width: 20%;
  }
</style>
