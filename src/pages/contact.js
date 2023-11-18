import React, { useRef } from 'react';
import Head from 'next/head'
import emailjs from '@emailjs/browser';
import 'boxicons/css/boxicons.min.css';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_k0o21zl", "template_fj7jlgu", form.current, "up6CzLT-NR2FhEsMj")
      e.target.reset()
    }

  return (
    <>
        <Head>
            <title>Sadman Hossain | Contact</title>
            <meta name="description" content="Sadman Hossain's Contact" />
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 dark:text-light">
            <Layout className="w-full mx-auto py-24 px-8">
                <h2 className="my-2 w-full text-8xl font-bold text-center">Get in touch</h2>
                <span className="mb-20 text-4xl block text-center">Contact Me</span>

                <div className="grid grid-cols-2 justify-center gap-x-24 mx-auto max-w-screen-lg">
                    <div className="contact_content">
                        <h3 className="text-center text-2xl font-medium mb-6">Talk to me</h3>

                        <div className="grid grid-cols-1 md:grid-cols-300px gap-y-4">
                            <div className="bg-light dark:bg-dark border border-gray-300 rounded-lg p-4 text-center">
                                <i className="bx bx-mail-send text-2xl text-dark dark:text-light mb-1"></i>

                                <h3 className="font-medium">Email</h3>
                                <span className="block mb-3">hossainsadman39@gmail.com</span>

                                <a href="mailto:hossainsadman39@gmail.com" className="text-text-color text-small-font-size inline-flex items-center justify-center gap-x-1">Write me <i className="bx bx-right-arrow-alt text-base transition duration-300 hover:translate-x-1"></i></a>
                            </div>

                            <div className="bg-light dark:bg-dark border border-gray-300 rounded-lg p-4 text-center">
                                <i className="bx bxl-whatsapp text-2xl text-dark dark:text-light mb-1"></i>

                                <h3 className="font-medium">WhatsApp</h3>
                                <span className="block mb-3">+8801717158743</span>

                                <a href="https://wa.me/+8801717158743" className="text-text-color text-small-font-size inline-flex items-center justify-center gap-x-1">Write me <i className="bx bx-right-arrow-alt text-base transition duration-300 hover:translate-x-1"></i></a>
                            </div>

                            <div className="bg-light dark:bg-dark border border-gray-300 rounded-lg p-4 text-center">
                                <i className="bx bxl-messenger text-2xl text-dark dark:text-light mb-1"></i>

                                <h3 className="font-medium">Messenger</h3>
                                <span className="block mb-3">Sadman Hossain</span>

                                <a href="https://www.facebook.com/profile.php?id=100006365620176" className="text-text-color text-small-font-size inline-flex items-center justify-center gap-x-1">Write me <i className="bx bx-right-arrow-alt text-base transition duration-300 hover:translate-x-1"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="contact_content">
                        <h3 className="text-center text-2xl font-medium mb-6">Write me your project</h3>

                        <form ref={form} onSubmit={sendEmail} className="w-full">
                            <div className="relative mb-8 h-16">
                                <label className="absolute -top-4 left-5 text-md p-1 bg-light dark:bg-dark z-10">Name</label>
                                <input type="text" name="name" className="absolute top-0 left-0 w-full h-full border-2 border-black/30 dark:border-light/30 bg-transparent text-dark/75 outline-none rounded-lg p-6" placeholder="Insert Your Name" />
                            </div>

                            <div className="relative mb-8 h-20">
                                <label className="absolute -top-4 left-5 text-md p-1 bg-light dark:bg-dark z-10">Mail</label>
                                <input type="email" name="email" className="absolute top-0 left-0 w-full h-full border-2 border-black/30 bg-transparent text-dark/75 outline-none rounded-lg p-6" placeholder="Insert Your Email" />
                            </div>

                            <div className="relative mb-8 h-[11rem]">
                                <label className="absolute -top-4 left-5 text-md p-1 bg-light dark:bg-dark z-10">Project</label>
                                <textarea name="project" className="absolute top-0 left-0 w-full h-full border-2 border-black/30 bg-transparent text-dark/75 outline-none rounded-lg p-6 resize-none" cols="30" rows="10" placeholder="Write your project" />
                            </div>
                            <button className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark">
                                Send Message
                                <i className="bx bx-paper-plane text-2xl pl-1"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Contact;