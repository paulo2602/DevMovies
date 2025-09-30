import { Route, Routes } from 'react-router-dom' //Biblioteca de roteammento. import de deenntro da biblioteca


import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {


    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Movies />} />
                <Route path='/series' element={<Series />} />
            </Route>
        </Routes>
    )
}

export default Router


//aqui foi criado o caminho de roteamento das paginas. conexao entre as paginas.