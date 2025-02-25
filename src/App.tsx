// Components
import { Tab } from '@headlessui/react'
import Layout from './components/Layout'
import MenuTabs from './components/MenuTabs'
import MenuPanels from './components/MenuPanels'

export default function App() {
  return (
    <Layout>
      <main className="w-full max-w-4xl px-2 mx-auto sm:px-0">
        <h1 className="mb-4 text-2xl font-semibold text-center">
          Crypto Tracker
        </h1>

        <section className="space-y-4 mb-4">
          <Tab.Group defaultIndex={1}>
            <MenuTabs />
            <MenuPanels />
          </Tab.Group>
        </section>
      </main>
    </Layout>
  )
}
