'use client'

import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import listSocialNetworks from '@/data/socialNetworks'
import './style.sass'

export const ContactSection = () => {
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
                            <a href="mailto:contact@gustavohenrique.dev">contact@gustavohenrique.dev</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <FiPhone className="icon" />
                        <div className="info-content">
                            <h3>Phone</h3>
                            <a href="tel:+5511985976152">+55 (11) 98597-6152</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <FiMapPin className="icon" />
                        <div className="info-content">
                            <h3>Location</h3>
                            <p>SP - SP, Brazil</p>
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