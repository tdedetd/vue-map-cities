<script lang="ts">
  import L from 'leaflet';

  export default {
    props: {
      cities: Object
    },
    mounted() {
      const vm = this;

      const map = L.map('map', {
        center: [59.95, 30.31667],
        zoom: 3
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);

      vm.cities.forEach(city => {
        L.marker([city.lat, city.lng], { alt: city.name })
         .bindTooltip(city.name)
         .addTo(map);
      });

      map.fitBounds(vm.cities.map(city => [city.lat, city.lng]));
    },
  };
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
  #map {
    width: 640px;
    height: 480px;
  }
</style>
