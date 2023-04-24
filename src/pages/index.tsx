import ItemSearchBar from '@/components/ItemSearchBar'

export default function Home() {
  return (
    <div className="w-full min-h-[45rem] flex justify-center items-center">
      <div className="w-full xl:w-1/2 2xl:w-1/3 h-full ">
        <ItemSearchBar />
      </div>
    </div>
  )
}
