import React, { useState } from 'react';

interface Contact {
  name: string;
  surname: string;
  phone: string;
  email: string;
}
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [formData, setFormData] = useState<Contact>({
    name: '',
    surname: '',
    phone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContacts([...contacts, formData]);
    setFormData({ name: '', surname: '', phone: '', email: '' });
  };

  const handleDelete = (index: number) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };
  return (
    <>
      <div className='w-full h-[459px]  flex justify-center items-center  bg-[radial-gradient(circle_300px_at_calc(100%-900px)_100%,rgba(184,125,88,0.35)_0%,rgba(184,125,88,0)_100%)]'>
        <div className='w-[850px] h-[259px] flex place-content-between bg-[#F4F3F0] rounded-[16px] items-center p-[30px] gap-[35px] shadow-sm'>
          <h1 className='text-[28px] min-w-[300px]'>
            Wan't to work together?
            <br /> Follow the link and let's <br /> get in touch.
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='w-[125px] min-w-[120px] h-[58px] text-[16px] rounded-[6px] text-white bg-[#3A5F56] flex items-center justify-center cursor-pointer active:text-[#3A5F56] active:bg-white transition duration-150 ease-in-out'
          >
            Contact
          </button>
          {isOpen && (
            <main className='flex mt-6 '>
              <div className='w-[350px] h-[320px] bg-white text-gray-800 rounded-[30px] p-4 shadow-lg'>
                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
                  <input
                    type='text'
                    placeholder="ім'я"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-[230px] mt-2 p-2 border-b-2 border-gray-800 bg-transparent outline-none focus:border-green-500'
                  />
                  <input
                    type='text'
                    placeholder='Прізвище'
                    name='surname'
                    value={formData.surname}
                    onChange={handleChange}
                    className='w-[230px] mt-2 p-2 border-b-2 border-gray-800 bg-transparent outline-none focus:border-green-500'
                  />
                  <input
                    type='text'
                    placeholder='Номер телефона'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-[230px] mt-2 p-2 border-b-2 border-gray-800 bg-transparent outline-none focus:border-green-500'
                  />
                  <input
                    type='email'
                    placeholder='Електрона пошта'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-[230px] mt-2 p-2 border-b-2 border-gray-800 bg-transparent outline-none focus:border-green-500'
                  />
                  <button
                    type='submit'
                    className='mt-4 px-5 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600'
                  >
                    Додати контакт
                  </button>
                </form>
              </div>

              <div className='ml-4 w-[250px] min-h-[50px] bg-white rounded-[30px] p-4 shadow-lg'>
                {contacts.length === 0 ? (
                  <p className='text-black'>Список пустий</p>
                ) : (
                  <ul className='space-y-2'>
                    {contacts.map((contact, index) => (
                      <li key={index} className='p-2 rounded-[1px] shadow-md'>
                        <p className='text-sm'>{contact.name}</p>
                        <p className='text-sm'>{contact.surname}</p>
                        <p className='text-sm'>{contact.phone}</p>
                        <p className='text-sm'>{contact.email}</p>
                        <button
                          onClick={() => handleDelete(index)}
                          className='mt-2 text-red-500 hover:underline'
                        >
                          видалити
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </main>
          )}
        </div>
      </div>
      <div className='flex w-full h-[60px] justify-center items-center bg-stone-800'>
        <h1 className='text-white text-[48px] mt-[20px]'>Mirro</h1>
      </div>
      <div className='w-full h-[700px] flex justify-center items-center bg-stone-800'>
        <div className='w-[1168px] h-[579px] flex justify-between justify-center items-center '>
          {/* -------------------------------------------------------------------------------------------------------- */}
          <div className='flex  flex-col w-[221px] h-[410px]'>
            <h1 className='text-[16px] text-orange-800'>PAGES</h1>
            <p className='text-[14px] text-white'>Home</p>
            <p className='text-[14px] text-white'>Store</p>
            <p className='text-[14px] text-white'>About</p>
            <p className='text-[14px] text-white'>Contact</p>
            <h1 className='text-[16px] text-orange-800'>STORE CATEGORIES</h1>
            <p className='text-[14px] text-white'>Presets</p>
            <p className='text-[14px] text-white'>Prints</p>
          </div>
          {/* -------------------------------------------------------------------------------------------------------- */}
          <div className='flex  flex-col w-[221px] h-[410px]'>
            <h1 className='text-[16px] text-orange-800'>PRESET PACKS</h1>
            <p className='text-[14px] text-white'>Mirro Preset Pack Vol. 01</p>
            <p className='text-[14px] text-white'>Mirro Preset Pack Vol. 02</p>
            <p className='text-[14px] text-white'>Mirro Preset Pack Vol. 03</p>
            <p className='text-[14px] text-white'>Mirro Preset Pack Vol. 04</p>
            <h1 className='text-[16px] text-orange-800'>BUSINESS AREAS</h1>
            <p className='text-[14px] text-white'>Wedding Photography</p>
            <p className='text-[14px] text-white'>Sports Photography</p>
            <p className='text-[14px] text-white'>Portrait Photography</p>
            <p className='text-[14px] text-white'>Architecture Photography</p>
            <p className='text-[14px] text-white'>Animal Photography</p>
            <p className='text-[14px] text-white'>Food Photography</p>
            <p className='text-[14px] text-white'>Nature Photography</p>
          </div>
          {/* -------------------------------------------------------------------------------------------------------- */}
          <div className='flex flex-col w-[221px] h-[410px]'>
            <h1 className='text-[16px] text-orange-800'>UTILITY PAGES</h1>
            <p className='text-[14px] text-white'>Instructions</p>
            <p className='text-[14px] text-white'>Style guide</p>
            <p className='text-[14px] text-white'>Licenses</p>
            <p className='text-[14px] text-white'>Changelog</p>
            <p className='text-[14px] text-white'>404</p>
          </div>
          {/* -------------------------------------------------------------------------------------------------------- */}
          <div className='flex flex-col w-[458px] h-[410px] '>
            <h1 className='text-[16px] text-orange-800'>NEWSLETTER</h1>
            <p className='text-[14px] text-white'>
              Subscribe to my newsletter where I share news about <br /> upcoming printings and
              preset sales.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full h-[50px] flex bg-stone-800 justify-between '>
        <p className='text-white text-[16px]'>
          © Mirro Photography, LLC. All rights reserved. Powered by Webflow
        </p>
        <img src='/public/images/Frame.png' alt='' className='w-[156px] h-[24px] ' />
      </div>
    </>
  );
};

export default Contact;
