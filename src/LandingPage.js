import React from 'react';
import logo from './asset/logo.png';
import book from './asset/book2.png';
import robot from './asset/robot.png';
import language from './asset/language.png';
import download from './asset/downloads.png';
import docs from './asset/docs.png';
import pen from './asset/pen.png';
import checked from './asset/checked.png';
import settings from './asset/settings.png';
import filter from './asset/filter.png';
import backgroundVideo from './asset/bg.mp4';

function LandingPage() {
  return (
    <div className="relative min-h-screen text-white">

      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      <div className="relative z-10">

        <header className="flex justify-between px-6 md:px-12 lg:px-48 items-center py-6 md:py-10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#668DFF] rounded-full"></div>
            <img src={logo} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-xl md:text-2xl font-bold">BookAI</h1>
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            <nav className="space-x-2 lg:space-x-4">
              <a href="#" className="text-sm md:text-lg hover:underline">Features</a>
              <a href="#" className="text-sm md:text-lg hover:underline">How It Works</a>
              <a href="#" className="text-sm md:text-lg hover:underline">Roadmap</a>
              <a href="#" className="text-sm md:text-lg hover:underline">API</a>
              <a href="#" className="text-sm md:text-lg hover:underline">Price</a>
              <a href="#" className="text-sm md:text-lg hover:underline">Models</a>
            </nav>
            <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-white px-3 md:px-4 py-2 rounded-md">Login / Sign Up</button>
          </div>
        </header>

        <section className="text-center pt-8 md:pt-12 px-4 md:px-20 lg:px-40 pb-10 md:pb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Explore the Possibilities of{' '}
            <span className="relative">
              <span className="text-purple-300">AI Book Writing</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 rounded-md"></span>
            </span>{' '}
            with BookAI
          </h2>
          <p className="text-sm md:text-lg my-4 md:my-8 text-gray-300 leading-relaxed">
            Unleash the power of AI to create captivating books in minutes. <br className="hidden md:block" />
            Download, Distribute wherever you want. Generate unlimited <br className="hidden md:block" /> free books.
          </p>

          <div className="space-x-2 md:space-x-4">
            <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 font-bold rounded-3xl">Get Started</button>
            <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-3xl font-bold">Get API Access</button>
          </div>
          <p className="mt-4 md:mt-8 text-[#FDFD00] font-semibold text-xs md:text-md">
            Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation.
          </p>
        </section>

        <div className="relative p-6 md:p-10 mx-4 md:mx-10 lg:mx-52 rounded-md bg-[#3E2B50] bg-opacity-20">
          <img
            src={book}
            alt="book"
            className="w-full p-2 md:p-4 h-fit object-cover transform transition-transform duration-300 hover:scale-110 rounded-lg"
          />

          <div className="absolute bottom-0 right-0 mb-4 mr-4 flex items-center bg-[#3E2B50] bg-opacity-80 text-white py-2 px-4 rounded-lg">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 rounded-full mr-2"></span>
            <span>Chapter complete</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 py-8 md:py-12 px-4 md:px-10 lg:px-52">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-2 rounded-full bg-purple-700">
              <img src={robot} alt="robot" className="w-8 md:w-12 h-8 md:h-12 mb-2 filter invert" />
            </div>
            <p className="text-white text-lg md:text-xl font-bold mb-1">AI-Powered Writing</p>
            <p className="text-sm md:text-lg">Generate high-quality content with <br className="hidden md:block" /> advanced AI technology.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-2 rounded-full bg-purple-700">
              <img src={docs} alt="docs" className="w-8 md:w-12 h-8 md:h-12 mb-2 filter invert" />
            </div>
            <p className="text-white text-lg md:text-xl font-bold mb-1">Custom Genres</p>
            <p className="text-sm md:text-lg">Create stories in any genre or <br className="hidden md:block" /> blend multiple styles.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-2 rounded-full bg-purple-700">
              <img src={download} alt="download" className="w-8 md:w-12 h-8 md:h-12 mb-2 filter invert" />
            </div>
            <p className="text-white text-lg md:text-xl font-bold mb-1">Instant Download</p>
            <p className="text-sm md:text-lg">Get your completed book in various <br className="hidden md:block" /> formats instantly.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-2 rounded-full bg-purple-700">
              <img src={language} alt="language" className="w-8 md:w-12 h-8 md:h-12 mb-2 filter invert" />
            </div>
            <p className="text-white text-lg md:text-xl font-bold mb-1">Multilingual</p>
            <p className="text-sm md:text-lg">Generate content in multiple <br className="hidden md:block" /> languages effortlessly.</p>
          </div>
        </div>

        <div className="p-6 md:p-10 mx-4 md:mx-10 lg:mx-52 rounded-md bg-[#3E2B50] bg-opacity-20">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="flex items-start mb-4 md:mb-6 gap-2 md:gap-4">
              <div className="bg-blue-500 text-white p-2 md:p-3 rounded-full">
                <img src={filter} alt="filter" className="w-5 md:w-7 h-5 md:h-7 filter invert"></img>
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-white text-md md:text-lg font-bold">Choose Your Genre</h3>
                <p className="text-gray-300 text-xs md:text-sm">Select from a wide range of genres.</p>
              </div>
            </div>
            <div className="flex items-start mb-4 md:mb-6 gap-2 md:gap-4">
              <div className="bg-purple-500 text-white p-2 md:p-3 rounded-full">
                <img src={pen} alt="pen" className="w-5 md:w-7 h-5 md:h-7 filter invert"></img>
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-white text-md md:text-lg font-bold">Write and Edit</h3>
                <p className="text-gray-300 text-xs md:text-sm">Let the AI generate the content or edit it yourself.</p>
              </div>
            </div>
            <div className="flex items-start mb-4 md:mb-6 gap-2 md:gap-4">
              <div className="bg-yellow-500 text-white p-2 md:p-3 rounded-full">
                <img src={checked} alt="checked" className="w-5 md:w-7 h-5 md:h-7 filter invert"></img>
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-white text-md md:text-lg font-bold">Review and Approve</h3>
                <p className="text-gray-300 text-xs md:text-sm">Ensure everything is perfect before finalizing.</p>
              </div>
            </div>
            <div className="flex items-start mb-4 md:mb-6 gap-2 md:gap-4">
              <div className="bg-green-500 text-white p-2 md:p-3 rounded-full">
                <img src={settings} alt="settings" className="w-5 md:w-7 h-5 md:h-7 filter invert"></img>
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-white text-md md:text-lg font-bold">Customize Settings</h3>
                <p className="text-gray-300 text-xs md:text-sm">Adjust various settings for personalized results.</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-[#3E2B50] bg-opacity-20 text-gray-300 py-6 px-4 sm:px-6 md:px-8 lg:px-20">
  <div className="container mx-auto text-center border-t border-gray-600 pt-4">
    <p className="text-gray-300 text-sm sm:text-base md:text-lg font-bold mb-2">
      &copy; {new Date().getFullYear()} BookAI. All rights reserved.
    </p>
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-md">
      <a href="#" className="hover:text-white transition">Terms of Service</a>
      <a href="#" className="hover:text-white transition">Privacy Policy</a>
      <a href="#" className="hover:text-white transition">Contact Us</a>
    </div>
  </div>
</footer>

      </div>
      
    </div>
    
  );
}

export default LandingPage;
