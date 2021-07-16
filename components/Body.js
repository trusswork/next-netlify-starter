import MusicCard from "./MusicCard"

function Body({data}) {
    return (
        <div className="w-full text-white px-3 h-screen md:flex md:flex-[0.8]">
            <MusicCard data={data} />
        </div>
    )
}

export default Body
