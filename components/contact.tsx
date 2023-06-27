'use client'

import { useState, useRef, useEffect } from 'react'
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [flagForm,setFlag]=useState('')
  
    const submitHandle= async(event: any)=>{
        event.preventDefault(); 
        try {
            setFlag('Sending message...');
            console.log('fetching')
            const response = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({name,email,message}),
            });

            if (!response.ok) {
                throw new Error('An error occurred while submitting the data.');
            }

            const responseData = await response;
            setFlag('Thanks for contacting us!');
        
        } catch (error) {
            console.log(error);
            setFlag('Error occur while sending');

        } finally {
            
            console.log('worked')
        }
        return true;
    }


  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id ='contact'>

        {/* CTA box */}
        <div className="relative py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          <div className="relative flex flex-col lg:flex-row justify-between " data-aos="fade-up">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Contact us</h3>
              <p className="text-purple-200 text-lg">
                At Dionysos IT Consulting, we specialize in providing complete IT solutions to businesses of all sizes. 
              Let us help you maximize the potential of your technology investments. 
              Please fill out the form below to contact us and a representative will be in touch to explore how we can help you.</p>
            </div>

            {/* CTA form */}
            <form className=" mx-auto p-4 lg:w-1/2"
            onSubmit={submitHandle}>
                <div className="mb-4 flex">
                    <div className="mr-2 w-1/2">
                    <label htmlFor="name" className="block mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 bg-gray-600 text-white border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                    />
                    </div>
                    <div className="ml-2 w-1/2">
                    <label htmlFor="email" className="block mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 bg-gray-600 text-white border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                    />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 ">Message:</label>
                    <div
                    id="message"
                    role="textbox"
                    contentEditable
                    onInput={(e) => setMessage((e.target as HTMLElement).innerText )}
                    className="w-full min-h-[200px] p-2 bg-gray-700 text-white border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                    ></div>
                </div>
                <button type="submit" 
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                    Submit
                </button>
                <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">{flagForm}</p>
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}
