import { createStore } from "vuex";
import { GET_URL, DELETE_URL, POST_URL } from "../misc/constants.js";

export default createStore({
  state: {
    taskList: [],
  },
  mutations: {
    setTasks(state, payload) {
      state.taskList = payload;
    },
    addTask(state, { title, text, deadline, status }) {
      if (text) {
        // const id = state.taskList.length + 1;
        state.taskList.push({ title, text, deadline, status });
      }
    },
    async deleteTask(state, payload) {
      const index = state.taskList.findIndex((item) => item.id === payload);
      const options = {
        credentials: "include",
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: state.taskList[index].id }),
      };
      let res = await fetch(DELETE_URL, options).then((res) => res.json());
      console.log(res);
      const item = state.taskList.splice(index, 1);
      console.log("item deleted: ", item);
    },
  },
  getters: {
    getTasks: (state) => state.taskList,
   
  },
  actions: {
    async fetchData({ commit }) {
      let fetchedTasksObject = {};
      fetchedTasksObject = await fetch(GET_URL).then((res) => res.json());
      let fetchedTasks = [];
      for (const key in fetchedTasksObject) {
        fetchedTasks.push(fetchedTasksObject[key]);
      }
      console.log(fetchedTasks);
      commit("setTasks", fetchedTasks);
    },

    async sendData(formData) {
      let data = formData;
      console.log(data)
      if (!data.title) {
        data.title = data.text.split(" ").slice(0, 3).join(" ");
      }
      // if (!data.id) {
        data = JSON.stringify(data);
        console.log(data);
        const fetchOptions = {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: "json=" + data,
        }
        try {
          let serverMsg = await fetch(POST_URL, fetchOptions)
            .then((response) => {
              let serverRes = response.json();
              return serverRes;
            })
            .then((data) => {
              return data;
            });
          if (serverMsg) {
            //only if the server return a message, i.e. success, add to store
            this.addTask(this.task);
            this.$emit("taskAdded");
          }
        } catch (e) {
          console.log(e.message);
        }
      // } else {
      //     data = JSON.stringify(data);
      //     console.log(data);
      //     const fetchOptions = {
      //     credentials: "include",
      //     method: "PUT",
      //     headers: { "Content-Type": "application/json" },
      //     body: "json=" + data,
      //     }
      //     try {
      //       let serverMsg = await fetch(UPDATE_URL, fetchOptions)
      //         .then((response) => {
      //           let serverRes = response.json();
      //           return serverRes;
      //         })
      //         .then((data) => {
      //           return data;
      //         });
      //       if (serverMsg) {
      //         //only if the server return a message, i.e. success, add to store
      //         this.addTask(this.task);
      //         this.$emit("taskAdded");
      //       }
      //       } catch (e) {
      //         console.log(e.message);
      //       }
      //     }
      
    },
  },
  modules: {},
});
