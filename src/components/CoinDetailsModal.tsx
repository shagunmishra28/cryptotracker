// Components
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CoinChart from './CoinChart'

// Context
import { useContext } from 'react'
import { CoinContext } from '../context/CoinProvider'

// Types
import { Coin } from '../types/CoinTypes'
import priceFormatter from '../helpers/priceFormatter'

interface CoinDetailsModalProps {
  coin: Coin
  isOpen: boolean
  toggleModal: () => void
}

export default function CoinDetailsModal({
  coin,
  isOpen,
  toggleModal
}: CoinDetailsModalProps) {
  const { currency } = useContext(CoinContext)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog className="relative z-50" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-950/25" />
        </Transition.Child>

        <div className="fixed inset-0 text-slate-700">
          <div className="grid min-h-full mx-2 place-items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col items-center w-full max-w-3xl gap-4 p-4 bg-white border rounded-md shadow-sm border-slate-200">
                <div className="flex justify-end w-full">
                  <button
                    className="p-2 font-medium transition-opacity hover:opacity-60"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div>

                <div className="w-full max-w-xl">
                  <CoinChart
                    name={coin.name}
                    data={coin.sparkline_in_7d.price}
                  />
                </div>

                <table className="w-full max-w-xl overflow-x-auto text-end">
                  <tbody className="text-sm divide-y divide-slate-200 whitespace-nowrap">
                    <tr>
                      <th className="py-4 font-medium text-start">
                        Market Cap Rank:
                      </th>
                      <td>#{coin.market_cap_rank}</td>
                    </tr>

                    <tr>
                      <th className="py-4 font-medium text-start">
                        {coin.name} Price:
                      </th>
                      <td>{priceFormatter(coin.current_price, currency)}</td>
                    </tr>

                    <tr>
                      <th className="py-4 font-medium text-start">
                        Market Cap:
                      </th>
                      <td>{priceFormatter(coin.market_cap, currency)}</td>
                    </tr>

                    <tr>
                      <th className="py-4 font-medium text-start">24h Low:</th>
                      <td>{priceFormatter(coin.low_24h, currency)}</td>
                    </tr>

                    <tr>
                      <th className="py-4 font-medium text-start">24h High:</th>
                      <td>{priceFormatter(coin.high_24h, currency)}</td>
                    </tr>
                  </tbody>
                </table>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
