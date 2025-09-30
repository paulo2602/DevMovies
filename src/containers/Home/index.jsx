
import { useEffect } from 'react'
import api from '../../services/api'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { useState } from 'react'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'





function Home() {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [topPopular, setTopPopular] = useState()
    const [topPeople, setTopPeople] = useState()




    useEffect(() => {

        async function getMovies() {
            const { data:
                { results }
            } = await api.get('/movie/popular')

            setMovie(results[1])

        }

        async function getTopMovies() {
            const { data:
                { results }
            } = await api.get('/movie/top_rated')

            console.log(results)
            setTopMovies(results)

        }





        async function getTopSeries() {
            const { data:
                { results }
            } = await api.get('/tv/top_rated')

            console.log(results)
            setTopSeries(results)
        }






        async function getTopPopular() {
            const { data:
                { results }
            } = await api.get('/tv/popular')

            console.log(results)
            setTopPopular(results)
        }


        async function getTopPeople() {
            const { data:
                { results }
            } = await api.get('/person/popular')

            console.log(results)
            setTopPeople(results)
        }

        getMovies()
        getTopMovies()
        getTopSeries()
        getTopPopular()
        getTopPeople()

    }, [])


    return (
        <>
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p> {movie.overview}</p>
                            <ContainerButtons>
                                <Button red>Assista Agora </Button>
                                <Button >Assista o Trailer </Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt='capa-do-filme' src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}   {/*carregar somente quando tiver alguma coisa */}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {topPopular && <Slider info={topPopular} title={'Top Popular'} />}
            {topPeople && <Slider info={topPeople} title={'Top People Popular'} />}
        </>
    )

}

export default Home

