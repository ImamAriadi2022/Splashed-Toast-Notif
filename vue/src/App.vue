<template>
    <div>
      <div id="button-container">
        <button class="btn blue" @click="addToast('help')">Show Help</button>
        <button class="btn green" @click="addToast('success')">Show Success</button>
        <button class="btn orange" @click="addToast('warning')">Show Warning</button>
        <button class="btn red" @click="addToast('error')">Show Error</button>
      </div>
      <div id="toast-container">
        <Toast v-for="toast in toasts" :key="toast.id" :toast="toast" @close="removeToast" />
      </div>
    </div>
  </template>
  
  <script>
  import Toast from './components/Toast.vue';
  
  export default {
    components: {
      Toast,
    },
    data() {
      return {
        toasts: [],
      };
    },
    methods: {
      addToast(type) {
        const newToast = {
          id: Date.now(),
          type,
          title: this.getTitle(type),
          message: this.getMessage(type),
        };
        this.toasts.push(newToast);
      },
      removeToast(id) {
        this.toasts = this.toasts.filter(toast => toast.id !== id);
      },
      getTitle(type) {
        switch (type) {
          case 'help':
            return 'Help!';
          case 'success':
            return 'Success!';
          case 'warning':
            return 'Warning!';
          case 'error':
            return 'Error!';
          default:
            return '';
        }
      },
      getMessage(type) {
        switch (type) {
          case 'help':
            return 'Do you have a problem? Just use this contact form.';
          case 'success':
            return 'Your message has been sent successfully.';
          case 'warning':
            return 'Be cautious! Something might go wrong.';
          case 'error':
            return 'An error occurred. Please try again.';
          default:
            return '';
        }
      },
    },
  };
  </script>
  