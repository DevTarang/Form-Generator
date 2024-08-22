import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; 
import EditableButtonComponent from './components/EditableButtonComponent';
import EditableSubmitComponent from './components/EditableSubmitComponent';
import EditableDateComponent from './components/EditableDateComponent';
import EditableEmailComponent from './components/EditableEmailComponent';
import EditableNumberComponent from './components/EditableNumberComponent';
import EditablePasswordComponent from './components/EditablePasswordComponent';
import EditableRadioComponent from './components/EditableRadioComponent';
import EditableTextComponent from './components/EditableTextComponent';
import EditableTextAreaComponent from './components/EditableTextAreaComponent';
import EditableDropdownComponent from './components/EditableDropdownComponent';
import EditableCheckboxComponent from './components/EditableCheckboxComponent';
// import EditableThankYouComponent from './components/EditableThankYouComponent';
import EditableFormHeadingComponent from './components/EditableFormHeadingComponent'; 
import RightPanel from './components/RightPanel';
import CodePage from './components/CodePage';

const App = () => {
  const [addedComponents, setAddedComponents] = useState([]);
  const navigate = useNavigate();
  const [thankYouTitle, setThankYouTitle] = useState("Thank You")
  const [subText, setSubText] = useState("for showing interest")
  const [subText2, setSubText2] = useState("Our executive will call you shortly")
  const [thankYouTitleChange, setThankYouTitleChange] = useState(thankYouTitle)
  const [subTextChange, setSubTextChange] = useState(subText)
  const [subText2Change, setSubText2Change] = useState(subText2)
  const [isOptRequired, setIsOtpRequired] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const onClose = () => {
    setShowPopup(false);
  };

  const handleWithOtp = () => {
    setIsOtpRequired(true)
  };

  const handleWithoutOtp = () => {
    setIsOtpRequired(false)
  };

  const handleSave = () => {
    setThankYouTitle(thankYouTitleChange);
    setSubText(subTextChange)
    setSubText2(subText2Change)
    setShowPopup(false);
  };

  

  const addComponent = (component) => {
    setAddedComponents([...addedComponents, component]);
  };

  const generateCode = () => {
    const formCode = addedComponents.map((component, index) => {
        switch (component.type) {
            case 'Text':
                return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    <input id='${component.title}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' class='custom-input' type='text' placeholder='${component.placeholder || ''}' ${component.required ? 'required' : ''} />
                </div>`;
            case 'Button':
                return `<div class='button-container' key='${index}'>
                    <button id='${component.title}' class='custom-button'  ${component.required ? 'required' : ''} >${component.title}</button>
                </div>`;
            case 'Submit':
                return `<div class='button-container' key='${index}'>
                    <input id='submit-otp' class='custom-submit' type='submit' ${component.required ? 'required' : ''}  value='${component.title}' />
                </div>`;
            case 'Date':
                return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    <input id='${component.title}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' class='custom-input' type='date' placeholder='${component.placeholder || ''}' ${component.required ? 'required' : ''} />
                </div>`;
            case 'Email':
                return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    <input id='${component.title}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' class='custom-input' type='email' placeholder='${component.placeholder || ''}' ${component.required ? 'required' : ''} />
                </div>`;
            case 'Number':
                return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    <input id='${component.title}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' class='custom-input' type='number' placeholder='${component.placeholder || ''}' ${component.required ? 'required' : ''} />
                </div>`;
            case 'Password':
                return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    <input id='${component.title}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' class='custom-input' type='password' placeholder='${component.placeholder || ''}' ${component.required ? 'required' : ''} />
                </div>`;
            case 'Radio':
                return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    ${component.options.map((option, idx) => `<div class='radio-container'>
                        <input id='${component.title}-${idx}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' key='${idx}' type='radio' name='${component.title}' value='${option}' class='custom-radio' ${component.required ? 'required' : ''} />
                        <label class='radio-label'>${option}</label>
                    </div>`).join('')}
                </div>`;
            case 'TextArea':
                return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    <textarea id='${component.title}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' class='custom-input height-120' placeholder='${component.placeholder || ''}' ${component.required ? 'required' : ''}></textarea>
                </div>`;
              case 'Dropdown':
                  return `<div class='simple-container full-width' key='${index}'>
                      <label class='custom-label'>${component.title}</label>
                      <div class='relative'>
                        <select 
                          id='dropdown-${component.title}'
                          onchange="(e) => e.target.classList.add('text-black', 'font-bold')"
                          defaultValue=''
                          ${component.required ? 'required' : ''}
                        >
                          <option value='' disabled hidden>${component.placeholder || ''}</option>
                          ${component.options.map((option, idx) => `<option key='${idx}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' value='${option}'>${option}</option>`).join('')}
                        </select>
                        <svg class='dropdown-icon' width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M9.70711 0.292893C10.0676 0.653377 10.0953 1.22061 9.7903 1.6129L9.70711 1.70711L5.70711 5.70711C5.34662 6.06759 4.77939 6.09532 4.3871 5.7903L4.29289 5.70711L0.292893 1.70711C-0.0976305 1.31658 -0.0976305 0.683418 0.292893 0.292893C0.653378 -0.0675907 1.22061 -0.0953203 1.6129 0.209705L1.70711 0.292893L5 3.585L8.29289 0.292893C8.65338 -0.0675907 9.22061 -0.0953203 9.6129 0.209705L9.70711 0.292893Z' fill='#7D8592'/>
                        </svg>
                      </div>
                  </div>`;
              case 'Checkbox':
                  return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    ${component.options.map((option, idx) => `<div class='checkbox-container' key='${idx}'>
                      <input 
                          type='checkbox' 
                          id='checkbox-${component.title}-${idx}' 
                          name='${component.title.toLowerCase().replace(/\s+/g, '')}' 
                          value='${option}' 
                          ${component.required ? 'required' : ''} 
                          class='hide' 
                      />
                      <label for='checkbox-${component.title}-${idx}' class='checkbox-label'>
                          <svg class='unchecked-svg' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <rect x='0.5' y='0.5' width='17' height='17' rx='4.5' fill='white'/>
                              <rect x='0.5' y='0.5' width='17' height='17' rx='4.5' stroke='#D8E0F0'/>
                          </svg>
                          <svg class='checked-svg hide' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <rect x='0.5' y='0.5' width='17' height='17' rx='4.5' fill='#00ADE7'/>
                              <rect x='0.5' y='0.5' width='17' height='17' rx='4.5' stroke='#00ADE7'/>
                              <path d='M11.6666 7L7.99992 10.6667L6.33325 9' stroke='white' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/>
                          </svg>
                          <span class='checkbox-span'>${option}</span>
                      </label>
                    </div>`).join('')}
                  </div>`;
            case 'FormHeading':
                return `<div key='${index}'>
                    <h2 id='${component.title}' class='form-heading'>${component.title}</h2>
                </div>`;
            // case 'ThankYou':
            //   setThankYouTitle(component.thankYouTitle);
            //   setSubText(component.subText);
            //   setSubText2(component.subText2);
            //   break;
            default:
              return '';
        }
    }).join('\n');

    const scriptVal = isOptRequired ? `<script>
      document.getElementById('submit-otp').addEventListener('click', async (event) => {
        event.preventDefault();

        const editIcon = "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 14.6665H2C1.72667 14.6665 1.5 14.4398 1.5 14.1665C1.5 13.8932 1.72667 13.6665 2 13.6665H14C14.2733 13.6665 14.5 13.8932 14.5 14.1665C14.5 14.4398 14.2733 14.6665 14 14.6665Z' fill='#00ADE7'/><path d='M12.68 2.31994C11.3867 1.02661 10.12 0.993275 8.79334 2.31994L7.98668 3.12661C7.92001 3.19328 7.89334 3.29994 7.92001 3.39328C8.42668 5.15994 9.84001 6.57328 11.6067 7.07994C11.6333 7.08661 11.66 7.09328 11.6867 7.09328C11.76 7.09328 11.8267 7.06661 11.88 7.01328L12.68 6.20661C13.34 5.55328 13.66 4.91994 13.66 4.27994C13.6667 3.61994 13.3467 2.97994 12.68 2.31994Z' fill='#00ADE7'/><path d='M10.4067 7.68654C10.2133 7.5932 10.0267 7.49987 9.84668 7.3932C9.70001 7.30654 9.56001 7.2132 9.42001 7.1132C9.30668 7.03987 9.17334 6.9332 9.04667 6.82654C9.03334 6.81987 8.98667 6.77987 8.93334 6.72654C8.71334 6.53987 8.46668 6.29987 8.24668 6.0332C8.22668 6.01987 8.19334 5.9732 8.14668 5.9132C8.08001 5.8332 7.96668 5.69987 7.86668 5.54654C7.78668 5.44654 7.69334 5.29987 7.60668 5.1532C7.50001 4.9732 7.40668 4.7932 7.31334 4.60654C7.19097 4.34431 6.8468 4.26641 6.64218 4.47103L2.89334 8.21987C2.80668 8.30654 2.72668 8.4732 2.70668 8.58654L2.34668 11.1399C2.28001 11.5932 2.40668 12.0199 2.68668 12.3065C2.92668 12.5399 3.26001 12.6665 3.62001 12.6665C3.70001 12.6665 3.78001 12.6599 3.86001 12.6465L6.42001 12.2865C6.54001 12.2665 6.70668 12.1865 6.78668 12.0999L10.5417 8.34484C10.7422 8.14432 10.6669 7.79929 10.4067 7.68654Z' fill='#00ADE7'/></svg>";

        const firstNumberInput = document.querySelector('input[type="number"]');
        const firstMobile = firstNumberInput ? firstNumberInput.value : null;

        try {
            let otpPayload = {
                "viaEmail": false,
                "viaSms": true,
                "resend": false,
                "mobile": firstMobile,
                "countryExt": "91",
                "loginScreen": true
            }

            const generateOtpResponse = await fetch('https://diy-api-preprod.classplusapp.com/v1/diy/generateOtp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(otpPayload)
            });

            // currently making this check as false bcz otp is not coming properly, change it later
            // if (generateOtpResponse?.ok) {
            if (true) {
                document.getElementById("container").style.display = 'none';
                document.getElementById("thanks").classList.remove('hide');

                let formDataNumber = document.getElementById('customForm');
                const formData = new FormData(formDataNumber);
                document.getElementById("thanks").innerHTML = "<div id='myModal' class='modal'><div class='modal-content'><p class='text-[24px] font-semibold text-align-center'>Verify OTP</p><p class='otpTitle'>We have sent an OTP on mobile number : <span class='wrapEditBtn'>"
                +firstMobile+ 
                "&nbsp;" +editIcon+"Edit</span></p><p class='otpHeader'>Enter One Time Password (OTP)</p><div class='otpStylesInputs'><input class='inputStyle' type='number' maxlength='1' /><input class='inputStyle' type='number' maxlength='1' /><input class='inputStyle' type='number' maxlength='1' /><input class='inputStyle' type='number' maxlength='1' /></div><div class='otpResendWrapper'><span>Didn’t recieved OTP ?</span><span>Resend in 10s</span></div><div class='button-container'><input id='submitOtp' class='custom-submit' type='submit' value='Submit'/></div></div></div>";

                document.querySelectorAll('.otpStylesInputs input').forEach((input, index, inputs) => {
                    input.addEventListener('input', () => {
                        if (input.value.length === 1 && index < inputs.length - 1) {
                            inputs[index + 1].focus();
                        }
                    });

                    // Optional: Move to previous input when backspacing
                    input.addEventListener('keydown', (e) => {
                        if (e.key === "Backspace" && input.value === '' && index > 0) {
                            inputs[index - 1].focus();
                        }
                    });
                });

                document.getElementById('submitOtp').addEventListener('click', async (event) => {
                    event.preventDefault();

                    let formData1 = document.getElementById('customForm');
                    const formData = new FormData(formData1);

                    const button = document.getElementById('submitOtp');
                    const loader = document.createElement('div');
                    loader.className = 'loader';

                    button.appendChild(loader);
                    button.classList.add('hide-text');
                    loader.style.display = 'block';

                    try {
                        let verifyOtpPayload = {
                            "viaEmail": false,
                            "viaSms": true,
                            "otp": "1245",
                            "mobile": firstMobile,
                            "countryExt": "91",
                            "sessionId": 1723643064358,
                            "fingerprintId": "861f1d21eb6cdcc1369839ba93d686ab",
                            "trackingData": {
                                "/courses/add/content?id": "249583",
                                "isCourseOverview": "true"
                            }
                        }

                        const verifyOtpResponse = await fetch('https://diy-api-preprod.classplusapp.com/v1/diy/verifyOtp', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(verifyOtpPayload)
                        });

                        // verifyOtpResponse.ok add this 
                        if (true) {
                            try {
                                const data = {
                                    'data': []
                                };
                                const urlParams = new URLSearchParams(window.location.search);
                                const utmParams = {};
                                urlParams.forEach((value, key) => {
                                    if (key.startsWith('utm_')) {
                                        utmParams[key] = value;
                                    }
                                });
                                formData.forEach((value, key) => {
                                    const existingItem = data.data.find(item => item.key === key);
                                    if (existingItem) {
                                        existingItem.value += ',' + value;
                                    } else {
                                        data.data.push({
                                            'key': key,
                                            'value': value
                                        });
                                    }
                                });
                                for (const [key, value] of Object.entries(utmParams)) {
                                    data.data.push({
                                        'key': key,
                                        'value': value
                                    });
                                }

                                const response = await fetch('https://alphaapi.testbook.com/api/v2/blog-sheet', {
                                    method: 'POST',
                                    mode: 'no-cors',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(data)
                                });

                                document.getElementById("container").style.display = 'none';

                            } catch {
                                console.error('Error:', error);
                            } finally {
                                loader.style.display = 'none';
                                button.classList.remove('hide-text');
                                button.removeChild(loader);
                            }
                            document.getElementById('redirectButton').addEventListener('click', () => {
                                window.location.reload();
                            });
                        }

                    } catch (e) {
                        console.log(e)
                    }
                });

            }

        } catch (error) {
            console.error('Error:', error);
        }
    }
    );
    </script>` :
    `<script>
        document.getElementById('submit-otp').addEventListener('click', async (event) => {
        event.preventDefault(); 

        // Hide form container and show the thank you message
        document.getElementById("container").style.display = 'none';
        document.getElementById("thanks").classList.remove('hide');

        let formData = new FormData(document.getElementById('customForm'));

        const button = document.getElementById('submit-otp');
        const loader = document.createElement('div');
        loader.className = 'loader';
        button.appendChild(loader);
        button.classList.add('hide-text');
        loader.style.display = 'block';

        try {
            const data = { 'data': [] };
            const urlParams = new URLSearchParams(window.location.search);
            const utmParams = {};

            urlParams.forEach((value, key) => {
                if (key.startsWith('utm_')) {
                    utmParams[key] = value;
                }
            });

            formData.forEach((value, key) => {
                const existingItem = data.data.find(item => item.key === key);
                if (existingItem) {
                    existingItem.value += ',' + value;
                } else {
                    data.data.push({ 'key': key, 'value': value });
                }
            });

            for (const [key, value] of Object.entries(utmParams)) {
                data.data.push({ 'key': key, 'value': value });
            }

            const response = await fetch('https://alphaapi.testbook.com/api/v2/blog-sheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            console.log('Response:', response);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            loader.style.display = 'none';
            button.classList.remove('hide-text');
            button.removeChild(loader);
        }
        document.getElementById('redirectButton').addEventListener('click', () => {
            window.location.reload();
        });
    });
    </script>`;

    const completeCode = `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Generated Form</title>
        <link rel='preconnect' href='https://fonts.googleapis.com'>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
        <link href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' rel='stylesheet'>
        <style>
            body {
                font-family: 'Inter', sans-serif;
                background-color: #E9D5CA;
                color: #363062;
                margin: 0;
                padding: 20px;
            }
            .relative {
                position: relative;
            }
            .dropdown-icon {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
            .simple-container {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 12px;
                margin-bottom: 12px;
            }
            .height-120 {
                height: 120px;
            }
            .custom-label {
                color: #0A1629;
                font-weight: 600;
                font-size: 14px;
                line-height: 21px;
            }
            .container {
              margin: auto;
              background-color: white;
              padding: 40px;
              border-radius: 16px;
            }
            .container form{
              width: 100%;
            }
            .hide{
              display: none;
            }
            .checkbox-label {
              display: flex;
              align-items: center;
              padding: 4px;
              cursor: pointer;
            }
            .container h2 {
                text-align: center;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                margin-bottom: 16px;
            }
            .custom-radio {
                appearance: none;
                -webkit-appearance: none;
                width: 16px;
                height: 16px;
                border: 1px solid #D8E0F0;
                border-radius: 50%;
                padding: 4px;
                background-color: #FFFFFF;
                cursor: pointer;
                position: relative;
            }
            .custom-radio:checked {
                border: 1px solid #00ADE7;
            }
            .custom-radio:checked::before {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                background-color: #00ADE7;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .font-bold{
              font-weight: 600;
            }
            .text-black{
              color: #000000;
            }
            .radio-label {
                color: #0A1629;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                transition: all 0.3s;
                margin-left: 8px;
            }
            .custom-radio:checked + .radio-label {
                font-weight: 600;
            }
            .radio-container {
                display: flex;
                align-items: center;
                padding-left: 5px;
            }
            .checkbox-container {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .checkbox-label {
                color: #0A1629;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                margin-left: 8px;
            }
            .checkbox-span{
              color: #0A1629; 
              font-weight: 400;
              font-size: 14px;
              line-height: 21px; 
              margin-left: 8px;
            }
            select {
                width: 100%;
                height: 48px;
                display: flex;
                border: 1px solid #D8E0F0;
                justify-content: space-between;
                padding: 12px;
                padding-left: 16px;
                padding-right: 30px;
                border-radius: 16px;
                background-color: white;
                appearance: none;
                color: #7D8592;
                font-weight: normal;
            }
            select:focus {
              border-color: #00ADE7;
              font-weight: bold;
            }
            .full-width{
              width: 100%;
            }
            select option:checked {
                color: #000000;
                font-weight: 900;
            }
            input[type='checkbox']:checked + label .unchecked-svg {
                display: none;
            }
            input[type='checkbox']:checked + label .checked-svg {
                display: block;
            }
            .unchecked-svg, .checked-svg {
                width: 18px;
                height: 18px;
            }
            .checked-svg {
                display: none;
            }
            .custom-input {
              color: #0A1629;
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
              padding: 12px;
              padding-left: 16px;
              border-radius: 16px;
              border: 1px solid #D8E0F0;
            }
            .custom-input::placeholder {
              color: #7D8592;
              font-weight: 400;
            }
            .custom-input:focus {
                border-color: #00ADE7;
            }
            input[type='submit'] {
              background-color: #00ADE7;
              color: white;
              border: none;
              padding: 12px 20px;
              cursor: pointer;
              border-radius: 16px;
              margin: 12px auto;
              width: 100%;
              position: relative;
              overflow: hidden;
            }
            .custom-button {
              margin-left: 0px;
              border: none;
              display: inline-block;
              vertical-align: middle;
              width: 100%;
              margin-top: 12px;
              margin-bottom: 12px;
              background-color: #00ADE7;
              padding: 12px 20px;
              border-radius: 16px;
              color: white;
              text-align: center;
            }
            .button-container {
              width: 100%;
              display: flex;
              justify-content: center;
              margin: 12px auto;
            }
            .form-heading {
              font-size: 24px;
              font-weight: 600;
              color: #0A1629;
              margin-top: 16px;
              margin-bottom: 24px;
            }
            .thank-you-message {
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 24px;
              padding: 24px;
              background-color: #fff;
              border-radius: 16px;
            }
            .thank-you-message h1 {
              font-size: 24px;
              color: #000000;
              margin-bottom: 10px;
              font-weight: 600;
              line-height: 28.8px;
            }
            .thank-you-message h3 {
              font-size: 16px;
              font-weight: 600;
              line-height: 19.2px;
              color: #000000;
            }
            .thank-you-message p {
              font-size: 12px;
              font-weight: 400;
              line-height: 15.6px;
              color: #000000;
            }
            .loader {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border: 4px solid rgba(0, 0, 0, 0.1);
              border-radius: 50%;
              border-top: 4px solid white;
              width: 24px;
              height: 24px;
              animation: spin 1s linear infinite;
              display: none; 
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .hide-text {
              visibility: hidden;
            }
            .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            }

            .close:hover,
            .close:focus {
                color: #000;
                text-decoration: none;
                cursor: pointer;
            }

            .otpTitle {
                font-weight: 600;
                font-size: 12px;
                line-height: 18px;
            }

            .wrapEditBtn {
                display: flex;
                align-items: center;
                color: #00ADE7;
            }

            .otpHeader {
                font-size: 14px;
                font-weight: 600;
                line-height: 21px;
            }

            .otpStylesInputs {
                display: flex;
                gap: 14px;
                width: 60px;
                margin: 24px 0px;
            }

            .inputStyle {
                border-radius: 14px;
                background: #FFFFFF;
                border: 1px solid #D8E0F0;
                box-sizing: border-box;
                box-shadow: 0px 1px 2px rgba(184, 200, 224, 0.222055);
                min-width: 59.2px;
                max-width: 60px;
                height: 58px;
                font-style: normal;
                text-indent: unset;
                text-align: center;
                font-weight: bold;
                font-size: 14px;
            }

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            /* Firefox */
            input[type=number] {
                -moz-appearance: none;
                appearance: none;
            }

            .otpResendWrapper {
                display: flex;
                justify-content: space-between;
            }
        </style>
    </head>
    <body>
        <div id='container' class='container'>
            <form id='customForm' action='#'>
                ${formCode}
            </form>
        </div>
        <div id="thanks" class="hide">
          <div class='thank-you-message'>
            <svg width='272' height='272' viewBox='0 0 272 272' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='272' height='272' fill='url(#pattern0_4_1983)'/><defs><pattern id='pattern0_4_1983' patternContentUnits='objectBoundingBox' width='1' height='1'><use xlink:href='#image0_4_1983' transform='scale(0.002)'/></pattern><image id='image0_4_1983' width='500' height='500' xlink:href='data:image/png;base64,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'/></defs></svg>
            <div> 
              <h1>${thankYouTitle}</h1>
              <h3>${subText}</h3>
            </div>
            <p>${subText2}</p> 
            <div class='button-container''>
              <button class='custom-button id='redirectButton''>Redirection Button</button>
            </div>
          </div>
        </div>
    </body>
    ${scriptVal}
    </html>`;
  
    navigate('/code', { state: { formCode: completeCode } });
  
    console.log(completeCode);
  };
  

  return (
    <div className='container bg-[#E9D5CA] h-full flex flex-col justify-around items-center p-[20px] m-auto'>
      <div className='header text-center flex flex-col gap-[10px] w-full pb-[25px]'>
        <h1 className='text-4xl font-bold text-[#363062]'>Form Generator</h1>
        <h4 className='text-lg text-[#4D4C7D]'>Have the form you like</h4>
      </div>
      <div className='flex w-full'>
        <div className='left-panel max-w-[300px] items-center flex flex-col gap-[10px] '>
          <div className='flex flex-row justify-between items-center w-full'>
            <button className='font-semibold border-2 w-3/5 border-[#363062] py-[10px] text-[#363062] hover:text-[#E9D5CA] hover:bg-[#827397] rounded-lg  ' onClick={handleWithOtp}>With OTP</button>
            <button className='font-semibold border-2 w-3/5 border-[#363062] py-[10px] text-[#363062] hover:text-[#E9D5CA] hover:bg-[#827397] rounded-lg  ' onClick={handleWithoutOtp}>Without OTP </button>
          </div>
          <EditableFormHeadingComponent addComponent={addComponent}/>
          <EditableTextComponent addComponent={addComponent} />
          <EditableButtonComponent addComponent={addComponent} />
          <EditableSubmitComponent addComponent={addComponent} />
          <EditableDateComponent addComponent={addComponent} />
          <EditableEmailComponent addComponent={addComponent} />
          <EditableNumberComponent addComponent={addComponent} />
          <EditablePasswordComponent addComponent={addComponent} />
          <EditableTextAreaComponent addComponent={addComponent} />
          <EditableRadioComponent addComponent={addComponent} />
          <EditableDropdownComponent addComponent={addComponent} />
          <EditableCheckboxComponent addComponent={addComponent} />
          {/* <EditableThankYouComponent addComponent={addComponent} /> */}
          <button className='font-semibold border-2 w-[300px] border-[#363062] p-[10px] text-[#363062] hover:text-[#E9D5CA] hover:bg-[#827397] rounded-lg m-auto ml-[-20px]' 
          onClick={handleAddClick}>
            Edit Thank You
          </button>
          {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative z-50 bg-white rounded-xl w-[400px] p-6">
                <h2 className="text-xl font-semibold text-center text-[#000000] mb-4">Edit Thank You</h2>
                <div className="mb-4">
                <label className="block text-[#363062] font-medium mb-1">Title</label>
                <input 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                    type="text" 
                    value={thankYouTitleChange} 
                    onChange={(e) => setThankYouTitleChange(e.target.value)} 
                />
                </div>
                <div className="mb-4">
                <label className="block text-[#363062] font-medium mb-1">Sub Text</label>
                <input 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                    type="text" 
                    value={subTextChange} 
                    onChange={(e) => setSubTextChange(e.target.value)} 
                />
                </div>
                <div className="mb-4">
                <label className="block text-[#363062] font-medium mb-1">Sub Text 2</label>
                <input 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                    type="text" 
                    value={subText2Change} 
                    onChange={(e) => setSubText2Change(e.target.value)} 
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
            </div>)}

        </div>
        <div className='w-full flex flex-col items-center'>
          <Routes>
            <Route path='/' element={
              <div className='w-full flex flex-col gap-4 items-center'>
                <RightPanel addedComponents={addedComponents} setAddedComponents={setAddedComponents} />
                <button className='font-semibold border-2 border-[#363062] p-[10px] text-[#363062] rounded-lg m-auto' onClick={generateCode}>Generate Code</button>
              </div>
            }/> 
          </Routes>
          <Routes>
            <Route path='/code' element={<CodePage />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
