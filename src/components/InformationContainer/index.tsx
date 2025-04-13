import "./style.sass"

export const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <div className="about-me">
                    <h2>About Me</h2>
                    <p>
                        I'm a passionate Full Stack Developer with experience in building web applications 
                        using modern technologies. I love creating efficient, scalable, and user-friendly 
                        solutions that solve real-world problems.
                    </p>
                </div>

                <div className="personal-info">
                    <h2>Personal Information</h2>
                    <ul>
                        <li>
                            <span className="title">Location:</span>
                            <span>Brazil</span>
                        </li>
                        <li>
                            <span className="title">Email:</span>
                            <span>
                                <a href="mailto:gustavojs417@gmail.com">
                                    gustavojs417@gmail.com
                                </a>
                            </span>
                        </li>
                        <li>
                            <span className="title">Occupation:</span>
                            <span>Full Stack Developer</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}