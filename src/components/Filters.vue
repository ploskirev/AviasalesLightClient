<template>
  <form class="filtersWrapper">
    <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
    <input type="checkbox" value="all" id="checkAll" v-model="filters" />
    <label for="checkAll">Все</label>
    <input type="checkbox" value="0" id="checkDirect" v-model="filters" />
    <label for="checkDirect">Без пересадок</label>
    <input type="checkbox" value="1" id="check1Stop" v-model="filters" />
    <label for="check1Stop">1 Пересадка</label>
    <input type="checkbox" value="2" id="check2Stops" v-model="filters" />
    <label for="check2Stops">2 Пересадки</label>
    <input type="checkbox" value="3" id="check3Stops" v-model="filters" />
    <label for="check3Stops">3 Пересадки</label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filters: ['all'],
    };
  },
  watch: {
    filters() {
      const idx = this.filters.indexOf('all');
      if (idx === 0 && this.filters.length === 1) {
        this.$emit('checked', 'all');
      } else if (idx === this.filters.length - 1 && this.filters.length > 1) {
        this.filters = ['all'];
      } else {
        if (idx === 0 && this.filters.length !== 1) {
          this.filters = this.filters.slice(1);
        }
        this.$emit('checked', Math.max(...this.filters));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filtersWrapper {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
  padding: 20px 0;
  padding-bottom: 15px;

  h2 {
    color: #4a4a4a;
    font-size: 12px;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
    padding-left: 20px;
    text-align: left;
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
    width: 232px;
    padding-left: 20px;
    line-height: 40px;
    font-size: 13px;
    font-weight: normal;
    color: #4a4a4a;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #f1fcff;
    }

    &::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid #9abbce;
      border-radius: 2px;
      margin-right: 10px;
    }
  }

  input {
    display: none;

    &:checked + label {
      &::before {
        border-color: #2196f3;
      }

      &::after {
        content: '';
        position: absolute;
        top: 15px;
        left: 25px;
        display: block;
        width: 10px;
        height: 4px;
        transform: rotate(-44deg);
        border: 2px solid #2196f3;
        border-top: none;
        border-right: none;
      }
    }
  }
}
</style>
