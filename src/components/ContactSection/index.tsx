'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import './style.sass'

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error('Failed to send message')

            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
            
            // Opcional: Mostrar mensagem de sucesso
            alert('Message sent successfully!')
        } catch (error) {
            setSubmitStatus('error')
            alert('Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2>Let's Connect</h2>
                <p>Interested in working together? Let's talk</p>
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
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={isSubmitting}
                    >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <FiSend className="icon" />
                    </button>
                </form>
            </div>
        </section>
    )
}