import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "269b2415e5537d",
        pass: "1e31d436467038"
    }
});

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <submit@feedget.com>',
        to: 'Dono do site <dono.do.site@gmail.com>',
        subject: `Feedback - Novo ${type} reportado`,
        html: [
            `<div style='font-family: sans-serif; font-size: 16px; color: #121;'>`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    });

    return res.status(201).json({ data: feedback });
})
