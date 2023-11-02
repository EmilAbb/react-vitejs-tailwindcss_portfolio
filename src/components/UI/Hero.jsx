
import heroImg from "../../assets/images/hero.svg"
import CountUp from 'react-countup';

import {AiOutlineMail} from 'react-icons/ai'
import {GrAppsRounded} from 'react-icons/gr'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'

const Hero = () => {
    return (
        <section className="pt-0" id='about'>
            <div className="custom-container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/* {==========HERO LEFT CONTENT START=========} */}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos='fade-right' data-aos-duration='1500' className="text-headingColor font-[600] text-[16px]">Hello welcome</h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500'
                            className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px]
                                       leading-[35px] sm:leading-[46px] mt-5">I am Emil Abbasov <br />Software Developer</h1>
                        <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className="flex items-center gap-6 mt-5">
                          <a href="#contact"><button className="bg-primaryColor text-white font-[500] hover:bg-smallTextColor ease-in-out duration-300 flex items-center gap-2
                          py-2 px-4 rounded-[8px]"><AiOutlineMail/>Hire me</button></a>
                          <a href="#portofolio" className="text-smallTextColor font-[600] text-[16px] py-2 px-4 rounded-[8px] 
                          border  border-solid border-smallTextColor">See portfolio</a>
                          
                        </div>
                       
                        <p data-aos='fade-left' data-aos-duration='1500' className="text-headingColor text-[15px] font-[500] leading-7
                        mt-12 sm:pl-14 sm:pr-10 flex gap-2">
                            <span><GrAppsRounded/></span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Quo molestias aliquid consequuntur eveniet laudantium repellat necessitatibus veritatis asperiores similique dolore.</p>
                             <div className="flex items-center gap-9 mt-14">
                                     <span className="text-smallTextColor text-[18px] font-[600]">Follow me:</span>
                                     <span><a href="#youtube" className="text-smallTextColor text-[18px] font-[600]"><AiOutlineYoutube/></a></span>
                                     <span><a href="#github" className="text-smallTextColor text-[18px] font-[600]"><AiFillGithub/></a></span>
                                     <span><a href="#facebook" className="text-smallTextColor text-[18px] font-[600]"><BiLogoFacebook/></a></span>
                                     <span><a href="#instagram" className="text-smallTextColor text-[18px] font-[600]"><AiOutlineInstagram/></a></span>
                             </div>
                    </div>
                    {/* {==========HERO LEFT CONTENT END=========} */}

                    {/* {=======HERO IMG START======} */}
                    
                    <div className="basis-1/3 mt-10 sm:mt-0">
                          <figure className="flex items-center justify-center">
                            <img src={heroImg} alt="" />
                          </figure>
                    </div>

                    {/* {=======HERO IMG END======} */}
                    {/* {=======HERO CONTENT RIGHT START======} */}
                     
                     <div className="md:basis-1/5 flex justify-between text-center mt-10 gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                           <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={6} duration={2} suffix="+"/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">Years of experience</h4>
                           </div>
                           <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={100} duration={2} suffix="%"/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">Success rate</h4>
                           </div>
                           <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={150} duration={2} suffix="+"/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">Happy clients</h4>
                           </div>
                           <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={249} duration={2} suffix="+"/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">Projects completed</h4>
                           </div>
                     </div>

                    {/* {=======HERO CONTENT RIGHT  END======} */}
                </div>
            </div>
        </section>
    )
}

export default Hero
