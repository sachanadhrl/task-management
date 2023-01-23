import { createStore } from "vuex"

const store = createStore({
  state: {
    projects: [
      {
        name: 'Green House',
        notif: 0
      },
      {
        name: 'Cyber Punk',
        notif: 0
      },
      {
        name: 'Easy Crypto',
        notif: 1
      },
      {
        name: 'Travel App',
        notif: 0
      },
      {
        name: 'Landing Page',
        notif: 1
      },
      {
        name: 'Green Lake',
        notif: 1
      },
      {
        name: 'Green Day',
        notif: 1
      },
    ],
    tasks: {
      loading: false,
      data: [
        {
          "status": "approved",
          "description": "Create initial layout for homepage"
        },
        {
          "status": "in progress",
          "description": "Create quotation for app redesign project"
        },
        {
          "status": "in progress",
          "description": "Create quotation for app redesign project"
        },
        {
          "status": "in review",
          "description": "Discussions regarding workflow improvement"
        },
        {
          "status": "waiting",
          "description": "Discussions regarding workflow improvement"
        }
      ]
    }
  },
  actions: {
    saveTask({ state }, task) {
      state.tasks.loading = true
      setTimeout(() => {
        state.tasks.loading = false
        state.tasks.data.push(task)
      }, 1500);
    }
  }
})

export default store