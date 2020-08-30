/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
export default {
  install(Vue) {
    Vue.prototype.$searchId = async function getSearchId() {
      let searchId = '';
      try {
        const res = await fetch('https://front-test.beta.aviasales.ru/search');
        if (res.ok) {
          searchId = res.ok && (await res.json()).searchId;
        } else {
          throw new Error('problems with server');
        }
      } catch (e) {
        console.log(e);
      }
      return searchId;
    };
    Vue.prototype.$getTickets = async function getTickets(searchId) {
      let tickets = [];
      let stop = false;
      while (!stop) {
        try {
          let res = await fetch(
            `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`,
          );
          res = await res.json();
          tickets = tickets.concat(res.tickets);
          stop = res.stop;
        } catch (e) {
          console.log(e);
        }
      }
      return tickets;
    };
    Vue.prototype.$transformTickets = function transformTickets(tickets) {
      return tickets.map((t) => {
        t.totalDuration = 0;
        t.id = Math.floor(Math.random() * 10000000);
        t.segments = t.segments.map((s, is) => {
          const depTime = Date.parse(s.date);
          const duration = s.duration * 60000;
          t.totalDuration += duration;
          const timeDelta = 240 * 60000;
          const arrivalTime = is === 0 ? depTime + duration + timeDelta
            : depTime + duration - timeDelta;
          return {
            ...s, depTime, duration, arrivalTime,
          };
        });
        return t;
      });
    };
  },
};
