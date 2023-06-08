
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
  </div>
</div>
</template>

<script>
import Nav from './Nav.vue'
import NetworkController from './NetworkController.vue'
import Hosts from './Hosts.vue'

export default {
  components: {
    Nav,
    NetworkController,
    Hosts
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
</style>
