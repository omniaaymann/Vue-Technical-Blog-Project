import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {SessionProvider} from 'next-auth/react'
import {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import ShopWithUs from '../Components/ShopWithUs'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  useEffect(()=> {
    import ('../node_modules/bootstrap/dist/js/bootstrap.min.js')
  },[])

  return (
    <div>
    <SessionProvider session={session}>
     <Navbar/>
     <Component {...pageProps} />
     </SessionProvider>
     </div>

 
  
  )
  

}



export default MyApp
