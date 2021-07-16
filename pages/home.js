import Body from '../components/Body'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'
import { TopArtistsData } from '../Response';


function home() {
    return (
        <div className="Home">
            <Head>
                <title>TIZIKI</title>
                <meta name="description" content="Made by Kenyans for Everyone." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="player">
                <div className="player-body">
                    <Sidebar />
                    <Body data={TopArtistsData} />
                </div>
                {/* <Footer /> */}

            </main>

        </div>
    )
}

export default home




