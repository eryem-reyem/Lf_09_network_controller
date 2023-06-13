
<template>
<div>
  <Nav />
  <div class="lists">
    <div class="network-controller">
      <NetworkController />
    </div>
    <div class="hosts">
      <Hosts />
    </div>
    <div class="users">
      <User />
    </div>
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
  }
}

</script>
<style>
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
.users {
  display: none;
}
.users {

}
</style>
