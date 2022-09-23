import React from "react"

import {footer__navigation, footer__list, footer__item} from '../styles/Footer.module.css'

const Footer = () => {
    return(
        <div className={footer__navigation}>
            <ul className={footer__list}>
                <li className={footer__item}>item</li>

                <li className={footer__item}>item</li>
                <li className={footer__item}>item</li>
                <li className={footer__item}>item</li>
            </ul>
            <ul className={footer__list}>
                <li className={footer__item}>item</li>

                <li className={footer__item}>item</li>
                <li className={footer__item}>item</li>
                <li className={footer__item}>item</li>
            </ul>
            <ul className={footer__list}>
                <li className={footer__item}>item</li>

                <li className={footer__item}>item</li>
                <li className={footer__item}>item</li>
                <li className={footer__item}>item</li>
            </ul>
            <ul className={footer__list}>
                <li className={footer__item}>item</li>

                <li className={footer__item}>item</li>
                <li className={footer__item}>item</li>
                <li className={footer__item}>item</li>
            </ul>
        </div>
    )
}

export default Footer