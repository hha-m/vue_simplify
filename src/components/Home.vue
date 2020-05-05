<template>
  <div>
    <v-toolbar dark color="cyan">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title> TODO LIST </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.prevent="logout"> Logout </v-btn>
    </v-toolbar>
    <div>
      <datetime v-model="choose_date" input-id="startDate" placeholder="select date">
        <v-icon for="startDate" slot="before">today</v-icon>
        <template slot="button-cancel">
          Cancel
        </template>
        <template slot="button-confirm">
          Confirm
        </template>
      </datetime>
    </div>

    <v-card class="mx-auto" max-width="500">
      <v-list>
        <v-subheader>
          <v-label>Today : {{ today }} </v-label>
        </v-subheader>
        <v-list-item v-if="filteredTasks.length == 0">
          <v-list-item-content>
            <v-list-item-title><b> Nothing to do. Hurrah!</b></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-group v-for="t in filteredTasks" v-bind:key="t.action" v-else>
          <v-list-item>
            <v-list-item-content>
              {{ t.action }}
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox
                v-model="t.done"
                color="primary"
              >
              </v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>

        <v-list-item>
          <v-text-field label="Add Task" v-model="newItemText"></v-text-field>
          <v-btn small color="primary" dark @click="addNewTodo">Add</v-btn>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox
              v-model="hideCompleted"
              color="primary"
            >
            </v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            Hide completed tasks
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      tasks: [],
      hideCompleted: true,
      newItemText: '',
      choose_date: '',
      today: moment().format('YYYY-MM-DD')
    };
  },
  computed: {
    filteredTasks() {
      return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks
    }
  },
  methods: {
    // todo: sometimes, logout does not work
    async logout () {
      await this.$auth.logout();
      this.$router.push('/')
    },
    // add new task
    addNewTodo() {
      if(!this.newItemText) return;
      this.tasks.push({
        action: this.newItemText,
        done: false
        });
      // stored as json data
      localStorage.setItem('todos', JSON.stringify(this.tasks));
      this.newItemText = '';
    }
  },
  // get Json data
  created() {
    let data = localStorage.getItem("todos");
    if (data != null) {
      this.tasks = JSON.parse(data);
    }
  }
}
</script>
