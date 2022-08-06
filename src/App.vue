<script lang="ts" setup>
  import MapView from './components/MapView.vue';
  import { CITIES } from '@/const/cities';
</script>

<template>
  <MapView v-bind:cities="CITIES"></MapView>
</template>
