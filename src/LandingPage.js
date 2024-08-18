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
  
        <header className="flex justify-between px-48 items-center py-10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#668DFF] rounded-full"></div>
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">BookAI</h1>
          </div>
          <div className="flex space-x-6 items-center">
            <nav className="space-x-4">
              <a href="#" className="text-lg hover:underline">Features</a>
              <a href="#" className="text-lg hover:underline">How It Works</a>
              <a href="#" className="text-lg hover:underline">Roadmap</a>
              <a href="#" className="text-lg hover:underline">API</a>
              <a href="#" className="text-lg hover:underline">Price</a>
              <a href="#" className="text-lg hover:underline">Models</a>
            </nav>
            <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-white px-4 py-2 rounded-md">Login / Sign Up</button>
          </div>
        </header>

    
        <section className="text-center pt-12 px-40 pb-16">
          <h2 className="text-5xl font-bold mb-4">
            Explore the Possibilities of{' '}
            <span className="relative ">
              <span className="text-purple-300">AI Book Writing</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 rounded-md"></span>
            </span>{' '}
            with BookAI
          </h2>
          <p className="text-lg my-8 text-gray-300 leading-relaxed text-center">
            Unleash the power of AI to create captivating books in minutes. <br />
            Download, Distribute wherever you want. Generate unlimited <br /> free books.
          </p>

          <div className="space-x-4">
            <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-white px-6 py-3 font-bold rounded-3xl">Get Started</button>
            <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-3xl font-bold">Get API Access</button>
          </div>
          <p className="mt-8 text-[#FDFD00] font-semibold text-md">
            Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation.
          </p>
        </section>

        <div className="relative p-10 mx-52 rounded-md bg-[#3E2B50] bg-opacity-20">
        <img
  src={book}
  alt="book"
  className="w-full p-4 h-fit object-cover transform transition-transform duration-300 hover:scale-110 rounded-lg"
/>

  <div className="absolute bottom-0 right-0 mb-4 mr-4 flex items-center bg-[#3E2B50] bg-opacity-80 text-white py-2 px-4 rounded-lg">
    <span className="bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 rounded-full mr-2"></span>
    <span>Chapter complete</span>
  </div>
</div>


        <div className="flex justify-center space-x-6 py-12 px-52">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-2 rounded-full bg-purple-700">
              <img src={robot} alt="robot" className="w-12 h-12 mb-2 filter invert" />
            </div>
            <p className="text-white text-xl font-bold mb-1">AI-Powered Writing</p>
            <p className="text-center text-lg">Generate high-quality content with <br /> advanced AI technology.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-2 rounded-full bg-purple-700">
              <img src={docs} alt="robot" className="w-12 h-12 mb-2 filter invert"></img>
            </div>
            <p className="text-white mb-1 text-xl font-bold">Custom Genres</p>
            <p className="text-center text-lg">Create stories in any genre or<br /> blend multiple styles.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-2 rounded-full bg-purple-700">
              <img src={download} alt="robot" className="w-12 h-12 mb-2 filter invert"></img>
            </div>
            <p className="text-white mb-1 text-xl font-bold">Instant Download</p>
            <p className="text-center text-lg">Get your completed book in various <br /> formats instantly.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-2 rounded-full bg-purple-700">
              <img src={language} alt="robot" className="w-12 h-12 mb-2 filter invert"></img>
            </div>
            <p className="text-white mb-1 text-xl font-bold">Multilingual</p>
            <p className="text-center text-lg">Generate content in multiple <br /> languages effortlessly.</p>
          </div>
        </div>
        <div className="p-10 mx-52 rounded-md bg-[#3E2B50] bg-opacity-20">
        
          <h2 className="text-white text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start mb-6 gap-4">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <img src={filter} alt="filters" className="w-7 h-7 filter invert"></img>
              </div>
              <div className="ml-4">
                <h3 className="text-white text-lg font-bold">Choose Your Genre</h3>
                <p className="text-gray-300">Select from a wide range of genres or create a custom blend.</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <img src={pen} alt="filters" className="w-7 h-7 filter invert"></img>
              </div>
              <div className="ml-4">
                <h3 className="text-white text-lg font-bold">Provide Key Details</h3>
                <p className="text-gray-300">Input main characters, plot points, or themes to guide the AI.</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <img src={settings} alt="filters" className="w-7 h-7 filter invert"></img>
              </div>
              <div className="ml-4">
                <h3 className="text-white text-lg font-bold">AI Generation</h3>
                <p className="text-gray-300">Our advanced AI creates your book based on your inputs.</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <img src={checked} alt="filters" className="w-7 h-7 filter invert"></img>
              </div>
              <div className="ml-4">
                <h3 className="text-white text-lg font-bold">Review and Download</h3>
                <p className="text-gray-300">Review your generated book and download it in your preferred format.</p>
              </div>
            </div>
          </div>
        </div>

     
        <footer className=" bg-opacity-20 text-gray-300 py-4 px-20">
      <div className="container mx-auto text-center border-t border-white pt-4">
        <p className="text-gray-300 text-lg font-bold mb-2">&copy; 2024 BookAI. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-md">
          <a href="#" className="hover:text-white  transition">Terms of Service</a>
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
