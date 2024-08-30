import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 

const CodePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formCode } = location.state || {}; 
  const [copyText, setCopyText] = useState('Copy');

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(formCode || '');
    setCopyText('Copied to Clipboard');
    setTimeout(() => setCopyText('Copy'), 3000);
  }

  return (
    <div className="code-page relative w-full text-center flex flex-col gap-[20px] pt-[20px]">
      <button className='absolute left-[20px] top-[22px]' onClick={() => navigate('/')}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19l-7-7 7-7" stroke="#363062" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <h1 className='text-3xl font-bold text-[#363062]'>Generated Code</h1>
      <div className="relative mx-[30px]">
        <textarea
          className='w-full rounded-xl py-[10px] px-[20px] shadow-xl '
          rows="20"
          cols="80"
          value={formCode || ''}
          readOnly
        />
        <button 
          className='absolute top-[10px] text-[10px] right-[10px] bg-[#00ADE7] text-white py-[5px] px-[10px] rounded-md hover:bg-[#3b3d3e]'
          onClick={handleCopyToClipboard}
        >
          {copyText}
        </button>
      </div>
    </div>
  );
};

export default CodePage;
