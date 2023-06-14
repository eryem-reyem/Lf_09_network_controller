
<template>
<div>
  <Nav :class="{active: users}"/>
  <button type="button" class="btn btn-outline-info user-button" @click="showUsersPage"><i class="fa-solid fa-user user"></i>Users</button>
  <button type="button" class="btn btn-outline-info devices-button" :class="{active: users}" @click="users = !users"><i class="fa-solid fa-house house"></i>Overview</button>
  <div class="lists">
    <div class="network-controller">
      <NetworkController />
    </div>
    <div class="hosts">
      <Hosts />
    </div>
  </div>
  <div class="users" :class="{active: users}">
    <User />
  </div>
</div>
</template>

<script>
import Nav from './Nav.vue'
import NetworkController from './NetworkController.vue'
import Hosts from './Hosts.vue'
import User from './User.vue'

export default {
  components: {
    Nav,
    NetworkController,
    Hosts,
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
<style>
Nav.active {
  z-index: 25;
}
.lists {
  display: flex;
  justify-content: space-evenly;
  background-color: #ebecec;
}
.network-controller {
  padding-top: 4rem;
}
.hosts {
  padding-top: 4rem;
}
.user {
  margin-right: 9px;
}
.user-button {
  position: absolute;
  right: 0;
  margin-right: 5rem;
  margin-top: -5rem;
}
.users {
  display: none;
}
.users.active{
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  transition: margin-right 2s .5s;
  z-index: 20;
  background-color: #ebecec;
  overflow: hidden;
}
.devices-button {
  display: none;
}
.devices-button.active {
  display: block;
  position: absolute;
  right: 0;
  margin-right: 5rem;
  margin-top: -5rem;
  z-index: 30;
}
.house {
  margin-right: 9px;
}
</style>
