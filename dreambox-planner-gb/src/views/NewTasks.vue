<template>
  <div class="tasks">
    <div v-for="goal in getGoals" :key="goal.id">
      <Goal :title="goal.title" />
      <Task v-for="task in getTasksByGoal(goal.id)"
            :key="task.id"
            :task="task"
            :category="getCategoryByGoal(goal.category_id)"
      />
      <NewItem :goal="goal"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Goal from "@/components/new-tasks/Goal";
import Task from "@/components/new-tasks/Task";
import NewItem from "@/components/new-tasks/NewItem";

export default {
  name: "NewTasks",
  components: {NewItem, Task, Goal},
  computed: {
    ...mapGetters(["getGoals", "getTasksWithGoals", "getCategories"])
  },
  methods: {
    getTasksByGoal(goal_id) {
      return this.getTasksWithGoals.filter((task) => {
        return task.goal_id === goal_id
      })
    },
    getCategoryByGoal(category_id) {
      const result = this.getCategories.find((category) => {
        return category.id === category_id
      })
      return result
    }
  },
}
</script>

<style lang="sass" scoped>
.tasks
  display: flex
  flex-direction: column
</style>
