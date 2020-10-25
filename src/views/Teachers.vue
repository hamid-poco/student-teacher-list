<template>
  <div>
    <b-table striped hover :items="teacher">
      <template v-slot:cell(name)="data">
        <router-link :to="`/single/teacher/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'teacher'
    ])
  }
}
</script>
