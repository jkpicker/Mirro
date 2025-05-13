const Services = () => {
  return (
    <div className='w-full min-h-[1200px] flex justify-center items-center bg-[radial-gradient(circle_250px_at_bottom_left,_#3A5F5678,_#3A5F5600)]'>
      <div className='max-w-[1200px] min-h-[1121px] flex flex-col place-content-between items-center'>
        <div className='max-w-[600px] min-h-[159px] flex flex-col items-center place-content-between p-[4px]'>
          <img src='/public/images/Page-designs.png' alt='Line' className='w-[160px] h-[19px]' />
          <p className='text-[#3A5F56] text-[32px] leading-[38px] text-center w-[139px] h-[39px]'>
            Services
          </p>
          <p className='text-[16px] leading-[22px] text-center max-w-[591px] min-h-[68px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div className='grid grid grid-cols-3 gap-[16px]'>
          {/* ______________ */}
          <div className='w-[379px] h-[304px] p-[30px] flex flex-col items-start place-content-between bg-[#F4F3F0] rounded-[16px]'>
            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#3A5F561A] rounded-full'>
              <img src='/public/images/wedding.png' alt='Wedding' className='w-[24px] h-[24px]' />
            </div>
            <p className='text-[#3A5F56] text-[24px] leading-[28px] h-[29px]'>
              Wedding Photography
            </p>
            <p  className=' text-[16px] leading-[22px]'>
              Wedding photography is often called the bread and butter of photographers — but that
              doesn't mean it has to be boring. Quite the opposite!
            </p>
            <p  className='  text-[17px] leading-[23px] text-[#3A5F56]'>Read-more</p>
          </div>
          {/* ______________ */}
          <div className='w-[379px] h-[304px] p-[30px] flex flex-col items-start place-content-between bg-[#F4F3F0] rounded-[16px]'>
            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#3A5F561A] rounded-full'>
              <img src='/public/images/sports.png' alt='Sports' className='w-[24px] h-[24px]' />
            </div>
            <p className='text-[#3A5F56] text-[24px] leading-[28px] h-[29px]'>Sports Photography</p>
            <p className=' text-[16px] leading-[22px]'>
              Sports photography is awesome. Sitting on the sidelines with a massive telephoto
              allows me to get right into the action — I love shooting sports where there's a lot of
              explosive movement.
            </p>
            <p className=' text-[17px] leading-[23px] text-[#3A5F56]'>Read-more</p>
          </div>
          {/* ______________ */}
          <div className='w-[379px] h-[304px] p-[30px] flex flex-col items-start place-content-between bg-[#F4F3F0] rounded-[16px]'>
            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#3A5F561A] rounded-full'>
              <img src='/public/images/portait.png' alt='Portrait' className='w-[24px] h-[24px]' />
            </div>
            <p className='text-[#3A5F56] text-[24px] leading-[28px] h-[29px]'>
              Portrait Photography
            </p>
            <p className=' text-[16px] leading-[22px]'>
              Who doesn't love portrait photography? I love being able to capture that expression,
              quirk, smile or whatever, that sort of defines a person.
            </p>
            <p className=' text-[17px] leading-[23px] text-[#3A5F56]'>Read-more</p>
          </div>
          {/* ______________ */}
          <div className='w-[379px] h-[304px] p-[30px] flex flex-col items-start place-content-between bg-[#F4F3F0] rounded-[16px]'>
            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#3A5F561A] rounded-full'>
              <img
                src='/public/images/architecture.png'
                alt='Architecture'
                className='w-[24px] h-[24px]'
              />
            </div>
            <p className='text-[#3A5F56] text-[24px] leading-[28px] h-[29px]'>
              Architecture Photography
            </p>
            <p className=' text-[16px] leading-[22px]'>
              The nice thing about shooting architecture (in my opinion) is that it's so easy to do.
              Seriously, just pick up your camera and get out there.
            </p>
            <p className=' text-[17px] leading-[23px] text-[#3A5F56]'>Read-more</p>
          </div>
          {/* ______________ */}
          <div className='w-[379px] h-[304px] p-[30px] flex flex-col items-start place-content-between bg-[#F4F3F0] rounded-[16px]'>
            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#3A5F561A] rounded-full'>
              <img src='/public/images/animal.png' alt='Animal' className='w-[24px] h-[24px]' />
            </div>
            <p className='text-[#3A5F56] text-[24px] leading-[28px] h-[29px]'>Animal Photography</p>
            <p className=' text-[16px] leading-[22px]'>
              Whenever I'm travelling I always make sure to pack gear that allows me to capture the
              local wildlife. The eagle that takes flight in this picture is probably my most prized
              image.
            </p>
            <p className=' text-[17px] leading-[23px] text-[#3A5F56]'>Read-more</p>
          </div>
          {/* ______________ */}
          <div className='w-[379px] h-[304px] p-[30px] flex flex-col items-start place-content-between bg-[#F4F3F0] rounded-[16px]'>
            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#3A5F561A] rounded-full'>
              <img src='/public/images/food.png' alt='Food' className='w-[24px] h-[24px]' />
            </div>
            <p className='text-[#3A5F56] text-[24px] leading-[28px] h-[29px]'>Food Photography</p>
            <p className=' text-[16px] leading-[22px]'>
              I do food photography for blogs, restaurants, influencers, YouTube channels — but most
              importantly (if I manage to cook something that looks good) — I do food photography
              for myself.
            </p>
            <p className=' text-[17px] leading-[23px] text-[#3A5F56]'>Read-more</p>
          </div>
          {/* ______________ */}
          <div className='w-[379px] h-[304px] p-[30px] flex flex-col items-start place-content-between bg-[#F4F3F0] rounded-[16px]'>
            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#3A5F561A] rounded-full'>
              <img src='/public/images/nature.png' alt='Nature' className='w-[24px] h-[24px]' />
            </div>
            <p className='text-[#3A5F56] text-[24px] leading-[28px] h-[29px]'>Nature Photography</p>
            <p className=' text-[16px] leading-[22px]'>
              Landscape photography just never gets old. Someone told me that those are the kinds of
              pictures you never look. Well, I don't agree.
            </p>
            <p className=' text-[17px] leading-[23px] text-[#3A5F56]'>Read-more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
