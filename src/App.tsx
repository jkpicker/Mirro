import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Mainpage } from "./components/pages/Mainpage";
import Services from "./components/pages/Services";
import PresetStore from "./components/pages/PresetStore";
import Contact from "./components/pages/Contact";


const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className='w-[1168px] flex place-content-between min-h-[70px] items-center'>
        <img
          src='/public/images/Mirro-Logotype-Green.png'
          alt='logo'
          className='w-[113px] h-[30px]'
        />
        <div className='max-w-[550px] flex place-content-between'>
          <button onClick={() => navigate("/")} className='w-[122px] h-[44px] text-[#3A5F56] bg-white text-[16px] cursor-pointer flex items-center justify-center font-medium active:text-white active:bg-[#3A5F56] rounded-[5px] transition duration-150 ease-in-out'>
            Home
          </button>
          <button onClick={() => navigate("/services")} className='w-[122px] h-[44px] text-[#3A5F56] bg-white text-[16px] cursor-pointer flex items-center justify-center font-medium active:text-white active:bg-[#3A5F56] rounded-[5px] transition duration-150 ease-in-out'>
            Services
          </button>
          <button onClick={() => navigate("/presets")} className='w-[140px] h-[44px] text-[#3A5F56] bg-white text-[16px] cursor-pointer items-center justify-center font-medium active:text-white active:bg-[#3A5F56] rounded-[5px] transition duration-150 ease-in-out'>
            Preset Store
          </button>
          <button onClick={() => navigate("/contact")} className='w-[122px] h-[44px] text-[#3A5F56] bg-white text-[16px] cursor-pointer items-center justify-center font-medium active:text-white active:bg-[#3A5F56] rounded-[5px] transition duration-150 ease-in-out'>
            Contact
          </button>
        </div>
      </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className='h-full w-full mx-auto flex flex-col items-center'>
        <NavigationButtons />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/presets" element={<PresetStore />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;