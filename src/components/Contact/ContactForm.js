import emailjs from 'emailjs-com'



const SERVICE_ID = "service_dsajwdg";
const TEMPLATE_ID = "template_mtt3fio";
const PUBLIC_KEY = "Y0jD4eELXnHfgr1OA";

const ContactForm = () => {

   

    const styles = {
        inputStyle : ' border border-gray-300 rounded-sm p-2 bg-white mb-2 outline-sky-500  text-gray-700',
        textArea: " p-3 outline-sky-500 border border-gray-300 text-gray-700 rounded-md"
        
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
        .then((result) => {
            console.log("email sent succesifully", result.text)
            alert("message sent succesifully")
            event.target.reset()
        }, (error) => {
            console.log("error occured while sending message", error)
            alert("message failed to sent")
        })
    }
    return (
        <form className='lg:w-1/2 flex flex-col bg-slate-100 p-4 rounded-md' onSubmit={handleSubmit}>
       
           
            <input
              placeholder=' Your Name'
              name='name'
              className=' border border-gray-300 rounded-sm p-2 bg-white mb-2 outline-sky-500  text-gray-700'
            />

             <input
              placeholder='Your Email'
              className={styles.inputStyle}
              name='email'
            />

             <input
              placeholder='Subject'
              className={styles.inputStyle}
              name='subject'
            />

            <textarea 
                rows={10}
                cols={10}
                placeholder="message"
                className={styles.textArea}
                name='message'
            />

            <button className=" px-5 py-2 rounded-md bg-sky-500 text-white w-fit my-4  ">submit</button>
          
          

       
      
        </form>
    )
}


export default ContactForm