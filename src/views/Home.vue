<template>
  <div class="home">
    <h1>Add New Teacher/Student</h1>
    <button @click="toggleForm"> Open/Close (Insert Form)</button>
<b-form @submit.prevent="submitHandler"  v-if="toggleDate">

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="family:" label-for="family">
        <b-form-input
          id="family"
          v-model="formData.family"
          required
          placeholder="Enter family Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="age:" label-for="age">
        <b-form-input
          id="age"
          v-model="formData.age"
          required
          placeholder="age"
        ></b-form-input>

      <b-form-group id="input-group-9" label="city:" label-for="city">
        <b-form-input
          id="city"
          v-model="formData.city"
          required
          placeholder="Enter your city"
        ></b-form-input>

      <b-form-group id="input-group-11" label="country:" label-for="country">
        <b-form-input
          id="country"
          v-model="formData.country"
          required
          placeholder="Enter your"
        ></b-form-input>
      </b-form-group>

      </b-form-group>
      </b-form-group>

      <b-form-group id="input-group-3" label="category:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.cat"
          :options="['teacher', 'student']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      toggleDate: false,
      formData: {
        name: '',
        family: '',
        age: 0,
        cat: null,
        city: '',
        country: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addUser'
    ]),
    toggleForm () {
      this.toggleDate = !this.toggleDate
    },
    submitHandler () {
      console.log(1)
      const { cat, age, name, family, city, country } = this.formData
      const payload = {
        cat,
        user: {
          name,
          family,
          age,
          city,
          country
        }
      }
      this.addUser(payload)
    }
  }
}
</script>
