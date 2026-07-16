'use client'

import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import listSocialNetworks from '@/data/socialNetworks'
import informations from '@/data/informations'
import './style.sass'

export const ContactSection = () => {
    const email = informations.find(info => info.details.title === "Email")?.details.content;
    const phone = informations.find(info => info.details.title === "Phone")?.details.content;
    const location = informations.find(info => info.details.title === "Location")?.details.content;

    return (
        <section className="contact-section" id="contact">
            <div className="section-header">
                <h2>Let's Connect</h2>
                <p>Feel free to reach out through any of these channels</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <FiMail className="icon" />
                        <div className="info-content">
                            <h3>Email</h3>
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <FiMapPin className="icon" />
                        <div className="info-content">
                            <h3>Location</h3>
                            <p>{location}</p>
                        </div>
                    </div>

                    <div className="social-networks">
                        <h3>Connect With Me</h3>
                        <div className="social-links">
                            {listSocialNetworks.map((network) => (
                                <a
                                    key={network.name}
                                    href={network.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={`Connect on ${network.name}`}
                                >
                                    {network.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
