<template>
  <header class="site__header">
    <div class="header">
      <div class="header__megamenu-area megamenu-area"></div>
      <div class="header__topbar-classic-bg"></div>
      <div class="header__topbar-classic">
        <div class="topbar topbar--classic">
          <div class="topbar__item-text">
            <a class="topbar__link" href="about-us.html">About Us</a>
          </div>
          <div class="topbar__item-text">
            <a class="topbar__link" href="contact-us-v1.html">Contacts</a>
          </div>
          <div class="topbar__item-text">
            <a class="topbar__link" href="">Store Location</a>
          </div>
          <div class="topbar__item-text">
            <a class="topbar__link" href="track-order.html">Track Order</a>
          </div>
          <div class="topbar__item-text">
            <a class="topbar__link" href="blog-classic-right-sidebar.html"
              >Blog</a
            >
          </div>
          <div class="topbar__item-spring"></div>
          <div class="topbar__item-button">
            <a href="" class="topbar__button">
              <span class="topbar__button-label">Compare:</span>
              <span class="topbar__button-title">5</span>
            </a>
          </div>
          <div class="topbar__item-button">
            <a href="" class="phone__body">
              <div class="phone__title">Call Us:</div>
              <div class="phone__number">800 060-0730</div>
            </a>
          </div>
        </div>
      </div>
      <div class="header__navbar">
        <div class="header__navbar-departments">
          <div class="departments">
            <button class="departments__button" type="button">
              <span class="departments__button-icon">
                <svg width="16px" height="12px">
                  <path
                    d="M0,7L0,5L16,5L16,7L0,7ZM0,0L16,0L16,2L0,2L0,0ZM12,12L0,12L0,10L12,10L12,12Z"
                  />
                </svg>
              </span>
              <span class="departments__button-title">Shop By Brand</span>
              <span class="departments__button-arrow">
                <svg width="9px" height="6px">
                  <path
                    d="M0.2,0.4c0.4-0.4,1-0.5,1.4-0.1l2.9,3l2.9-3c0.4-0.4,1.1-0.4,1.4,0.1c0.3,0.4,0.3,0.9-0.1,1.3L4.5,6L0.3,1.6C-0.1,1.3-0.1,0.7,0.2,0.4z"
                  />
                </svg>
              </span>
            </button>
            <div class="departments__menu">
              <div class="departments__arrow"></div>
              <div class="departments__body">
                <ul class="departments__list">
                  <li
                    class="departments__list-padding"
                    role="presentation"
                  ></li>
                  <li
                    v-for="(category, index) in categories"
                    :key="index"
                    :class="[
                      'departments__item',
                      category.submenu
                        ? 'departments__item--submenu--megamenu departments__item--has-submenu'
                        : '',
                    ]"
                  >
                    <a href="" class="departments__item-link">
                      {{ category.name }}
                      <span
                        v-if="category.submenu"
                        class="departments__item-arrow"
                      >
                        <svg width="7" height="11">
                          <path
                            d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                            C-0.1,9.8-0.1,10.4,0.3,10.7z"
                          />
                        </svg>
                      </span>
                    </a>
                    <div v-if="category.submenu" class="departments__item-menu">
                      <div
                        :class="[
                          'megamenu departments__megamenu',
                          `departments__megamenu--size--${category.megamenuSize}`,
                        ]"
                      >
                        <div v-if="category.image" class="megamenu__image">
                          <img :src="category.image" alt="" />
                        </div>
                        <div class="row">
                          <div
                            v-for="(col, colIndex) in category.columns"
                            :key="colIndex"
                            :class="`col-${col.width}`"
                          >
                            <ul
                              class="megamenu__links megamenu-links megamenu-links--root"
                            >
                              <li
                                v-for="(link, linkIndex) in col.links"
                                :key="linkIndex"
                                :class="[
                                  'megamenu-links__item',
                                  link.children
                                    ? 'megamenu-links__item--has-submenu'
                                    : '',
                                ]"
                              >
                                <a class="megamenu-links__item-link" href="">{{
                                  link.title
                                }}</a>
                                <ul v-if="link.children" class="megamenu-links">
                                  <li
                                    v-for="(child, childIndex) in link.children"
                                    :key="childIndex"
                                    class="megamenu-links__item"
                                  >
                                    <a
                                      class="megamenu-links__item-link"
                                      href=""
                                      >{{ child }}</a
                                    >
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="departments__list-padding"
                    role="presentation"
                  ></li>
                </ul>
                <div class="departments__menu-container"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="header__navbar-menu">
          <div class="main-menu">
            <ul class="main-menu__list">
              <li
                v-for="(menu, menuIndex) in mainMenu"
                :key="menuIndex"
                :class="[
                  'main-menu__item',
                  menu.submenu
                    ? 'main-menu__item--submenu--menu main-menu__item--has-submenu'
                    : '',
                  menu.megamenu
                    ? 'main-menu__item--submenu--megamenu main-menu__item--has-submenu'
                    : '',
                ]"
              >
                <a :href="menu.link" class="main-menu__link">
                  {{ menu.title }}
                  <svg
                    v-if="menu.submenu || menu.megamenu"
                    width="7px"
                    height="5px"
                  >
                    <path
                      d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"
                    />
                  </svg>
                </a>

                <!-- Regular Submenu -->
                <div v-if="menu.submenu" class="main-menu__submenu">
                  <ul class="menu">
                    <li
                      v-for="(subItem, subIndex) in menu.items"
                      :key="subIndex"
                      :class="[
                        'menu__item',
                        subItem.submenu ? 'menu__item--has-submenu' : '',
                      ]"
                    >
                      <a :href="subItem.link" class="menu__link">
                        {{ subItem.title }}
                        <span v-if="subItem.submenu" class="menu__arrow">
                          <svg width="6px" height="9px">
                            <path
                              d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"
                            />
                          </svg>
                        </span>
                      </a>
                      <div v-if="subItem.submenu" class="menu__submenu">
                        <ul class="menu">
                          <li
                            v-for="(subSubItem, subSubIndex) in subItem.items"
                            :key="subSubIndex"
                            class="menu__item"
                          >
                            <a :href="subSubItem.link" class="menu__link">
                              {{ subSubItem.title }}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <!-- Megamenu -->
                <div v-if="menu.megamenu" class="main-menu__submenu">
                  <div
                    :class="[
                      'main-menu__megamenu',
                      `main-menu__megamenu--size--${menu.megamenuSize}`,
                    ]"
                  >
                    <div class="megamenu">
                      <div class="row">
                        <div
                          v-for="(col, colIndex) in menu.columns"
                          :key="colIndex"
                          :class="`col-${col.width}`"
                        >
                          <ul
                            class="megamenu__links megamenu-links megamenu-links--root"
                          >
                            <li
                              v-for="(link, linkIndex) in col.links"
                              :key="linkIndex"
                              :class="[
                                'megamenu-links__item',
                                link.children
                                  ? 'megamenu-links__item--has-submenu'
                                  : '',
                              ]"
                            >
                              <a class="megamenu-links__item-link" href="">{{
                                link.title
                              }}</a>
                              <ul v-if="link.children" class="megamenu-links">
                                <li
                                  v-for="(child, childIndex) in link.children"
                                  :key="childIndex"
                                  class="megamenu-links__item"
                                >
                                  <a
                                    class="megamenu-links__item-link"
                                    href=""
                                    >{{ child }}</a
                                  >
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header__logo">
        <a href="index.html" class="logo">
          <div class="logo__slogan">
            Auto parts for Cars, trucks and motorcycles
          </div>
          <div class="logo__image">
            <!-- logo -->
            <img :src="`/public/images/audi/audi.jpg`" alt="hello"  style="width: 100px;"/>
            <!-- logo / end -->
          </div>
        </a>
      </div>
      <div class="header__search">
        <div class="search">
          <form action="" class="search__body">
            <div class="search__shadow"></div>
            <input
              class="search__input"
              type="text"
              placeholder="Enter Keyword or Part Number"
            />
            <button class="search__button search__button--start" type="button">
              <span class="search__button-icon">
                <svg width="20" height="20">
                  <path
                    d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
                    c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
                    C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
                    c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
                    c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
                    C15.5,10.2,14,11.3,14,12z"
                  />
                </svg>
              </span>
              <span class="search__button-title">Select Vehicle</span>
            </button>
            <button class="search__button search__button--end" type="submit">
              <span class="search__button-icon">
                <svg width="20" height="20">
                  <path
                    d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                    c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                    c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"
                  />
                </svg>
              </span>
            </button>
            <div class="search__box"></div>
            <div class="search__decor">
              <div class="search__decor-start"></div>
              <div class="search__decor-end"></div>
            </div>
            <div
              class="search__dropdown search__dropdown--suggestions suggestions"
            >
              <div class="suggestions__group">
                <div class="suggestions__group-title">Products</div>
                <div class="suggestions__group-content">
                  <a class="suggestions__item suggestions__product" href="">
                    <div
                      class="suggestions__product-image image image--type--product"
                    >
                      <div class="image__body">
                        <img
                          class="image__tag"
                          src="/public/images/products/product-2-40x40.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="suggestions__product-info">
                      <div class="suggestions__product-name">
                        Brandix Brake Kit BDX-750Z370-S
                      </div>
                      <div class="suggestions__product-rating">
                        <div class="suggestions__product-rating-stars">
                          <div class="rating">
                            <div class="rating__body">
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div class="suggestions__product-rating-label">
                          5 on 22 reviews
                        </div>
                      </div>
                    </div>
                    <div class="suggestions__product-price">₹224000.00</div>
                  </a>
                  <a class="suggestions__item suggestions__product" href="">
                    <div
                      class="suggestions__product-image image image--type--product"
                    >
                      <div class="image__body">
                        <img
                          class="image__tag"
                          src="/public/images/products/product-3-40x40.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="suggestions__product-info">
                      <div class="suggestions__product-name">
                        Left Headlight Of Brandix Z54
                      </div>
                      <div class="suggestions__product-rating">
                        <div class="suggestions__product-rating-stars">
                          <div class="rating">
                            <div class="rating__body">
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div class="rating__star"></div>
                              <div class="rating__star"></div>
                            </div>
                          </div>
                        </div>
                        <div class="suggestions__product-rating-label">
                          3 on 14 reviews
                        </div>
                      </div>
                    </div>
                    <div class="suggestions__product-price">349000.00</div>
                  </a>
                  <a class="suggestions__item suggestions__product" href="">
                    <div
                      class="suggestions__product-image image image--type--product"
                    >
                      <div class="image__body">
                        <img
                          class="image__tag"
                          src="/public/images/products/product-4-40x40.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="suggestions__product-info">
                      <div class="suggestions__product-name">
                        Glossy Gray 19" Aluminium Wheel AR-19
                      </div>
                      <div class="suggestions__product-rating">
                        <div class="suggestions__product-rating-stars">
                          <div class="rating">
                            <div class="rating__body">
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div
                                class="rating__star rating__star--active"
                              ></div>
                              <div class="rating__star"></div>
                            </div>
                          </div>
                        </div>
                        <div class="suggestions__product-rating-label">
                          4 on 26 reviews
                        </div>
                      </div>
                    </div>
                    <div class="suggestions__product-price">₹589000.00</div>
                  </a>
                </div>
              </div>
              <div class="suggestions__group">
                <div class="suggestions__group-title">Categories</div>
                <div class="suggestions__group-content">
                  <a class="suggestions__item suggestions__category" href=""
                    >Headlights & Lighting</a
                  >
                  <a class="suggestions__item suggestions__category" href=""
                    >Fuel System & Filters</a
                  >
                  <a class="suggestions__item suggestions__category" href=""
                    >Body Parts & Mirrors</a
                  >
                  <a class="suggestions__item suggestions__category" href=""
                    >Interior Accessories</a
                  >
                </div>
              </div>
            </div>
            <div
              class="search__dropdown search__dropdown--vehicle-picker vehicle-picker"
            >
              <div class="search__dropdown-arrow"></div>
              <div
                class="vehicle-picker__panel vehicle-picker__panel--list vehicle-picker__panel--active"
                data-panel="list"
              >
                <div class="vehicle-picker__panel-body">
                  <div class="vehicle-picker__text">
                    Select a vehicle to find exact fit parts
                  </div>
                  <div class="vehicles-list">
                    <div class="vehicles-list__body">
                      <label class="vehicles-list__item">
                        <span class="vehicles-list__item-radio input-radio">
                          <span class="input-radio__body">
                            <input
                              class="input-radio__input"
                              name="header-vehicle"
                              type="radio"
                            />
                            <span class="input-radio__circle"></span>
                          </span>
                        </span>
                        <span class="vehicles-list__item-info">
                          <span class="vehicles-list__item-name"
                            >2011 Ford Focus S</span
                          >
                          <span class="vehicles-list__item-details"
                            >Engine 2.0L 1742DA L4 FI Turbo</span
                          >
                        </span>
                        <button
                          type="button"
                          class="vehicles-list__item-remove"
                        >
                          <svg width="16" height="16">
                            <path
                              d="M2,4V2h3V1h6v1h3v2H2z M13,13c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5h10V13z"
                            />
                          </svg>
                        </button>
                      </label>
                      <label class="vehicles-list__item">
                        <span class="vehicles-list__item-radio input-radio">
                          <span class="input-radio__body">
                            <input
                              class="input-radio__input"
                              name="header-vehicle"
                              type="radio"
                            />
                            <span class="input-radio__circle"></span>
                          </span>
                        </span>
                        <span class="vehicles-list__item-info">
                          <span class="vehicles-list__item-name"
                            >2019 Audi Q7 Premium</span
                          >
                          <span class="vehicles-list__item-details"
                            >Engine 3.0L 5626CC L6 QK</span
                          >
                        </span>
                        <button
                          type="button"
                          class="vehicles-list__item-remove"
                        >
                          <svg width="16" height="16">
                            <path
                              d="M2,4V2h3V1h6v1h3v2H2z M13,13c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5h10V13z"
                            />
                          </svg>
                        </button>
                      </label>
                    </div>
                  </div>
                  <div class="vehicle-picker__actions">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      data-to-panel="form"
                    >
                      Add A Vehicle
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="vehicle-picker__panel vehicle-picker__panel--form"
                data-panel="form"
              >
                <div class="vehicle-picker__panel-body">
                  <div class="vehicle-form vehicle-form--layout--search">
                    <div class="vehicle-form__item vehicle-form__item--select">
                      <select
                        class="form-control form-control-select2"
                        aria-label="Year"
                      >
                        <option value="none">Select Year</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                      </select>
                    </div>
                    <div class="vehicle-form__item vehicle-form__item--select">
                      <select
                        class="form-control form-control-select2"
                        aria-label="Brand"
                        disabled
                      >
                        <option value="none">Select Brand</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Ferrari</option>
                        <option>Ford</option>
                        <option>KIA</option>
                        <option>Nissan</option>
                        <option>Tesla</option>
                        <option>Toyota</option>
                      </select>
                    </div>
                    <div class="vehicle-form__item vehicle-form__item--select">
                      <select
                        class="form-control form-control-select2"
                        aria-label="Model"
                        disabled
                      >
                        <option value="none">Select Model</option>
                        <option>Explorer</option>
                        <option>Focus S</option>
                        <option>Fusion SE</option>
                        <option>Mustang</option>
                      </select>
                    </div>
                    <div class="vehicle-form__item vehicle-form__item--select">
                      <select
                        class="form-control form-control-select2"
                        aria-label="Engine"
                        disabled
                      >
                        <option value="none">Select Engine</option>
                        <option>Gas 1.6L 125 hp AT/L4</option>
                        <option>Diesel 2.5L 200 hp AT/L5</option>
                        <option>Diesel 3.0L 250 hp MT/L5</option>
                      </select>
                    </div>
                    <div class="vehicle-form__divider">Or</div>
                    <div class="vehicle-form__item">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter VIN number"
                        aria-label="VIN number"
                      />
                    </div>
                  </div>
                  <div class="vehicle-picker__actions">
                    <div class="search__car-selector-link">
                      <a href="" data-to-panel="list">Back to vehicles list</a>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      disabled
                    >
                      Add A Vehicle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="header__indicators">
        <!-- <div class="indicator">
          <a href="wishlist.html" class="indicator__button">
            <span class="indicator__icon">
              <svg width="32" height="32">
                <path d="M23,4c3.9,0,7,3.1,7,7c0,6.3-11.4,15.9-14,16.9C13.4,26.9,2,17.3,2,11c0-3.9,3.1-7,7-7c2.1,0,4.1,1,5.4,2.6l1.6,2l1.6-2
                  C18.9,5,20.9,4,23,4 M23,2c-2.8,0-5.4,1.3-7,3.4C14.4,3.3,11.8,2,9,2c-5,0-9,4-9,9c0,8,14,19,16,19s16-11,16-19C32,6,28,2,23,2L23,2
                  z" />
              </svg>
            </span>
          </a>
        </div> -->
        <div class="indicator indicator--trigger--click">
          <a href="account-login.html" class="indicator__button">
            <span class="indicator__icon">
              <svg width="32" height="32">
                <path
                  d="M16,18C9.4,18,4,23.4,4,30H2c0-6.2,4-11.5,9.6-13.3C9.4,15.3,8,12.8,8,10c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.8-1.5,5.3-3.6,6.7
                  C26,18.5,30,23.8,30,30h-2C28,23.4,22.6,18,16,18z M22,10c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S22,13.3,22,10z"
                />
              </svg>
            </span>
            <span class="indicator__title">Hello, Log In</span>
            <span class="indicator__value">My Account</span>
          </a>
          <div class="indicator__content">
            <div class="account-menu">
              <form class="account-menu__form">
                <div class="account-menu__form-title">
                  Log In to Your Account
                </div>
                <div class="form-group">
                  <label for="header-signin-email" class="sr-only"
                    >Email address</label
                  >
                  <input
                    id="header-signin-email"
                    type="email"
                    class="form-control form-control-sm"
                    placeholder="Email address"
                  />
                </div>
                <div class="form-group">
                  <label for="header-signin-password" class="sr-only"
                    >Password</label
                  >
                  <div class="account-menu__form-forgot">
                    <input
                      id="header-signin-password"
                      type="password"
                      class="form-control form-control-sm"
                      placeholder="Password"
                    />
                    <a href="" class="account-menu__form-forgot-link"
                      >Forgot?</a
                    >
                  </div>
                </div>
                <div class="form-group account-menu__form-button">
                  <button type="submit" class="btn btn-primary btn-sm">
                    Login
                  </button>
                </div>
                <div class="account-menu__form-link">
                  <a href="account-login.html">Create An Account</a>
                </div>
              </form>
              <div class="account-menu__divider"></div>
              <a href="" class="account-menu__user">
                <div class="account-menu__user-avatar">
                  <!-- <img src="public/images/avatars/avatar-4.jpg" alt=""> -->
                </div>
                <div class="account-menu__user-info">
                  <div class="account-menu__user-name">Ryan Ford</div>
                  <div class="account-menu__user-email">
                    red-parts@example.com
                  </div>
                </div>
              </a>
              <div class="account-menu__divider"></div>
              <ul class="account-menu__links">
                <li><a href="account-dashboard.html">Dashboard</a></li>
                <li><a href="account-dashboard.html">Garage</a></li>
                <li><a href="account-profile.html">Edit Profile</a></li>
                <li><a href="account-orders.html">Order History</a></li>
                <li><a href="account-addresses.html">Addresses</a></li>
              </ul>
              <div class="account-menu__divider"></div>
              <ul class="account-menu__links">
                <li><a href="account-login.html">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="indicator indicator--trigger--click">
          <a href="cart.html" class="indicator__button">
            <span class="indicator__icon">
              <svg width="32" height="32">
                <circle cx="10.5" cy="27.5" r="2.5" />
                <circle cx="23.5" cy="27.5" r="2.5" />
                <path
                  d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
                  l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
                  c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"
                />
              </svg>
              <span class="indicator__counter">3</span>
            </span>
            <span class="indicator__title">Shopping Cart</span>
            <span class="indicator__value">250.00</span>
          </a>
          <div class="indicator__content">
            <div class="dropcart">
              <ul class="dropcart__list">
                <li class="dropcart__item">
                  <div class="dropcart__item-image image image--type--product">
                    <a class="image__body" href="product-full.html">
                      <!-- <img class="image__tag" src="public/images/products/product-4-70x70.jpg" alt=""> -->
                    </a>
                  </div>
                  <div class="dropcart__item-info">
                    <div class="dropcart__item-name">
                      <a href="product-full.html"
                        >Glossy Gray 19" Aluminium Wheel AR-19</a
                      >
                    </div>
                    <ul class="dropcart__item-features">
                      <li>Color: Yellow</li>
                      <li>Material: Aluminium</li>
                    </ul>
                    <div class="dropcart__item-meta">
                      <div class="dropcart__item-quantity">2</div>
                      <div class="dropcart__item-price">699.00</div>
                    </div>
                  </div>
                  <button type="button" class="dropcart__item-remove">
                    <svg width="10" height="10">
                      <path
                        d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
                        c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
                        C9.2,7.8,9.2,8.4,8.8,8.8z"
                      />
                    </svg>
                  </button>
                </li>
                <li class="dropcart__divider" role="presentation"></li>
                <li class="dropcart__item">
                  <div class="dropcart__item-image image image--type--product">
                    <a class="image__body" href="product-full.html">
                      <!-- <img class="image__tag" src="images/products/product-2-70x70.jpg" alt=""> -->
                    </a>
                  </div>
                  <div class="dropcart__item-info">
                    <div class="dropcart__item-name">
                      <a href="product-full.html"
                        >Brandix Brake Kit BDX-750Z370-S</a
                      >
                    </div>
                    <div class="dropcart__item-meta">
                      <div class="dropcart__item-quantity">1</div>
                      <div class="dropcart__item-price">849.00</div>
                    </div>
                  </div>
                  <button type="button" class="dropcart__item-remove">
                    <svg width="10" height="10">
                      <path
                        d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
                        c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
                        C9.2,7.8,9.2,8.4,8.8,8.8z"
                      />
                    </svg>
                  </button>
                </li>
                <li class="dropcart__divider" role="presentation"></li>
                <li class="dropcart__item">
                  <div class="dropcart__item-image image image--type--product">
                    <a class="image__body" href="product-full.html">
                      <!-- <img class="image__tag" src="images/products/product-5-70x70.jpg" alt=""> -->
                    </a>
                  </div>
                  <div class="dropcart__item-info">
                    <div class="dropcart__item-name">
                      <a href="product-full.html"
                        >Twin Exhaust Pipe From Brandix Z54</a
                      >
                    </div>
                    <ul class="dropcart__item-features">
                      <li>Color: True Red</li>
                    </ul>
                    <div class="dropcart__item-meta">
                      <div class="dropcart__item-quantity">3</div>
                      <div class="dropcart__item-price">1210.00</div>
                    </div>
                  </div>
                  <button type="button" class="dropcart__item-remove">
                    <svg width="10" height="10">
                      <path
                        d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
                        c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
                        C9.2,7.8,9.2,8.4,8.8,8.8z"
                      />
                    </svg>
                  </button>
                </li>
                <li class="dropcart__divider" role="presentation"></li>
              </ul>
              <div class="dropcart__totals">
                <table>
                  <tr>
                    <th>Subtotal</th>
                    <td>5877.00</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>25.00</td>
                  </tr>
                  <tr>
                    <th>Tax</th>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>5902.00</td>
                  </tr>
                </table>
              </div>
              <div class="dropcart__actions">
                <a href="cart.html" class="btn btn-secondary">View Cart</a>
                <a href="checkout.html" class="btn btn-primary">Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      categories: [
        {
          name: "Audi",
          submenu: true,
          megamenuSize: "sm",
          image: "images/audi/newaudi.jpg",
          columns: [
            {
              width: "1of1",
              links: [
                { title: "FOR A3" },
                { title: "FOR A4" },
                { title: "FOR A5" },
                { title: "FOR A6" },
                { title: "FOR A7" },
                { title: "FOR A8" },
                { title: "FOR Q3" },
                { title: "FOR Q5" },
                { title: "FOR Q7" },
                { title: "FOR Q8" },
              ],
            },
          ],
        },

        {
          name: "Porsche",
          submenu: true,
          megamenuSize: "lg",
          image: "images/departments/departments-1.jpg",
          columns: [
            {
              width: "6",
              links: [
                {
                  title: "FOR CAYENNE",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR PANAMERA",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR MECAN",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "CAYMEN/BOXTAR",
                },
              ],
            },
          ],
        },
        {
          name: "Skoda",
          submenu: true,
          megamenuSize: "md",
          image: "images/departments/departments-3.jpg",
          columns: [
            {
              width: "6",
              links: [
                {
                  title: "OCTAVIA",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "KODIAQ",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "LAURA",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "RAPID",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "SUPERB",
                },
              ],
            },
          ],
        },
        {
          name: "Volkswegan",
          submenu: true,
          megamenuSize: "nl",
          image: "images/departments/departments-4.jpg",
          columns: [
            {
              width: "6",
              links: [
                {
                  title: "PASSAT",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "JETTA",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "POLO",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "TIGUAN",
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "GOLF",
                },
              ],
            },
          ],
        },
        {
          name: "BMW",
          submenu: true,
          megamenuSize: "xl",
          image: "images/bmw/bmw.jpg", // change if needed
          columns: [
            {
              width: "6",
              links: [
                {
                  title: "FOR 1 SERIES",
                  children: ["For F20"],
                },
                {
                  title: "FOR 3 SERIES",
                  children: ["For E46", "For E90", "For F30", "For G20 / G28"],
                },
                {
                  title: "FOR 3 SERIES GT",
                  children: ["For F34"],
                },
                {
                  title: "FOR 6 SERIES",
                  children: ["For G32"],
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR 2 SERIES",
                  children: ["For F22", "For F44"],
                },
                {
                  title: "FOR 5 SERIES",
                  children: ["For E60", "For F10", "For G30 / G38"],
                },
                {
                  title: "FOR X3",
                  children: ["For F25", "For G01"],
                },
                {
                  title: "FOR X6",
                  children: ["For E71", "For F16"],
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR X1",
                  children: ["For E84", "For F48", "For U11"],
                },
                {
                  title: "FOR 7 SERIES",
                  children: ["For F01 / F02", "For F07", "For G11 / G12"],
                },
                {
                  title: "FOR X5",
                  children: ["For E53", "For E70", "For F15", "For G05"],
                },
              ],
            },
          ],
        },

        {
          name: "Mini Cooper",
          submenu: true,
          megamenuSize: "sm",
          columns: [
            {
              width: "12",
              links: [
                {
                  title: "club Man",
                },
                {
                  title: "Convertiable",
                },
                {
                  title: "Countryman",
                },
                {
                  title: "Hardtop",
                },
                {
                  title: "pacemam",
                },
                {
                  title: "coupe",
                },
              ],
            },
          ],
        },
        {
          name: "Mercedes",
          submenu: true,
          megamenuSize: "xl",
          image: "images/mercedes/mercedes.jpg", // change path if needed
          columns: [
            {
              width: "6",
              links: [
                {
                  title: "FOR CLA CLASS",
                  children: ["W117", "W118"],
                },
                {
                  title: "FOR C CLASS",
                  children: ["W203", "W204", "W205", "W206"],
                },
                {
                  title: "FOR G SERIES",
                  children: ["W463", "W464"],
                },
                {
                  title: "FOR ML CLASS",
                  children: ["W164", "W166"],
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR GLA CLASS",
                  children: ["W156"],
                },
                {
                  title: "FOR B CLASS",
                  children: ["W246", "W247"],
                },
                {
                  title: "FOR CLS CLASS",
                  children: ["C219"],
                },
                {
                  title: "FOR S CLASS",
                  children: ["W220", "W221", "W222", "W223"],
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR A CLASS",
                  children: ["W176", "W177"],
                },
                {
                  title: "FOR E CLASS",
                  children: ["W207", "W210", "W211", "W212", "W213"],
                },
                {
                  title: "FOR GL",
                  children: ["W164", "W166"],
                },
                {
                  title: "FOR GLE",
                  children: ["W167", "W166"],
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR GLC",
                  children: ["X253", "C253"],
                },
                {
                  title: "FOR GLS",
                  children: ["W166", "W167"],
                },
              ],
            },
          ],
        },
        {
          name: "Land Rover",
          submenu: true,
          megamenuSize: "lg",
          image: "images/landrover/landrover.jpg", // update path if needed
          columns: [
            {
              width: "6",
              links: [
                {
                  title: "FOR VOGUE",
                  children: ["Range Rover - L460"],
                },
                {
                  title: "FOR FREE LANDER 2",
                  children: ["L359"],
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR EVOQUE",
                  children: ["L538", "L551"],
                },
                {
                  title: "FOR DISCOVERY",
                  children: ["Discovery 4 - L319", "Discovery 5 - L462"],
                },
              ],
            },
            {
              width: "6",
              links: [
                {
                  title: "FOR SPORT",
                  children: [
                    "Range Rover Sport - L494",
                    "Range Rover Sport - L461",
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Jaguar",
          submenu: true,
          megamenuSize: "md",
          image: "images/jaguar/jaguar.jpg", // update if needed
          columns: [
            {
              width: "1of3",
              links: [
                {
                  title: "FOR XF",
                },
                {
                  title: "JAGUAR - F TYPE",
                },
              ],
            },
            {
              width: "1of3",
              links: [
                {
                  title: "FOR XJL",
                },
                {
                  title: "JAGUAR - I PACE",
                },
              ],
            },
            {
              width: "1of3",
              links: [
                {
                  title: "FOR F PACE",
                },
              ],
            },
          ],
        },
        {
          name: "Volvo",
          submenu: true,
          megamenuSize: "sm",
          image: "images/volvo/volvo.jpg", // change path if needed
          columns: [
            {
              width: "1of1",
              links: [
                { title: "Volvo - S40" },
                { title: "Volvo - S60" },
                { title: "Volvo - S80" },
                { title: "Volvo - S90" },
              ],
            },
          ],
        },
      ],
      mainMenu: [
        {
          title: "Body Parts",
          link: "body-parts.html",
          submenu: true,
          items: [
            {
              title: "Front Bumper",
              link: "front-bumper.html",
            },
            {
              title: "Rear Bumper",
              link: "rear-bumper.html",
            },
            {
              title: "Lightings & Electricals",
              link: "lightings-electricals.html",
            },
            {
              title: "Side Mirrors",
              link: "side-mirrors.html",
            },
            {
              title: "Accessories",
              link: "accessories.html",
            },
            {
              title: "Maintenance Body Parts",
              link: "maintenance-body-parts.html",
            },
          ],
        },

        {
          title: "Interior Parts",
          link: "interior-parts.html",
          submenu: true,
          items: [
            { title: "Dashboards", link: "dashboards.html" },
            { title: "AC Vents", link: "ac-vents.html" },
            {
              title: "AC Vents Repair Kits",
              link: "ac-vents-repair-kits.html",
            },
            { title: "AC Vent Grill Nobs", link: "ac-vent-grill-nobs.html" },
            { title: "Shutters", link: "shutters.html" },
            { title: "Handle Set", link: "handle-set.html" },
            { title: "Speaker Covers", link: "speaker-covers.html" },
            { title: "Seat Pockets", link: "seat-pockets.html" },
            { title: "Air Bag Covers", link: "air-bag-covers.html" },
            { title: "Steering Wheels", link: "steering-wheels.html" },
            { title: "All Buttons", link: "all-buttons.html" },
            {
              title: "Mouse Cover And Assembly",
              link: "mouse-cover-assembly.html",
            },
            {
              title: "Power Window Switches",
              link: "power-window-switches.html",
            },
            { title: "Sunroof Curtain", link: "sunroof-curtain.html" },
          ],
        },

        {
          title: "Suspension Parts",
          link: "suspension-parts.html",
          submenu: true,
          items: [
            /* ================= FRONT WHEEL ================= */
            {
              title: "Front Wheel Suspension",
              submenu: true,
              items: [
                { title: "Front Wheel Hubs", link: "front-wheel-hubs.html" },
                {
                  title: "Front Wheel Bearings",
                  link: "front-wheel-bearings.html",
                },
                { title: "Front Lower Arms", link: "front-lower-arms.html" },
                { title: "Front Upper Arms", link: "front-upper-arms.html" },
                { title: "Front Link Rod", link: "front-link-rod.html" },
                { title: "Rack End", link: "rack-end.html" },
                { title: "Tie Rod End", link: "tie-rod-end.html" },
                {
                  title: "Front Lower Ball Joint",
                  link: "front-lower-ball-joint.html",
                },
                {
                  title: "Front Arm Bush Kits",
                  link: "front-arm-bush-kits.html",
                },
                { title: "Front Balance Rod", link: "front-balance-rod.html" },
                {
                  title: "Front Balance Rod Bush",
                  link: "front-balance-rod-bush.html",
                },
                { title: "Front Axle Rods", link: "front-axle-rods.html" },
                {
                  title: "Front Wheel Arch / Front Fender Linings",
                  link: "front-wheel-arch-fender-linings.html",
                },
              ],
            },

            /* ================= REAR WHEEL ================= */
            {
              title: "Rear Wheel Suspension",
              submenu: true,
              items: [
                { title: "Rear Wheel Hubs", link: "rear-wheel-hubs.html" },
                {
                  title: "Rear Wheel Bearings",
                  link: "rear-wheel-bearings.html",
                },
                { title: "Rear Lower Arms", link: "rear-lower-arms.html" },
                { title: "Rear Upper Arms", link: "rear-upper-arms.html" },
                { title: "Rear Link Rod", link: "rear-link-rod.html" },
                {
                  title: "Rear Lower Ball Joint",
                  link: "rear-lower-ball-joint.html",
                },
                {
                  title: "Rear Arms Bush Kits",
                  link: "rear-arms-bush-kits.html",
                },
                { title: "Rear Balance Rod", link: "rear-balance-rod.html" },
                {
                  title: "Rear Balance Rod Bush",
                  link: "rear-balance-rod-bush.html",
                },
                { title: "Rear Axle Rods", link: "rear-axle-rods.html" },
                {
                  title: "Rear Wheel Arch / Rear Fender Linings",
                  link: "rear-wheel-arch-fender-linings.html",
                },
              ],
            },

            /* ================= SHOCKERS ================= */
            {
              title: "All Shockers Parts",
              submenu: true,
              items: [
                { title: "Manual Shockers", link: "manual-shockers.html" },
                {
                  title: "Front Socker Mounts",
                  link: "front-shocker-mounts.html",
                },
                {
                  title: "Rear Shocker Mounts",
                  link: "rear-shocker-mounts.html",
                },
                {
                  title: "Front Shocker Kits",
                  link: "front-shocker-kits.html",
                },
                { title: "Rear Shocker Kits", link: "rear-shocker-kits.html" },
                { title: "Bonnet Shockers", link: "bonnet-shockers.html" },
                { title: "Dickey Shocker", link: "dickey-shocker.html" },
                {
                  title: "Conversion Kits (Airmatic To Manual)",
                  link: "airmatic-to-manual-kits.html",
                },
              ],
            },
          ],
        },

         {
          title: "Brake Parts",
          link: "brake-parts.html",
          submenu: true,
          items: [
            /* ================= FRONT BRAKES ================= */
            {
              title: "Front Brakes",
              submenu: true,
              items: [
                { title: "Front Brake Pads", link: "front-brake-pads.html" },
                {
                  title: "Front Brake Pad Sensor",
                  link: "front-brake-pad-sensor.html",
                },
                { title: "Front Brake Discs", link: "front-brake-discs.html" },
                {
                  title: "Front Brake Calipers",
                  link: "front-brake-calipers.html",
                },
                { title: "Brake Hoses", link: "brake-hoses.html" },
                { title: "Wheel Bolts", link: "wheel-bolts.html" },
                {
                  title: "Front Wheel Speed / ABS Sensor",
                  link: "front-wheel-speed-abs-sensor.html",
                },
                { title: "Parking Motors", link: "parking-motors.html" },
              ],
            },

            /* ================= REAR BRAKES ================= */
            {
              title: "Rear Brakes",
              submenu: true,
              items: [
                { title: "Rear Brake Pads", link: "rear-brake-pads.html" },
                {
                  title: "Rear Brake Pad Sensor",
                  link: "rear-brake-pad-sensor.html",
                },
                { title: "Rear Brake Discs", link: "rear-brake-discs.html" },
                {
                  title: "Rear Brake Calipers",
                  link: "rear-brake-calipers.html",
                },
                { title: "Brake Hoses", link: "brake-hoses.html" },
                { title: "Wheel Bolts", link: "wheel-bolts.html" },
                {
                  title: "Rear Wheel Speed / ABS Sensor",
                  link: "rear-wheel-speed-abs-sensor.html",
                },
                { title: "Parking Motors", link: "parking-motors.html" },
              ],
            },
          ],
        },
        
        {
          title: "Electric Parts",
          link: "electric-parts.html",
          submenu: true,
          items: [
            { title: "Fuel Pumps", link: "fuel-pumps.html" },
            { title: "Fuel Lid Motors", link: "fuel-lid-motors.html" },
            { title: "Fuel Relays", link: "fuel-relays.html" },
            { title: "Ignition Coil", link: "ignition-coil.html" },
            { title: "Spark Plugs", link: "spark-plugs.html" },
            { title: "Door Latchs", link: "door-latchs.html" },
            { title: "Glass Machines", link: "glass-machines.html" },
            { title: "Fan Realy", link: "fan-realy.html" },
            { title: "EGR Assembly", link: "egr-assembly.html" },
            { title: "Gear Box Kits", link: "gear-box-kits.html" },
            { title: "DSG Plates", link: "dsg-plates.html" },
          ],
        },
        {
          title: "Engine Parts",
          link: "engine-parts.html",
          submenu: true,
          items: [
            /* ================= ENGINE SUSPENSION ================= */
            {
              title: "Engine Suspension",
              submenu: true,
              items: [
                { title: "Engine Mounts", link: "engine-mounts.html" },
                { title: "Gear Mounts", link: "gear-mounts.html" },
                { title: "Torq Mounts", link: "torq-mounts.html" },
                { title: "Prop Shaft Mounts", link: "prop-shaft-mounts.html" },
              ],
            },

            /* ================= TIMING PARTS ================= */
            {
              title: "Timing Parts",
              submenu: true,
              items: [
                { title: "Tapit Covers", link: "tapit-covers.html" },
                { title: "Belt Tentioner", link: "belt-tentioner.html" },
                { title: "Idler Pulleys", link: "idler-pulleys.html" },
                { title: "Crank Pulley", link: "crank-pulley.html" },
                { title: "Belts", link: "belts.html" },
                {
                  title: "Manu Fold Assembly",
                  link: "manu-fold-assembly.html",
                },
                { title: "Manufold Motors", link: "manufold-motors.html" },
                { title: "Timming Kits", link: "timming-kits.html" },
                { title: "Manifold Kits", link: "manifold-kits.html" },
                {
                  title: "Transmission Filters",
                  link: "transmission-filters.html",
                },
              ],
            },

            /* ================= ENGINE PARTS ================= */
            {
              title: "Engine Parts",
              submenu: true,
              items: [
                { title: "Coolant Bottles", link: "coolant-bottles.html" },
                { title: "Wiper Bottles", link: "wiper-bottles.html" },
                { title: "Elbow", link: "elbow.html" },
                { title: "Oil Coolers", link: "oil-coolers.html" },
                { title: "Transmission Oil", link: "transmission-oil.html" },
                { title: "Oil Filters", link: "oil-filters.html" },
                { title: "Oil Filter Caps", link: "oil-filter-caps.html" },
                { title: "Oil Pans", link: "oil-pans.html" },
                {
                  title: "Nozzle Return Pipes",
                  link: "nozzle-return-pipes.html",
                },
                {
                  title: "All Hoses And Pipes",
                  link: "all-hoses-and-pipes.html",
                },
                { title: "Water Pumps", link: "water-pumps.html" },
                { title: "Oil Pumps", link: "oil-pumps.html" },
              ],
            },
          ],
        },
        {
          title: "Sensors",
          link: "sensors.html",
          submenu: true,
          items: [
            { title: "ABS Sensor", link: "abs-sensor.html" },
            { title: "Air Mask Sensor", link: "air-mask-sensor.html" },
            { title: "Level Sensor", link: "level-sensor.html" },
            { title: "Temperature Sensor", link: "temperature-sensor.html" },
            { title: "Cam Sensor", link: "cam-sensor.html" },
            { title: "Brake Pad Sensors", link: "brake-pad-sensors.html" },
            {
              title: "Tire Pressure Sensor",
              link: "tire-pressure-sensor.html",
            },
            { title: "Parking Sensor", link: "parking-sensor.html" },
          ],
        },
        {
          title: "AC Parts",
          link: "ac-parts.html",
          submenu: true,
          items: [
            {
              title: "AC Filter / Cabin Filter",
              link: "ac-filter-cabin-filter.html",
            },
            { title: "Air Filter", link: "air-filter.html" },
            { title: "Radiator", link: "radiator.html" },
            {
              title: "Radiator Fan Assembly",
              link: "radiator-fan-assembly.html",
            },
            { title: "Blower Motor", link: "blower-motor.html" },
            { title: "Cooling Coil", link: "cooling-coil.html" },
            { title: "Cooling Valve", link: "cooling-valve.html" },
            { title: "AC Compressor", link: "ac-compressor.html" },
            { title: "AC Condenser", link: "ac-condenser.html" },
          ],
        },
        {
          title: "Air Suspension",
          link: "air-suspension.html",
          submenu: true,
          items: [
            { title: "Air Matic Shockers", link: "air-matic-shockers.html" },
            { title: "Electric Shockers", link: "electric-shockers.html" },
            { title: "Air Compressor", link: "air-compressor.html" },
            { title: "Valve Blockes", link: "valve-blockes.html" },
            {
              title: "Air Compressor Repair Kit",
              link: "air-compressor-repair-kit.html",
            },
            { title: "Air Balloons", link: "air-balloons.html" },
          ],
        },
       
      ],
    };
  },
};
</script>

<style scoped>
/* You can add any custom styles here if needed */
</style>
