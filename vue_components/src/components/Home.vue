
<template>
  <div>
    <p>Home page 1</p>
    <p>Random number from backend: {{ randomNumber }}</p>
    <button @click="getRandom">New random number</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      randomNumber: this.getRandom()
    }
  },
  methods: {
    getRandom () {
      // this.randomNumber = this.getRandomInt(1, 100)
      this.randomNumber = this.getRandomFromBackend();
    },
    getRandomFromBackend () {
      const path = 'http://localhost:5000/api/random'
      axios.get(path)
      .then(response => {
        this.randomNumber = response.data.randomNumber
      })
      .catch(error => {
        console.log(error)
      })
    },
    created () {
      this.getRandom()
    }
  }  
}
</script>