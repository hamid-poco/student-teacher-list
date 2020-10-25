<template>
  <div>
    <h1>{{single.name}} {{single.family}}</h1>
    <p>Age: {{single.age}} years old</p>
    <p>Born in {{single.city}},{{single.country}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      single: {}
    }
  },
  computed: {
    ...mapState([
      'teacher',
      'student'
    ])
  },
  mounted () {
    const user = this[this.$route.params.cat][this.$route.params.id]
    this.single = user
  }
}
</script>
