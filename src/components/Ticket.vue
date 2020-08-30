<template>
  <li class="ticket" @click="onClick(ticket)">
    <div class="top">
      <p class="price">{{ ticket.price | currencyFilter }}</p>
      <img
        width="110"
        :src="`https://pics.avs.io/99/36/${ticket.carrier}.png`"
      />
    </div>
      <TicketDetails
        v-for="segment of ticket.segments"
        :details="segment"
        :key="segment.duration + segment.depTime"
      />
  </li>
</template>

<script>
import TicketDetails from './TicketDetails.vue';

export default {
  props: ['ticket', 'onClick'],
  components: { TicketDetails },
};
</script>

<style lang="scss" scoped>
.ticket {
  width: 502px;
  padding: 20px 50px 10px 20px;
  background-color: #fff;
  transition: background-color .3s;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #F1FCFF;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .price {
      font-weight: 600;
      font-size: 24px;
      color: #2196F3;
    }
  }
}
</style>
