<template>
  <footer class="site__footer">
    <div class="site-footer">
      <div class="decor site-footer__decor decor--type--bottom">
        <div class="decor__body">
          <div class="decor__start"></div>
          <div class="decor__end"></div>
          <div class="decor__center"></div>
        </div>
      </div>
      <div class="site-footer__widgets">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-4">
              <div class="site-footer__widget footer-contacts">
                <h5 class="footer-contacts__title">Contact Us</h5>
                <div class="footer-contacts__text">
                  {{ contactText }}
                </div>
                <address class="footer-contacts__contacts">
                  <dl v-for="contact in contacts" :key="contact.label">
                    <dt>{{ contact.label }}</dt>
                    <dd>{{ contact.value }}</dd>
                  </dl>
                </address>
              </div>
            </div>
            <div class="col-6 col-md-3 col-xl-2">
              <div class="site-footer__widget footer-links">
                <h5 class="footer-links__title">{{ linksTitles.information }}</h5>
                <ul class="footer-links__list">
                  <li v-for="link in informationLinks" :key="link.text" class="footer-links__item">
                    <a :href="link.href" class="footer-links__link">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-md-3 col-xl-2">
              <div class="site-footer__widget footer-links">
                <h5 class="footer-links__title">{{ linksTitles.account }}</h5>
                <ul class="footer-links__list">
                  <li v-for="link in accountLinks" :key="link.text" class="footer-links__item">
                    <a :href="link.href" class="footer-links__link">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4">
              <div class="site-footer__widget footer-newsletter">
                <h5 class="footer-newsletter__title">{{ newsletterTitle }}</h5>
                <div class="footer-newsletter__text">
                  {{ newsletterText }}
                </div>
                <form @submit.prevent="subscribeNewsletter" class="footer-newsletter__form">
                  <label class="sr-only" for="footer-newsletter-address">Email Address</label>
                  <input
                    v-model="newsletterEmail"
                    type="email"
                    class="footer-newsletter__form-input"
                    id="footer-newsletter-address"
                    placeholder="Email Address..."
                  >
                  <button type="submit" class="footer-newsletter__form-button">Subscribe</button>
                </form>
                <div class="footer-newsletter__text footer-newsletter__text--social">
                  {{ socialText }}
                </div>
                <div class="footer-newsletter__social-links social-links">
                  <ul class="social-links__list">
                    <li
                      v-for="social in socialLinks"
                      :key="social.platform"
                      :class="`social-links__item social-links__item--${social.platform}`"
                    >
                      <a :href="social.url" target="_blank">
                        <i :class="social.icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-footer__bottom">
        <div class="container">
          <div class="site-footer__bottom-row">
            <div class="site-footer__copyright">
              {{ copyrightText }} <a :href="designerLink" target="_blank">{{ designerName }}</a>
            </div>
            <div class="site-footer__payments">
              <img :src="paymentsImage" alt="Payment methods">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      newsletterEmail: '',
      contactText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.',
      contacts: [
        { label: 'Phone Number', value: '+1 (800) 060-07-30' },
        { label: 'Email Address', value: 'red-parts@example.com' },
        { label: 'Our Location', value: '715 Fake Street, New York 10021 USA' },
        { label: 'Working Hours', value: 'Mon-Sat 10:00pm - 7:00pm' }
      ],
      linksTitles: {
        information: 'Information',
        account: 'My Account'
      },
      informationLinks: [
        { text: 'About Us', href: '' },
        { text: 'Delivery Information', href: '' },
        { text: 'Privacy Policy', href: '' },
        { text: 'Brands', href: '' },
        { text: 'Contact Us', href: '' },
        { text: 'Returns', href: '' },
        { text: 'Site Map', href: '' }
      ],
      accountLinks: [
        { text: 'Store Location', href: '' },
        { text: 'Order History', href: '' },
        { text: 'Wish List', href: '' },
        { text: 'Newsletter', href: '' },
        { text: 'Specials', href: '' },
        { text: 'Gift Certificates', href: '' },
        { text: 'Affiliate', href: '' }
      ],
      newsletterTitle: 'Newsletter',
      newsletterText: 'Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.',
      socialText: 'Follow us on social networks',
      socialLinks: [
        { platform: 'facebook', icon: 'fab fa-facebook-f', url: 'https://themeforest.net/user/kos9' },
        { platform: 'twitter', icon: 'fab fa-twitter', url: 'https://themeforest.net/user/kos9' },
        { platform: 'youtube', icon: 'fab fa-youtube', url: 'https://themeforest.net/user/kos9' },
        { platform: 'instagram', icon: 'fab fa-instagram', url: 'https://themeforest.net/user/kos9' },
        { platform: 'rss', icon: 'fas fa-rss', url: 'https://themeforest.net/user/kos9' }
      ],
      copyrightText: 'Powered by HTML — Designed by',
      designerName: 'Kos',
      designerLink: 'https://themeforest.net/user/kos9',
      paymentsImage: 'images/payments.png'
    }
  },
  methods: {
    subscribeNewsletter() {
      if (this.newsletterEmail) {
        console.log('Subscribed with email:', this.newsletterEmail)
        this.newsletterEmail = ''
      }
    }
  }
}
</script>

<style>
/* No additional CSS - using existing template classes only */
</style>