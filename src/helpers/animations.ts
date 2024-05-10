import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const animatePageIn = () => {
 const banner = document.getElementById('banner-1')

 if(banner) {
  const tl = gsap.timeline()

  tl.set(banner, {
   yPercent: 0
  }).to(banner, {
   yPercent: 100
  })
 }
}

export const animatePageOut = (href: any, router: AppRouterInstance) => {
 const banner = document.getElementById('banner-1')

 if(banner) {
  const tl = gsap.timeline()

  tl.set(banner, {
   yPercent: -100
  }).to(banner, {
   yPercent: 0,
   onComplete: () => {
    router.push(href)
   }
  })
 }
}