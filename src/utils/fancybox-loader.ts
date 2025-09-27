// Shared Fancybox loader to avoid duplicating large CSS/JS bundles per component.
// Usage (client-only):
// import { loadFancybox } from '@/utils/fancybox-loader'
// loadFancybox().then(Fancybox => Fancybox.bind('[data-fancybox="gallery"]', {...}))

let fancyboxPromise: Promise<any> | null = null

export async function loadFancybox() {
  if (!fancyboxPromise) {
    fancyboxPromise = import('@fancyapps/ui').then((mod) => mod.Fancybox)
  }
  return fancyboxPromise
}
