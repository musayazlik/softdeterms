import React from 'react'
/** Components */
import Layout from '../../components/layout'
import PageTitle from '../../components/pageTitle'

const ContactUs = () => {
  return (
    <>
      <Layout>
        <div className='mt-28 container mx-auto pt-16 pb-28'>
          <PageTitle title='Contact Us' />

          <form action='' className='grid grid-cols-1 gap-6'>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-6 px-8 md:px-20 xl:px-60 '>
              <div className='flex flex-col gap-2 col-span-10 col-start-2'>
                <label
                  htmlFor='name'
                  className='font-semibold text-zinc-900 dark:text-zinc-100'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-double focus:outline-4 focus:outline-offset-2 focus:outline-zinc-700 dark:focus:outline-blue-600 duration-300 focus:border-zinc-700'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-6 px-8 md:px-20 xl:px-60 '>
              <div className='flex flex-col gap-2 col-span-10 col-start-2'>
                <label
                  htmlFor='surname'
                  className='font-semibold text-zinc-900 dark:text-zinc-100'>
                  Surname
                </label>
                <input
                  type='text'
                  name='surname'
                  id='surname'
                  className='border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-double focus:outline-4 focus:outline-offset-2 focus:outline-zinc-700 dark:focus:outline-blue-600 duration-300 focus:border-zinc-700'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-12 gap-6 px-8 md:px-20 xl:px-60 '>
              <div className='flex flex-col gap-2 col-span-10 col-start-2'>
                <label
                  htmlFor='email'
                  className='font-semibold text-zinc-900 dark:text-zinc-100'>
                  E-mail
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-double focus:outline-4 focus:outline-offset-2 focus:outline-zinc-700 dark:focus:outline-blue-600 duration-300 focus:border-zinc-700'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-6 px-8 md:px-20 xl:px-60 '>
              <div className='flex flex-col gap-2  col-span-10 col-start-2'>
                <label
                  htmlFor='subject'
                  className='font-semibold text-zinc-900 dark:text-zinc-100'>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  className='border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-double focus:outline-4 focus:outline-offset-2 focus:outline-zinc-700 dark:focus:outline-blue-600 duration-300 focus:border-zinc-700'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-12 gap-6 px-8 md:px-20 xl:px-60   '>
              <div className='flex flex-col gap-2 col-span-10 col-start-2'>
                <label
                  htmlFor='message'
                  className='font-semibold text-zinc-900 dark:text-zinc-100'>
                  Message
                </label>
                <textarea
                  className='border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-double focus:outline-4 focus:outline-offset-2 focus:outline-zinc-700 dark:focus:outline-blue-600 duration-300 focus:border-zinc-700'
                  rows={6}
                  id='message'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-12 gap-6 px-8 md:px-20 xl:px-60 '>
              <div className='flex flex-col gap-2 col-span-10 col-start-2'>
                <button
                  type='submit'
                  className='bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200'>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default ContactUs
