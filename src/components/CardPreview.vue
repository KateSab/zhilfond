<template>
  <div class="card-preview" @click="handleSelect">
    <div class="card-preview-img">
      <img src="../assets/img/no_photo.svg" alt="" loading="lazy">
    </div>
    <div 
      class="card-preview-info"             
      @mouseover="handleMouseOver(user.id)"
      @mouseout="handleMouseOut(user.id)"
      @click="handleClick(user.id)"
      :class="{'hovered': hoveredUserId === user.id, 'selected': selectedUserId === user.id}"
    >
      <p class="main-text">{{ user.username }}</p>
      <p class="secondary-text">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredUserId: null,
      selectedUserId: null
    };
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSelect() {
      this.$emit('select', this.user);
    },
    handleMouseOver(userId) {
      if (this.selectedUserId !== userId) {
        this.hoveredUserId = userId;
      }
    },
    handleMouseOut(userId) {
      if (this.hoveredUserId === userId) {
        this.hoveredUserId = null;
      }
    },
    handleClick(userId) {
      this.selectedUserId = userId;
      this.hoveredUserId = null; // Убираем эффект наведения при клике
    },
  }
};
</script>

<style scoped>
.hovered {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #e0e0e097;
}

.selected {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #E0E0E0;
}
</style>