'use client'

import { FaHeart } from 'react-icons/fa'
import listSocialNetworks from '@/data/socialNetworks'
import './styles.sass'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    {listSocialNetworks.map((network) => (
                        <a
                            key={network.name}
                            href={network.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label={`Visit ${network.name}`}
                        >
                            {network.icon}
                        </a>
                    ))}
                </div>

                <div className="footer-text">
                    <p>
                        Made with <FaHeart className="heart-icon" /> by{' '}
                        <a 
                            href="https://github.com/mrpunkdasilva"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gustavo Henrique
                        </a>
                    </p>
                    <p className="copyright">
                        © {currentYear} All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}