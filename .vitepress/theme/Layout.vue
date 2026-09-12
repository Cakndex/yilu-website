<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const { route } = useRouter()
const showIntro = ref(true)

const INTRO_SESSION_KEY = 'yilu-intro-seen'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

let introTimer
let revealObserver

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

function setupReveals() {
  const selector = [
    '.VPHero .main',
    '.VPHero .image-container',
    '.VPFeatures .VPFeature',
    '.vp-doc > div > h1',
    '.vp-doc > div > h2',
    '.vp-doc > div > h3',
    '.vp-doc > div > p',
    '.vp-doc > div > ul',
    '.vp-doc > div > ol',
    '.vp-doc > div > blockquote',
    '.vp-doc > div > table',
    '.vp-doc > div > pre',
    '.vp-doc > div > .custom-block'
  ].join(',')

  if (!window.IntersectionObserver) {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('yilu-reveal', 'is-visible')
    })
    return
  }

  document.querySelectorAll(selector).forEach((element, index) => {
    if (element.dataset.yiluReveal === 'ready') return

    element.dataset.yiluReveal = 'ready'
    element.classList.add('yilu-reveal')
    element.style.setProperty('--yilu-delay', `${(index % 6) * 55}ms`)
    revealObserver?.observe(element)
  })
}

function finishIntro() {
  window.clearTimeout(introTimer)
  showIntro.value = false

  window.setTimeout(() => {
    document.documentElement.classList.remove('yilu-intro-open')
  }, 420)

  try {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1')
  } catch {
    // Session storage may be unavailable in private browsing modes.
  }
}

onMounted(() => {
  let introSeen = false
  const forceIntro = new URLSearchParams(window.location.search).get('intro') === '1'

  try {
    introSeen = window.sessionStorage.getItem(INTRO_SESSION_KEY) === '1'
  } catch {
    introSeen = false
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    })
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08
  })

  if (prefersReducedMotion() || (!forceIntro && introSeen)) {
    showIntro.value = false
    document.documentElement.classList.add('yilu-motion-ready')
    nextTick(setupReveals)
    return
  }

  document.documentElement.classList.add('yilu-intro-open', 'yilu-motion-ready')
  nextTick(setupReveals)
  introTimer = window.setTimeout(finishIntro, 1950)
})

watch(() => route.path, async () => {
  await nextTick()
  window.setTimeout(setupReveals, 80)
})

onBeforeUnmount(() => {
  window.clearTimeout(introTimer)
  revealObserver?.disconnect()
  document.documentElement.classList.remove('yilu-intro-open', 'yilu-motion-ready')
})
</script>

<template>
  <Layout />

  <Transition name="yilu-intro">
    <div v-if="showIntro" class="yilu-intro" aria-hidden="true">
      <div class="yilu-intro__grid" />
      <div class="yilu-intro__brand">
        <img class="yilu-intro__logo" src="/yilu-logo.png" alt="">
        <strong>一路工作室</strong>
        <span>YILU STUDIO</span>
      </div>
      <div class="yilu-intro__progress">
        <i />
      </div>
    </div>
  </Transition>
</template>
