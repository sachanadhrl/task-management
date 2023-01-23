<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Bars3Icon } from '@heroicons/vue/24/outline'

import LeftSide from './components/LeftSide.vue'
import RightSide from './components/RightSide.vue'

const store = useStore()

const projects = computed(() => store.state.projects)

const task_status = ['waiting', 'in review', 'in progress', 'approved']
const task_desc = [
  {
    value: 'Create initial layout for homepage'
  },
  {
    value: 'Fixing icons with transparent background'
  },
  {
    value: 'Discussions regarding workflow improvement'
  },
  {
    value: 'Create quotation for app redesign project'
  },
]

const tasks_loading = computed(() => store.state.tasks.loading)
const tasks = computed(() => store.state.tasks.data)

function saveTask() {
  const status = Math.floor(Math.random() * task_status.length)
  const desc = Math.floor(Math.random() * task_desc.length)

  const randomized_task = {
    status: task_status[status],
    description: task_desc[desc].value
  }
  
  store.dispatch('saveTask', randomized_task)
}
</script>

<template>
  <button
    class="absolute top-4 right-4 lg:top-5 lg:right-auto lg:left-5 bg-slate-500/50 rounded-xl text-slate-50 p-2 z-50 hover:bg-slate-500/75 duration-150"
  >
    <Bars3Icon class="w-4 h-4" />
  </button>

  <LeftSide :projects="projects" />

  <RightSide :tasks="tasks" :loading="tasks_loading" @addTask="saveTask" />
</template>
