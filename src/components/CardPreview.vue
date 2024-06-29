<template>
  <div class="card-preview" @click="handleSelect">
    <div class="card-preview-img">
      <img src="../assets/img/no_photo.svg" alt="" loading="lazy">
    </div>
    <div class="card-preview-info">
      <p class="main-text">{{ user.username }}</p>
      <p class="secondary-text">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSelect() {
      this.$emit('select', this.user);
    }
  }
};
</script>
