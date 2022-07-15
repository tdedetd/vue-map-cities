import type { City } from '@/models/city';
import { Degrees } from '@/utils';

export const CITIES: City[] = [
  {
    name: 'Москва',
    lat: Degrees.toDecimal(55, 45, 21),
    lng: Degrees.toDecimal(37, 37, 4)
  },
  {
    name: 'Мурманск',
    lat: Degrees.toDecimal(68, 58),
    lng: Degrees.toDecimal(33, 5)
  },
  {
    name: 'Петрозаводск',
    lat: Degrees.toDecimal(61, 47, 46),
    lng: Degrees.toDecimal(34, 20, 57)
  },
  {
    name: 'Санкт-Петербург',
    lat: Degrees.toDecimal(59, 57),
    lng: Degrees.toDecimal(30, 19)
  },
  {
    name: 'Усть-Каменогорск',
    lat: Degrees.toDecimal(49, 57),
    lng: Degrees.toDecimal(82, 37)
  }
];
