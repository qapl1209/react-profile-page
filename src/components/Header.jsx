export default function Header() {
    return (
        <nav className = "header">
            <img className = "header--headshot" src = "../../external/React-icon.png"/>
            <h3 className = "header--name">Maxim Gao</h3>
            <h4 className = "header--position">Software and Data Analytics</h4>
            <button className = "header--email_btn">Email</button>
            <button className="header--linkedin-btn">LinkedIn</button>
        </nav>
    )
}