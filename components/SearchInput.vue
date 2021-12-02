<template>
  <div class="w-100">
    <form class="search-form" @submit.prevent="shortenUrl">
      <input type="search" v-if="!shortenedUrl" value="" placeholder="" class="search-input" v-model="url"/>
      <input type="search" v-else disabled value="shortenedUrl" placeholder="" class="search-input" v-model="shortenedUrl"/>
      <button type="submit" class="search-button">
        <svg class="submit-button">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="link"
            class="svg-inline--fa fa-link fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
            ></path>
          </svg>
        </svg>
      </button>
      <div class="search-option"></div>
    </form>


  </div>
</template>

<script>
export default {
    data(){
        return {
            url: "",
            shortenedUrl: ""
        }
    },
    methods: {
        async shortenUrl(){
            const response = await this.$axios.post("https://mubo.one/create-url", {url: this.url})
            this.shortenedUrl = "https://mubo.one/" + response.data.code;
        }
    }
}
</script>

<style lang="scss">
/*--------------------
Body
--------------------*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

$color: #e24040;

/*--------------------
App
--------------------*/
.search-form {
  position: relative;
  width: 100%;
  height: 60px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  transition: all 0.3s ease;

  &.focus {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
}

.search-input {
  position: absolute;
  top: 10px;
  padding-left: 45px;
  font-size: 24px;
  background: none;
  color: #5a6674;
  width: 100%;
  border: none;
  appearance: none;
  outline: none;

  &::-webkit-search-cancel-button {
    appearance: none;
  }
}

.search-button {
  position: absolute;
  top: 15px;
  left: 15px;
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none !important;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
    fill: #5a6674;
  }
}

.search-option {
  position: absolute;
  text-align: right;
  top: 10px;
  right: 15px;

  div {
    position: relative;
    display: inline-block;
    margin: 0 1px;
    cursor: pointer;

    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.01;
      cursor: pointer;
    }

    span {
      position: absolute;
      display: block;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      background: #929aa3;
      color: #fff;
      font-size: 9px;
      letter-spacing: 1px;
      line-height: 1;
      text-transform: uppercase;
      padding: 4px 7px;
      border-radius: 12px;
      top: -18px;
      transition: all 0.2s ease-in-out;

      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        transform: translateX(-50%);
        border-top: 4px solid #929aa3;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        transition: all 0.2s ease-in-out;
      }
    }

    &:hover span {
      opacity: 1;
      top: -21px;
    }

    label {
      display: block;
      cursor: pointer;
    }

    svg {
      height: 20px;
      width: 20px;
      fill: #5a6674;
      opacity: 0.6;
      transition: all 0.2s ease-in-out;
      pointer-events: none;
    }

    &:hover svg {
      opacity: 1;
    }

    input:checked + label svg {
      fill: $color;
      opacity: 0.9;
    }

    input:checked + label span {
      background: $color;

      &::after {
        border-top-color: $color;
      }
    }
  }
}
</style>