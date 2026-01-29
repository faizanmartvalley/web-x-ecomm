<template>
  <div>
    <!-- Mobile Header -->
    <header class="site__mobile-header">
      <div class="mobile-header">
        <div class="container">
          <div class="mobile-header__body">

            <!-- Menu Button -->
            <button
              class="mobile-header__menu-button"
              type="button"
              @click="showMobileMenu = true"
            >
              <svg width="18" height="14" viewBox="0 0 18 14">
                <path
                  d="M0 8h18V6H0v2zm0-6h18V0H0v2zm0 12h14v-2H0v2z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <!-- Logo -->
            <a class="mobile-header__logo" href="/">
              LOGO
            </a>

            <!-- Cart Icon -->
            <div class="mobile-header__indicators">
              <div class="mobile-indicator">
                <a href="/cart" class="mobile-indicator__button">
                  <span class="mobile-indicator__icon">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <circle cx="7" cy="17" r="2" />
                      <circle cx="15" cy="17" r="2" />
                      <path
                        d="M20 4.4V5l-1.8 6.3c-.1.4-.5.7-1 .7H6.7c-.4 0-.8-.3-1-.7L3.3 3.9C3.1 3.3 2.6 3 2.1 3H.4C.2 3 0 2.8 0 2.6V1.4C0 1.2.2 1 .4 1h2.5c1 0 1.8.6 2.1 1.6L5.1 3l2.3 6.8c0 .1.2.2.3.2h8.6c.1 0 .3-.1.3-.2l1.3-4.4c.1-.4-.1-.6-.4-.6H9.4C9.2 5 9 4.8 9 4.6V3.4C9 3.2 9.2 3 9.4 3h9.2c.8 0 1.4.6 1.4 1.4z"
                      />
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
    <div class="mobile-menu" v-if="showMobileMenu">
      <div
        class="mobile-menu__backdrop"
        @click="showMobileMenu = false"
      ></div>

      <div class="mobile-menu__body">
        <button
          class="mobile-menu__close"
          type="button"
          @click="showMobileMenu = false"
        >
          ✕
        </button>

        <div class="mobile-menu__panel">
          <div class="mobile-menu__panel-header">
            <div class="mobile-menu__panel-title">Menu</div>
          </div>

          <div class="mobile-menu__panel-body">
            <ul class="mobile-menu__links">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/account">Account</a></li>
            </ul>

            <div class="mobile-menu__divider"></div>

            <a class="mobile-menu__contacts" href="tel:8000600730">
              <div class="mobile-menu__contacts-subtitle">
                Free call 24/7
              </div>
              <div class="mobile-menu__contacts-title">
                800 060-0730
              </div>
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
