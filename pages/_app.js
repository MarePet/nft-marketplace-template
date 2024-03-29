import '@/styles/globals.css'
import { Helmet } from "react-helmet";

//INTERNAL IMPORT
import { NavBar, Footer } from '@/components/component';


const MyApp = ({ Component, pageProps }) => (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>React app</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <NavBar />
        <Component {...pageProps} />
        <Footer/>
    </div>
)


export default MyApp;


