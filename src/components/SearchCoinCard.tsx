// Types
import { SearchCoin } from '../types/CoinTypes'

interface SearchCoinCardProps {
  coin: SearchCoin
}

export default function SearchCoinCard({ coin }: SearchCoinCardProps) {
  return (
    <div className="flex items-center justify-between p-4 space-y-2 bg-white border rounded-md shadow-sm border-slate-200">
      <div>
        <h2 className="space-x-1 font-medium">
          {coin.market_cap_rank ? <span>#{coin.market_cap_rank}</span> : null}
          <span>{coin.name}</span>
          <span className="font-normal text-slate-400">
            {coin.symbol.toUpperCase()}
          </span>
        </h2>
      </div>

      <div className="w-8 aspect-square">
        <img className="w-full" src={coin.large} alt={coin.name} />
      </div>
    </div>
  )
}
