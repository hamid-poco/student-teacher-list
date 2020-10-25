<template>
  <div>
    <b-table striped hover :items="student">
      <template v-slot:cell(name)="data">
        <router-link :to="`/single/student/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed:{
    ...mapState([
      'student'
    ])
  }
}
</script>
