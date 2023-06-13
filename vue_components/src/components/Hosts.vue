<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Hosts</h2>
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" :style="'width: ' + reachableHostsPercentage + '%;'" :aria-valuenow="reachableHostsPercentage" aria-valuemin="0" aria-valuemax="100">{{ reachableHostsPercentage }}%</div>
            </div>

            <p>Anzahl Hosts: {{ totalHostCount }}</p>
          <p>Erreichbare Hosts: {{ reachableHostsCount }}</p>
          <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#hostsList" aria-expanded="false" aria-controls="hostsList">
              Show Hosts
            </button>
          </p>
          <div class="collapse" id="hostsList">
            <div class="card1 card-body">
              <table class="table">
                <thead>
                <th class="text-center" scope="col">Name</th>
                <th class="text-center" scope="col">IP</th>
                <th class="text-center" scope="col">ID</th>
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
      <div class="overlay" v-if="selectedHost"></div>
      <div class="card card-body" v-if="selectedHost">
        <h3> {{ selectedHost.hostName}}</h3>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row" class="text-left">connectedInterfaceName</th>
              <td> {{ selectedHost.connectedInterfaceName }}</td>
            </tr>
            <tr>
              <th scope="row" class="text-left">connectedNetworkDeviceIpAddress</th>
              <td> {{ selectedHost.connectedNetworkDeviceIpAddress }}</td>
            </tr>
            <tr>
              <th scope="row" class="text-left">connectedNetworkDeviceName</th>
              <td> {{ selectedHost.connectedNetworkDeviceName }}</td>
            </tr>
            <tr>
              <th scope="row" class="text-left">hostMac</th>
              <td> {{ selectedHost.hostMac }}</td>
            </tr>
            <tr>
              <th scope="row" class="text-left">hostType</th>
              <td> {{ selectedHost.hostType }}</td>
            </tr>
            <tr>
              <th scope="row" class="text-left">ID</th>
              <td> {{ selectedHost.id}} </td>
            </tr>
            <tr>
              <th scope="row" class="text-left">lastUpdated</th>
              <td> {{ selectedHost.lastUpdated }} </td>
            </tr>
            <tr>
              <th scope="row" class="text-left">pingStatus</th>
              <td :class="{ 'text-success': selectedHost.pingStatus === 'SUCCESS', 'text-danger': selectedHost.pingStatus !== 'SUCCESS' }">
                {{ selectedHost.pingStatus }} </td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-light" @click="selectedHost = null">Schließen</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      hosts: [],
      selectedHost: null
    }
  },
  methods: {
    getHosts () {
      const path = 'http://localhost:5000/api/hosts'
      axios
        .get(path)
        .then((response) => {
          this.hosts = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    showHostDetails (host) {
      this.selectedHost = host
    }
  },
  computed: {
    totalHostCount () {
      return this.hosts.length
    },
    reachableHostsCount () {
      return this.hosts.filter((host) => host.pingStatus === 'SUCCESS').length
    },
    reachableHostsPercentage () {
      return Math.round((this.reachableHostsCount / this.hosts.length) * 100)
    }
  },
  created () {
    this.getHosts()
  }
}
</script>

<style>
.title {
  margin-bottom: 1.5rem;
}

.card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Farbe mit Transparenz anpassen */
  z-index: 9998; /* Stelle sicher, dass die Überlagerung unter der Karte liegt */
}

.text-success {
  color: green;
}

.text-danger {
  color: red;
}

</style>
