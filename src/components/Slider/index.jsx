import { Container } from "../../components/Slider/styles"
import { Swiper, SwiperSlide } from "swiper/react"
import Card from "../Card"

function Slider({ info, title }) {
    console.log(info, title)

    return (
        <Container>
            <h2>{title} </h2>
            <Swiper grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}> {/* coloquei o index como uma chave unica porque ele vai mostrar a posicao que eu to, posicao 1, 2 ,3 e etc.. entao é unica. */}
                        <Card item={item}/> {/* esse item é os dados que esto indo lá pra minha variavel*/}
                    </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}

export default Slider