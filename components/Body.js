import MusicCard from "./MusicCard"

function Body({ data }) {
    return (
        <div className="bg-[#0F0F0F] flex w-full text-white px-3 h-screen  md:flex-[0.8] overflow-x-scroll">
            <div className="flex flex-col">
                <MusicCard data={data} />
                <MusicCard data={data} />
                <MusicCard data={data} />
                <MusicCard data={data} />
            </div>

        </div>
    )
}

export default Body
