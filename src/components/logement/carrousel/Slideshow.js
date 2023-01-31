import PropsCarr from './PropsCarr'
import vector from '../../../assets/vector.png'
import { products } from '../../../models/Products'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../../styles/logement/Carrousel.css'


function ImageSlider() {
    const { productId } = useParams()
    const product = products.find((product) => product.id === productId)

    const [current, setCurrent] = useState(0)
    const slides = product.pictures;
    const length = slides.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    const nextSlide = () => {
        // si on arrive sur la dernière image (pour 4 images, 4-1 est égale a la 4eme image du tableau [3])
        // on retourne au début (image [0]), sinon on incrément de 1
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <div className='conteneur'>
            <button key={slides[1] + { length }} className={length === 1 ? "carrousel-btn--hidden" : 'carrousel-btn--G'}><img src={vector} alt="" onClick={prevSlide} /></button>
            <button key={slides[2] + { length }} className={length === 1 ? "carrousel-btn--hidden" : 'carrousel-btn--D'}><img src={vector} alt="" onClick={nextSlide} /></button>

            {product.pictures.map((picture, index) => {
                return (
                    <div key={index} className={index === current ? "slide active" : "slide"}>
                        {index === current && (<PropsCarr picture={picture} />)}
                        <p className={index === current ? "number-picture active" : "number-picture"}>
                            <span>{length === 1 ? "" : index + 1 + "/" + length}</span>
                        </p>

                    </div>
                )
            })}
        </div>


    )

}

export default ImageSlider