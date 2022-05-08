import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "269b2415e5537d",
        pass: "1e31d436467038"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <submit@feedget.com>',
            to: 'Dono do site <dono.do.site@gmail.com>',
            subject,
            html: body,
        });
    };
}