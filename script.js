const { createApp } = Vue
createApp({
  data() {
    return {
      url: 'login.html'
    }
  },
  methods: {
    openPage(name) {
      if (name === 'login') this.url = 'login.html'
      if (name === 'staff') this.url = 'staff.html'
      if (name === 'attend') this.url = 'attend.html'
    },
    logout() {
      this.url = 'login.html'
      alert('已退出')
    }
  }
}).mount('#app')