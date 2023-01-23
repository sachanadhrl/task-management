<script setup>
import {
  PlusIcon,
  EllipsisHorizontalIcon,
  ArrowPathIcon,
} from "@heroicons/vue/24/outline"

const props = defineProps({
  tasks: Object,
  loading: Boolean,
})
</script>

<template>
  <div class="content-right">
    <div class="flex flex-wrap items-start gap-2">
      <div class="w-3/4">
        <h4 class="text-slate-900">Cyber Punk</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, natus aut
          quaerat cumque asperiores.
        </p>
      </div>
      <div class="w-1/4 flex justify-end items-center gap-2 -mx-2 pt-1">
        <div class="flex items-center justify-center -space-x-1">
          <div class="w-7 h-7 flex justify-center items-center border-2 border-slate-50 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" class="w-full object-cover">
          </div>
          <div class="w-7 h-7 flex justify-center items-center border-2 border-slate-50 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" class="w-full object-cover">
          </div>
          <div class="w-7 h-7 flex justify-center items-center border-2 border-slate-50 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" class="w-full object-cover">
          </div>
        </div>
        <button class="rounded-full border border-slate-500 p-1">
          <PlusIcon class="w-3 h-3" />
        </button>
      </div>
    </div>

    <div class="flex lg:hidden justify-end">
      <button
        @click="$emit('addTask')"
        class="flex items-center gap-2 bg-violet-600 rounded-lg text-slate-50 shadow-md shadow-violet-600 py-2 px-3 duration-150 mt-5"
        :class="[loading ? 'bg-violet-400' : 'hover:bg-violet-700']"
        :disabled="loading"
      >
        <ArrowPathIcon v-if="loading" class="w-4 h-4 animate-spin" />
        <PlusIcon v-else class="w-4 h-4" />
        Add task
      </button>
    </div>

    <div
      class="flex justify-between items center border-b border-slate-300 mt-5"
    >
      <h6 class="text-slate-900">Today</h6>
      <button class="text-slate-400 hover:text-slate-500">
        <EllipsisHorizontalIcon class="w-6" />
      </button>
    </div>

    <p v-if="tasks.length === 0" class="text-center mt-3">No tasks yet.</p>
    <ul v-else>
      <li
        v-for="(item, index) in tasks"
        :key="index"
        class="flex justify-between items-center mt-3"
      >
        <div class="form-group flex items-center gap-3">
          <input
            type="checkbox"
            class="form-check-input appearance-none w-5 h-5 rounded-full border border-slate-500 bg-no-repeat bg-center bg-contain align-top checked:bg-teal-500 checked:border-0"
            id="task"
            disabled
            :checked="
              item.status === 'approved' || item.status === 'in progress'
            "
          />
          <label class="form-check-label inline-block text-gray-800" for="task">
            {{ item.description }}
          </label>
        </div>
        <span
          class="min-w-[75px] lg:min-w-[95px] bg-slate-200 rounded-full capitalize font-semibold text-[10px] lg:text-xs text-center whitespace-nowrap align-baseline px-2.5 py-1"
          :class="[
            item.status === 'approved' ? 'bg-teal-100 text-teal-600' : '',
            item.status === 'in progress' ? 'bg-sky-100 text-sky-600' : '',
            item.status === 'in review' ? 'bg-orange-100 text-orange-600' : '',
          ]"
        >
          {{ item.status }}
        </span>
      </li>
    </ul>

    <div class="hidden lg:block absolute bottom-11 right-11">
      <button
        @click="$emit('addTask')"
        class="fixed bg-violet-600 rounded-xl text-slate-50 shadow-lg shadow-violet-600 p-2 duration-150"
        :class="[loading ? 'bg-violet-400' : 'hover:bg-violet-700']"
        :disabled="loading"
      >
        <ArrowPathIcon v-if="loading" class="w-4 h-4 animate-spin" />
        <PlusIcon v-else class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
