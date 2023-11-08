import '@/styles/globals.css'

//INTERNAL IMPORT
import { NavBar } from '@/components/component';


const MyApp = ({ Component, pageProps }) => (
    <div>
        <NavBar />
        <Component {...pageProps} />
    </div>
)


export default MyApp;


