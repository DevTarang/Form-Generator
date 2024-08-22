import React, { useState, useEffect } from 'react';

const FormPopup = ({ onClose, onSave, componentType }) => {
  const [title, setTitle] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [required, setRequired] = useState(false);
  const [options, setOptions] = useState(['']);
  // const [thankYouTitle, setThankYouTitle] = useState('')
  // const [subText, setSubText] = useState('')
  // const [subText2, setSubText2] = useState('')

  useEffect(() => {
    let defaultTitle = '';
    // let defaultSubText = '';
    // let defaultSubText2 = '';
    // let defaultThankYouTitle = '';

    switch (componentType) {
      case 'Text':
        defaultTitle = 'Text';
        break;
      case 'TextArea':
        defaultTitle = 'Text Area';
        break;
      case 'Number':
        defaultTitle = 'Number';
        break;
      case 'Email':
        defaultTitle = 'Email';
        break;
      case 'Password':
        defaultTitle = 'Password';
        break;
      case 'Radio':
        defaultTitle = 'Radio';
        break;
      case 'Dropdown':
        defaultTitle = 'Dropdown';
        break;
      case 'Checkbox':
        defaultTitle = 'Checkbox';
        break;
      case 'Date':
        defaultTitle = 'Date';
        break;
      case 'Button':
        defaultTitle = 'Button';
        break;
      case 'Submit':
        defaultTitle = 'Submit';
        break;
      case 'FormHeading':
        defaultTitle = 'Form Heading';
        break;
      // case 'ThankYou':
      //   defaultThankYouTitle = '';
      //   defaultSubText = '';
      //   defaultSubText2 = '';
      //   break;
      default:
        defaultTitle = 'Options';
        break;
    }

    setTitle(defaultTitle);
    // setThankYouTitle(defaultThankYouTitle)
    // setSubText(defaultSubText);
    // setSubText2(defaultSubText2);
  }, [componentType]);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSave = () => {
    const data = { title, placeholder, required, options };
    // if (componentType === 'ThankYou') {
    //   data.thankYouTitle = thankYouTitle;
    //   data.subText = subText;
    //   data.subText2 = subText2;
    // }
    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative z-50 bg-white rounded-xl w-[400px] p-6">
        <h2 className="text-xl font-semibold text-center text-[#000000] mb-4">Edit {componentType}</h2>
        
        <div className="mb-4">
          <label className="block text-[#363062] font-medium mb-1">Title</label>
          <input 
            className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        
        {componentType !== 'Button' && componentType !== 'Submit' && componentType !== 'FormHeading' && componentType !== 'Checkbox' && componentType !== 'Radio' && componentType !== 'ThankYou' && (
          <div className="mb-4">
            <label className="block text-[#363062] font-medium mb-1">Placeholder</label>
            <input 
              className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
              type="text" 
              value={placeholder} 
              onChange={(e) => setPlaceholder(e.target.value)} 
            />
          </div>
        )}

        {(componentType === 'Radio' || componentType === 'Dropdown' || componentType === 'Checkbox') && (
          <div className="mb-4">
            <label className="block text-[#363062] font-medium mb-1">Options</label>
            {options.map((option, index) => (
              <input
                key={index}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0 mb-2"
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
            ))}
            <button 
              className="mt-2 px-4 py-2 bg-[#363062] text-white rounded-lg text-sm font-medium" 
              onClick={handleAddOption}
            >
              Add Option
            </button>
          </div>
        )}

        {/* {componentType === 'ThankYou' && (
          <>
            <div className="mb-4">
              <label className="block text-[#363062] font-medium mb-1">Title</label>
              <input 
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                type="text" 
                // value={thankYouTitle} 
                // onChange={(e) => setThankYouTitle(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#363062] font-medium mb-1">Sub Text</label>
              <input 
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                type="text" 
                // value={subText} 
                // onChange={(e) => setSubText(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#363062] font-medium mb-1">Sub Text 2</label>
              <input 
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                type="text" 
                // value={subText2} 
                // onChange={(e) => setSubText2(e.target.value)} 
              />
            </div>
          </>
        )} */}

        <div className="mb-4">
          <label className="block text-[#363062] font-medium mb-1">Required</label>
          <input 
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded" 
            type="checkbox" 
            checked={required} 
            onChange={(e) => setRequired(e.target.checked)} 
          />
        </div>

        <div className="flex justify-end mt-6">
          <button 
            className="bg-gray-300 text-[#363062] font-semibold px-4 py-2 rounded-lg mr-4" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-[#363062] text-white font-semibold px-4 py-2 rounded-lg" 
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
