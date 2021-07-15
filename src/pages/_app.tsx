import 'tailwindcss/tailwind.css'
import AppShell from 'components/app-shell'

function MyApp({ Component, pageProps }) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  )
}

export default MyApp
