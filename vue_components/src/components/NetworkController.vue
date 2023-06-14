<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Network Devices</h2>
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" :style="'width: ' + reachableDevicesPercentage + '%;'" :aria-valuenow="reachableDevicesPercentage" aria-valuemin="0" aria-valuemax="100">{{ reachableDevicesPercentage }}%</div>
            </div>
          <p>Anzahl Deivces: {{ totalDeviceCount }}</p>
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
                <th class="text-center" scope="col">Name</th>
                <th class="text-center" scope="col">Type</th>
                <th class="text-center" scope="col">ID</th>
                </thead>
                <tbody>
                <tr v-for="device in network_devices" :key="device">
                  <td class="text-center">{{ device.hostname }}</td>
                  <td class="text-center">{{ device.type }}</td>
                  <td class="text-center">{{ device.id }}</td>
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
            <th scope="row" class="text-center">collectionStatus</th>
            <td> {{ selectedDevice.collectionStatus }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-center">connectedInterfaceName</th>
            <td> {{ selectedDevice.connectedInterfaceName }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-center">connectedNetworkDeviceIpAddress</th>
            <td> {{ selectedDevice.connectedNetworkDeviceIpAddress }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-center">connectedNetworkDeviceName</th>
            <td> {{ selectedDevice.connectedNetworkDeviceName }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-center">errorDescription</th>
            <td> {{ selectedDevice.errorDescription }}</td>
          </tr>
<!--          <tr>-->
<!--            <th scope="row" class="text-left">globalCredentialId</th>-->
<!--            <td> {{ selectedDevice.globalCredentialId}} </td>-->
<!--          </tr>-->
          <tr>
            <th scope="row" class="text-center">id</th>
            <td> {{ selectedDevice.id }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">interfaceCount</th>
            <td> {{ selectedDevice.interfaceCount }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">inventoryStatusDetail</th>
            <td> {{ selectedDevice.inventoryStatusDetail }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">lastUpdateTime</th>
            <td> {{ selectedDevice.lastUpdateTime }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">macAddress</th>
            <td> {{ selectedDevice.macAddress }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">managementIpAddress</th>
            <td> {{ selectedDevice.managementIpAddress }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">reachabilityStatus</th>
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
            <th scope="row" class="text-center">type</th>
            <td> {{ selectedDevice.type }} </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">upTime</th>
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
    totalDeviceCount () {
      return this.network_devices.length
    },
    reachableDevicesCount () {
      return this.network_devices.filter((device) => device.reachabilityStatus === 'Reachable').length
    },
    reachableDevicesPercentage () {
      return Math.round((this.reachableDevicesCount / this.network_devices.length) * 100)
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
.card {
  height: 80%;
}
</style>
