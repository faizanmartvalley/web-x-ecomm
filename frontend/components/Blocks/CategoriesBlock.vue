<template>
  <div class="block block-categories">
    <div class="container">
      <div class="block-categories__header">
        <div class="block-categories__title">
          {{ title }}
          <div class="decor block-categories__title-decor decor--type--center">
            <div class="decor__body">
              <div class="decor__start"></div>
              <div class="decor__end"></div>
              <div class="decor__center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="block-categories__body">
      <div class="decor block-categories__body-decor decor--type--bottom">
        <div class="decor__body">
          <div class="decor__start"></div>
          <div class="decor__end"></div>
          <div class="decor__center"></div>
        </div>
      </div>
      
      <div class="container">
        <div class="block-categories__list">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="block-categories__item category-card category-card--layout--classic"
          >
            <div class="category-card__body">
              <div class="category-card__content">
                <!-- Category Image -->
                <div class="category-card__image image image--type--category">
                  <a :href="category.mainLink" class="image__body">
                    <img class="image__tag" :src="category.image" :alt="category.name">
                  </a>
                </div>
                
                <!-- Category Info -->
                <div class="category-card__info">
                  <!-- Category Name -->
                  <div class="category-card__name">
                    <a :href="category.mainLink">{{ category.name }}</a>
                  </div>
                  
                  <!-- Sub-categories -->
                  <ul class="category-card__children">
                    <li v-for="child in category.children" :key="child.name">
                      <a :href="child.link">{{ child.name }}</a>
                    </li>
                  </ul>
                  
                  <!-- Shop All Link -->
                  <div class="category-card__actions">
                    <a :href="category.mainLink" class="category-card__link">Shop All</a>
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
  name: 'CategoriesBlock',
  data() {
    return {
      title: 'Popular Categories',
      categories: [
        {
          id: 1,
          name: 'Headlights',
          image: 'images/categories/category-1-160x160.jpg',
          mainLink: '#',
          children: [
            { name: 'Headlights', link: '#' },
            { name: 'Tail Lights', link: '#' },
            { name: 'Fog Lights', link: '#' },
            { name: 'Turn Signals', link: '#' },
            { name: 'Switches & Relays', link: '#' }
          ]
        },
        {
          id: 2,
          name: 'Fuel System',
          image: 'images/categories/category-2-160x160.jpg',
          mainLink: '#',
          children: [
            { name: 'Fuel Pumps', link: '#' },
            { name: 'Motor Oil', link: '#' },
            { name: 'Spark Plugs', link: '#' },
            { name: 'Fuel Injector', link: '#' },
            { name: 'Control Motor', link: '#' }
          ]
        },
        {
          id: 3,
          name: 'Body Parts',
          image: 'images/categories/category-3-160x160.jpg',
          mainLink: '#',
          children: [
            { name: 'Bumpers', link: '#' },
            { name: 'Hoods', link: '#' },
            { name: 'Grilles', link: '#' },
            { name: 'Fog Lights', link: '#' },
            { name: 'Door Handles', link: '#' }
          ]
        },
        {
          id: 4,
          name: 'Interior Parts',
          image: 'images/categories/category-4-160x160.jpg',
          mainLink: '#',
          children: [
            { name: 'Dashboards', link: '#' },
            { name: 'Seat Covers', link: '#' },
            { name: 'Floor Mats', link: '#' },
            { name: 'Sun Shades', link: '#' },
            { name: 'Visors', link: '#' }
          ]
        },
        {
          id: 5,
          name: 'Wheels & Tires',
          image: 'images/categories/category-5-160x160.jpg',
          mainLink: '#',
          children: [
            { name: 'Wheel Covers', link: '#' },
            { name: 'Brake Kits', link: '#' },
            { name: 'Tire Chains', link: '#' },
            { name: 'Wheel disks', link: '#' },
            { name: 'Tires', link: '#' }
          ]
        },
        {
          id: 6,
          name: 'Engine & Drivetrain',
          image: '/public/images/audi/audi.jpg',
          mainLink: '#',
          children: [
            { name: 'Air Filters', link: '#' },
            { name: 'Oxygen Sensors', link: '#' },
            { name: 'Heating', link: '#' },
            { name: 'Exhaust', link: '#' },
            { name: 'Cranks & Pistons', link: '#' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
/* No additional styles needed - using template's CSS */
</style>