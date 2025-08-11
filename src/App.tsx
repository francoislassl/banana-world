import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      {/* Header Section */}
      <header className="bg-yellow-300 p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to the Banana World!</h1>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#about" className="text-gray-700 hover:text-yellow-600 transition duration-200">About</a></li>
            <li><a href="#benefits" className="text-gray-700 hover:text-yellow-600 transition duration-200">Benefits</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-yellow-600 transition duration-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center bg-yellow-200 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Discover the Benefits of Bananas!</h2>
          <p className="text-lg text-gray-600 mb-6">Bananas are not only delicious but also packed with nutrients. Join us in celebrating this amazing fruit!</p>
          <a href="#benefits" className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">Learn More</a>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">About Bananas</h3>
          <p className="text-lg text-gray-700 text-center">Bananas are one of the most popular fruits worldwide, known for their sweetness and health benefits. They are rich in potassium and dietary fiber, making them a great choice for a healthy diet.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-yellow-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Health Benefits</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Rich in Potassium</li>
            <li>Good Source of Vitamin C</li>
            <li>Supports Digestive Health</li>
            <li>Provides Quick Energy</li>
            <li>May Improve Mood</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 bg-yellow-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch!</h3>
          <p className="text-lg text-gray-700 mb-6">Have questions? We'd love to hear from you!</p>
          <form className="flex flex-col items-center">
            <input type="text" placeholder="Your Name" className="p-2 mb-4 border rounded-md w-80" required />
            <input type="email" placeholder="Your Email" className="p-2 mb-4 border rounded-md w-80" required />
            <textarea placeholder="Your Message" className="p-2 mb-4 border rounded-md w-80" rows="4" required></textarea>
            <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;