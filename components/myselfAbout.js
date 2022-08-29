import React from 'react'

const MyselfAbout = () => {
  return (
    <>
    <section className="min-h-screen grid grid-cols-4 lg:grid-cols-12 gap-14 max-w-screen-xl mx-auto py-10 px-7 md:px-16 relative">
  <div className="col-span-4 lg:col-span-5 ">
    <div className="relative h-full">
      <img src="https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Leslie Alexander" className="w-full rounded-xl shadow-md md:rounded-2xl md:shadow-lg h-48 md:h-72 lg:h-full object-cover" />
      <div className="absolute bottom-0 text-white bg-gradient-to-b from-transparent to-gray-700 rounded-2xl h-auto p-5 md:p-10">
        <span className="mb-2 inline-block text-sm font-bold text-white">Leslie Alexander</span>
        <p className="text-sm leading-relaxed">“Also be sure to check out which works with your Gmail to create a simplified newsletter reading experience away from the business of your inbox.”</p>
      </div>
    </div>
  </div>
  <div className="col-span-4 lg:col-span-7 flex flex-col justify-center">
    <span className="inline-block mb-3 uppercase text-sm tracking-wide font-medium text-gray-900">About</span>
    <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 xl:max-w-full">What do they think <span className="text-blue-600">after using</span> Mecca</h1>
    <div className="grid gap-10 lg:max-w-xl pt-10 md:pt-14">
      <div className="sm:flex gap-6 items-center">
        <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Esther Howard" className="w-24 h-24 object-cover rounded-2xl flex-none" />
        <div>
          <span className="mb-2 inline-block text-sm font-light mt-5 sm:mt-0">Esther Howard</span>
          <p className="text-sm leading-relaxed font-semibold text-gray-900">“You should try out. Organizes all the newsletters very neastly. Still in pretty early stage but it&apos;s great so far.”</p>
        </div>
      </div>
      <div className="sm:flex gap-6 items-center border-t border-gray-200 pt-12 sm:border-0 sm:pt-0">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Eleanor Pena" className="w-24 h-24 object-cover rounded-2xl flex-none" />
        <div>
          <span className="mb-2 inline-block text-sm font-light mt-5 sm:mt-0">Eleanor Pena</span>
          <p className="text-sm leading-relaxed font-semibold text-gray-900">“Wow, can&apos;t believe I have only just found Mecca been after such a service for years, super excited! Thank you guys for developing.”</p>
        </div>
      </div>
      <div className="sm:flex gap-6 items-center border-t border-gray-200 pt-12 sm:border-0 sm:pt-0">
        <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Dianner Russell" className="w-24 h-24 object-cover rounded-2xl flex-none" />
        <div>
          <span className="mb-2 inline-block text-sm font-light mt-5 sm:mt-0">Dianner Russell</span>
          <p className="text-sm leading-relaxed font-semibold text-gray-900">“Mecca, the app I LOVE to house all my email subscriptions is letting me beta a web based version and I am soooo happy”</p>
        </div>
      </div>
    </div>
  </div>
</section></>
  )
}

export default MyselfAbout