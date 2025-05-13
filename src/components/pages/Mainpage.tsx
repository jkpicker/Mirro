export const Mainpage = () => {
  return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
      <div className='w-full min-h-[973px] flex justify-center items-center bg-[#F4F3F0] bg-[radial-gradient(circle_500px_at_top_right,_#3A5F568C,_#3A5F5600),radial-gradient(circle_400px_at_bottom_left,_#B87D58,_#B87D5800)]'>
        <div className='w-[1168px] flex items-center  min-height-[774px] place-content-between flex-wrap justify-self-center '>
          <div className=' h-[298px] w-[552px] flex flex-col place-content-between'>
            <p className='text-[#3A5F56] text-[48px] max-w-[477px] leading-[57px]'>
              Hi, I'm James Mirro & I'm a photographer.
            </p>
            <p className='text-[#292C32] text-[16px] max-w-[534px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
              rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-[125px] h-[44px] bg-[#3A5F56] text-[16px] rounded-[6px] text-white flex items-center justify-center cursor-pointer'
            >
              Read more
            </a>
          </div>
          <img
            src='/public/images/bro.jpg'
            alt='Bobr'
            className='max-w-[552px]
          max-h-[773px] rounded-[24px]'
          />
        </div>
      </div>
    </div>
  );
};