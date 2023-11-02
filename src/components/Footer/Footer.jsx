import { AiOutlineMail } from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'




const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      {/*{============FOOTERR TOP===========}*/}

      <div className="custom-container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact"><button className="bg-primaryColor text-white font-[500] hover:bg-smallTextColor ease-in-out duration-300 flex items-center gap-2
             py-2 px-4 rounded-[8px]"><AiOutlineMail />Hire me</button></a>
          </div>
          <div className="w-full sm:w-1/2">
               <p className='text-gray-300 leading-7 mt-4 sm:mt-0'> Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Obcaecati consequatur quod 
                voluptatibus error! Odit, quam.</p>
                <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                   <span className='text-gray-300 font-[600] text-[15px]'>Follow me:</span>
                   <span className='w-[30px] h-[30px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer flex items-center justify-center'>
                    <a href="#github" className='text-gray-300 font-[500] text-[18px]'><AiFillGithub/></a>
                   </span>
                   <span className='w-[30px] h-[30px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer flex items-center justify-center'>
                    <a href="#facebook" className='text-gray-300 font-[500] text-[18px]'><BiLogoFacebook/></a>
                   </span>
                   <span className='w-[30px] h-[30px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer flex items-center justify-center'>
                    <a href="#instagram" className='text-gray-300 font-[500] text-[18px]'><AiOutlineInstagram/></a>
                   </span>
                   <span className='w-[30px] h-[30px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer flex items-center justify-center'>
                    <a href="#youtube" className='text-gray-300 font-[500] text-[18px]'><AiOutlineYoutube/></a>
                   </span>
                </div>
          </div>
        </div>
        <div>
                    <ul className="flex items-center justify-center gap-10 mt-10">
                        <li><a className="text-gray-400 font-[600]" href="#about">About</a></li>
                        <li><a className="text-gray-400 font-[600]" href="#services">Services</a></li>
                        <li><a className="text-gray-400 font-[600]" href="#portfolio">Portfolio</a></li>
                        <li><a className="text-gray-400 font-[600]" href="#contact">Contact</a></li>
                    </ul>
                  </div>
      </div>
      {/*{============FOOTERR TOP END===========}*/}
      {/* {======== FOOTER BOTTOM ========} */}

      <div className='bg-[#1b1e29] py-3 mt-14'>
            <div className="custom-container">
                <div className="flex items-center justify-center sm:justify-between">
                  <div className="hidden sm:block">
                    <div className="flex items-center gap-[10px]">
                           <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px]
                           flex items-center justify-center'>A</span>
                           <div className='leading-[20px]'>
                                <h2 className='text-gray-200 font-[500] text-[18px]'>Emil</h2>
                                <p className='text-gray-400 text-[14px] font-[500]'>Personal</p>
                           </div>
                    </div>
                  </div>
                  <div>
                    <p className='text-gray-300 font-[500] text-[15px]'>Copyright 2023 by Emil - All right reserved.</p>
                  </div>
                </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer
