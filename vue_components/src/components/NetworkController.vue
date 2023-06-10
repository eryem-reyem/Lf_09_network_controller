<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Network Devices</h2>
          <p>Erreichbare Devices: {{ reachableDevicesCount }}</p>
          <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#networkList" aria-expanded="false" aria-controls="networkList">
              Show Network Devices
            </button>
          </p>
          <div class="collapse" id="networkList">
            <div class="card1 card-body">
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
    <div class="overlay" v-if="selectedDevice"></div>
    <div class="card card-body" v-if="selectedDevice">
      <h3> {{ selectedDevice.hostname}}</h3>
      <table class="table">
        <tboy>
          <tr>
            <th scope="row" class="text-left">collectionStatus</th>
            <td> {{ selectedDevice.collectionStatus }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-left">connectedInterfaceName</th>
            <td> {{ selectedDevice.connectedInterfaceName }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-left">connectedNetworkDeviceIpAddress</th>
            <td> {{ selectedDevice.connectedNetworkDeviceIpAddress }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-left">connectedNetworkDeviceName</th>
            <td> {{ selectedDevice.connectedNetworkDeviceName }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-left">errorDescription</th>
            <td> {{ selectedDevice.errorDescription }}</td>
          </tr>
<!--          <tr>-->
<!--            <th scope="row" class="text-left">globalCredentialId</th>-->
<!--            <td> {{ selectedDevice.globalCredentialId}} </td>-->
<!--          </tr>-->
          <tr>
            <th scope="row" class="text-left">id</th>
            <td> {{ selectedDevice.id }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">interfaceCount</th>
            <td> {{ selectedDevice.interfaceCount }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">inventoryStatusDetail</th>
            <td> {{ selectedDevice.inventoryStatusDetail }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">lastUpdateTime</th>
            <td> {{ selectedDevice.lastUpdateTime }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">macAddress</th>
            <td> {{ selectedDevice.macAddress }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">managementIpAddress</th>
            <td> {{ selectedDevice.managementIpAddress }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">reachabilityStatus</th>
            <td :class="{ 'text-success': selectedDevice.reachabilityStatus === 'Reachable', 'text-danger': selectedDevice.reachabilityStatus !== 'Reachable' }">
              {{ selectedDevice.reachabilityStatus }} </td>
          </tr>
<!--          <tr>-->
<!--            <th scope="row" class="text-left">serialNumber</th>-->
<!--            <td> {{ selectedDevice.serialNumber }} </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <th scope="row" class="text-left">softwareVersion</th>-->
<!--            <td> {{ selectedDevice.softwareVersion }} </td>-->
<!--          </tr>-->
          <tr>
            <th scope="row" class="text-left">type</th>
            <td> {{ selectedDevice.type }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">upTime</th>
            <td> {{ selectedDevice.upTime }} </td>
          </tr>
        </tboy>
      </table>
      <button type="button" class="btn btn-light" @click="selectedDevice = null">Schließen</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      network_devices: [],
      selectedDevice: null
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
    showDeviceDetails (device) {
      this.selectedDevice = device
    }
  },
  computed: {
    reachableDevicesCount () {
      return this.network_devices.filter((device) => device.reachabilityStatus === 'Reachable').length
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
