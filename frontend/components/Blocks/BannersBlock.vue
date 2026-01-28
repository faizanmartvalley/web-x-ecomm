<template>
  <div class="block-banners block">
    <div class="container">
      <div class="block-banners__list">
        <a 
          v-for="banner in banners" 
          :key="banner.id"
          :href="banner.link" 
          :class="['block-banners__item', `block-banners__item--style--${banner.style}`]"
        >
          <!-- Main Image -->
          <span class="block-banners__item-image">
            <img :src="banner.image" :alt="banner.title">
          </span>
          
          <!-- Blurred Image -->
          <span class="block-banners__item-image block-banners__item-image--blur">
            <img :src="banner.image" :alt="banner.title">
          </span>
          
          <!-- Title -->
          <span class="block-banners__item-title">{{ banner.title }}</span>
          
          <!-- Details -->
          <span class="block-banners__item-details" v-html="banner.details"></span>
          
          <!-- Button -->
          <span class="block-banners__item-button btn btn-primary btn-sm">
            {{ banner.buttonText }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannersBlock',
  data() {
    return {
      banners: [
        {
          id: 1,
          link: '#',
          image: 'images/banners/banner1.jpg',
          title: 'Motor Oils',
          details: 'Synthetic motor oil with free shipping<br>Friction free life guaranteed',
          buttonText: 'Shop Now',
          style: 'one'
        },
        {
          id: 2,
          link: '#',
          image: 'images/banners/banner2.jpg',
          title: 'Save up to $40',
          details: 'Luxurious interior part for real aesthetes<br>Leather, fabric, ivory and more.',
          buttonText: 'Shop Now',
          style: 'two'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* No additional styles needed - using template's CSS */
</style>