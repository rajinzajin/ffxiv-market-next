import Image from 'next/image'
import { Inter } from 'next/font/google'
import ItemSearchBar from '@/components/ItemSearchBar'
import MarketEvents from '@/components/MarketEvents'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="h-full">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 2xl:col-span-6">
            <div className="w-full">
              <div
                className="h-100 col-span-12 xl:col-span-6 p-5 items-center justify-center rounded-2xl bg-item"
              >
                <div
                  className="text-xl text-center font-display font-[400] text-white"
                >
                  Search Item
                </div>
                <div className="mt-1">
                  <ItemSearchBar />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 2xl:col-span-6">
            {/* <ItemCard item_id={selectedEvent.item}/> */}
            <div className="h-[35rem]">
              {/* <ListingTable listings={selectedEventListings} /></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
