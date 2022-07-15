<script lang="ts">
  import { CITIES } from '@/const/cities';
  import L from 'leaflet';

  export default {
    mounted() {
      const map = L.map('map', {
        center: [59.95, 30.31667],
        zoom: 3
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);

      CITIES.forEach(city => {
        L.marker([city.lat, city.lng], { alt: city.name })
         .bindTooltip(city.name)
         .addTo(map);
      });

      map.fitBounds(CITIES.map(city => [city.lat, city.lng]));
    }
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
