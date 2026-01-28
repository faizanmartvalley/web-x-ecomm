<template>
  <div class="block block-sale">
    <div class="block-sale__content">
      <!-- Header Section -->
      <div class="block-sale__header">
        <div class="block-sale__title">{{ title }}</div>
        <div class="block-sale__subtitle">{{ subtitle }}</div>
        
        <!-- Countdown Timer -->
        <div class="block-sale__timer">
          <div class="timer">
            <div class="timer__part">
              <div class="timer__part-value timer__part-value--days">{{ formattedTime.days }}</div>
              <div class="timer__part-label">Days</div>
            </div>
            <div class="timer__dots"></div>
            <div class="timer__part">
              <div class="timer__part-value timer__part-value--hours">{{ formattedTime.hours }}</div>
              <div class="timer__part-label">Hrs</div>
            </div>
            <div class="timer__dots"></div>
            <div class="timer__part">
              <div class="timer__part-value timer__part-value--minutes">{{ formattedTime.minutes }}</div>
              <div class="timer__part-label">Mins</div>
            </div>
            <div class="timer__dots"></div>
            <div class="timer__part">
              <div class="timer__part-value timer__part-value--seconds">{{ formattedTime.seconds }}</div>
              <div class="timer__part-label">Secs</div>
            </div>
          </div>
        </div>
        
        <!-- Controls -->
        <div class="block-sale__controls">
          <div class="arrow block-sale__arrow block-sale__arrow--prev arrow--prev">
            <button class="arrow__button" type="button" @click="prevSlide">
              <svg width="7" height="11">
                <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
              </svg>
            </button>
          </div>
          <div class="block-sale__link">
            <a :href="viewAllLink">{{ viewAllText }}</a>
          </div>
          <div class="arrow block-sale__arrow block-sale__arrow--next arrow--next">
            <button class="arrow__button" type="button" @click="nextSlide">
              <svg width="7" height="11">
                <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9 C-0.1,9.8-0.1,10.4,0.3,10.7z" />
              </svg>
            </button>
          </div>
          <div class="decor block-sale__header-decor decor--type--center">
            <div class="decor__body">
              <div class="decor__start"></div>
              <div class="decor__end"></div>
              <div class="decor__center"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Body Section with Carousel -->
      <div class="block-sale__body">
        <div class="decor block-sale__body-decor decor--type--bottom">
          <div class="decor__body">
            <div class="decor__start"></div>
            <div class="decor__end"></div>
            <div class="decor__center"></div>
          </div>
        </div>
        
        <!-- Background Image -->
        <div 
          class="block-sale__image" 
          :style="{ backgroundImage: `url('${backgroundImage}')` }"
        ></div>
        
        <div class="container">
          <div class="block-sale__carousel">
            <div class="owl-carousel" ref="carousel">
              <div 
                v-for="product in products" 
                :key="product.id"
                class="block-sale__item"
              >
                <ProductCard :product="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../product/ProductCard.vue'

