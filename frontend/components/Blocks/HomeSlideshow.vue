<template>
  <div class="block block-slideshow">
    <div class="container">
      <div class="block-slideshow__carousel">
        <div class="owl-carousel">
          <a 
            v-for="slide in slides" 
            :key="slide.id"
            :href="slide.link" 
            class="block-slideshow__item"
          >
            <!-- Desktop Image -->
            <span 
              class="block-slideshow__item-image block-slideshow__item-image--desktop" 
              :style="{ backgroundImage: `url('${slide.imageDesktop}')` }"
            ></span>
            
            <!-- Mobile Image -->
            <span 
              class="block-slideshow__item-image block-slideshow__item-image--mobile" 
              :style="{ backgroundImage: `url('${slide.imageMobile}')` }"
            ></span>
            
            <!-- Offer Text (Conditional) -->
            <span 
              v-if="slide.offer" 
              class="block-slideshow__item-offer"
            >
              {{ slide.offer }}
            </span>
            
            <!-- Title -->
            <span class="block-slideshow__item-title" v-html="slide.title"></span>
            
            <!-- Details -->
            <span class="block-slideshow__item-details" v-html="slide.details"></span>
            
            <!-- Button -->
            <span class="block-slideshow__item-button">
              {{ slide.buttonText }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSlideshow',
  data() {
    return {
      slides: [
        {
          id: 1,
          link: '#',
          imageDesktop: '/public/images/slides/homeSlider-3.webp',
          imageMobile: 'images/slides/slide-3-mobile.jpg',
          offer: '30% OFF',
          title: 'When Buying Parts <br> With Installation',
          details: 'Installation of parts in the services of<br>our partners.',
          buttonText: 'Shop Now'
        },
        {
          id: 2,
          link: '#',
          imageDesktop: '/public/images/slides/homeSlider.webp',
          imageMobile: 'images/slides/slide-2-mobile.jpg',
          offer: '',
          title: 'Not enough<br>spare parts?',
          details: 'We have everything you need – replacement parts,<br>performance parts, accessories, oil & fluids,<br>tools and much more...',
          buttonText: 'Shop Now'
        },
        {
          id: 3,
          link: '#',
          imageDesktop: '/public/images/slides/homeSlider-3.webp',
          imageMobile: 'images/slides/slide-1-mobile.jpg',
          offer: '30% OFF',
          title: 'Big Choice Of<br>Wheel Tires',
          details: 'Any size and diameter, with or without spikes,<br>summer or winter, rain or snow.',
          buttonText: 'Shop Now'
        }
      ]
    }
  },
  mounted() {
    this.initCarousel()
  },
  methods: {
    initCarousel() {
      // Initialize Owl Carousel after component mounts
      if (typeof $ !== 'undefined' && $.fn.owlCarousel) {
        const $carousel = $('.owl-carousel')
        
        // Check if carousel is already initialized
        if ($carousel.hasClass('owl-loaded')) {
          $carousel.trigger('destroy.owl.carousel')
        }
        
        $carousel.owlCarousel({
          items: 1,
          loop: true,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn'
        })
      } else {
        console.warn('jQuery or Owl Carousel not loaded')
        // You could add a fallback or retry logic here
      }
    }
  },
  beforeUnmount() {
    // Clean up carousel when component is destroyed
    if (typeof $ !== 'undefined') {
      const $carousel = $('.owl-carousel')
      if ($carousel.length && $carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel')
      }
    }
  }
}
</script>

<style scoped>
/* No additional styles needed - using template's CSS */
</style>