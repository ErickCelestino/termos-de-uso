import { SendContactDto } from "../../interfaces";
import { Resend } from 'resend';

export const sendEmailService = async (data: SendContactDto) => { 
    try{
        const resend = new Resend(process.env.SEND_EMAIL_TOKEN);
    
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