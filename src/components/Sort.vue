<template>
  <div class="sort-wrapper">
    <button :class="{ active: !isShortSorting }" @click="sortingToggle">Самый дешевый</button>
    <button :class="{ active: isShortSorting }" @click="sortingToggle">Самый быстрый</button>
  </div>
</template>

<script>
export default {
  props: ['sortingToggle', 'isShortSorting'],
};
</script>

<style lang="scss" scoped>
  .sort-wrapper {
    width: 502px;
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 20px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 251px;
      height: 50px;
      text-transform: uppercase;
      border: 1px solid #DFE5EC;
      border-radius: 5px;
      background-color: #fff;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: .5px;
      cursor: pointer;
      outline: none;

      &.active {
        background-color: #2196F3;
        color: #fff;
        border: none;
      }

      &:nth-child(1) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:nth-child(2) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
</style>
