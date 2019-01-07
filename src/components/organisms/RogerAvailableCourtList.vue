<template>
  <div>
    <ul>
      <li v-for="court in courts"
          :key="court.id">
        <RogerCourtItem
          :id="court.id"
          :courtId="court.courtId"
          :name="court.name"
          :courtName="court.courtName"
          :time="court.time"
          :courtNum="court.courtNum"/>
      </li>
    </ul>
  </div>
</template>

<script>
import RogerCourtItem from '@/components/molecules/RogerCourtItem'

export default {
  name: 'RogerAvailableCourtList',
  components: {RogerCourtItem},
  props: {
    courts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