export default {
  name: 'SaleBlock',
  components: {
    ProductCard
  },
  data() {
    return {
      title: 'Attention! Deal Zone',
      subtitle: 'Hurry up! Discounts up to 70%',
      viewAllText: 'View All Available Offers',
      viewAllLink: '#',
      backgroundImage: 'images/sale-1903x640.jpg',
      
      // Countdown timer (2 days from now)
      endDate: new Date(Date.now() + (2 * 24 * 60 * 60 * 1000)), // 2 days from now
      
      // Sale products
      products: [
        {
          id: 1,
          name: 'Brandix Spark Plug Kit ASR-400',
          sku: '140-10440-B',
          image: 'images/products/product-1-245x245.jpg',
          link: 'product-full.html',
          price: 19.00,
          oldPrice: null,
          rating: 4,
          reviews: 3,
          badges: ['sale', 'new', 'hot'],
          fitText: 'Part Fit for 2011 Ford Focus S'
        },
        {
          id: 2,
          name: 'Brandix Brake Kit BDX-750Z370-S',
          sku: '573-23743-C',
          image: 'images/products/product-2-245x245.jpg',
          link: 'product-full.html',
          price: 224.00,
          oldPrice: null,
          rating: 5,
          reviews: 22,
          badges: [],
          fitText: 'Part Fit for 2011 Ford Focus S'
        },
        {
          id: 3,
          name: 'Left Headlight Of Brandix Z54',
          sku: '009-50078-Z',
          image: 'images/products/product-3-245x245.jpg',
          link: 'product-full.html',
          price: 349.00,
          oldPrice: 415.00,
          rating: 3,
          reviews: 14,
          badges: ['sale'],
          fitText: 'Part Fit for 2011 Ford Focus S'
        },
        {
          id: 4,
          name: 'Glossy Gray 19" Aluminium Wheel AR-19',
          sku: 'A43-44328-B',
          image: 'images/products/product-4-245x245.jpg',
          link: 'product-full.html',
          price: 589.00,
          oldPrice: null,
          rating: 4,
          reviews: 26,
          badges: ['hot'],
          fitText: 'Part Fit for 2011 Ford Focus S'
        },
        {
          id: 5,
          name: 'Twin Exhaust Pipe From Brandix Z54',
          sku: '729-51203-B',
          image: 'images/products/product-5-245x245.jpg',
          link: 'product-full.html',
          price: 749.00,
          oldPrice: null,
          rating: 4,
          reviews: 9,
          badges: [],
          fitText: 'Part Fit for 2011 Ford Focus S'
        },
        {
          id: 6,
          name: 'Motor Oil Level 5',
          sku: '573-49386-C',
          image: 'images/products/product-6-245x245.jpg',
          link: 'product-full.html',
          price: 23.00,
          oldPrice: null,
          rating: 5,
          reviews: 2,
          badges: [],
          fitText: 'Part Fit for 2011 Ford Focus S'
        },
        {
          id: 7,
          name: 'Brandix Engine Block Z4',
          sku: '753-38573-B',
          image: 'images/products/product-7-245x245.jpg',
          link: 'product-full.html',
          price: 452.00,
          oldPrice: null,
          rating: 0,
          reviews: 0,
          badges: [],
          fitText: 'Part Fit for 2011 Ford Focus S'
        },
        {
          id: 8,
          name: 'Brandix Clutch Discs Z175',
          sku: '472-67382-Z',
          image: 'images/products/product-8-245x245.jpg',
          link: 'product-full.html',
          price: 345.00,
          oldPrice: null,
          rating: 3,
          reviews: 7,
          badges: [],
          fitText: 'Part Fit for 2011 Ford Focus S'
        }
      ],
      
      // Timer state
      timeRemaining: 0,
      timerInterval: null
    }
  },
  computed: {
    formattedTime() {
      const days = Math.floor(this.timeRemaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000)
      
      return {
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      }
    }
  },
  mounted() {
    this.startTimer()
    this.initCarousel()
  },
  beforeUnmount() {
    this.stopTimer()
    this.destroyCarousel()
  },
  methods: {
    // Timer methods
    startTimer() {
      this.updateTimeRemaining()
      this.timerInterval = setInterval(this.updateTimeRemaining, 1000)
    },
    
    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval)
      }
    },
    
    updateTimeRemaining() {
      const now = new Date()
      this.timeRemaining = this.endDate - now
      
      if (this.timeRemaining <= 0) {
        this.timeRemaining = 0
        this.stopTimer()
        // Optionally emit an event when timer finishes
        this.$emit('timer-ended')
      }
    },
    
    // Carousel methods
    initCarousel() {
      if (typeof window.jQuery !== 'undefined' && window.jQuery.fn.owlCarousel) {
        setTimeout(() => {
          const $carousel = window.jQuery(this.$refs.carousel)
          
          if ($carousel.hasClass('owl-loaded')) {
            $carousel.trigger('destroy.owl.carousel')
          }
          
          $carousel.owlCarousel({
            items: 4,
            loop: true,
            nav: false,
            dots: false,
            margin: 20,
            responsive: {
              0: { items: 1 },
              576: { items: 2 },
              768: { items: 3 },
              992: { items: 4 }
            }
          })
          
          this.owlCarousel = $carousel.data('owl.carousel')
        }, 100)
      }
    },
    
    destroyCarousel() {
      if (typeof window.jQuery !== 'undefined' && this.$refs.carousel) {
        const $carousel = window.jQuery(this.$refs.carousel)
        if ($carousel.length && $carousel.hasClass('owl-loaded')) {
          $carousel.trigger('destroy.owl.carousel')
        }
      }
    },
    
    prevSlide() {
      if (this.owlCarousel) {
        window.jQuery(this.$refs.carousel).trigger('prev.owl.carousel')
      }
    },
    
    nextSlide() {
      if (this.owlCarousel) {
        window.jQuery(this.$refs.carousel).trigger('next.owl.carousel')
      }
    }
  }
}
</script>

<style scoped>
/* No additional styles needed - using template's CSS */
</style>