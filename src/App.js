import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; 
import EditableSubmitComponent from './components/EditableSubmitComponent';
import EditableDateComponent from './components/EditableDateComponent';
import EditableEmailComponent from './components/EditableEmailComponent';
import EditableNumberComponent from './components/EditableNumberComponent';
import EditablePhoneNumberComponent from './components/EditablePhoneNumberComponent';
import EditablePasswordComponent from './components/EditablePasswordComponent';
import EditableRadioComponent from './components/EditableRadioComponent';
import EditableTextComponent from './components/EditableTextComponent';
import EditableTextAreaComponent from './components/EditableTextAreaComponent';
import EditableDropdownComponent from './components/EditableDropdownComponent';
import EditableCheckboxComponent from './components/EditableCheckboxComponent';
import EditableFormHeadingComponent from './components/EditableFormHeadingComponent'; 
import RightPanel from './components/RightPanel';
import CodePage from './components/CodePage';

const App = () => {

  const [addedComponents, setAddedComponents] = useState([]);
  const navigate = useNavigate();
  const [thankYouTitle, setThankYouTitle] = useState("Thank You")
  const [subText, setSubText] = useState("for showing interest")
  const [subText2, setSubText2] = useState("Our executive will call you shortly")
  const [imageLink, setImageLink] = useState("https://s3-alpha-sig.figma.com/img/61a6/b896/e406fa7eb7b0f292f1ccdecb9b5b67f4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDG70uuiA9gGJt~WzRlXBZ~3wQafBnMrlzMRRoi3aY09VSk5nIPUxOvcVy1vU0NC2xKrHiYVbKLeLZt3pT4F9TUqFmhYiXqfUOk2g8DpnRv1LVGq9trvNTZLB6cQzT5EtOhRZEuhHbNfQCGci9F69VGXTuIJpVTGRYE23CNEchk7lSBmcKDhjWOTqhHNGm-xNyQTEeLdcMuovnDWy-L-RpRBvaSH4cMACQsAJZ32-wYxF~LhEzv2P5fRIpEMC9fra1O7GumCPA9k7Tn60HYdMj1Am1oh5AAAlznTohcrHbID563qvxMqv3BmCY8qlyTjhPCxxPoCffJ~39qY46IGzQ__")
  const [redirectionLink, setRedirectionLink] = useState("")
  const [redirectionText, setRedirectionText] = useState("Redirection Button")
  const [thankYouTitleChange, setThankYouTitleChange] = useState(thankYouTitle)
  const [subTextChange, setSubTextChange] = useState(subText)
  const [subText2Change, setSubText2Change] = useState(subText2)
  const [imageLinkChange, setImageLinkChange] = useState(imageLink)
  const [redirectionLinkChange, setRedirectionLinkChange] = useState(redirectionLink)
  const [redirectionTextChange, setRedirectionTextChange] = useState(redirectionText)
  const [isOtpRequired, setIsOtpRequired] = useState(false);
  const [uniqueId, setUniqueId] = useState(0);
  
  const [showPopup, setShowPopup] = useState(false);
  const [uniqueShowPopup, setUniqueShowPopup] = useState(false);

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const handleSetUniqueId = () => {
    setUniqueShowPopup(true);
  };

  const onClose = () => {
    setShowPopup(false);
  };

  const onCloseUnique = () => {
    setUniqueShowPopup(false);
  };

  const handleWithOtp = () => {
    setIsOtpRequired(true)
  };

  const handleWithoutOtp = () => {
    setIsOtpRequired(false)
  };

  const handleSave = () => {
    setRedirectionText(redirectionTextChange);
    setRedirectionLink(redirectionLinkChange);
    setImageLink(imageLinkChange);
    setThankYouTitle(thankYouTitleChange);
    setSubText(subTextChange);
    setSubText2(subText2Change);
    setUniqueId(uniqueId);
    setShowPopup(false);
    setUniqueShowPopup(false);
  };

  const addComponent = (component) => {
    setAddedComponents([...addedComponents, component]);
  };

  function generateUniqueCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueCode = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uniqueCode += characters[randomIndex];
    }
    return uniqueCode;
  }

  useEffect(() => {
    const newUniqueId = generateUniqueCode();
    setUniqueId(newUniqueId);
  }, []);

  const generateCode = () => {
    const formCode = addedComponents.map((component, index) => {
        switch (component.type) {
            case 'Text':
                return `<div class='simple-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    <input id='${component.title}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' class='custom-input' type='text' placeholder='${component.placeholder || ''}' ${component.required ? 'required' : ''} />
                </div>`;
            case 'Submit':
                return `<div class='button-container' key='${index}'>
                    <button id='submit-otp' class='custom-submit' type='submit' ${component.required ? 'required' : ''}>
                        <span id="submit-text" class='button-text'>${component.title}</span>
                        <div id="loader-div" class='loader loader-default hide'></div>
                    </button>
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
            case 'PhoneNumber':
                return `<div class='simple-container' id='phone-number-container' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    <input id='${component.title}' name='${component.title.toLowerCase().replace(/\s+/g, '')}' class='custom-input' type='tel' pattern="[6-9]{1}[0-9]{9}" maxlength="10" placeholder='${component.placeholder || ''}' ${component.required ? 'required' : ''} oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
                    <div class="error-message">Please enter a valid 10-digit phone number.</div>
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
                          name="${component.title.toLowerCase().replace(/\s+/g, '')}"
                          ${component.required ? 'required' : ''}
                          class='dp-selection'
                        >
                          <option value='' disabled selected >${component.placeholder || ''}</option>
                          ${component.options.map((option, idx) => `<option key='${idx}' class="selectedopt" name='${component.title.toLowerCase().replace(/\s+/g, '')}' value='${option}'>${option}</option>`).join('')}
                        </select>
                        <svg class='dropdown-icon' width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M9.70711 0.292893C10.0676 0.653377 10.0953 1.22061 9.7903 1.6129L9.70711 1.70711L5.70711 5.70711C5.34662 6.06759 4.77939 6.09532 4.3871 5.7903L4.29289 5.70711L0.292893 1.70711C-0.0976305 1.31658 -0.0976305 0.683418 0.292893 0.292893C0.653378 -0.0675907 1.22061 -0.0953203 1.6129 0.209705L1.70711 0.292893L5 3.585L8.29289 0.292893C8.65338 -0.0675907 9.22061 -0.0953203 9.6129 0.209705L9.70711 0.292893Z' fill='#7D8592'/>
                        </svg>
                      </div>
                  </div>`;
              case 'Checkbox':
                  return `<div class='simple-container checkbox ${component.required ? 'required' : ''}' key='${index}'>
                    <label class='custom-label'>${component.title}</label>
                    ${component.options.map((option, idx) => `<div class='checkbox-container' key='${idx}'>
                      <input 
                          type='checkbox' 
                          id='checkbox-${component.title}-${idx}' 
                          name='${component.title.toLowerCase().replace(/\s+/g, '')}-${index}' 
                          value='${option}' 
                           
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
            default:
              return '';
        }
    }).join('\n');

    const scriptVal = isOtpRequired ? `<script>
        document.querySelectorAll('.dp-selection').forEach(input => {
            input.addEventListener('change', function() {
            this.classList.add('text-black', 'font-bold');
            });
        });
        const containerDiv = document.querySelector('.checkbox');
        
        function validateForm() {
            const form = document.getElementById('customForm');
            const requiredFields = form.querySelectorAll('[required]');
            const submitButton = document.getElementById('submit-otp');

            let isFormValid = true;

            if(containerDiv && containerDiv.classList.contains('required')){   
                const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
                if(Array.from(checkboxes).some(checkbox => checkbox.checked)){
                    isFormValid = true;
                }
                else{
                    isFormValid = false;
                }
            }

            requiredFields.forEach(field => {
                if (!field.checkValidity()) {
                    isFormValid = false;
                }
            });

            submitButton.disabled = !isFormValid;
        }
        window.addEventListener('load', validateForm);
        document.getElementById('customForm').addEventListener('input', validateForm);
        document.getElementById('customForm').addEventListener('change', validateForm);


      document.getElementById('submit-otp').addEventListener('click', async (event) => {
        event.preventDefault();

        const formSubmitBtn = document.getElementById('submit-otp');
        const loaderDiv = document.getElementById('loader-div');
        const submitText = document.getElementById('submit-text');

        function toggleLoader(show) {
            if (show) {
                loaderDiv.classList.remove('hide');
                submitText.classList.add('hide');
                formSubmitBtn.disabled = true; // Optionally disable the button while loading
            } else {
                submitText.classList.remove('hide');
                loaderDiv.classList.add('hide');
                formSubmitBtn.disabled = false; // Re-enable the button once loading is complete
            }
        }

        const editIcon = "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 14.6665H2C1.72667 14.6665 1.5 14.4398 1.5 14.1665C1.5 13.8932 1.72667 13.6665 2 13.6665H14C14.2733 13.6665 14.5 13.8932 14.5 14.1665C14.5 14.4398 14.2733 14.6665 14 14.6665Z' fill='#00ADE7'/><path d='M12.68 2.31994C11.3867 1.02661 10.12 0.993275 8.79334 2.31994L7.98668 3.12661C7.92001 3.19328 7.89334 3.29994 7.92001 3.39328C8.42668 5.15994 9.84001 6.57328 11.6067 7.07994C11.6333 7.08661 11.66 7.09328 11.6867 7.09328C11.76 7.09328 11.8267 7.06661 11.88 7.01328L12.68 6.20661C13.34 5.55328 13.66 4.91994 13.66 4.27994C13.6667 3.61994 13.3467 2.97994 12.68 2.31994Z' fill='#00ADE7'/><path d='M10.4067 7.68654C10.2133 7.5932 10.0267 7.49987 9.84668 7.3932C9.70001 7.30654 9.56001 7.2132 9.42001 7.1132C9.30668 7.03987 9.17334 6.9332 9.04667 6.82654C9.03334 6.81987 8.98667 6.77987 8.93334 6.72654C8.71334 6.53987 8.46668 6.29987 8.24668 6.0332C8.22668 6.01987 8.19334 5.9732 8.14668 5.9132C8.08001 5.8332 7.96668 5.69987 7.86668 5.54654C7.78668 5.44654 7.69334 5.29987 7.60668 5.1532C7.50001 4.9732 7.40668 4.7932 7.31334 4.60654C7.19097 4.34431 6.8468 4.26641 6.64218 4.47103L2.89334 8.21987C2.80668 8.30654 2.72668 8.4732 2.70668 8.58654L2.34668 11.1399C2.28001 11.5932 2.40668 12.0199 2.68668 12.3065C2.92668 12.5399 3.26001 12.6665 3.62001 12.6665C3.70001 12.6665 3.78001 12.6599 3.86001 12.6465L6.42001 12.2865C6.54001 12.2665 6.70668 12.1865 6.78668 12.0999L10.5417 8.34484C10.7422 8.14432 10.6669 7.79929 10.4067 7.68654Z' fill='#00ADE7'/></svg>";

        const phoneNumberContainer = document.getElementById('phone-number-container');
        const firstNumberInput = document.querySelector('input[type="tel"]');
        const firstMobile = firstNumberInput ? firstNumberInput.value : null;

        if(firstNumberInput){
            const phoneNumberValue = firstNumberInput.value.trim();
            
            if (firstNumberInput.hasAttribute('required') || phoneNumberValue.length > 0) {
                if (!firstNumberInput.checkValidity() || phoneNumberValue.length !== 10) {
                    phoneNumberContainer.classList.add('show-error');
                    return;
                } else {
                    phoneNumberContainer.classList.remove('show-error');
                }
            } else {
                phoneNumberContainer.classList.remove('show-error');
            }
        }
        toggleLoader(true);
        try {
            const generateOtpResponse = await fetch('https://api.testbook.com/api/v2/blog-otp?mobile='+firstMobile, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            toggleLoader(false);
            if (generateOtpResponse?.ok) {
                document.getElementById("customForm").style.display = 'none';
                document.getElementById("otpForm").style.display = 'block';
                let formDataNumber = document.getElementById('customForm');
                const formData = new FormData(formDataNumber);
                document.getElementById("otpForm").innerHTML = "<div id='myModal' class='modal'><div class='modal-content'><p class='text-[24px] font-semibold text-align-bold'>Verify OTP</p><p class='otpTitle'>We have sent an OTP on mobile number : <span class='wrapEditBtn' id='editBtn'>"
                +firstMobile+ 
                "&nbsp;" +editIcon+"Edit</span></p><p class='otpHeader'>Enter One Time Password (OTP)</p><div class='otpStylesInputs'><input class='inputStyle' type='number' maxlength='1' /><input class='inputStyle' type='number' maxlength='1' /><input class='inputStyle' type='number' maxlength='1' /><input class='inputStyle' type='number' maxlength='1' /><input class='inputStyle' type='number' maxlength='1' /><input class='inputStyle' type='number' maxlength='1' /></div><div class='otpResendWrapper'>Didn’t recieved OTP ?<a id='resendOtp' class='resendTimer'>Resend</a><span id='resendTimer'>Resend in 10s</span></div><div class='button-container'><input id='submitOtp' class='custom-submit' type='submit' value='Submit'/></div><p id='otp-error' class='otpErrorMessage hide-text'>Incorrect OTP. Please try again.</p></div></div>";

                document.getElementById('editBtn').addEventListener('click', (event) => {
                    document.getElementById("customForm").style.display = 'block';
                    document.getElementById("otpForm").style.display = 'none';
                })

                // Function to start the resend OTP timer
                function startResendTimer() {
                    let resendTimer = 10;
                    document.getElementById('resendOtp').style.opacity = '0.4';
                    document.getElementById('resendOtp').style.cursor = 'not-allowed';
                    document.getElementById('resendOtp').removeEventListener('click', handleResendOtpClick); // Remove previous event listener if any

                    document.getElementById('resendOtp').style.display = "none";
                    const timerInterval = setInterval(() => {
                        document.getElementById('resendTimer').style.display = "block";
                        document.getElementById('resendTimer').textContent = "Resend in "+resendTimer+"s";
                        resendTimer--;

                        if (resendTimer < 0) {
                            clearInterval(timerInterval);
                            document.getElementById('resendOtp').style.display = "block";
                            document.getElementById('resendTimer').style.display = "none";
                            document.getElementById('resendOtp').style.opacity = '1';
                            document.getElementById('resendOtp').style.cursor = 'pointer';
                            document.getElementById('resendOtp').addEventListener('click', handleResendOtpClick);
                        }
                    }, 1000);
                }

                // Function to handle the resend OTP click event
                async function handleResendOtpClick() {
                    startResendTimer(); // Disable the button and start the timer again

                    // Your logic to resend the OTP goes here
                    const generateOtpResponse = await fetch('https://api.testbook.com/api/v2/blog-otp?mobile='+firstMobile, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    });
                }

                // Initial call to start the timer when the form is first displayed
                startResendTimer();

                let otpNumber = 0;

                document.querySelectorAll('.otpStylesInputs input').forEach((input, index, inputs) => {
                    input.addEventListener('input', () => {
                        if (input.value.length === 1 && index < inputs.length - 1) {
                            inputs[index + 1].focus();
                        }
                        let concatenatedOtp = [...inputs].map(input => input.value).join('');
                        otpNumber = parseInt(concatenatedOtp, 10);
                    });
                    
                    // Optional: Move to previous input when backspacing
                    input.addEventListener('keydown', (e) => {
                        if (e.key === "Backspace" && input.value === '' && index > 0) {
                            inputs[index - 1].focus();
                        }
                    });
                });
                const otpSubmitBtn = document.getElementById('submitOtp');

                document.getElementById('submitOtp').addEventListener('click', async (event) => {
                    event.preventDefault();

                    toggleLoader(true);
                    
                    let formData1 = document.getElementById('customForm');
                    const formData = new FormData(formData1);

                    try {
                        const verifyOtpResponse = await fetch('https://api.testbook.com/api/v2/blog-otp/validate?mobile='+firstMobile+'&otp='+otpNumber, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        });
                        toggleLoader(false);
                        console.log(verifyOtpResponse);
                        const otpErrorElement = document.getElementById('otp-error');
                        if (verifyOtpResponse?.ok) {
                            try {
                                const data = {
                                    'data': []
                                };
                                const urlParams = new URLSearchParams(window.parent.location.search);
                                const utmParams = {};
                                data.data.unshift({ 'key': 'uniqueId', 'value': "${uniqueId}" });
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
                                    data.data.push({
                                        'key': key,
                                        'value': value
                                    });
                                }

                                const response = await fetch('https://api.testbook.com/api/v2/blog-sheet', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(data)
                                });

                                // response.ok
                                if(response.ok){
                                    document.getElementById("container").style.display = 'none';
                                    document.getElementById("thanks").classList.remove('hide');
                                }else{
                                    alert('error')
                                }
                                
                            } catch {
                                console.error('Error:', error);
                            } 
                            document.getElementById('redirectButton').addEventListener('click', () => {
                                window.location.reload();
                            });
                        }else {
                            otpErrorElement.classList.remove('hide-text');
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
        document.querySelectorAll('.dp-selection').forEach(input => {
            input.addEventListener('change', function() {
            this.classList.add('text-black', 'font-bold');
            });
        });

        const containerDiv = document.querySelector('.checkbox');

        function validateForm() {
            const form = document.getElementById('customForm');
            const requiredFields = form.querySelectorAll('[required]');
            const submitButton = document.getElementById('submit-otp');

            let isFormValid = true;

            if(containerDiv && containerDiv.classList.contains('required')){   
                const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
                if(Array.from(checkboxes).some(checkbox => checkbox.checked)){
                    isFormValid = true;
                }
                else{
                    isFormValid = false;
                }
            }

            requiredFields.forEach(field => {
                if (!field.checkValidity()) {
                    isFormValid = false;
                }
            });

            submitButton.disabled = !isFormValid;
        }
        window.addEventListener('load', validateForm);
        document.getElementById('customForm').addEventListener('input', validateForm);
        document.getElementById('customForm').addEventListener('change', validateForm);

        const formSubmitBtn = document.getElementById('submit-otp');
        const loaderDiv = document.getElementById('loader-div');
        const submitText = document.getElementById('submit-text');

        function toggleLoader(show) {
            if (show) {
                loaderDiv.classList.remove('hide');
                submitText.classList.add('hide');
                formSubmitBtn.disabled = true; // Optionally disable the button while loading
            } else {
                submitText.classList.remove('hide');
                loaderDiv.classList.add('hide');
                formSubmitBtn.disabled = false; // Re-enable the button once loading is complete
            }
        }

        document.getElementById('submit-otp').addEventListener('click', async (event) => {
        event.preventDefault(); 

        const phoneNumberContainer = document.getElementById('phone-number-container');
        const phoneNumberInput = document.querySelector('input[type="tel"]');
        if(phoneNumberInput){
            const phoneNumberValue = phoneNumberInput.value.trim();
            
            if (phoneNumberInput.hasAttribute('required') || phoneNumberValue.length > 0) {
                if (!phoneNumberInput.checkValidity() || phoneNumberValue.length !== 10) {
                    phoneNumberContainer.classList.add('show-error');
                    return;
                } else {
                    phoneNumberContainer.classList.remove('show-error');
                }
            } else {
                phoneNumberContainer.classList.remove('show-error');
            }
        }

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
            const urlParams = new URLSearchParams(window.parent.location.search);
            const utmParams = {};

            data.data.unshift({ 'key': 'uniqueId', 'value': "${uniqueId}" });

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
            toggleLoader( true);

            const response = await fetch('https://api.testbook.com/api/v2/blog-sheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            console.log('Response:', response);
            toggleLoader( false);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            loader.style.display = 'none';
            button.classList.remove('hide-text');
            button.removeChild(loader);
        }
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
                /*background-color: #E9D5CA;
                padding:20px;*/
                color: #363062;
                margin: 0;
                display:block;
            }
            .relative {
                position: relative;
            }
            .dropdown-icon {
                position: absolute;
                right: 20px;
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
            .text-align-bold{
                text-align: center;
                font-weight: 600;
                font-size:x-large;
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
            .custom-submit {
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
              cursor: pointer;
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
            .selectedopt{
              color: black;
              font-weight: 700;
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
            .thanks{
              width:100%;
              display:block;
            }
            .thank-you-message {
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
              padding: 24px;
              background-color: #fff;
              border-radius: 16px;
              justify-content: center;
              height: 100vh;
            }
            .thank-you-message h1 {
              font-size: 24px;
              color: #000000;
              margin:0;
              margin-top: 24px;
              font-weight: 600;
              line-height: 28.8px;
              }
            .thank-you-message h3 {
              margin: 0;
              margin-top: 5px;
              font-size: 16px;
              font-weight: 600;
              line-height: 19.2px;
              color: #000000;
              }
            .thank-you-message p {
              margin: 0;
              font-size: 12px;
              font-weight: 400;
              line-height: 15.6px;
              color: #000000;
            }
            .loader {
                border: 4px solid rgba(0, 0, 0, 0.1);
                border-radius: 50%;
                border-top: 4px solid #007bff; 
                width: 24px; 
                height: 24px;
                animation: spin 1s linear infinite; 
                display: inline-block;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .hide-text {
              visibility: hidden;
            }
            .otpErrorMessage{
                color: red;
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
                width: 59.2px;
                height: 58px;
                font-style: normal;
                text-indent: unset;
                text-align: center;
                font-weight: bold;
                font-size: 14px;
            }
            @media screen and (max-width: 530px) {
                .inputStyle {
                    width: 49.2px;
                }
            }
            @media screen and (max-width: 460px) {
                .inputStyle {
                    width: 39px;
                }
            }

            @media screen and (max-width: 400px) {
                .inputStyle {
                    width: 32px;
                }
            }

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            /* Firefox */
            input[type=number], input[type=tel]{
                -moz-appearance: none;
                appearance: none;
            }

            .otpResendWrapper {
                display: flex;
                justify-content: space-around;
            }
            .resendTimer {
                color: #00ADE7;
            }
            img.thank-you-image {
                width: 100%;
                max-width: 260px;
                height: auto;
            }
            .error-message {
                color: red;
                font-size: 12px;
                display: none;
            }
            .show-error .error-message {
                display: block;
            }
            .wrapEditBtn{
                cursor: pointer;
            }
            .custom-submit:disabled {
                background-color: #cccccc;
                cursor: not-allowed;
            }
            .hide{
                display: none;
            }
        </style>
    </head>
    <body>
        <div id='container' class='container'>
            <form id='customForm' action='#'>
                ${formCode}
            </form>
            <div id="otpForm"></div>
        </div>
        <div id="thanks" class="hide">
          <div class='thank-you-message'>
            <img src="${imageLink}"  class="thank-you-image" alt="Thank You" />
            <div> 
              <h1>${thankYouTitle}</h1>
              <h3>${subText}</h3>
            </div>
            <p>${subText2}</p> 
            <div class='button-container'>
              <button class='custom-button' id='redirectButton' onclick="window.parent.location.href='${redirectionLink}'">${redirectionText}</button>
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
          <div className='flex flex-row justify-around items-center w-full gap-[10px]'>
            <button className={`font-semibold border-2 w-3/5 py-[10px] rounded-lg m-auto ${
                isOtpRequired
                    ? 'bg-[#363062] text-[#E9D5CA] border-[#363062]'
                    : 'bg-transparent text-[#363062] border-[#363062] hover:text-[#E9D5CA] hover:bg-[#827397]'
                }`} onClick={handleWithOtp}>With OTP</button>
            <button className={`font-semibold border-2 w-3/5 py-[10px] rounded-lg m-auto ${
                !isOtpRequired
                    ? 'bg-[#363062] text-[#E9D5CA] border-[#363062]'
                    : 'bg-transparent text-[#363062] border-[#363062] hover:text-[#E9D5CA] hover:bg-[#827397]'
                }`} onClick={handleWithoutOtp}>Without OTP </button>
          </div>
          <button className='font-semibold border-2 w-[300px] border-[#363062] p-[10px] text-[#363062] hover:text-[#E9D5CA] hover:bg-[#827397] rounded-lg m-auto ml-[-20px]' 
          onClick={handleSetUniqueId}>
            Set Unique Id
          </button>
          {uniqueShowPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative z-50 bg-white rounded-xl w-[400px] p-6">
                <h2 className="text-xl font-semibold text-center text-[#000000] mb-4">Set Unique Id</h2>
                <div className="mb-4">
                    <label className="block text-[#363062] font-medium mb-1">Title</label>
                    <input 
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                        type="text"
                        maxlength="6"
                        value={uniqueId}
                        onChange={(e) => setUniqueId(e.target.value)} 
                    />
                </div>
                <div className="flex justify-end mt-6">
                    <button 
                        className="bg-gray-300 text-[#363062] font-semibold px-4 py-2 rounded-lg mr-4" 
                        onClick={onCloseUnique}
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
          <EditableFormHeadingComponent addComponent={addComponent}/>
          <EditableTextComponent addComponent={addComponent} />
          <EditableDateComponent addComponent={addComponent} />
          <EditableEmailComponent addComponent={addComponent} />
          <EditableNumberComponent addComponent={addComponent} />
          <EditablePhoneNumberComponent addComponent={addComponent} />
          <EditablePasswordComponent addComponent={addComponent} />
          <EditableTextAreaComponent addComponent={addComponent} />
          <EditableRadioComponent addComponent={addComponent} />
          <EditableDropdownComponent addComponent={addComponent} />
          <EditableCheckboxComponent addComponent={addComponent} />
          <EditableSubmitComponent addComponent={addComponent} />
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
                <div className="mb-4">
                    <label className="block text-[#363062] font-medium mb-1">Image Link</label>
                    <input 
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                        type="text" 
                        value={imageLinkChange} 
                        onChange={(e) => setImageLinkChange(e.target.value)} 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-[#363062] font-medium mb-1">Redirection Text</label>
                    <input 
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                        type="text" 
                        value={redirectionTextChange} 
                        onChange={(e) => setRedirectionTextChange(e.target.value)} 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-[#363062] font-medium mb-1">Redirection Link</label>
                    <input 
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:border-[#000000] focus:ring-0" 
                        type="text" 
                        value={redirectionLinkChange} 
                        onChange={(e) => setRedirectionLinkChange(e.target.value)} 
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
