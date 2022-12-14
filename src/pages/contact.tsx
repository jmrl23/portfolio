import type { NextPage } from 'next'
import Header from '../components/contents/Header'
import Footer from '../components/contents/Footer'
import { ToastContainer, toast } from 'react-toastify'
import type { FormEvent } from 'react'
import 'react-toastify/dist/ReactToastify.css'

const Contact: NextPage = () => {
  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()
    const form: any =  e.target
    const name = form?.name?.value.trim()
    const email = form?.email?.value.trim()
    const message = form.message.value.trim()
    const toastConfig = {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
    try {
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })
      const data = await response.json()
      const { error, message: errorMessage } = data
      if (error) {
        if (Array.isArray(errorMessage)) {
          for (const message of errorMessage) {
            toast.error(message, toastConfig)
          }
        } else {
          toast.error(errorMessage, toastConfig)
        }
      } else {
        toast.success('Sent!', toastConfig)
      }
    } catch (error: any) {
      toast.error(error.message, toastConfig)
    } finally {
      form.name.value = ''
      form.email.value = ''
      form.message.value = ''
    }
  }

  return (
    <>
      <Header />
      <div className='container min-h-[calc(100vh-4rem)] px-4 py-4 lg:px-0 leading-7'>
        <section>
          <h1 className='border-l-4 pl-4 border-sky-400 font-bold mb-4 text-lg'>Get In Touch</h1>
          <form className='dark:text-slate-900' onSubmit={sendEmail}>
            <div className='flex flex-col md:flex-row gap-4 mb-4'>
              <input type="text" name="name" placeholder='Name' className='w-full rounded p-4 bg-gray-50 dark:bg-white border-2 border-sky-400 border-dashed dark:border-none focus:outline-none' />
              <input type="email" name="email" placeholder='E-mail' className='w-full rounded p-4 bg-gray-50 dark:bg-white border-2 border-sky-400 border-dashed dark:border-none focus:outline-none' />
            </div>
            <textarea className='p-4 rounded h-[calc(100vh-17rem)] resize-none w-full bg-gray-50 dark:bg-white border-2 border-sky-400 border-dashed dark:border-none focus:outline-none' name="message" placeholder='Message'></textarea>
            <div className='flex flex-row justify-between mt-2 items-center'>
              <span className='flex gap-x-2 dark:text-white text-xs'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                </svg>
                gaiterajomariel@gmail.com
              </span>
              <button className='flex gap-x-2 bg-slate-900/95 hover:bg-slate-900 dark:bg-black/70 text-white px-4 py-2 rounded leading-7 dark:hover:bg-black/90' type="submit">
                Send
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </form>
        </section>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <Footer />
    </>
  )
}

export default Contact