import { SendContactDto } from "../../interfaces";
import { Resend } from 'resend';

export const sendEmailService = async (data: SendContactDto) => { 
    try{
        const token = process.env['SEND_EMAIL_TOKEN'];
        const resend = new Resend(token);
    
        await resend.emails.send({
            from: data.email,
            to: 'erickcelestimo@gmail.com',
            subject: data.suject,
            html: data.details
          });    
    } catch(error) {
        console.error(error)
    }
}
