import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        // Configurar o transporter do nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        // Configurar o email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'contact@gustavohenrique.dev', // seu email de destino
            subject: `New Contact Form Submission from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        }

        // Enviar o email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Failed to send email:', error)
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        )
    }
}