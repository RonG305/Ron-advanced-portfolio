const ContactForm = () => {

    const styles = {
        inputStyle : ' border border-gray-300 rounded-sm p-2 bg-white mb-2 outline-sky-500  text-gray-700',
        textArea: " p-3 outline-sky-500 border border-gray-300 text-gray-700 rounded-md"
        
    }
    return (
        <div className='lg:w-1/2 flex flex-col bg-slate-100 p-4 rounded-md'>
            <input
              placeholder=' Your Name'
              className=' border border-gray-300 rounded-sm p-2 bg-white mb-2 outline-sky-500  text-gray-700'
            />

             <input
              placeholder='Your Email'
              className={styles.inputStyle}
            />

             <input
              placeholder='Subject'
              className={styles.inputStyle}
            />

            <textarea 
                rows={10}
                cols={10}
                placeholder="message"
                className={styles.textArea}
            />

            <button className=" px-5 py-2 rounded-md bg-sky-500 text-white w-fit my-4  ">submit</button>

       
        </div>
    )
}


export default ContactForm