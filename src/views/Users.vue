<template>
  <div class="users">
    <h1 class="title is-1">Painel ADM</h1>
    <section class="section">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr class="subtitle is-4">
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="items">{{ user.name }}</td>
            <td class="items">{{ user.email }}</td>
            <td class="items">{{ processRole(user.role) }}</td>
            <td>
              <router-link :to="{ name: 'UserEdit', params: { id: user.id } }">
                <button class="button">Edição</button>
              </router-link>

              <button
                class="button"
                @click="showModalUser(user.id)"
              >
                Deletar
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>.</tfoot>
      </table>
    </section>

    <div :class="{ modal: true, 'is-active': showModal }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-centered">
              Você deseja realmente deletar esse usuário?
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>
                Caso você opte por deletar este usuário, ele será excluído do
                banco de dados e você não poderá recuperá-lo.
              </p>
            </div>
          </div>
          <footer class="card-footer">
            <a
              id="cardCancel"
              href="#"
              class="card-footer-item"
              @click="hideModal()"
              >Cancelar</a
            >
            <a
              id="cardAccept"
              href="#"
              class="card-footer-item"
              @click="deleteUser()"
              >Sim, quero deletar!</a
            >
          </footer>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="hideModal()"
      ></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    var req = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get("http://localhost:8686/user", req)
      .then((res) => {
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      users: [],
      showModal: false,
      deleteUserId: -1,
    };
  },
  methods: {
    processRole(value) {
      if (value == 0) {
        return "Usuário comum";
      } else if (value == 1) {
        return "Admin";
      }
    },
    hideModal() {
      this.showModal = false;
    },
    showModalUser(id) {
      this.deleteUserId = id;
      this.showModal = true;
    },
    deleteUser() {
      var req = {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .delete("http://localhost:8686/user/" + this.deleteUserId, req)
        .then((res) => {
          console.log(res);
          this.showModal = false;
          this.users = this.users.filter((u) => u.id != this.deleteUserId);
        })
        .catch((err) => {
          console.log(err);
          this.showModal = false;
        });
    },
  },
};
</script>

<style scoped>
.users {
  padding: 0em;
  background: var(--sidebar-item-active);
}

h1.title {
  padding-top: 2em;
  color: var(--text);
}

.section {
  margin: 2em;
}

.table {
  background-color: var(--sidebar-bg-color);
}

.table td,
.table th {
  padding: 1em;
  vertical-align: middle;
  color: var(--text);
  border: var(--text) solid 0.01em;
}

td {
  font-size: 1.1em;
  color: var(--text);
  background-color: var(--sidebar-item-hover);
}

tfoot {
  border: var(--text) solid 0.01em;
}

.button {
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
  padding: 1.3em;
  background: var(--sidebar-bg-color);
  color: var(--text);
  border: solid 0.01em;
}

.button:hover, .button:focus {
  background: var(--sidebar-item-active);
  color: var(--text);
  border: solid 0.01em;
}

.card {
  font-size: 1.2em;
}

.card-header {
  background: var(--sidebar-bg-color);
  color: var(--text);
  border: solid 0.01em;
}

.card-header-title {
  color: var(--text);
}

.card-content {
  background: var(--sidebar-item-hover);
  color: var(--text);
  border: solid 0.01em;
}

.card-footer {
  color: var(--text);
  border: solid 0.01em;
}

#cardCancel {
  color: var(--text);
  border: solid 0em;
  background: var(--sidebar-bg-color)
}

#cardAccept {
  color: var(--text);
  border: solid 0em;
  background: var(--sidebar-bg-color)
}

#cardCancel:hover {
  background: var(--sidebar-item-active);
}

#cardAccept:hover {
  background: var(--sidebar-item-active);
}
</style>