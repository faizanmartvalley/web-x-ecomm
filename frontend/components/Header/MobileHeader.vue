<template>
  <div>
    <!-- Mobile Header -->
    <header class="site__mobile-header">
      <div class="mobile-header">
        <div class="container">
          <div class="mobile-header__body">
            <!-- Menu Button -->
            <button class="mobile-header__menu-button" type="button" @click="showMobileMenu = true">
              <svg width="18px" height="14px">
                <path d="M-0,8L-0,6L18,6L18,8L-0,8ZM-0,-0L18,-0L18,2L-0,2L-0,-0ZM14,14L-0,14L-0,12L14,12L14,14Z" />
              </svg>
            </button>
            
            <!-- Logo -->
            <a class="mobile-header__logo" href="/">
              <!-- Your logo SVG -->
            </a>
            
            <!-- Cart Icon -->
            <div class="mobile-header__indicators">
              <div class="mobile-indicator">
                <a href="cart.html" class="mobile-indicator__button">
                  <span class="mobile-indicator__icon">
                    <svg width="20" height="20">
                      <circle cx="7" cy="17" r="2" />
                      <circle cx="15" cy="17" r="2" />
                      <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z" />
                    </svg>
                    <span class="mobile-indicator__counter">3</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Menu -->
    <!-- Mobile Menu - USE THIS LINE INSTEAD -->
<div class="mobile-menu" v-show="showMobileMenu">
      <div class="mobile-menu__backdrop" @click="showMobileMenu = false"></div>
      <div class="mobile-menu__body">
        <button class="mobile-menu__close" type="button" @click="showMobileMenu = false">
          <svg width="12" height="12">
            <path d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4C11.2,9.8,11.2,10.4,10.8,10.8z" />
          </svg>
        </button>
        
        <div class="mobile-menu__panel">
          <div class="mobile-menu__panel-header">
            <div class="mobile-menu__panel-title">Menu</div>
          </div>
          
          <div class="mobile-menu__panel-body">
            <!-- Simple Menu Links -->
            <ul class="mobile-menu__links">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/account">Account</a></li>
            </ul>
            
            <div class="mobile-menu__spring"></div>
            <div class="mobile-menu__divider"></div>
            
            <a class="mobile-menu__contacts" href="tel:8000600730">
              <div class="mobile-menu__contacts-subtitle">Free call 24/7</div>
              <div class="mobile-menu__contacts-title">800 060-0730</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileHeader',
  data() {
    return {
      showMobileMenu: false
    }
  }
}
</script>