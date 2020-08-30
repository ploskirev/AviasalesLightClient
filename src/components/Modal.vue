<template>
  <div class="modal-wrapper" @click="onClick(null)">
    <div class="modal-content">
      <button @click.stop="onClick(null)">закрыть</button>
      <h1>Ваш выбор:</h1>
      <Ticket :ticket="data" />
    </div>
  </div>
</template>

<script>
import Ticket from './Ticket.vue';

export default {
  components: { Ticket },
  props: ['data', 'onClick'],

};
</script>

<style lang="scss" scoped>
  .modal-wrapper {
    position: fixed;
    top: 0;
    height: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2196F3;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
      position: relative;

      button {
        position: absolute;
        top: -100px;
        right: -100px;
        border: none;
        outline: none;
        background-color: transparent;
        color: #fff;
        cursor: pointer;
      }

      h1 {
        color: #fff;
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
      }
    }
  }

  li {
    list-style: none;
  }
</style>
