// Components
import { Tab } from '@headlessui/react'

export default function MenuTabs() {
  return (
    <Tab.List className="flex flex-wrap items-center w-full px-3 py-2 mx-auto bg-white border rounded-md shadow-sm sm:items-stretch sm:flex-row sm:max-w-md justify-evenly sm:gap-2 border-slate-200">
      <Tab className="py-2 font-medium transition-colors border-b-2 border-white px-1.5 ui-selected:outline-none ui-selected:text-emerald-500 ui-selected:border-b-emerald-500">
        Trending
      </Tab>

      <Tab className="py-2 font-medium transition-colors border-b-2 border-white px-1.5 ui-selected:outline-none ui-selected:text-emerald-500 ui-selected:border-b-emerald-500">
        Cryptocurrencies
      </Tab>

      <Tab className="py-2 font-medium transition-colors border-b-2 border-white px-1.5 ui-selected:outline-none ui-selected:text-emerald-500 ui-selected:border-b-emerald-500">
        Search
      </Tab>
    </Tab.List>
  )
}
