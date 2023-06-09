<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Hosts</h2>
          <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#hostsList" aria-expanded="false" aria-controls="hostsList">
              Show Hosts
            </button>
          </p>
          <div class="collapse" id="hostsList">
            <div class="card card-body">
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      hosts: []
    }
  },
  methods: {
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
    this.getHosts()
  }
}
</script>

<style>
.title {
  margin-bottom: 1.5rem;
}
</style>
