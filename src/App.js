import React from 'react';
// Import your main CSS file where Tailwind directives are included
import './App.css'; 

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Removed the Tailwind CSS CDN and Google Fonts link from here.
        These should be handled by your build process (via App.css import) 
        or placed in your public/index.html if you specifically need them globally
        without a CSS import.
      */}

      {/* Header/Navigation */}
      <header className="bg-gray-800 p-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-400">Forge Fitness</div> {/* Updated Gym Name */}
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-teal-400 transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-teal-400 transition-colors duration-300">About Me</a></li> {/* Changed to About Me */}
            <li><a href="#services" className="hover:text-teal-400 transition-colors duration-300">Services</a></li> {/* New Services Link */}
            <li><a href="#features" className="hover:text-teal-400 transition-colors duration-300">The Gym</a></li> {/* Renamed Features to The Gym */}
            <li><a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0f172a/67e8f9?text=Your+Personal+Training+Space')" }}>
          <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
        </div>
        
        <div className="relative z-10 p-6 max-w-4xl mx-auto rounded-lg shadow-2xl bg-gray-800 bg-opacity-80">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight rounded-lg">
            Personal Training, <br className="hidden md:block"/> In Your Private Gym.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Achieve your fitness goals with tailored 1-on-1 coaching in a focused, distraction-free environment.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Book a Free Consultation
          </button>
        </div>
      </section>

      {/* About Section - Tailored for Personal Trainer */}
      <section id="about" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-8">About Your Trainer</h2> {/* Changed to About Your Trainer */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://placehold.co/600x400/1f2937/d1d5db?text=Your+Professional+Photo" 
                alt="Personal Trainer Profile" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Hi, I'm [Your Name], a certified personal trainer dedicated to helping you unlock your full potential. With [X years] of experience, I specialize in [mention your specialties, e.g., strength building, weight loss, functional movement, pre/post-natal fitness].
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                My passion is creating customized training programs that fit your unique body, goals, and lifestyle. Training in my private home gym means you get undivided attention, a comfortable atmosphere, and a highly effective workout without the distractions of a commercial gym.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're new to fitness or looking to break through a plateau, I'm here to guide you every step of the way, ensuring proper form, progressive overload, and sustainable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-12">Personal Training Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service Card 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">🎯</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Customized 1-on-1 Training</h3>
              <p className="text-gray-300">
                Receive a program specifically designed for your goals, fitness level, and preferences. Every session is focused entirely on you.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">🗓️</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Flexible Scheduling</h3>
              <p className="text-gray-300">
                Workouts tailored to fit your busy life. Morning, afternoon, or evening sessions available by appointment.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">🍎</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Nutritional Guidance</h3>
              <p className="text-gray-300">
                Beyond workouts, receive practical advice and strategies to complement your training with healthy eating habits.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">📈</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Progress Tracking & Support</h3>
              <p className="text-gray-300">
                Regular assessments, progress tracking, and ongoing support to keep you motivated and accountable.
              </p>
            </div>
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mt-12">
            View Training Packages
          </button>
        </div>
      </section>

      {/* Features/Equipment Section - Renamed and Re-contextualized */}
      <section id="features" className="py-20 bg-gray-950"> {/* Changed background color for contrast */}
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-12">The Private Training Environment</h2> {/* New Heading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature Card 1 - Re-contextualized */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">🔒</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Exclusive & Private Setting</h3>
              <p className="text-gray-300">
                Enjoy a truly private training experience without the crowds, waiting, or distractions of a public gym.
              </p>
            </div>
            {/* Feature Card 2 - Re-contextualized */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">💪</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Full Range of Equipment</h3>
              <p className="text-gray-300">
                Access to a comprehensive selection of strength, cardio, and functional training equipment for diverse workouts.
              </p>
            </div>
            {/* Feature Card 3 - Re-contextualized */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">✨</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Clean & Sanitized Space</h3>
              <p className="text-gray-300">
                Your health and safety are paramount. The gym is meticulously cleaned and sanitized before and after each session.
              </p>
            </div>
            {/* Feature Card 4 - Re-contextualized */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">🎶</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Optimized for Focus</h3>
              <p className="text-gray-300">
                Controlled environment with optimal lighting and sound to maximize your concentration and performance.
              </p>
            </div>
            {/* Feature Card 5 - Re-contextualized */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">🅿️</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Convenient Location & Parking</h3>
              <p className="text-gray-300">
                Easily accessible with hassle-free parking, making your training sessions stress-free.
              </p>
            </div>
            {/* Feature Card 6 - Re-contextualized */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-teal-500 mb-4">✅</div> {/* Icon */}
              <h3 className="text-2xl font-semibold text-white mb-3">Personalized Setup</h3>
              <p className="text-gray-300">
                The gym is set up specifically for your workout, ensuring efficiency and readiness upon arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 py-10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-teal-400 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-400 mb-4">
            Contact me today to schedule your free consultation and discover how personalized training can transform your fitness.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:your.trainer.email@example.com" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
              Email: your.trainer.email@example.com
            </a>
            <a href="tel:+15551234567" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
              Phone: (555) 123-4567
            </a>
            <a href="https://instagram.com/your_trainer_handle" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
              Instagram: @your_trainer_handle
            </a>
          </div>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Forge Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
