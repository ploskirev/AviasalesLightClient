<template>
  <div id="app">
    <Loader v-if="isLoading" />
    <Modal v-else-if="showModal" :data="chosenTicket" :onClick="chooseTicket" />
    <div v-else class="container">
      <img
        @click="searchTickets"
        class="main-logo"
        src="./assets/Logo.png"
        alt="logo"
      />
      <div class="mainWrapper">
        <Filters @checked="changeFilter" />
        <div class="main">
          <Sort
            :sortingToggle="changeSorting"
            :isShortSorting="isShortSorting"
          />
          <p class="info-message" v-if="!filteredTickets.length">
            Не выбрана ни одна опция
          </p>
          <ul v-else class="ticketsList">
            <Ticket
              v-for="ticket of sortedTickets"
              :ticket="ticket"
              :key="ticket.id"
              :onClick="chooseTicket"
            />
          </ul>
          <button
            v-if="sortedTickets.length"
            @click="showMoreTickets"
            class="more-tickets"
          >
            Показать еще 10 билетов
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from './components/Filters.vue';
import Ticket from './components/Ticket.vue';
import Sort from './components/Sort.vue';
import Loader from './components/Loader.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Filters,
    Ticket,
    Sort,
    Loader,
    Modal,
  },
  data() {
    return {
      isLoading: true,
      tickets: [],
      filter: 'all',
      isShortSorting: false,
      ticketsShown: 10,
      showModal: false,
      chosenTicket: null,
    };
  },
  computed: {
    filteredTickets() {
      let tickets = [];
      switch (this.filter) {
        case -Infinity:
          break;
        case 0:
          tickets = this.tickets.filter((t) => t.segments.every((s) => !s.stops.length));
          break;
        case 1:
          tickets = this.tickets.filter((t) => t.segments.every((s) => s.stops.length <= 1));
          break;
        case 2:
          tickets = this.tickets.filter((t) => t.segments.every((s) => s.stops.length <= 2));
          break;
        case 3:
          tickets = this.tickets.filter((t) => t.segments.every((s) => s.stops.length <= 3));
          break;
        default:
          return [...this.tickets].sort((a, b) => a.price - b.price);
      }
      return tickets.sort((a, b) => a.price - b.price);
    },
    shortFirstTickets() {
      const tickets = [...this.filteredTickets];
      tickets.sort((a, b) => a.totalDuration - b.totalDuration);
      return tickets;
    },
    sortedTickets() {
      return this.isShortSorting
        ? this.shortFirstTickets.slice(0, this.ticketsShown)
        : this.filteredTickets.slice(0, this.ticketsShown);
    },
  },
  methods: {
    async searchTickets() {
      this.isLoading = true;
      this.tickets = this.$transformTickets(
        await this.$getTickets(await this.$searchId()),
      );
      this.isLoading = false;
    },
    changeFilter($event) {
      this.filter = $event;
    },
    changeSorting() {
      this.isShortSorting = !this.isShortSorting;
    },
    showMoreTickets() {
      this.ticketsShown += 10;
    },
    chooseTicket(ticket) {
      this.showModal = !this.showModal;
      this.chosenTicket = ticket;
    },
  },
  mounted() {
    this.searchTickets();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

body {
  background-color: #f3f7fa;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

#app {
  width: 100vw;
  margin: 0 auto;
}

.container {
  padding-top: 50px;
  text-align: center;

  .main-logo {
    cursor: pointer;
  }
}

.mainWrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
}

.filters {
  width: 250px;
}

.main {
  width: 502px;
  margin-left: 20px;
}

.info-message {
  margin-top: 50px;
  color: #4a4a4a;
}

.more-tickets {
  width: 100%;
  background-color: #2196f3;
  color: #fff;
  height: 50px;
  border-radius: 5px;
  border: none;
  outline: none;
  text-transform: uppercase;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;

  &:active {
    top: 1px;
  }
}
</style>
