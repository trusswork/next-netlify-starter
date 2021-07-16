import Image from 'next/image';

function Sidebar() {
    return (
        <div className="hidden px-3 py-2 text-white bg-[#1b1a1a] md:flex md:flex-[0.2] md:flex-col md:border-black md:border-2 md:h-[100vh] ">
            <Image src="/Tiziki-logo.jpg"
                height={70}
                width={60}
                objectFit="contain"
                alt="Tiziki logo"
            />
        </div>
    )
}

export default Sidebar