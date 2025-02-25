// Components
import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from 'react'

// Context
import { useContext } from 'react'
import { CoinContext } from '../context/CoinProvider'

// Types
import { Currencies } from '../types/CoinTypes'

export default function Toolbar() {
  const { currency, updateCurrency } = useContext(CoinContext)
  const currencies: Currencies[] = ['EUR', 'USD']

  return (
    <nav className="flex justify-end w-full max-w-4xl gap-4 p-2 mx-auto font-medium">
      <Listbox value={currency} onChange={updateCurrency}>
        <div className="relative">
          <Listbox.Button className="px-2 bg-white border rounded-md shadow-sm py-0.5 border-slate-200 text-emerald-500">
            {currency}
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute px-2 mt-1 overflow-auto bg-white border rounded-md shadow-sm cursor-pointer select-none py-0.5 border-slate-200">
              {currencies.map((currency, index) => (
                <Listbox.Option key={index} value={currency} as={Fragment}>
                  {({ selected }) => (
                    <li className={selected ? 'hidden' : ''}>{currency}</li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </nav>
  )
}
