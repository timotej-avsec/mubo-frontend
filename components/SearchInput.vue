<template>
  <div class="w-100 mb-5">
    <form
      class="search-form d-flex justify-content-center"
      @submit.prevent="shortenUrl"
    >
      <div class="search_box">
        <input
          type="text"
          placeholder="Which URL would you like to shorten?"
          v-model="url"
        />
        <i class="fas fa-search"></i>
        <div class="new-url mt-3 p-2">
          <span>
            Shortened link: <bold><a :href="shortenedUrl">{{ shortenedUrl }}</a></bold>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      shortenedUrl: '',
    }
  },
  methods: {
    async shortenUrl() {
      const response = await this.$axios.post('https://mubo.one/create-url', {
        url: this.url,
      })
      this.shortenedUrl = 'https://mubo.one/' + response.data.code
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.wrapper {
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search_box {
  width: 50%;
  position: relative;
}

.search_box input[type='text'] {
  width: 100%;
  padding: 20px;
  padding-right: 60px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  outline: none;
}

.fa-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 25px;
  color: #fff;
  font-size: 25px;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #fff;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #fff;
}

@media screen and (max-width: 425px) {
  .search_box {
    width: 95%;
  }
}

.new-url{
  color: white;
  background-color: rgba(0, 0, 0, 0.6);;
  border-radius: 10px;
}
</style>