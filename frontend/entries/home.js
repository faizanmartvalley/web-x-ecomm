import { createApp } from 'vue'

import HomeSlideshow from '../components/Blocks/HomeSlideshow.vue'
import BrandsBlock from '../components/Blocks/BrandsBlock.vue'
import CategoriesBlock from '../components/Blocks/CategoriesBlock.vue'
import ProductsCarousel from '../components/Blocks/ProductsCarousel.vue'
import BannersBlock from '../components/Blocks/BannersBlock.vue'
import SaleBlock from '../components/Blocks/SaleBlock.vue'
import PostsCarousel from '../components/Blocks/PostsCarousel.vue'
import ProductsColumns from '../components/Blocks/ProductsColumns.vue'
import BlockFeatures from '../components/Blocks/BlockFeatures.vue'

const app = createApp({})

app.component('home-slideshow', HomeSlideshow)
app.component('brands-block', BrandsBlock)
app.component('categories-block', CategoriesBlock)
app.component('products-carousel', ProductsCarousel)
app.component('banners-block', BannersBlock)
app.component('sale-block', SaleBlock)
app.component('posts-carousel', PostsCarousel)
app.component('products-columns', ProductsColumns)
app.component('block-features', BlockFeatures)

app.mount('#app')
