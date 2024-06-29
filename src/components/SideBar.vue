<template>
  <div class="search">
    <p class="main-text">
      Поиск сотрудников
    </p>
    <input 
      class="search-input secondary-text" 
      type="text" 
      placeholder="Введите Id или имя" 
      v-model="query" 
      @input="debouncedOnSearch" 
    >
  </div>
  <div class="results-search">
    <p class="main-text">
      Результаты
    </p>
    <div v-show="isLoading" class="loader">
      <div class="loader-circle"></div>
    </div>
    <div class="results-search-items">
        <p v-show="users.length === 0 && query === ''" class="secondary-text">начните поиск</p>
        <p v-show="users.length === 0 && query !== ''" class="secondary-text">ничего не найдено</p>
        <div>
          <CardPreview 
            v-for="user in users" 
            :key="user.id" 
            :user="user" 
            @select="handleSelect(user)"
          />
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { debounce } from '../utils/debounce';
import CardPreview from './CardPreview.vue';

export default {
  components: {
    CardPreview
  },
  data() {
    return {
      query: '',
    };
  },
  computed: {
    ...mapState(['users', 'error', 'isLoading'])
  },
  methods: {
    ...mapActions(['fetchUsers', 'selectUser', 'clearUsers']),
    onSearch() {
      if (this.query) {
        const query = this.buildQuery(this.query);
        console.log("query: " + query);
        this.fetchUsers(query);
      } else {
        this.clearUsers();
      }
    },
    debouncedOnSearch: debounce(function () {
      this.onSearch();
    }, 300),
    buildQuery(query) {
      let ids = '';
      const queryArray = query.split(',').map(item => item.trim());

      if (queryArray.every(item => !isNaN(item))) {
        ids = queryArray.map(id => `id=${id}`).join('&');
      } else {
        ids = queryArray.map(username => `username=${username}`).join('&');
      }
      return ids;
    },
    handleSelect(user) {
      this.selectUser(user);
    },
  }
}
</script>
