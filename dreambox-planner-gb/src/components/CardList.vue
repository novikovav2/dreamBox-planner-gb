<template>
  <div class="dashboard-container">
    <div class="dashboard">
      <div class="section">
        <div class="section-header">
          <div class="section-title">Daily Plan</div>
          <button class="btn" @click="createTask">
            <i class="fas fa-plus-circle"></i>
          </button>
        </div>
        <div class="section-body">
          <CardForList
            v-for="task in getTasks"
            :key="task"
            :task="task"
            @click="showCard(task.id)"
          />
        </div>
      </div>
    </div>
    <div class="greetings" v-if="!cardIsShown">
      <UdemiCourses @addUdemiTask="createUdemiTask" />
    </div>
    <div v-if="cardIsShown">
      <TaskDetails
        @closeCard="closeCard"
        @createTask="createTask"
        :id="currentTask.id"
        :task="currentTask"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TaskDetails from "./TaskDetails.vue";
import CardForList from "./CardForList.vue";
import UdemiCourses from "./UdemiCourses.vue";

export default {
  name: "CardList",
  components: { CardForList, TaskDetails, UdemiCourses },
  data() {
    return {
      newTask: {
        id: null,
        title: null,
        text: "",
        deadline: null,
        status: "active",
      },
      cardIsShown: false,
      currentTask: null,
    };
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
  methods: {
    ...mapActions(["addData"]),
    showCard(id) {
      this.currentTask = this.getTasks.find((task) => task.id == id);
      this.cardIsShown = true;
    },
    closeCard() {
      this.cardIsShown = false;
    },
    createTask() {
      this.currentTask = this.newTask;
      this.cardIsShown = true;
    },
    createUdemiTask(payload) {
      this.currentTask = payload;
      console.log(this.currentTask);
      this.cardIsShown = true;
    },
  },
};
</script>

<style lang="sass" scoped>
.dashboard
  display: flex

  &-container
    display: flex
    height: calc(100vh - 200px)
    max-width: 1200px

.section
  width: 200px
  margin: 0 16px

  &-header
    display: flex
    justify-content: space-between
    font-weight: bold
    font-size: 12px
    line-height: 14px
    color: #000000
    margin-top: 10px
    margin-bottom: 5px
    align-items: center

  &-plus
    font-weight: normal
    font-size: 18px
    line-height: 21px

    &:hover
      font-weight: bold

  &-body
    background-color: #E5E5E5
    border-radius: 4px
    height: calc(100% - 21px)
    padding: 6px

i.fa-plus-circle
  color: #b3b3b3
// .task
//   margin-bottom: 10px
//   background-color: white
//   border-radius: 4px
//   padding: 4px

//   &-header
//     display: flex

//   &-title
//     font-style: normal
//     font-weight: normal
//     font-size: 12px
//     line-height: 14px
//     color: #000000
//     text-align: start
//     margin-bottom: 10px

//

//   &-check
//     font-size: 16px
//     line-height: 18px
//     color: #B3B3B3
//     margin-right: 6px

//     &:hover
//       color: black

//   &-date
//     text-align: end
//     font-size: 10px
//     line-height: 12px
//     color: #B3B3B3
</style>
