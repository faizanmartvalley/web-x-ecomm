<!-- src/web/views/components/HomePage.vue -->
<template>
  <main class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ appName }}</h1>
        <p class="tagline">{{ tagline }}</p>

        <div class="cta">
          <button class="primary">Get Started</button>
          <button class="secondary">View Docs</button>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="stat" v-for="s in stats" :key="s.label">
        <h3>{{ s.value }}</h3>
        <p>{{ s.label }}</p>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <article v-for="f in features" :key="f.title" class="feature">
        <h3>{{ f.title }}</h3>
        <p>{{ f.description }}</p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    appName: { type: String, required: true },
    tagline: { type: String, required: true },
  },
  data() {
    return {
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "10K+", label: "Orders / Day" },
        { value: "500+", label: "Merchants" },
      ],
      features: [
        {
          title: "MVC Architecture",
          description:
            "Clear separation of concerns for long-term maintainability.",
        },
        {
          title: "Server-Side Rendering",
          description:
            "SEO-friendly pages with fast first paint and secure rendering.",
        },
        {
          title: "Production-Ready Core",
          description:
            "Centralized logging, error handling, and environment validation.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  font-family: system-ui, -apple-system, BlinkMacSystemFont;
  color: #111827;
}

/* HERO */
.hero {
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  color: white;
  padding: 5rem 2rem;
}

.hero-content {
  max-width: 1100px;
  margin: auto;
}

.hero h1 {
  font-size: 3.2rem;
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.25rem;
  opacity: 0.9;
}

.cta {
  margin-top: 2rem;
}

button {
  padding: 0.8rem 1.6rem;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.primary {
  background: #22c55e;
  color: #052e16;
  margin-right: 1rem;
}

.secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
}

/* STATS */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.stat h3 {
  font-size: 2rem;
  color: #1e40af;
}

/* FEATURES */
.features {
  max-width: 1100px;
  margin: auto;
  padding: 4rem 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}
</style>