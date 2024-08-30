import React from 'react';
import './../App.css'

const RightPanel = ({ addedComponents, setAddedComponents }) => {

  const handleDelete = (index) => {
    const updatedComponents = addedComponents.filter((_,i) => i!==index);
    setAddedComponents(updatedComponents);
  }

  return (
    <div className="right-panel w-full bg-white rounded-[16px] p-[40px]">
      {addedComponents.map((component, index) => {
        switch (component.type) {
          case 'Text':
            return (
              <div className='flex items-start relative'>
                <div className='flex w-full flex-col gap-[10px] my-[12px]' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14x] leading-[21px]'>{component.title}</label>
                  <input className='w-full text-[#0A1629] font-[600] placeholder:text-[#7D8592] placeholder:font-[400] text-[14x] leading-[21px] p-[12px] pl-[16px] rounded-[16px] border-[1px] border-[#D8E0F0]' type="text" placeholder={component.placeholder} required={component.required} />
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Button':
            return (
              <div className='flex items-center relative'>
                <div className='text-center w-full' key={index}>
                  <button className='ml-[0px] inline-block align-middle w-full my-[12px] bg-[#00ADE7] py-[12px] px-[20px] rounded-[16px] text-white'>{component.title}</button>
                </div>
                <button 
                  className="mt-[0px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Submit':
            return (
              <div className='flex items-center relative'>
                <div className='m-auto w-full' key={index}>
                  <input className='w-full my-[12px] bg-[#00ADE7] py-[12px] px-[20px] rounded-[16px] text-white' type="submit" value={component.title} />
                </div>
                <button 
                  className="mt-[0px] absolute -right-12 "
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Date':
            return (
              <div className='flex items-start relative'>
                <div className='flex flex-col gap-[10px] my-[12px] w-full' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14x] leading-[21px]'>{component.title}</label>
                  <input className='w-full text-[#0A1629] font-[600] placeholder:text-[#7D8592] placeholder:font-[400] text-[14x] leading-[21px] p-[12px] pl-[16px] rounded-[16px] border-[1px] border-[#D8E0F0]' type="date" required={component.required} />
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Email':
            return (
              <div className='flex items-start relative'>
                <div className='flex flex-col gap-[10px] my-[12px] w-full' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14x] leading-[21px]'>{component.title}</label>
                  <input className='w-full text-[#0A1629] font-[600] placeholder:text-[#7D8592] placeholder:font-[400] text-[14x] leading-[21px] p-[12px] pl-[16px] rounded-[16px] border-[1px] border-[#D8E0F0]' type="email" placeholder={component.placeholder} required={component.required} />
                </div>
                  <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Number':
            return (
              <div className='flex items-start relative'>
                <div className='flex flex-col gap-[10px] my-[12px] w-full' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14x] leading-[21px]'>{component.title}</label>
                  <input className='w-full text-[#0A1629] font-[600] placeholder:text-[#7D8592] placeholder:font-[400] text-[14x] leading-[21px] p-[12px] pl-[16px] rounded-[16px] border-[1px] border-[#D8E0F0]' type="number" placeholder={component.placeholder} required={component.required} />
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'PhoneNumber':
            return (
              <div className='flex items-start relative'>
                <div className='flex flex-col gap-[10px] my-[12px] w-full' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14x] leading-[21px]'>{component.title}</label>
                  <input className='w-full text-[#0A1629] font-[600] placeholder:text-[#7D8592] placeholder:font-[400] text-[14x] leading-[21px] p-[12px] pl-[16px] rounded-[16px] border-[1px] border-[#D8E0F0]' type="number" placeholder={component.placeholder} required={component.required} />
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Password':
            return (
              <div className='flex items-start relative'>
                <div className='flex flex-col gap-[10px] my-[12px] w-full' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14x] leading-[21px]'>{component.title}</label>
                  <input className='w-full text-[#0A1629] font-[600] placeholder:text-[#7D8592] placeholder:font-[400] text-[14x] leading-[21px] p-[12px] pl-[16px] rounded-[16px] border-[1px] border-[#D8E0F0]' type="password" placeholder={component.placeholder} required={component.required} />
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Radio':
            return (
              <div className='flex items-start relative'>
                <div className='flex flex-col gap-[10px] my-[12px] w-full' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14x] leading-[21px]'>{component.title}</label>
                  {component.options.map((option, idx) => (
                    <div className='flex items-center pl-[5px]' key={idx}>
                      <input className='custom-radio' type="radio" name={component.title} value={option} required={component.required} />
                      <label className='ml-[8px] radio-label text-[#0A1629] font-[400] text-[14px] leading-[21px]'>{option}</label>
                    </div>
                  ))}
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'TextArea':
            return (
              <div className='flex items-start relative'>
                <div className='flex flex-col gap-[10px] my-[12px] w-full' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14x] leading-[21px]'>{component.title}</label>
                  <textarea className='w-full h-[120px] text-[#0A1629] font-[600] placeholder:text-[#7D8592] placeholder:font-[400] text-[14x] leading-[21px] p-[12px] pl-[16px] rounded-[16px] border-[1px] border-[#D8E0F0]' placeholder={component.placeholder} required={component.required} />
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Dropdown':
            return (
              <div className='flex items-start relative'>
                <div className='w-full flex flex-col gap-[10px] my-[12px]' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14px] leading-[21px]'>{component.title}</label>
                  <div className='relative'>
                    <select 
                      className='w-full h-[48px] flex border-[1px] border-[#D8E0F0] justify-between p-[12px] pl-[16px] pr-[30px] rounded-[16px] bg-white appearance-none text-[#7D8592] font-normal'
                      required={component.required}
                      onChange={(e) => e.target.classList.add('text-black', 'font-bold')}
                      defaultValue=""
                    >
                      <option value="" disabled hidden>{component.placeholder}</option>
                      {component.options.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </select>
                    <svg className='absolute right-[20px] top-1/2 transform -translate-y-1/2' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.70711 0.292893C10.0676 0.653377 10.0953 1.22061 9.7903 1.6129L9.70711 1.70711L5.70711 5.70711C5.34662 6.06759 4.77939 6.09532 4.3871 5.7903L4.29289 5.70711L0.292893 1.70711C-0.0976305 1.31658 -0.0976305 0.683418 0.292893 0.292893C0.653378 -0.0675907 1.22061 -0.0953203 1.6129 0.209705L1.70711 0.292893L5 3.585L8.29289 0.292893C8.65338 -0.0675907 9.22061 -0.0953203 9.6129 0.209705L9.70711 0.292893Z" fill="#7D8592"/>
                    </svg>
                  </div>
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'Checkbox':
            return (
              <div className='flex items-start relative'>
                <div className='flex flex-col gap-[10px] my-[12px] w-full' key={index}>
                  <label className='text-[#0A1629] font-[600] text-[14px] leading-[21px]'>{component.title}</label>
                  {component.options.map((option, idx) => (
                    <div className='flex items-center gap-[8px]' key={idx}>
                      <input 
                        type="checkbox" 
                        id={`checkbox-${component.title}-${idx}`} 
                        name={component.title} 
                        value={option} 
                        required={component.required} 
                        className='hidden' 
                      />
                      <label htmlFor={`checkbox-${component.title}-${idx}`} className="cursor-pointer p-[4px] flex items-center">
                        <svg className="unchecked-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" fill="white"/>
                          <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#D8E0F0"/>
                        </svg>
                        <svg className="checked-svg hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" fill="#00ADE7"/>
                          <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#00ADE7"/>
                          <path d="M11.6666 7L7.99992 10.6667L6.33325 9" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className='text-[#0A1629] font-[400] text-[14px] leading-[21px] ml-[8px]'>{option}</span>
                      </label>
                    </div>
                  ))}
                </div>
                <button 
                  className="mt-[12px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          case 'FormHeading':
            return (
              <div className='flex items-center relative '>
                <div className='w-full' key={index}>
                  <h2 className='text-[24px] text-center font-semibold leading-[36px] mb-4'>{component.title}</h2>
                </div>
                <button 
                  className="mb-[10px] absolute -right-12"
                  onClick={() => handleDelete(index)}
                >
                  ✕
                </button>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default RightPanel;
