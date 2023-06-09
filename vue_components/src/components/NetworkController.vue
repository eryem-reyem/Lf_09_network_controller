<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Network Devices</h2>
          <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#networkList" aria-expanded="false" aria-controls="networkList">
              Show Network Devices
            </button>
          </p>
          <div class="collapse" id="networkList">
            <div class="card card-body">
              <table class="table">
                <thead>
                <th class="text-start" scope="col">Name</th>
                <th class="text-start" scope="col">Type</th>
                <th class="text-start" scope="col">ID</th>
                </thead>
                <tbody>
                <tr v-for="device in network_devices" :key="device">
                  <td class="text-start">{{ device.hostname }}</td>
                  <td class="text-start">{{ device.type }}</td>
                  <td class="text-start">{{ device.id }}</td>
                  <td>
                    <button type="button" class="btn btn-light" @click="showDeviceDetails(device)">Details</button>
                  </td>
                </tr>
                </tbody>
              </table>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      network_devices: []
    }
  },
  methods: {
    getNetworkDevices () {
      const path = 'http://localhost:5000/api/network-devices'
      axios.get(path)
        .then(response => {
          this.network_devices = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.getNetworkDevices()
  }
}
</script>
<style>
.title {
  margin-bottom: 1.5rem;
}
</style>
