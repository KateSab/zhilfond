<template>
  <div class="main" v-if="selectedUser">
    <div class="card-image">
      <img src="../assets/img/no_photo.svg" alt="" loading="lazy">
    </div>
    <div class="person-info">
      <div class="contacts">
        <p class="card-title-text">{{ selectedUser.name }}</p>
        <div class="email">
          <div class="card-text-row">
            <p class="card-item-text">email:</p>
          </div>
          <div>
            <p class="secondary-text">{{ selectedUser.email }}</p>
          </div>
        </div>
        <div class="phone">
          <div class="card-text-row">
            <p class="card-item-text">phone:</p>
          </div>
          <div>
            <p class="secondary-text">{{ selectedUser.phone }}</p>
          </div>
        </div>
      </div>
      <div class="about-contact">
        <p class="main-text">О себе:</p>
        <article class="secondary-text">{{ about }}</article>
      </div>
    </div>
  </div>
  <div v-else class="no-person-info">
    <p class="secondary-text">Выберите сотрудника, чтобы посмотреть его профиль</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedUser', 'about'])
  }
};
</script>
