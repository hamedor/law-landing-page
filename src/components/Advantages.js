import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import {advantages, advantages__title, advantages__list, advantages__item, advantages__text, advantages__image} from '../styles/Advantages.module.css'


const Advantages = () => {
    return(
        <section className={advantages}>
            <h2 className={advantages__title}>Lorem ipsum dolor</h2>
            <div className={advantages__list}>
                <div className={advantages__item}>
                    <p className={advantages__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                    
                    <div className="advantages__image">
                        <StaticImage
                        src="../../static/images/cats/cat1.jpg"
                        alt="image"
                        placeholder="blurred"
                        layout="fixed"
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
                <div className={advantages__item}>                
                    <div className="advantages__image">
                    <StaticImage
                        src="../../static/images/cats/cat2.jpg"
                        alt="image"
                        placeholder="blurred"
                        layout="fixed"
                        width={300}
                        height={300}
                        />
                    </div>
                    <p className={advantages__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                </div>
                <div className={advantages__item}>
                    <p className={advantages__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                    <div className="advantages__image">
                    <StaticImage
                        src="../../static/images/cats/cat3.jpg"
                        alt="image"
                        placeholder="blurred"
                        layout="fixed"
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
                <div className={advantages__item}>
                    <div className="advantages__image">
                    <StaticImage
                        src="../../static/images/cats/cat4.jpg"
                        alt="image"
                        placeholder="blurred"
                        layout="fixed"
                        width={300}
                        height={300}
                        />
                    </div>
                    <p className={advantages__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Advantages;