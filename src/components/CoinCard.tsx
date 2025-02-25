// Styles
import { HiArrowSmUp as UpArrow } from 'react-icons/hi'
import { HiArrowSmDown as DownArrow } from 'react-icons/hi'

// Components
import CoinDetailsModal from './CoinDetailsModal'

// Helpers
import priceFormatter from '../helpers/priceFormatter'
import formatPriceChange from '../helpers/formatPriceChange'

// Context
import { useContext } from 'react'
import { CoinContext } from '../context/CoinProvider'

// Hooks
import { useState } from 'react'

// Types
import { Coin } from '../types/CoinTypes'

interface CoinCardProps {
  coin: Coin
}

export default function CoinCard({ coin }: CoinCardProps) {
  const { currency } = useContext(CoinContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isPriceChangePositive = coin.price_change_percentage_1h_in_currency > 0
  const priceChangeColor = isPriceChangePositive
    ? 'text-emerald-500'
    : 'text-red-500'

  function toggleModal() {
    setIsModalOpen((previous) => !previous)
  }

  return (
    <>
      <div className="flex justify-between gap-4 p-4 bg-white border rounded-md shadow-sm border-slate-200">
        <button className="flex gap-4 text-left" onClick={toggleModal}>
          <img
            className="w-12 aspect-square"
            src={coin.image}
            alt={coin.name}
          />

          <div>
            <h2 className="font-medium">{coin.name}</h2>
            <span className="text-slate-400">{coin.symbol.toUpperCase()}</span>
          </div>
        </button>

        <div className="text-end">
          <h3 className="font-medium">
            {priceFormatter(coin.current_price, currency)}
          </h3>

          <div className={`flex items-center justify-end ${priceChangeColor}`}>
            {isPriceChangePositive ? <UpArrow /> : <DownArrow />}
            <span>
              {formatPriceChange(coin.price_change_percentage_1h_in_currency)}%
            </span>
          </div>
        </div>
      </div>

      <CoinDetailsModal
        coin={coin}
        isOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </>
  )
}
