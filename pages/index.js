import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Makati House!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Makati House
        </h1>

        <p className="description">
          We are a club on clubhouse that want to promote Filipinos helping Filipinos. We discuss about the economy, politics, and startups. 
          <wbr>Everyone is welcome <a href="https://joinclubhouse.com/club/makati-house">join us on clubhouse</a>. Listen to our podcast on <a href="https://open.spotify.com/show/1U34EiVaYTEU8FCGAWyCpv?si=HjK8p40QSVuch-wjPbWAZQ&dl_branch=1" title="MakatiHouse now on Spotify!">Spotify</a>!
        </p>

        <div className="grid">
          <div className="socials">
            <a href="https://www.instagram.com/makatihouse" title="instagram makatihouse">
              <FontAwesomeIcon icon={faInstagram} size="xs" /> 
            </a>
            <a href="https://www.facebook.com/makatihouseph" title="facebook makatihouse">
              <FontAwesomeIcon icon={faFacebook} size="xs" />
            </a>
          </div>
        </div>
        
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>



      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
