import { NavLink } from "react-router-dom"
import { useState } from "react"
import css from "./Menu.module.css"
import { IoIosMenu } from "react-icons/io";

const Menu = () => {

    return (
        <menu className={css.menu}>
                {/* <li onClick = { onChangeIsActive } className= { isActive ? css.menu__active : css.menu  }>Menu</li> */}
                <button className={css.button_menu}><IoIosMenu className={css.menu__icon}/></button>
                <li className={css.menu__item}><NavLink href="#" className={css.menu__item__link}>todays news</NavLink></li>
                <li className={css.menu__item}><NavLink href="#" className={css.menu__item__link}>todays news 2</NavLink></li>
                <li className={css.menu__item}><NavLink href="#" className={css.menu__item__link}>todays news 3</NavLink></li>
                <li className={css.menu__item}><NavLink href="#" className={css.menu__item__link}>todays news 4</NavLink></li>
                <li className={css.menu__item}><NavLink href="#" className={css.menu__item__link}>todays news 5</NavLink></li>
                <li className={css.menu__item}><NavLink href="#" className={css.menu__item__link}>todays news 6</NavLink></li>
                <li className={css.menu__item}><NavLink href="#" className={css.menu__item__link}>todays news 7</NavLink></li>
                <li className={css.menu__item}><NavLink href="#" className={css.menu__item__link}>todays news 8</NavLink></li>
        </menu>
    )
}

export default Menu