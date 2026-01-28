<template>
  <div class="block block-products-carousel" :data-layout="layout">
    <div class="container">
      <!-- Header Section -->
      <div class="section-header">
        <div class="section-header__body">
          <h2 class="section-header__title">{{ title }}</h2>
          <div class="section-header__spring"></div>
          
          <!-- Category Filter -->
          <ul class="section-header__groups">
            <li v-for="category in categories" :key="category.id" class="section-header__groups-item">
              <button 
                type="button" 
                class="section-header__groups-button"
                :class="{ 'section-header__groups-button--active': activeCategory === category.id }"
                @click="setActiveCategory(category.id)"
              >
                {{ category.name }}
              </button>
            </li>
          </ul>
          
          <!-- Navigation Arrows -->
          <div class="section-header__arrows">
            <div class="arrow section-header__arrow section-header__arrow--prev arrow--prev">
              <button class="arrow__button" type="button" @click="prevSlide">
                <svg width="7" height="11">
                  <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
                </svg>
              </button>
            </div>
            <div class="arrow section-header__arrow section-header__arrow--next arrow--next">
              <button class="arrow__button" type="button" @click="nextSlide">
                <svg width="7" height="11">
                  <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9 C-0.1,9.8-0.1,10.4,0.3,10.7z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div class="section-header__divider"></div>
        </div>
      </div>
      
      <!-- Carousel -->
      <div class="block-products-carousel__carousel">
        <div class="block-products-carousel__carousel-loader"></div>
        <div class="owl-carousel" ref="carousel">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id"
            class="block-products-carousel__column"
          >
            <div class="block-products-carousel__cell">
              <ProductCard :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import ProductCard component
import ProductCard from '../product/ProductCard.vue'

export default {
  name: 'ProductsCarousel',
  components: {
    ProductCard
  },
  data() {
    return {
      layout: 'grid-5',
      title: 'Featured Products',
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'All' },
        { id: 'power-tools', name: 'Power Tools' },
        { id: 'hand-tools', name: 'Hand Tools' },
        { id: 'plumbing', name: 'Plumbing' }
      ],
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
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'all'
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
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'power-tools'
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
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'hand-tools'
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
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'all'
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
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'plumbing'
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
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'all'
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
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'power-tools'
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
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'hand-tools'
        },
        {
          id: 9,
          name: 'Brandix Manual Five Speed Gearbox',
          sku: '855-78336-G',
          image: 'images/products/product-9-245x245.jpg',
          link: 'product-full.html',
          price: 879.00,
          oldPrice: null,
          rating: 4,
          reviews: 6,
          badges: [],
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'all'
        },
        {
          id: 10,
          name: 'Set of Car Floor Mats Brandix Z4',
          sku: '473-75662-R',
          image: 'images/products/product-10-245x245.jpg',
          link: 'product-full.html',
          price: 78.00,
          oldPrice: null,
          rating: 4,
          reviews: 16,
          badges: [],
          fitText: 'Part Fit for 2011 Ford Focus S',
          category: 'plumbing'
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      if (this.activeCategory === 'all') {
        return this.products
      }
      return this.products.filter(product => product.category === this.activeCategory)
    }
  },
  mounted() {
    this.initCarousel()
  },
  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId
    },
    
    initCarousel() {
      if (typeof window.jQuery !== 'undefined' && window.jQuery.fn.owlCarousel) {
        setTimeout(() => {
          const $carousel = window.jQuery(this.$refs.carousel)
          
          if ($carousel.hasClass('owl-loaded')) {
            $carousel.trigger('destroy.owl.carousel')
          }
          
          $carousel.owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            dots: false,
            margin: 20,
            responsive: {
              0: { items: 1 },
              576: { items: 2 },
              768: { items: 3 },
              992: { items: 4 },
              1200: { items: 5 }
            }
          })
          
          this.owlCarousel = $carousel.data('owl.carousel')
        }, 100)
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
  },
  
  beforeUnmount() {
    if (typeof window.jQuery !== 'undefined' && this.$refs.carousel) {
      const $carousel = window.jQuery(this.$refs.carousel)
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