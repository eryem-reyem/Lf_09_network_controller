<template>
  <div>
    <p>MMBC | Network Controller</p>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Network Devices</h2>
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
        <div class="col">
          <h2>Hosts</h2>
          <table class="table">
            <thead>
            <th class="text-start" scope="col">Name</th>
            <th class="text-start" scope="col">IP</th>
            <th class="text-start" scope="col">ID</th>
            </thead>
            <tbody>
            <tr v-for="host in hosts" :key="host">
              <td class="text-start">{{ host.hostName }}</td>
              <td class="text-start">{{ host.hostIp }}</td>
              <td class="text-start">{{ host.id }}</td>
              <td>
                <button type="button" class="btn btn-light" @click="showHostDetails(host)">Details</button>
              </td>
            </tr>
            </tbody>
          </table>
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
      network_devices: [],
      hosts: []
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
    },
    getHosts () {
      const path = 'http://localhost:5000/api/hosts'
      axios.get(path)
        .then(response => {
          this.hosts = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.getNetworkDevices()
    this.getHosts()
  }
}
</script>
