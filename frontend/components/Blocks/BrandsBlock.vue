<template>
  <div class="block block-brands block-brands--layout--columns-8-full">
    <div class="container">
      <ul class="block-brands__list">
        <template v-for="(brand, index) in brands" :key="brand.id">
          <li class="block-brands__item">
            <a :href="brand.link" class="block-brands__item-link">
              <img :src="brand.image" :alt="brand.name">
              <span class="block-brands__item-name">{{ brand.name }}</span>
            </a>
          </li>
          
          <!-- Add divider after each brand except the last one -->
          <li 
            v-if="index < brands.length - 1" 
            class="block-brands__divider" 
            role="presentation"
          ></li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandsBlock',
  data() {
    return {
      brands: [
        { id: 1, name: 'AimParts', image: 'images/brands/brand-1.png', link: '#' },
        { id: 2, name: 'WindEngine', image: 'images/brands/brand-2.png', link: '#' },
        { id: 3, name: 'TurboElectric', image: 'images/brands/brand-3.png', link: '#' },
        { id: 4, name: 'StartOne', image: 'images/brands/brand-4.png', link: '#' },
        { id: 5, name: 'Brandix', image: 'images/brands/brand-5.png', link: '#' },
        { id: 6, name: 'ABS-Brand', image: 'images/brands/brand-6.png', link: '#' },
        { id: 7, name: 'GreatCircle', image: 'images/brands/brand-7.png', link: '#' },
        { id: 8, name: 'JustRomb', image: 'images/brands/brand-8.png', link: '#' },
        { id: 9, name: 'FastWheels', image: 'images/brands/brand-9.png', link: '#' },
        { id: 10, name: 'Stroyka-X', image: 'images/brands/brand-10.png', link: '#' },
        { id: 11, name: 'Mission-51', image: 'images/brands/brand-11.png', link: '#' },
        { id: 12, name: 'FuelCorp', image: 'images/brands/brand-12.png', link: '#' },
        { id: 13, name: 'RedGate', image: 'images/brands/brand-13.png', link: '#' },
        { id: 14, name: 'Blocks', image: 'images/brands/brand-14.png', link: '#' },
        { id: 15, name: 'BlackBox', image: 'images/brands/brand-15.png', link: '#' },
        { id: 16, name: 'SquareGarage', image: 'images/brands/brand-16.png', link: '#' }
      ]
    }
  }
}
</script>

<style scoped>
/* No additional styles needed - using template's CSS */
</style>