import 'tailwindcss/tailwind.css'
import dynamic from 'next/dynamic'

const AppShell = dynamic(() => import('components/app-shell'), {
  ssr: false,
})

function MyApp({ Component, pageProps }) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  )
}

export default MyApp
