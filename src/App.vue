<script setup lang="ts">
  import L from 'leaflet';

  setTimeout(() => {
    const map = L.map('map', {
      center: [59.95, 30.31667],
      zoom: 10
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);
  });
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
