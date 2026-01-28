<template>
  <div class="block block-products-columns">
    <div class="container">
      <div class="row">
        <!-- Loop through columns -->
        <div 
          v-for="column in columns" 
          :key="column.id"
          :class="['col-4', column.class]"
        >
          <div class="block-products-columns__title">{{ column.title }}</div>
          <div class="block-products-columns__list">
            <!-- Loop through products in each column -->
            <div 
              v-for="product in column.products" 
              :key="product.id"
              class="block-products-columns__list-item"
            >
              <div class="product-card">
                <!-- Quick View Button -->
                <div class="product-card__actions-list">
                  <button 
                    class="product-card__action product-card__action--quickview" 
                    type="button" 
                    aria-label="Quick view"
                    @click="quickView(product)"
                  >
                    <svg width="16" height="16">
                      <path d="M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z" />
                    </svg>
                  </button>
                </div>
                
                <!-- Product Image -->
                <div class="product-card__image">
                  <div class="image image--type--product">
                    <a :href="product.link" class="image__body">
                      <img class="image__tag" :src="product.image" :alt="product.name">
                    </a>
                  </div>
                </div>
                
                <!-- Product Info -->
                <div class="product-card__info">
                  <div class="product-card__name">
                    <div>
                      <!-- Product Badges -->
                      <div class="product-card__badges">
                        <div v-if="product.badges.includes('sale')" class="tag-badge tag-badge--sale">sale</div>
                        <div v-if="product.badges.includes('new')" class="tag-badge tag-badge--new">new</div>
                        <div v-if="product.badges.includes('hot')" class="tag-badge tag-badge--hot">hot</div>
                      </div>
                      <a :href="product.link">{{ product.name }}</a>
                    </div>
                  </div>
                  
                  <!-- Product Rating -->
                  <div class="product-card__rating">
                    <div class="rating product-card__rating-stars">
                      <div class="rating__body">
                        <div 
                          v-for="n in 5" 
                          :key="n"
                          class="rating__star"
                          :class="{ 'rating__star--active': n <= product.rating }"
                        ></div>
                      </div>
                    </div>
                    <div class="product-card__rating-label">{{ product.rating }} on {{ product.reviews }} reviews</div>
                  </div>
                </div>
                
                <!-- Product Footer (Price) -->
                <div class="product-card__footer">
                  <div class="product-card__prices">
                    <div 
                      v-if="product.oldPrice"
                      class="product-card__price product-card__price--old"
                    >
                      ${{ product.oldPrice.toFixed(2) }}
                    </div>
                    <div 
                      class="product-card__price"
                      :class="{
                        'product-card__price--current': !product.oldPrice,
                        'product-card__price--new': product.oldPrice
                      }"
                    >
                      ${{ product.price.toFixed(2) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsColumns',
  data() {
    return {
      columns: [
        {
          id: 1,
          title: 'Top Rated Products',
          class: '',
          products: [
            {
              id: 1,
              name: 'Brandix Spark Plug Kit ASR-400',
              image: 'images/products/product-1-245x245.jpg',
              link: 'product-full.html',
              price: 19.00,
              oldPrice: null,
              rating: 4,
              reviews: 3,
              badges: ['sale', 'new', 'hot']
            },
            {
              id: 2,
              name: 'Brandix Brake Kit BDX-750Z370-S',
              image: 'images/products/product-2-245x245.jpg',
              link: 'product-full.html',
              price: 224.00,
              oldPrice: null,
              rating: 5,
              reviews: 22,
              badges: []
            },
            {
              id: 3,
              name: 'Left Headlight Of Brandix Z54',
              image: 'images/products/product-3-245x245.jpg',
              link: 'product-full.html',
              price: 349.00,
              oldPrice: 415.00,
              rating: 3,
              reviews: 14,
              badges: ['sale']
            }
          ]
        },
        {
          id: 2,
          title: 'Special Offers',
          class: '',
          products: [
            {
              id: 4,
              name: 'Glossy Gray 19" Aluminium Wheel AR-19',
              image: 'images/products/product-4-245x245.jpg',
              link: 'product-full.html',
              price: 589.00,
              oldPrice: null,
              rating: 4,
              reviews: 26,
              badges: ['hot']
            },
            {
              id: 5,
              name: 'Twin Exhaust Pipe From Brandix Z54',
              image: 'images/products/product-5-245x245.jpg',
              link: 'product-full.html',
              price: 749.00,
              oldPrice: null,
              rating: 4,
              reviews: 9,
              badges: []
            },
            {
              id: 6,
              name: 'Motor Oil Level 5',
              image: 'images/products/product-6-245x245.jpg',
              link: 'product-full.html',
              price: 23.00,
              oldPrice: null,
              rating: 5,
              reviews: 2,
              badges: []
            }
          ]
        },
        {
          id: 3,
          title: 'Bestsellers',
          class: '',
          products: [
            {
              id: 7,
              name: 'Brandix Engine Block Z4',
              image: 'images/products/product-7-245x245.jpg',
              link: 'product-full.html',
              price: 452.00,
              oldPrice: null,
              rating: 0,
              reviews: 0,
              badges: []
            },
            {
              id: 8,
              name: 'Brandix Clutch Discs Z175',
              image: 'images/products/product-8-245x245.jpg',
              link: 'product-full.html',
              price: 345.00,
              oldPrice: null,
              rating: 3,
              reviews: 7,
              badges: []
            },
            {
              id: 9,
              name: 'Brandix Manual Five Speed Gearbox',
              image: 'images/products/product-9-245x245.jpg',
              link: 'product-full.html',
              price: 879.00,
              oldPrice: null,
              rating: 4,
              reviews: 6,
              badges: []
            }
          ]
        }
      ]
    }
  },
  methods: {
    quickView(product) {
      console.log('Quick view for:', product.name)
      // Emit event or open modal
      this.$emit('quick-view', product)
    }
  }
}
</script>

<style scoped>
/* No additional styles needed - using template's CSS */
</style>