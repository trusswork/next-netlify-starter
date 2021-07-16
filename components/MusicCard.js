import Image from 'next/image'

function MusicCard({ data }) {
    return (


        <div className="flex flex-row ">
            {data.map((item) => (
                <div key={item.id} className="m-10" >
                    <Image alt="images" src={item.image} width={250} height={250} objectFit="cover" />
                    <p className="text-black">{item.name}</p>
                </div>

            ))
            }

        </div>


    )
}

export default MusicCard


