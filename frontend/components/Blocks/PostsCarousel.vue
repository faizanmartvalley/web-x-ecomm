<template>
  <div class="block block-posts-carousel block-posts-carousel--layout--list" :data-layout="layout">
    <div class="container">
      <!-- Header Section -->
      <div class="section-header">
        <div class="section-header__body">
          <h2 class="section-header__title">{{ title }}</h2>
          <div class="section-header__spring"></div>
          
          <!-- Category Links -->
          <ul class="section-header__links">
            <li 
              v-for="link in categoryLinks" 
              :key="link.text"
              class="section-header__links-item"
            >
              <a :href="link.href" class="section-header__links-link">{{ link.text }}</a>
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
      
      <!-- Posts Carousel -->
      <div class="block-posts-carousel__carousel">
        <div class="owl-carousel" ref="carousel">
          <div 
            v-for="post in posts" 
            :key="post.id"
            class="block-posts-carousel__item"
          >
            <div class="post-card">
              <!-- Post Image -->
              <div class="post-card__image">
                <a :href="post.link">
                  <img :src="post.image" :alt="post.title">
                </a>
              </div>
              
              <!-- Post Content -->
              <div class="post-card__content">
                <!-- Category -->
                <div class="post-card__category">
                  <a :href="post.categoryLink">{{ post.category }}</a>
                </div>
                
                <!-- Title -->
                <div class="post-card__title">
                  <h2><a :href="post.link">{{ post.title }}</a></h2>
                </div>
                
                <!-- Date and Author -->
                <div class="post-card__date">
                  By <a :href="post.authorLink">{{ post.author }}</a> on {{ formatDate(post.date) }}
                </div>
                
                <!-- Excerpt -->
                <div class="post-card__excerpt">
                  <div class="typography">
                    {{ post.excerpt }}
                  </div>
                </div>
                
                <!-- Read More Button -->
                <div class="post-card__more">
                  <a :href="post.link" class="btn btn-secondary btn-sm">Read more</a>
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
  name: 'PostsCarousel',
  data() {
    return {
      layout: 'list',
      title: 'Latest News',
      categoryLinks: [
        { text: 'Special Offers', href: '#' },
        { text: 'New Arrivals', href: '#' },
        { text: 'Reviews', href: '#' }
      ],
      posts: [
        {
          id: 1,
          title: 'Philosophy That Addresses Topics Such As Goodness',
          image: 'images/posts/post-1-730x485.jpg',
          link: 'post-full-width.html',
          category: 'Special Offers',
          categoryLink: 'blog-classic-right-sidebar.html',
          author: 'Jessica Moore',
          authorLink: '#',
          date: '2019-10-19',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.'
        },
        {
          id: 2,
          title: 'Logic Is The Study Of Reasoning And Argument Part 2',
          image: 'images/posts/post-2-730x485.jpg',
          link: 'post-full-width.html',
          category: 'Latest News',
          categoryLink: 'blog-classic-right-sidebar.html',
          author: 'Jessica Moore',
          authorLink: '#',
          date: '2019-09-05',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.'
        },
        {
          id: 3,
          title: 'Some Philosophers Specialize In One Or More Historical Periods',
          image: 'images/posts/post-3-730x485.jpg',
          link: 'post-full-width.html',
          category: 'New Arrivals',
          categoryLink: 'blog-classic-right-sidebar.html',
          author: 'Jessica Moore',
          authorLink: '#',
          date: '2019-08-12',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.'
        },
        {
          id: 4,
          title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
          image: 'images/posts/post-4-730x485.jpg',
          link: 'post-full-width.html',
          category: 'Special Offers',
          categoryLink: 'blog-classic-right-sidebar.html',
          author: 'Jessica Moore',
          authorLink: '#',
          date: '2019-07-30',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.'
        },
        {
          id: 5,
          title: 'Germany Was The First Country To Professionalize Philosophy',
          image: 'images/posts/post-5-730x485.jpg',
          link: 'post-full-width.html',
          category: 'New Arrivals',
          categoryLink: 'blog-classic-right-sidebar.html',
          author: 'Jessica Moore',
          authorLink: '#',
          date: '2019-06-12',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.'
        },
        {
          id: 6,
          title: 'Logic Is The Study Of Reasoning And Argument Part 1',
          image: 'images/posts/post-6-730x485.jpg',
          link: 'post-full-width.html',
          category: 'Special Offers',
          categoryLink: 'blog-classic-right-sidebar.html',
          author: 'Jessica Moore',
          authorLink: '#',
          date: '2019-05-21',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.'
        }
      ]
    }
  },
  mounted() {
    this.initCarousel()
  },
  beforeUnmount() {
    this.destroyCarousel()
  },
  methods: {
    // Format date to display format
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = { month: 'long', day: 'numeric', year: 'numeric' }
      return date.toLocaleDateString('en-US', options)
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
            items: 3,
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            responsive: {
              0: { items: 1 },
              576: { items: 2 },
              992: { items: 3 }
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