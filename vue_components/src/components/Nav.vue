<template>
<nav class="navbar w-100" style="background-color: #ffffff;">
  <div class="container w-100">
    <a class="navbar-brand" href="#">
      <img src="../assets/Logo_Streamline.png" alt="Streamline" id="logo">
    </a>
  </div>
</nav>
</template>

<script >
import User from './User.vue'

export default {
  name: 'Nav',
  components: {
    User
  },
  data () {
    return {
      users: false
    }
  },
  methods: {
    showUsersPage () {
      this.users = true
    }
  }
}
</script>

<style scoped>
#logo {
  height: 100px;
}
.container {
  display: flex;
}
nav {
  display: flex;
}
.user {
  margin-right: 9px;
}
.btn {
  margin-right: 9em;
}
</style>
