import React from 'react'

const SideMedia = () => {
  return (
    <div className="side-container bg-slate-400 rounded-[10px_0px_0px_10px] w-[79px] right-0 fixed">
        <div className="media-icons p-2 pl-3 flex flex-col gap-2">
          <div >
            <img className='h-[40px] w-[40px]' src="../images/homepage/maincall.png" alt="" />
            <p className='text-white text-center'>Call</p>
            </div>
            <div >
            <img className='h-[40px] w-[40px]' src="../images/homepage/whatsappside.png" alt="" />
            <p className='text-white'>Whatsapp</p>
            </div>
            <div >
            <img className='h-[40px] w-[40px]' src="../images/homepage/letstalk.png" alt="" />
            <p className='text-white'>Let's talk</p></div>
            <div >
            <img className='h-[40px] w-[40px]' src="../images/homepage/mailus.png" alt="" />
            <p className='text-white'>Mail us</p>
            </div>

        </div>
    </div>
  )
}

export default SideMedia