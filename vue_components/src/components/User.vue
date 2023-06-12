<template>
<div>
    <div class="row">
        <div class="column">
            <table>
                <thead>
                    <th class="text-start" scope="col">Username</th>
                    <th class="text-start" scope="col">Password</th>
                    <th class="text-start" scope="col">Role</th>
                    </thead>
                    <tbody>
                    <tr v-for="user in users" :key="user">
                        <th>{{ user.username }}</th>
                        <th>{{ user.password }}</th>
                        <th v-for="element in user.authorization" :key="element">{{ element.role }} <br></th>
                    </tr>
                    </tbody>
            </table>
        </div>
        <div class="column">
            <form v-on:submit.prevent="addUser">
                <div>
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Username" v-model="form.username">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" id="password" placeholder="password" v-model="form.password">
                </div>
                <div>
                    <label for="roles">Role</label>
                    <select id="roles" v-model="form.role" placeholder="Role">
                        <option value="ROLE_ADMIN">Admin</option>
                        <option value="ROLE_OBSERVER">Observer</option>
                        <option value="ROLE_INSTALLER">Installer</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: this.getUsers(),
      form: {
        username: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    getUsers () {
        const path = 'http://localhost:5000/api/users'
        axios.get(path)
            .then(response => {
            this.users = response.data
            })
            .catch(error => {
            console.log(error)
            })
    },
    addUser () {
        const path = 'http://localhost:5000/api/add_user'
        axios.post(path, this.form)
            .then(response => {
            this.users = this.getUsers()
            })
            .catch(error => {
            console.log(error)
            })
    }
  }
}
</script>

<style>
.title {
  margin-bottom: 1.5rem;
}
</style>
