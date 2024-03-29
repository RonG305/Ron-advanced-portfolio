import { FaLinkedin} from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";


export const contactData = [
    {
        name: "Address",
        icon: <SlLocationPin size={30} style={{color: "#a855f7"}} />,
        data: "00100 Nairobi-Kenya"
    },

    {
        name: "Contact Number",
        icon: <FaPhone size={30} style={{color: "#3b82f6"}}  />,
        data: "+254 790 021 016"
    },

    {
        name: "Linked In",
        icon: <FaLinkedin size={30} style={{color: "#3b82f6"}} />,
        data: "linked in"
    },

    {
        name: "Email Adress",
        icon: <IoMdMailUnread size={30} style={{color: "#a855f7"}} />,
        data: "mutiaronald138@gmail.com"
    },

    
]