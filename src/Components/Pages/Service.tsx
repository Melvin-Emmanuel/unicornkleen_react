import React from 'react'
import pic from "../../assets/Serviceimg/hero pic.jpg"
import pic1 from "../../assets/Serviceimg/house.png"
import pic2 from "../../assets/Serviceimg/window.png"
import pic3 from "../../assets/Serviceimg/office cleaner.png"

const Service:React.FC = () => {
  return (
    <div className='bg-white '>
      <div className=' flex bg-white w-screen h-screen mt-[70px] sm:w-screen sm:h-screen sm:flex-col sm:mt-[70px]'>
        <div className='bg-[#1239ca] flex items-center justify-center w-[70%] h-[100%] sm:w-screen sm:h-80 '>
          <h2 className=' text-white  font-bold text-[40px]'>Our Service</h2>
        </div>
        <div className="w-[30%] sm:w-screen sm:h-[300px]">
        <img 
        className='w-[100%] h-[100%] object-cover'  
        src= {pic}/>
        </div>
      </div>
      
      <div>
          <div className='flex flex-col items-center p-3'>
            <h2 className='text-[30px] text-gray-700 '>Our Popular jobs</h2>
          </div>

         <div className='flex justify-center border-[1px] gap-5 h-[100%] w-[90%] ml-[56px] sm:mx-auto sm:flex-wrap text-center mt-4 '>
          <div className='pt-5 p-4'>
            <div>
              <h3 className='flex justify-center text-[#666666]'>Home Cleaning</h3>
            </div>
            <div className=' flex justify-center mt-2'>
              <img
              className=' w-[80px] h-[80px] object-cover overflow-hidden'
               src={pic1} />
            </div>
            <div className='text-center text-[16px] text-[#666666]'>
              <p>A clean and hygieic offices is a more productive <br/>
                place for your staff to work and a more pleasant <br/>
                place for your for your client to visit.br We provide <br/>
                hight quality,cost effective office cleaning solution <br />
                and currently work with a number of companies across lagos</p>
            </div>
          </div>

          <div className='border-x-[1px]'>
            <div className='pt-5 p-4'>
              <h3 className='flex justify-center text-[#666666]'>Window Cleaning</h3>
            </div>
            <div className='flex justify-center mt-2'>
              <img
              className='w-[80px] h-[80px] object-cover overflow-hidden'
              src= {pic2} />
            </div>
            <div>
              <p className=' text-[16px] text-[#666666]'>A clean and hygieic offices is a more productive <br/>
                place for your staff to work and a more pleasant <br/>
                place for your for your client to visit.br We provide <br/>
                hight quality,cost effective office cleaning solution <br />
                and currently work with a number of companies across lagos</p>
            </div>
          </div>
          <div className='pt-5 p-4'>
            <div>
              <h3  className='flex justify-center text-[#666666]'>Office Cleaning</h3>
            </div>
            <div>
              <img 
              className='w-[80px] h-[80px] object-cover overflow-hidden'
              src={pic3} />
            </div>
            <div>
              <p className=' text-[16px] text-[#666666]'>A clean and hygieic offices is a more productive <br/>
                place for your staff to work and a more pleasant <br/>
                place for your for your client to visit.br We provide <br/>
                hight quality,cost effective office cleaning solution <br />
                and currently work with a number of companies across lagos</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Service