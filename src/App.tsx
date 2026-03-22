/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Star, 
  StarHalf, 
  Quote, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Youtube,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 px-4 md:px-6 py-4 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-2xl' : 'bg-transparent py-6'
      }`}>
        <div className="flex items-baseline gap-2 md:gap-4 overflow-hidden">
          <span className={`font-hindi text-lg md:text-2xl whitespace-nowrap ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
            टाइम डिजिटल
          </span>
          <div className="w-px h-4 bg-gold opacity-50 hidden sm:block" />
          <span className={`font-display text-[8px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
            Time Digital <span className="hidden xs:inline">Photography</span>
          </span>
        </div>
        
        <div className={`hidden lg:flex space-x-10 uppercase tracking-[0.2em] text-[10px] font-medium ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
          {['home', 'about', 'portfolio', 'services', 'faq', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="nav-link cursor-pointer hover:text-gold transition-colors"
            >
              {item === 'about' ? 'Story' : item === 'contact' ? 'Connect' : item.toUpperCase()}
            </button>
          ))}
        </div>

        <button 
          className={`lg:hidden p-2 ${isScrolled ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 lg:hidden"
          >
            {['home', 'about', 'portfolio', 'services', 'faq', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-display text-2xl text-charcoal uppercase tracking-widest"
              >
                {item === 'about' ? 'Story' : item === 'contact' ? 'Connect' : item.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="video-background-wrapper">
          {/* Desktop Video */}
          <iframe 
            src="https://www.youtube.com/embed/RgiBzwg5GAk?autoplay=1&mute=1&controls=0&loop=1&playlist=RgiBzwg5GAk&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https://ais-dev-rpnqkdwt53txtkhuaraset-511934330333.asia-east1.run.app" 
            title="YouTube Video Background"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="hidden md:block pointer-events-none opacity-60 md:opacity-100"
          />
          
          {/* Mobile Image */}
          <div 
            className="md:hidden absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://i.postimg.cc/zDKD9bG2/Whisk-d305906ee37ebbfb07243247d6653589dr-(1).jpg")' }}
          />

          {/* Fallback background for mobile/slow connections */}
          <div className="absolute inset-0 bg-charcoal -z-10" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6 w-full max-w-4xl"
        >
          <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <h2 className="font-hindi text-gold text-2xl md:text-4xl">टाइम डिजिटल</h2>
            <div className="hidden md:block w-12 h-px bg-gold opacity-50" />
            <h2 className="font-display text-white text-lg md:text-2xl tracking-[0.4em] uppercase">Time Digital</h2>
          </div>
          <h1 className="font-serif-in italic text-white text-4xl md:text-7xl mb-12 tracking-wide leading-tight opacity-95">
            Every moment. <br className="md:hidden" /> Timeless forever.
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-gold text-white font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-opacity-90 transition-all shadow-2xl cursor-pointer"
            >
              Book Your Date
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 border border-white/40 text-white font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white hover:text-charcoal transition-all cursor-pointer backdrop-blur-sm"
            >
              View Portfolio
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-white" 
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold z-0 opacity-30" />
            <img 
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1000" 
              className="relative z-10 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="The Photographer"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-gold text-gold text-[10px] uppercase tracking-widest">Since 1998</div>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-tight">Crafting Art in <br />Every Heartbeat</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Based in the heart of Delhi, Time Digital Wedding Photography is more than just a studio. We are curators of emotion, specializing in cinematic wedding stories that bridge the gap between tradition and modern artistry. 
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-display text-2xl text-gold italic">24/7</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1 font-semibold">Availability</p>
              </div>
              <div>
                <h4 className="font-display text-2xl text-gold italic">4.6 ★</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1 font-semibold">Google Rating</p>
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed border-l-2 border-gold pl-6">
              "Our goal isn't just to take photos, but to create a visual legacy for your family."
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-8">The Gallery</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-white text-[9px] md:text-[10px] uppercase tracking-widest">
            {['Pre-Wedding', 'Wedding Ceremony', 'Reception', 'Candid'].map((cat) => (
              <span key={cat} className="cursor-pointer bg-black/50 backdrop-blur-sm px-4 md:px-6 py-2 border border-white/10 hover:border-gold transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          <PortfolioCard 
            src="https://i.postimg.cc/85Nny0Km/unnamed.jpg" 
            category="Traditional" 
            title="The Royal Vows" 
            className="aspect-[3/4]"
          />
          <PortfolioCard 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" 
            category="Candid" 
            title="Pure Joy" 
            className="aspect-square sm:aspect-auto md:row-span-2"
          />
          <PortfolioCard 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800" 
            category="Pre-Wedding" 
            title="Sunset Romance" 
            className="aspect-[4/3]"
          />
          <PortfolioCard 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" 
            category="Cinematic" 
            title="Golden Hour" 
            className="aspect-[3/4]"
          />
          <PortfolioCard 
            src="https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=1200" 
            category="Reception" 
            title="The Grand Celebration" 
            className="aspect-video sm:aspect-auto md:col-span-2"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-display text-4xl md:text-6xl text-charcoal">Our Expertise</h2>
          <p className="text-gray-500 uppercase tracking-widest text-[10px] max-w-xs md:text-right">A full suite of cinematic services tailored for your unique love story.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceItem 
            number="01" 
            title="Wedding Photography" 
            desc="Comprehensive coverage of your special day, capturing every detail from dawn till late-night celebrations." 
          />
          <ServiceItem 
            number="02" 
            title="Candid Moments" 
            desc="Stealthy, unobtrusive shooting style to capture those raw, unscripted emotions between family and friends." 
          />
          <ServiceItem 
            number="03" 
            title="Pre-Wedding Films" 
            desc="Story-driven pre-wedding shoots at breath-taking locations across India or your favorite quiet spots." 
          />
          <ServiceItem 
            number="04" 
            title="Cinematography & Reels" 
            desc="Modern videography including cinematic trailers, full-length films, and curated social media reels." 
          />
          <ServiceItem 
            number="05" 
            title="Heirloom Albums" 
            desc="Custom-designed, luxury physical albums that stand the test of time, printed on the finest archival papers." 
          />
          <ServiceItem 
            number="06" 
            title="Drone Coverage" 
            desc="Stunning aerial perspectives of your venue and processions for that grand cinematic scale." 
          />
        </div>
      </section>

      {/* Why Us & Reviews */}
      <section className="bg-[#f2f0ea] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/3">
            <h2 className="font-display text-4xl mb-8">Trusted by Couples Across India</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-gold">
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <StarHalf className="fill-current w-5 h-5" />
              </div>
              <span className="font-medium text-xl">4.6 / 5.0</span>
            </div>
            <p className="text-gray-500 text-sm uppercase tracking-widest leading-loose font-medium">
              30+ Google Reviews <br />
              Based in Delhi <br />
              Covering PAN India <br />
              Available 24 Hours
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Testimonial 
                quote="Time Digital captured our wedding so beautifully. Every time we look at the photos, it's like reliving the day. Highly recommended!" 
                author="Rahul & Anjali" 
              />
              <Testimonial 
                quote="Professional team with great vision. They were available at all times and the delivery was prompt. Best in Delhi!" 
                author="Sameer Malhotra" 
                className="mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-charcoal mb-4">Common Questions</h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px]">Everything you need to know about working with us.</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What is your photography style?" 
              answer="We specialize in a blend of cinematic storytelling and candid photography. Our goal is to capture the raw emotions and natural beauty of your wedding day without being intrusive, while also providing high-end editorial portraits." 
            />
            <FAQItem 
              question="Do you travel for weddings outside Delhi?" 
              answer="Yes, we love to travel! While we are based in East Delhi, we have covered weddings across India and are available for destination weddings worldwide. Travel and accommodation charges apply for outstation events." 
            />
            <FAQItem 
              question="How long does it take to receive the final photos?" 
              answer="We know you're excited! You'll receive a 'sneak peek' gallery within 48 hours. The full high-resolution edited gallery is typically delivered within 4-6 weeks, and cinematic films take about 8-12 weeks for meticulous editing." 
            />
            <FAQItem 
              question="Do you provide raw files?" 
              answer="We do not provide raw, unedited files. Our editing process is a crucial part of our artistic vision and the 'Time Digital' look you see in our portfolio. We ensure you receive the best, fully polished versions of your memories." 
            />
            <FAQItem 
              question="What are your packages?" 
              answer="We offer a range of packages starting from basic coverage to full-scale cinematic productions. Since every wedding is unique, we recommend reaching out to us for a custom quote tailored to your specific events and requirements." 
            />
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-16 px-6 bg-ivory border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 text-center font-bold">Our Presence & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] text-gray-500 font-medium">
            <span className="hover:text-gold transition-colors">Best Wedding Photographer in East Delhi</span>
            <span className="hover:text-gold transition-colors">Top Cinematic Wedding Films Delhi</span>
            <span className="hover:text-gold transition-colors">Pre-Wedding Shoot Locations in Delhi</span>
            <span className="hover:text-gold transition-colors">Candid Photography Geeta Colony</span>
            <span className="hover:text-gold transition-colors">Professional Wedding Studio Jheel Kuranja</span>
            <span className="hover:text-gold transition-colors">Affordable Wedding Photography Packages Delhi</span>
            <span className="hover:text-gold transition-colors">Best Hindu Wedding Photographer Delhi</span>
            <span className="hover:text-gold transition-colors">Luxury Wedding Cinematography India</span>
            <span className="hover:text-gold transition-colors">Wedding Photography Geeta Colony Delhi</span>
            <span className="hover:text-gold transition-colors">Time Digital Photography Delhi Reviews</span>
            <span className="hover:text-gold transition-colors">Best Pre-Wedding Photographer Delhi</span>
            <span className="hover:text-gold transition-colors">Candid Wedding Photography East Delhi</span>
            <span className="hover:text-gold transition-colors">Wedding Cinematographer Delhi NCR</span>
            <span className="hover:text-gold transition-colors">Professional Photographer Geeta Colony</span>
            <span className="hover:text-gold transition-colors">Destination Wedding Photographer India</span>
            <span className="hover:text-gold transition-colors">Cinematic Wedding Highlights Delhi</span>
            <span className="hover:text-gold transition-colors">Wedding Album Design Services Delhi</span>
            <span className="hover:text-gold transition-colors">Bridal Portrait Photography Delhi</span>
            <span className="hover:text-gold transition-colors">Engagement Shoot Delhi</span>
            <span className="hover:text-gold transition-colors">Traditional Wedding Photography Delhi</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-5xl mb-8">Start Your <br />Story With Us</h2>
            <div className="space-y-8">
              <ContactInfo 
                icon={<Phone className="w-5 h-5" />} 
                label="Call Us" 
                value="+91 99531 81620" 
                href="tel:+919953181620"
              />
              <ContactInfo 
                icon={<Mail className="w-5 h-5" />} 
                label="Email Us" 
                value="pawantimedigital@gmail.com" 
                href="mailto:pawantimedigital@gmail.com"
              />
              <ContactInfo 
                icon={<MapPin className="w-5 h-5" />} 
                label="Studio" 
                value="561, Jheel Kuranja, Geeta Colony, Delhi – 110051" 
                href="https://www.google.com/maps/search/?api=1&query=Time+Digital+Wedding+Photography+Delhi"
              />
            </div>

            <div className="mt-12 h-80 w-full bg-gray-100 border border-gray-200 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1750.540684538987!2d77.2751427!3d28.6572822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc99faf8e9b5%3A0xaf97f55d9f01f883!2sTime%20Digital%20Wedding%20Photography!5e0!3m2!1sen!2sin!4v1774184659347!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>

          <div className="bg-[#FDFDFB] p-8 md:p-12 border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors" 
                    placeholder="E.g. Arnav Sharma" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Event Type</label>
                  <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors">
                    <option>Wedding</option>
                    <option>Pre-Wedding</option>
                    <option>Candid Shoot</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Event Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Message</label>
                <textarea 
                  rows={4} 
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors" 
                  placeholder="Tell us about your dream wedding..."
                />
              </div>
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full py-5 bg-charcoal text-white font-medium uppercase tracking-[0.3em] text-[10px] hover:bg-gold transition-all duration-500 shadow-lg disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>
              {formStatus === 'success' && (
                <p className="text-center text-[10px] text-gold uppercase tracking-widest mt-4 animate-pulse">
                  Your story is on its way to us.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-white">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="font-hindi text-2xl text-gold">टाइम डिजिटल</span>
              <div className="w-px h-4 bg-gold opacity-30" />
              <span className="font-display text-sm tracking-widest uppercase">Time Digital Photography</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Capturing timeless romance across India with an editorial eye and a cinematic soul. Based in Delhi, available worldwide.
            </p>
            <div className="flex gap-6 pt-4">
              <a href="https://www.facebook.com/phtoshoots" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/timedigitalweddingphotographer/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@TimeDigitalWeddingPhotography" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 italic text-gold">Quick Links</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-400">
              {['home', 'about', 'portfolio', 'services'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="hover:text-gold transition-colors cursor-pointer"
                  >
                    {item === 'about' ? 'Our Story' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 italic text-gold">Contact</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-400">
              <li><a href="tel:+919953181620" className="hover:text-gold transition-colors">+91 99531 81620</a></li>
              <li><a href="mailto:pawantimedigital@gmail.com" className="hover:text-gold transition-colors">pawantimedigital@gmail.com</a></li>
              <li>Open 24 Hours</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white border-opacity-5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-500 uppercase tracking-widest">
          <p>&copy; 2024 Time Digital Wedding Photography. All Rights Reserved.</p>
          <p>Editorial Luxury Aesthetics</p>
        </div>
      </footer>
    </div>
  );
}

function PortfolioCard({ src, category, title, className = "" }: { src: string, category: string, title: string, className?: string }) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img 
        src={src} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        alt={title}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-charcoal bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
        <p className="text-gold text-[10px] uppercase tracking-widest mb-1">{category}</p>
        <h3 className="text-white font-display text-2xl">{title}</h3>
      </div>
    </div>
  );
}

function ServiceItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="group border-b border-gray-200 pb-10 hover:border-gold transition-colors">
      <span className="text-gold font-display text-2xl mb-4 block italic">{number}.</span>
      <h3 className="text-2xl font-display mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
        Inquire Now <ArrowRight className="w-3 h-3 ml-2" />
      </div>
    </div>
  );
}

function Testimonial({ quote, author, className = "" }: { quote: string, author: string, className?: string }) {
  return (
    <div className={`bg-white p-10 shadow-sm border border-gray-100 ${className}`}>
      <Quote className="text-gold w-8 h-8 mb-6" />
      <p className="italic text-gray-700 mb-6 leading-relaxed">"{quote}"</p>
      <h5 className="font-display text-lg text-charcoal">— {author}</h5>
    </div>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="w-10 h-10 md:w-12 md:h-12 border border-gold flex items-center justify-center text-gold shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">{label}</p>
        {href ? (
          <a href={href} className="text-base md:text-lg font-medium break-words hover:text-gold transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-base md:text-lg font-medium break-words">{value}</p>
        )}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-gold transition-colors focus:outline-none"
      >
        <span className="font-display text-lg md:text-xl text-charcoal">{question}</span>
        {isOpen ? <ChevronUp className="text-gold w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
