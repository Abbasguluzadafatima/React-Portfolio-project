import {FaPhoneAlt,FaTwitter, FaEnvelope, FaSkype,FaFacebookF}  from "react-icons/fa";
import {Address, Title} from '../../components';

export const Contact = () => {
  return (
    <>
    <Title title='Contact'/>
    <Address toLink="mailto:someone@example.com" icon={<FaPhoneAlt/>} text="500 342 242"/>
    <Address toLink="mailto:someone@example.com" icon={<FaEnvelope/>} text="office@kamsolutions.pl"/>
    <Address toLink="mailto:someone@example.com" icon={<FaTwitter/>} text="Twitter "/>
    <Address toLink="mailto:someone@example.com" icon={<FaFacebookF/>} text="Facebook"/>
    <Address toLink="mailto:someone@example.com" icon={<FaSkype/>} text="Skype "/>
    </>
  )
}

