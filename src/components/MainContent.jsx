export default function MainContent() {
    return (
        <div className = "main">
            <div className="main--about">
                <h3 className = "about--title">About</h3>
                <p className="about--text">This is the about section.</p>
            </div>
            <div className="main--interests">
                <h3 className = "interests--title">Interests</h3>
                <p className="interests-text">This is the interests section.</p>
            </div>
            <div className="main--projects">
                <h3 className = "projects--title">Projects</h3>
                <p className="projects--text">This is the projects section.</p>
                <ul className="projects--list">
                    <li>Sample 1</li>
                    <li>Sample 2</li>
                </ul>
            </div>
        </div>
    )
}