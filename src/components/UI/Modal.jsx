
import portfolios from "../../assets/data/portfolioData"

const Modal = ({activeID, setShowModal}) => {

    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[9px] transform -translate-x-1/2 -translate-y-1/2 p-5">
             <div>
                <figure>
                <img className="rounded-[9px]" src={portfolio.imgUrl} alt="" />
                </figure>
             </div>
             <div>
                <h2 className="text-2xl text-headingColor font-[700] my-5">{portfolio.title}</h2>
                <p className="text-[16px] text-smallTextColor leading-7">{portfolio.description}</p>
                <div className="mt-5 flex items-center gap-3 flex-wrap">
                       <h4 className="text-headingColor text-[18px] font-[600]">Technologies:</h4>
                       {
                       portfolio.technologies.map((item,index) => ( <span className="bg-gray-200 py-1 px-2 rounded-[5px]
                       text-[14px] leading-0" key={index}>{item}</span>))
                       }
                </div>
                <a href={portfolio.siteUrl}>
                    <button className="mt-5 bg-primaryColor text-white px-4 py-2 rounded-[8px] font-[500]
                    hover:bg-headingColor ease-in duration-300">Live Site</button>
                </a>
             </div>
             <button onClick={()=>setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem]
             right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px]">&times;</button>
      </div>
    </div>
  )
}

export default Modal
