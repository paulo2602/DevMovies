// import Header from "../components/Header";
import { Outlet }  from 'react-router-dom'


function DefaultLayout(){

    return(
        <>
        {/* <Header/>   */}
        <Outlet />
        </>
    )
}

export default DefaultLayout 


/* <>
<Header/>   esse e o header que fiz, ele vai mostrar primeiro na tela 

<Outlet /> e aqui vai a tela que tiver carregada no momento 

</> 
*/
