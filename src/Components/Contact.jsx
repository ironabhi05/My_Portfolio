import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';


export default function Contact() {
    const form = useRef();
    const MySwal = withReactContent(Swal);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vmh1f4j', 'template_cvqb2ue', form.current, {
                publicKey: '64333HScpk1VbSagY',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Thank You!",
                        text: "Your message has been sent successfully!",
                        icon: "success"
                      });
                      form.current.reset();
                },
                (error) => {
                    Swal.fire({
                        title: "Oops!",
                        text: "Something went wrong, please try again later.",
                        icon: "error",
                      });
                },
            );
    };
    return (
        <div id="contact">
            <div className="relative h-screen isolate overflow-hidden py-4 ">
                <div className="pt-1 md:pt-8 ">
                    <div className="p-2 md:p-4">
                        <h1 className="text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Contact Me</h1>
                        <form className="form flex flex-col items-center" ref={form} onSubmit={sendEmail}>
                            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                                <div className=" flex flex-col md:flex-row">
                                    <input
                                        name='from_name'
                                        type="text"
                                        className="formInput my-2 py-2 px-4 rounded-md  w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-pink-400"
                                        placeholder="Name"
                                    />
                                    <input
                                        name='from_email'
                                        type="email"
                                        className="formInput my-2 py-2 px-4 rounded-md w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Email"
                                    />
                                </div>
                                <input
                                    name='subject'
                                    type="text"
                                    placeholder="Subject"
                                    className="formInput my-2 py-2 px-4 rounded-md  w-full outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <textarea
                                    name='message'
                                    rows="5"
                                    placeholder="Say Something"
                                    className="formInput my-2 py-2 px-4 rounded-md  w-full outline-none focus:ring-2 focus:ring-pink-400"
                                ></textarea>
                            </div>
                            <button
                             id='btn'
                                type="submit"
                                className="border-2 text-md mt-7 rounded-md py-2 px-4 bg-gradient-to-tr from-[#ff4694] to-[#776fff] hover:bg-gradient-to-tr from-[#776fff] to-[#ff4694] text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-1xl"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-0xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
            </div>
        </div>
    );
}
