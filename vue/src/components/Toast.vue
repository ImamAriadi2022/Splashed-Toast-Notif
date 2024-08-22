<template>
    <div :class="['toast', toast.type]">
      <div class="icon">{{ getIcon(toast.type) }}</div>
      <div class="content">
        <div class="title">{{ toast.title }}</div>
        <div class="message">{{ toast.message }}</div>
      </div>
      <div class="close-btn" @click="close">&times;</div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['toast'],
    mounted() {
      this.autoClose = setTimeout(() => {
        this.close();
      }, 5000);
    },
    beforeDestroy() {
      clearTimeout(this.autoClose);
    },
    methods: {
      close() {
        this.$emit('close', this.toast.id);
      },
      getIcon(type) {
        switch (type) {
          case 'help':
            return '?';
          case 'success':
            return '✔️';
          case 'warning':
            return '⚠️';
          case 'error':
            return '❌';
          default:
            return '';
        }
      },
    },
  };
  </script>
  