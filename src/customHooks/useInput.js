import React, { useState } from 'react'

const UseInput = (inputName) => {

const [input, setInput] = useState('')
const [validateInput, setValidateInput] = useState(undefined)

const handleChange = (e) => {
    switch(e.target.name) {
        case `${inputName}`:
             if (validateInput !== undefined) {
                 setValidateInput(undefined)
             }
            setInput(e.target.value)
            break;
    }
}

const validateError = (label, which) => {
    const errorMessage = () => (
        <div className="text-red-500">
        * {which} input is empty
        </div>
    )
    console.log(label)
   switch (label) {
       case input:
            setValidateInput(errorMessage)
            break;
   }
}
const onSubmit = (e) => {

    switch ('') {
        case input:
            validateError(input, `${inputName}`);
            e.preventDefault()
            break;
        default:
             /* setURL() */
            console.log('submitted!')
            //emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
            e.preventDefault()
    }
}
const InputComp = () => (
    <div className="sm:col-span-2">
              <label htmlFor={`${inputName}`} className="block text-sm font-medium text-gray-700">
                {inputName} {validateInput}
              </label>
              <div className="mt-1">
                <input
                  id={`${inputName}`}
                  name={`${inputName}`}
                  type={`${inputName}`}
                  autoComplete={`${inputName}`}
                  value={input}
                  onChange={handleChange}
                  key={`${inputName}`}
                  placeholder={`Enter ${inputName}...`}
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
)
    return ({submit: onSubmit, comp: <InputComp />})
}
export default UseInput