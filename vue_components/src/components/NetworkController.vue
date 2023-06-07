<template>
    <div>
        <p>MMBC | Network Controller</p>
        <div class="container">
            <div class="row">
                <div class="col">
                    <table>
                        <caption>Network Devices</caption>
                        <thead>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Details</th>
                        </thead>
                        <tr v-for="device in network_devices">
                        <th>{{ device.hostname }}</th>
                        <th>{{ device.type }}</th>
                        <th>{{ device.id }}</th>
                        </tr>
                    </table>
                </div>
                <div class="col">
                    <table>
                        <caption>Hosts</caption>
                        <thead>
                            <th>Name</th>
                            <th>IP</th>
                            <th>Details</th>
                        </thead>
                        <tr v-for="host in hosts">
                        <th>{{ host.hostName }}</th>
                        <th>{{ host.hostIp }}</th>
                        <th>{{ host.id }}</th>
                        </tr>
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
      network_devices: this.getNetworkDevices(),
      hosts: this.getHosts()
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
    },
    created () {
      this.getNetworkDevices(),
      this.getHosts()
    }
  }  
}
</script>