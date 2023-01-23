<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  projects: Object,
});

// project remain
const large_view = props.projects.length - 5;
const medium_view = props.projects.length - 3;
const small_view = props.projects.length - 2;

// get initial name
function nameInitials(name) {
  const initial = name.split(" ");
  return `${initial[0].charAt(0)}${initial[1] ? initial[1].charAt(0) : ""}`;
}
</script>

<template>
  <div class="content-left">
    <h3 class="text-slate-50">Hi Samantha</h3>
    <p>Welcome back to the workspace, we missed You!</p>

    <form class="mt-6">
      <div class="input-group">
        <MagnifyingGlassIcon />
        <input type="text" placeholder="Search Task or Project..." />
      </div>
    </form>

    <div class="my-10 lg:mt-10 lg:mb-0">
      <h6 class="text-slate-50">
        Projects
        <span class="text-slate-500 text-sm ml-1.5">
          ({{ projects.length }})
        </span>
      </h6>

      <!-- /.Desktop & mobile view -->
      <div class="grid md:hidden lg:grid grid-cols-3 gap-5">
        <!-- /.Desktop view -->
        <div
          v-for="(item, index) in projects.slice(0, 5)"
          :key="index"
          class="hidden lg:flex flex-col items-center gap-3"
        >
          <div
            class="relative aspect-square w-full bg-sky-500/30 rounded-xl hover:cursor-pointer hover:ring-2 hover:ring-sky-500/30 hover:ring-offset-[3px] hover:ring-offset-slate-900 duration-200"
          >
            <h5
              class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-50"
            >
              {{ nameInitials(item.name) }}
            </h5>
            <span
              v-if="item.notif > 0"
              class="w-4 h-4 bg-slate-50 rounded-full absolute -top-1 -right-1 border-[3px] border-slate-900"
            ></span>
          </div>
          <p class="text-slate-200">{{ item.name }}</p>
        </div>
        <!-- /.Mobile view -->
        <div
          v-for="(item, index) in projects.slice(0, 2)"
          :key="index"
          class="flex lg:hidden flex-col items-center gap-3"
        >
          <div
            class="relative aspect-square w-full bg-sky-500/30 rounded-xl hover:cursor-pointer hover:ring-2 hover:ring-sky-500/30 hover:ring-offset-[3px] hover:ring-offset-slate-900 duration-200"
          >
            <h5
              class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-50"
            >
              {{ nameInitials(item.name) }}
            </h5>
            <span
              v-if="item.notif > 0"
              class="w-4 h-4 bg-slate-50 rounded-full absolute -top-1 -right-1 border-[3px] border-slate-900"
            ></span>
          </div>
          <p class="text-slate-200">{{ item.name }}</p>
        </div>
        <div class="flex flex-col items-center gap-5">
          <div
            class="relative aspect-square w-full bg-slate-500/30 rounded-xl hover:bg-slate-500/50 duration-200 hover:cursor-pointer"
          >
            <h5
              class="hidden lg:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-50"
            >
              {{ large_view }}+
            </h5>
            <h5
              class="block lg:hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-50"
            >
              {{ small_view }}+
            </h5>
          </div>
        </div>
      </div>
      <!-- /.Desktop & mobile view -->

      <!-- /.Tablet view -->
      <div class="hidden md:grid lg:hidden grid-cols-4 gap-5">
        <div
          v-for="(item, index) in projects.slice(0, 3)"
          :key="index"
          class="flex flex-col items-center gap-3"
        >
          <div
            class="relative aspect-square w-full bg-sky-500/30 rounded-xl hover:cursor-pointer hover:ring-2 hover:ring-sky-500/30 hover:ring-offset-[3px] hover:ring-offset-slate-900 duration-200"
          >
            <h5
              class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-50"
            >
              {{ nameInitials(item.name) }}
            </h5>
            <span
              v-if="item.notif > 0"
              class="w-4 h-4 bg-slate-50 rounded-full absolute -top-1 -right-1 border-[3px] border-slate-900"
            ></span>
          </div>
          <p class="text-slate-200">{{ item.name }}</p>
        </div>
        <div class="flex flex-col items-center gap-5">
          <div
            class="relative aspect-square w-full bg-slate-500/30 rounded-xl hover:bg-slate-500/50 duration-200 hover:cursor-pointer"
          >
            <h5
              class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-50"
            >
              {{ medium_view }}+
            </h5>
          </div>
        </div>
      </div>
      <!-- /.Tablet view -->
    </div>
  </div>
</template>
