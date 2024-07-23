import css from "./SideBar.module.css"

const SideBar = () => {
    console.log(css)
    
    return (
        <div className = {css.sidebar}>
            <div class="logo">
                <div class="logo_img"></div>
            </div>
            <div class="sidebar_menu">
                <div class="menu__heading">
                    <h1>Heading</h1>
                </div>
                <a href="#" >
                    <span>Info</span>
                </a>
                <a href="#">
                    <span>Info</span>
                </a>
                <a href="#">
                    <span>Info</span>
                </a>
                <div class="menu__heading">
                    <h1>Heading</h1>
                </div>
                <a href="#">
                    <span>Info</span>
                </a>
                <a href="#">
                    <span>Info</span>
                </a>
                <div class="menu__heading">
                    <h1>Heading</h1>
                </div>
                <a href="#">
                    <span>Info</span>
                </a>
                <a href="#">
                    <span>Info</span>
                </a>
            </div>
        </div>
    )
}

export default SideBar;