const PresetStore = () => {
    return (
      <div className='w-full min-h-[890px] flex flex-col justify-center items-center bg-[#F4F3F0] bg-[radial-gradient(circle_300px_at_bottom_right,rgba(219,52,59,0.37)_0%,rgba(219,52,59,0)_100%)]'>
      <div className='max-w-[600px] min-h-[159px] flex flex-col items-center justify-center p-[4px] gap-[16px] mt-(-8)'>
          <img src='/public/images/Page-designs.png' alt='Line' className='w-[160px] h-[19px]' />
          <h1 className='text-red-600 text-[32px] '>
            Preset Store
          </h1>
          <p className='text-[16px] leading-[22px] text-center max-w-[591px] min-h-[68px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim <br/>in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor<br/> interdum nulla.
          </p>
        </div>
        <div className="flex w-[1168px] h-[439px] justify-between ">
         <div className="w-[379px] h-[438px]  rounded-[15px] flex-col">
          <img src="/public/images/Store1.png" alt="" className="w-[379px] h-[252px] " />
          <div className="w-[379px] h-[186px] rounded-[8px] bg-stone-200 flex items-center justify-center flex-col ">
            <h1 className="text-[24px] text-green-900">Mirro Preset Pack Vol. 01</h1>
            <p className="text-[16px] text-green-900">The first volume is my go-to presets when <br/>shooting action sports. Just the right<br/> amount of contrast and highlights to make<br/> your photo (literally) pop!</p>
          </div>
         </div>
         <div className="w-[379px] h-[438px]  rounded-[15px] flex-col">
          <img src="/public/images/Store2.png" alt="" className="w-[379px] h-[252px] " />
          <div className="w-[379px] h-[186px] rounded-[8px] bg-stone-200 flex items-center justify-center flex-col ">
            <h1 className="text-[24px] text-green-900">Mirro Preset Pack Vol. 02</h1>
            <p className="text-[16px] text-green-900">Vol. 02 is dedicated solely to landscape  <br/>photography. Pay attention to your <br/> exposure while out there and these presets <br/> will make your photos look great.</p>
          </div>
         </div>
         <div className="w-[379px] h-[438px]  rounded-[15px] flex-col">
          <img src="/public/images/Store3.png" alt="" className="w-[379px] h-[252px] " />
          <div className="w-[379px] h-[186px] rounded-[8px] bg-stone-200 flex items-center justify-center flex-col ">
            <h1 className="text-[24px] text-green-900">Mirro Preset Pack Vol. 03</h1>
            <p className="text-[16px] text-green-900">These are a collection of my most used<br/> wedding presets — use with caution as <br/>you'll end up loving wedding photography.</p>
          </div>
         </div>
        </div>
        <a
              href='http://localhost:5173/contact'
              target='_blank'
              rel='noopener noreferrer'
              className=' text-green-900 text-[16px] mt-10 cursor-pointer'
            >
              Preset Store
            </a>
      </div>

    )
  };
  
  export default PresetStore;