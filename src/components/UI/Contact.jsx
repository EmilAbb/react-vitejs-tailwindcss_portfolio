
const Contact = () => {
  return (
    <section id="contact" className="pb-16">
        <div className="custom-container">
            <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</h2>
             <div className="md:flex justify-between items-center">
               <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
               <iframe className="border-0 w-full h-full" title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.0533429839375!2d49.845109475715894!3d40.40766905619119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087f5efc1f421%3A0x8d1989f4a7f62f9c!2sAvesta%20Concern%2C%20Baku!5e0!3m2!1saz!2saz!4v1698917402242!5m2!1saz!2saz"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
               <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100
               px-4 lg:px-8 py-8">
                <form className="w-full">
                    <div className="mb-5">
                        <input type="text" placeholder="Enter your name" className="w-full p-3 focus:outline-none rounded-[5px]"/>
                    </div>
                    <div className="mb-5">
                        <input type="email" placeholder="Enter your email" className="w-full p-3 focus:outline-none rounded-[5px]"/>
                    </div>
                    <div className="mb-5">
                        <input type="text" placeholder="Subject" className="w-full p-3 focus:outline-none rounded-[5px]"/>
                    </div>
                    <div className="mb-5">
                        <textarea type="text" rows={3} placeholder="Enter your message" className="w-full p-3 focus:outline-none rounded-[5px]"/>
                    </div>
                        <div className="flex items-center justify-center w-full">
                        <button className="px-4 py-2 bg-primaryColor hover:bg-headingColor text-white rounded-[10px] 
                        ease-in duration-300">Send Message</button>

                        </div>
                </form>
               </div>
             </div>
        </div>
    </section>
  )
}

export default Contact
