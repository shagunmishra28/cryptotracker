// Types
import { TrendingCoin } from '../types/CoinTypes'

interface TrendingCoinCardProps {
  coin: TrendingCoin
  ranking: number
}

export default function TrendingCoinCard({
  coin,
  ranking
}: TrendingCoinCardProps) {
  return (
    <div className="flex items-center justify-between p-4 space-y-2 bg-white border rounded-md shadow-sm border-slate-200">
      <div>
        <h2 className="space-x-1 font-medium">
          <span>#{ranking}</span>
          <span>{coin.name}</span>
          <span className="font-normal text-slate-400">
            {coin.symbol.toUpperCase()}
          </span>
        </h2>

        <h3 className="mt-2 font-mono">BTC {coin.price_btc}</h3>
      </div>

      <div className="w-12 aspect-square">
        <img className="w-full" src={coin.large} alt={coin.name} />
      </div>
    </div>
  )
}
