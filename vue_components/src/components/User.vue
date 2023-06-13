<template>
<div>
    <div class="row">
        <div class="column">
            <table class="table w-75 position-absolute top-50 start-50 translate-middle">
                <thead>
                    <th class="text-start" scope="col">Username</th>
                    <th class="text-start" scope="col">Password</th>
                    <th class="text-start" scope="col">Role</th>
                    </thead>
                    <tbody>
                    <tr v-for="user in users" :key="user">
                        <th class="text-start">{{ user.username }}</th>
                        <th class="text-start">{{ user.password }}</th>
                        <th v-for="element in user.authorization" :key="element" class="text-start">{{ element.role }} <br></th>
                        <th><button class="btn-danger" type="button btn-danger" @click="deleteUser(user)">Delete</button></th>
                    </tr>
                    </tbody>
            </table>
        </div>
        <div class="add-user">
          <button class="btn btn-info add-user-button" @click="showUserCard"><i class="fa-solid fa-user-plus"></i>Add User</button>
        </div>
        <div class="overlay" v-if="userCard" @click="closeUserCard"></div>
        <div class="card card-body" v-if="userCard">
            <div class="mb-2" style="margin-bottom: 20px;">
                <i class="fa-solid fa-xmark close" @click="closeUserCard"></i>
            </div>
            <br><br>
            <form v-on:submit.prevent="addUser">
                <div class="mb-2">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="username" placeholder="Username" v-model="form.username">
                        <label for="username">Username</label>
                    </div>
                </div>
                <div class="mb-2">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="password" placeholder="Password" v-model="form.password">
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="mb-2">
                    <div class="form-floating">
                        <select id="roles" class="form-select" v-model="form.role" placeholder="Role">
                            <option value="ROLE_ADMIN">Admin</option>
                            <option value="ROLE_OBSERVER">Observer</option>
                            <option value="ROLE_INSTALLER">Installer</option>
                        </select>
                        <label for="roles">Role</label>
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn btn-info">Submit</button>
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
      userCard: false,
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
      this.userCard = false
    },
    deleteUser (user) {
      const path = 'http://localhost:5000/api/delete_user'
      axios.post(path, user)
        .then(response => {
          this.users = this.getUsers()
        })
        .catch(error => {
          console.log(error)
        })
    },
    showUserCard () {
      this.userCard = true
    },
    closeUserCard () {
      this.userCard = false
    }
  }
}
</script>

<style>
.title {
  margin-bottom: 1.5rem;
}
.card {
  position: fixed;
  height: 50%;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
.add-user-button {
  margin-top: 13rem;
}
.close {
  position: absolute;
  right: 19px;
  font-size: 33px;
}
.fa-user-plus {
  margin-right: 9px;
}
</style>
