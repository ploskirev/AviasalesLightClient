<template>
  <div class="detailWrapper bottom">
    <div class="route">
      <div class="route-label">
        {{ details.origin }} - {{ details.destination }}
      </div>
      <div class="route-info">
        {{ details.arrivalTime | timeFilter }}
        -
        {{ details.depTime | timeFilter }}
      </div>
    </div>
    <div class="duration">
      <div class="duration-label">В ПУТИ</div>
      <div class="duration-info">
        {{ details.duration | durationFilter }}
      </div>
    </div>
    <div class="stops">
      <div class="stops-label">{{ details.stops.length | stopsFilter }}</div>
      <div class="stops-info">
        {{ details.stops.join(', ') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['details'],
};
</script>

<style lang="scss" scoped>
.detailWrapper {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: initial;
  cursor: pointer;

  .route {
    min-width: 90px;
  }

  .stops {
    min-width: 110px;
  }

  [class$='label'] {
    font-size: 12px;
    color: #a0b0b9;
    letter-spacing: 0.5px;
    line-height: 18px;
  }

  [class$='info'] {
    color: #4a4a4a;
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
