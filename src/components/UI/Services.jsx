import frontedImg from "../../assets/images/front-end.png" 
import backendImg from '../../assets/images/backend.png'
import designImg from '../../assets/images/design.png'
import appsImg from '../../assets/images/apps.png'

const Services = () => {
  return (
   <section id="services">
    <div className="custom-container lg:pt-5">
         <div className="text-center">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                What do I help
            </h2>
            <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis soluta illum suscipit,
               nostrum quam quis cupiditate quibusdam et inventore
                laborum molestiae aut neque? Modi aliquid pariatur totam doloremque neque.</p>
         </div>
         <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
               <div className="relative text-gray-700 antialiased text-sm font-semibold">
                    {/* {===========vertical line========} */}
                    <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
                    {/* {========LEFT CARD======} */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                      <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                         <div data-aos="fade-right" data-aos-duration="1200" className="bg-white p-4 rounded service-card
                         shadow  hover:text-white cursor-pointer ease-in duration-150">
                           <h3 className="text-primaryColor font-[700] mb-3 ">Fronted Development</h3>
                           <p className="text-[500] text-smallTextColor">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Illo at odio sunt.
                             Reiciendis, architecto quidem.
                           </p>
                         </div>
                        </div>
                      </div>
                      </div>
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute 
                     top-[6%] right-[42.7%] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0   flex items-center justify-center">
                         <figure>
                          <img src={frontedImg} alt="" />
                         </figure>
                      </div>
                    </div>

                    {/* {=========right-card====} */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                      <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                         <div data-aos="fade-left"
                         data-aos-delay='50'
                          data-aos-duration="1300"
                           className="bg-white p-4 rounded service-card
                         shadow  hover:text-white cursor-pointer ease-in duration-150">
                           <h3 className="text-primaryColor font-[700] mb-3 ">Backend Development</h3>
                           <p className="text-[500] text-smallTextColor">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Illo at odio sunt.
                             Reiciendis, architecto quidem.
                           </p>
                         </div>
                        </div>
                      </div>
                      </div>
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute 
                      top-[33%] right-[42.8%] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0   flex items-center justify-center">
                         <figure>
                          <img src={backendImg} alt="" />
                         </figure>
                      </div>
                    </div>
                     
                         {/* {========LEFT CARD======} */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                      <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                         <div data-aos="fade-right"
                         data-aos-delay='100'
                          data-aos-duration="1400"
                           className="bg-white p-4 rounded service-card
                         shadow  hover:text-white cursor-pointer ease-in duration-150">
                           <h3 className="text-primaryColor font-[700] mb-3 ">UI/UX Design</h3>
                           <p className="text-[500] text-smallTextColor">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Illo at odio sunt.
                             Reiciendis, architecto quidem.
                           </p>
                         </div>
                        </div>
                      </div>
                      </div>
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute 
                      left-[50%] top-[60%] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0   flex items-center justify-center">
                         <figure>
                          <img src={designImg} alt="" />
                         </figure>
                      </div>
                    </div>

                    {/* {=========right-card====} */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                      <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                         <div data-aos="fade-left"
                          data-aos-duration="1500"
                           className="bg-white p-4 rounded service-card
                         shadow  hover:text-white cursor-pointer ease-in duration-150">
                           <h3 className="text-primaryColor font-[700] mb-3 ">Apps Development</h3>
                           <p className="text-[500] text-smallTextColor">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Illo at odio sunt.
                             Reiciendis, architecto quidem.
                           </p>
                         </div>
                        </div>
                      </div>
                      </div>
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute 
                      left-[50%] top-[87%] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0   flex items-center justify-center">
                         <figure>
                          <img src={appsImg} alt="" />
                         </figure>
                      </div>
                    </div>
 
               </div>
            </div>
         </div>
    </div>
   </section>
  )
}

export default Services
