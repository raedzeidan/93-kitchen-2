import { useEffect } from 'react'

/** Customer + staff website entrypoint. Figma Make imports this project as a whole. */
export default function App() {
  useEffect(() => {
    void import('./site/app').catch((error) => {
      console.error('93 Kitchen site could not initialize', error)
      const node = document.getElementById('app')
      if (node) node.textContent = 'تعذّر تحميل الواجهة. يرجى إعادة المحاولة.'
    })
  }, [])
  return <div id="app" dir="rtl" data-build="93K2-2026-11-22-01" />
}
