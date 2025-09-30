
import Logo from '../../assets/logo.png'
import { Container, Menu, Li, } from './styles'
import { Link, useLocation } from 'react-router-dom'

function Header() {

    const {pathname} = useLocation()

    return (
        <Container>

            < img src={Logo} alt=" Logo-dev-Movies" /> 

            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to="/"> Home </Link>
                </Li>

                <Li $isActive={pathname.includes ('filmes')}> {/* esse includes é pra localizacao do nome da pagina, mesmo que eu coloque ///filmes, ele vai pegar o filmes que esta ali no texto e vai encontrar da mesma forma  */}
                    <Link to="/filmes"> Filmes </Link>
                </Li>

                <Li $isActive={pathname.includes ('series')}>
                    <Link to="/series"> Séries </Link>
                </Li>
            </Menu>

        </Container>
    )
}

export default Header



// esse é um componente criado para distribuir nos componetes do projeto.


