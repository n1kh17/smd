import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Package, Truck, Shield, Award, Users, CheckCircle, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Star } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => navigateTo('home')} className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105" style={{background: 'linear-gradient(135deg, #ea7425 0%, #d66420 100%)'}}>
                <Package className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Sreenivasa</span>
                <span className="text-xs text-gray-600 font-medium">Medical Distributors • Tirupati</span>
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => navigateTo(link.id)} className={`text-sm font-semibold transition-all ${currentPage === link.id ? 'scale-105' : 'text-gray-700 hover:scale-105'}`} style={currentPage === link.id ? {color: '#ea7425'} : {}}>
                  {link.label}
                </button>
              ))}
              <button onClick={() => navigateTo('contact')} className="text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)'}}>
                Get Quote
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => navigateTo(link.id)} className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === link.id ? 'bg-orange-50' : 'text-gray-700 hover:bg-gray-50'}`} style={currentPage === link.id ? {color: '#ea7425'} : {}}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'products' && <ProductsPage />}
      {currentPage === 'services' && <ServicesPage navigateTo={navigateTo} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

const HomePage = ({ navigateTo }) => (
  <div className="pt-20">
    <section className="relative py-24 md:py-32" style={{background: 'linear-gradient(135deg, #fff5f0 0%, #ffe8dc 50%, #ffd4c1 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{background: 'linear-gradient(90deg, #ffeee5 0%, #ffd4c1 100%)', color: '#c65d1c'}}>
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 5,000+ Healthcare Providers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Sreenivasa Medical Distributors
              <span className="block mt-2" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Your Healthcare Partner
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">Serving Tirupati since 2005 with premium medical equipment.</p>
            <p className="text-lg text-gray-500 mb-8">📍 Doddapuram Street, Tirupati | 📞 +91 9866485661</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigateTo('products')} className="text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)'}}>
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => navigateTo('contact')} className="bg-white px-8 py-4 rounded-xl font-semibold border-2 hover:bg-orange-50 transition-all shadow-md" style={{borderColor: '#ea7425', color: '#ea7425'}}>
                Request Quote
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl shadow-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #ea7425 0%, #d66420 50%, #c65d1c 100%)'}}>
              <Package className="w-48 h-48 text-white/30" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border-4" style={{borderColor: '#ffeee5'}}>
              <div className="text-3xl font-bold" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>99.8%</div>
              <div className="text-sm text-gray-600 font-medium">On-time Delivery</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border-4 border-green-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">5000+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 text-white" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 50%, #c65d1c 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Partner with Sreenivasa Today</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands who trust us for medical supplies</p>
        <button onClick={() => window.location.href = 'tel:+919866485661'} className="inline-flex items-center bg-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 shadow-lg" style={{color: '#ea7425'}}>
          <Phone className="w-5 h-5 mr-2" />
          Call: +91 9866485661
        </button>
      </div>
    </section>
  </div>
);

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Diagnostic', 'Surgical', 'Supplies', 'PPE'];
  const products = [
    { name: 'Digital Blood Pressure Monitor', category: 'Diagnostic', price: '₹8,999', gradient: 'linear-gradient(135deg, #ea7425 0%, #ff8d45 100%)', popular: true },
    { name: 'Surgical Scissors Set', category: 'Surgical', price: '₹4,799', gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' },
    { name: 'Disposable Gloves (Box of 100)', category: 'PPE', price: '₹699', gradient: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)', popular: true },
    { name: 'Stethoscope Professional', category: 'Diagnostic', price: '₹5,699', gradient: 'linear-gradient(135deg, #ea7425 0%, #ff8d45 100%)' },
    { name: 'Surgical Masks (Box of 50)', category: 'PPE', price: '₹549', gradient: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)' },
    { name: 'Medical Gauze Pads', category: 'Supplies', price: '₹349', gradient: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' },
    { name: 'Digital Thermometer', category: 'Diagnostic', price: '₹1,299', gradient: 'linear-gradient(135deg, #ea7425 0%, #ff8d45 100%)' },
    { name: 'Bandage Rolls', category: 'Supplies', price: '₹229', gradient: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }
  ];

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="text-white py-20" style={{background: 'linear-gradient(135deg, #ea7425 0%, #d66420 50%, #c65d1c 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Sreenivasa Products</h1>
          <p className="text-xl">Premium medical equipment from Tirupati</p>
          <p className="text-lg mt-2">📞 +91 9866485661</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-3 rounded-xl font-semibold transition-all ${selectedCategory === cat ? 'text-white shadow-lg' : 'bg-gray-100 text-gray-700'}`} style={selectedCategory === cat ? {background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)'} : {}}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden transform hover:-translate-y-2">
                <div className="relative">
                  <div className="h-48 flex items-center justify-center" style={{background: product.gradient}}>
                    <Package className="w-20 h-20 text-white/90" />
                  </div>
                  {product.popular && <div className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>}
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold mb-2" style={{color: '#ea7425'}}>{product.category}</div>
                  <h3 className="font-bold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{product.price}</span>
                    <button className="text-white px-4 py-2 rounded-lg text-sm font-semibold" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)'}}>Inquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'linear-gradient(135deg, #fff5f0 0%, #ffe8dc 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Bulk Order?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact Sreenivasa for special bulk pricing</p>
          <button onClick={() => window.location.href = 'tel:+919866485661'} className="inline-flex items-center text-white px-8 py-4 rounded-xl font-semibold shadow-lg" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)'}}>
            <Phone className="w-5 h-5 mr-2" />
            Call Now: +91 9866485661
          </button>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ navigateTo }) => (
  <div className="pt-20">
    <section className="text-white py-20" style={{background: 'linear-gradient(135deg, #ea7425 0%, #d66420 50%, #c65d1c 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Sreenivasa Services</h1>
        <p className="text-xl">Comprehensive healthcare solutions</p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Truck, title: 'Fast Delivery', desc: '24-48 hour delivery', features: ['Next-day service', 'Emergency orders', 'GPS tracking'] },
            { icon: Shield, title: 'Quality Products', desc: 'Certified equipment', features: ['FDA approved', 'Quality checks', 'Warranties'] },
            { icon: Users, title: '24/7 Support', desc: 'Always available', features: ['Phone support', 'WhatsApp', 'Technical help'] },
            { icon: Award, title: 'Custom Solutions', desc: 'Tailored programs', features: ['Bulk discounts', 'Custom packaging', 'Auto-reorder'] }
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #ea7425 0%, #d66420 100%)'}}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
        <p className="text-lg text-gray-600 mb-8">Our team creates tailored programs for your needs</p>
        <button onClick={() => navigateTo('contact')} className="inline-block text-white px-8 py-4 rounded-xl font-semibold shadow-lg" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)'}}>
          Contact Our Team
        </button>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-20">
    <section className="text-white py-20" style={{background: 'linear-gradient(135deg, #ea7425 0%, #d66420 50%, #c65d1c 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">About Sreenivasa</h1>
        <p className="text-xl">Leading medical supply distribution since 2005</p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">To provide healthcare facilities with reliable access to high-quality medical equipment.</p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[{ n: '20+', l: 'Years' }, { n: '5000+', l: 'Clients' }, { n: '10000+', l: 'Products' }, { n: '99.8%', l: 'Satisfaction' }].map((s, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{background: '#fff5f0'}}>
                  <div className="text-3xl font-bold" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{s.n}</div>
                  <div className="text-sm text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-3xl shadow-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #ea7425 0%, #d66420 50%, #c65d1c 100%)'}}>
            <Award className="w-48 h-48 text-white/20" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-20">
      <section className="text-white py-20" style={{background: 'linear-gradient(135deg, #ea7425 0%, #d66420 50%, #c65d1c 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Sreenivasa</h1>
          <p className="text-xl">Get in touch with our team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">Thank you! We'll contact you shortly.</p>
                </div>
              )}
              <div className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{borderColor: '#e5e7eb'}} required />
                <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{borderColor: '#e5e7eb'}} required />
                <input type="tel" name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="Phone" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{borderColor: '#e5e7eb'}} />
                <input type="text" name="company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} placeholder="Company" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{borderColor: '#e5e7eb'}} />
                <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Message" rows="4" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{borderColor: '#e5e7eb'}} required></textarea>
                <button type="button" onClick={handleSubmit} className="w-full text-white px-8 py-4 rounded-lg font-semibold shadow-lg" style={{background: 'linear-gradient(90deg, #ea7425 0%, #d66420 100%)'}}>
                  Send Message
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" style={{color: '#ea7425'}} />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">10-12-397/A, Doddapuram Street<br/>Tirupati, Andhra Pradesh<br/>PIN: 517501</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1" style={{color: '#ea7425'}} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9866485661</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1" style={{color: '#ea7425'}} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">tptsmd@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl" style={{background: '#fff5f0'}}>
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm font-medium mt-3" style={{color: '#ea7425'}}>24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = ({ navigateTo }) => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: '#ea7425'}}>
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">Sreenivasa</span>
          </div>
          <p className="text-sm mb-4">Leading medical distributor in Tirupati since 2005</p>
          <div className="flex space-x-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <button key={i} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ea7425] transition-colors">
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['products', 'services', 'about', 'contact'].map(page => (
              <li key={page}><button onClick={() => navigateTo(page)} className="text-sm hover:text-white transition-colors capitalize">{page}</button></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            {['Diagnostic Equipment', 'Surgical Instruments', 'Medical Supplies', 'PPE'].map(cat => (
              <li key={cat}><button onClick={() => navigateTo('products')} className="text-sm hover:text-white transition-colors">{cat}</button></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-0.5" style={{color: '#ea7425'}} />
              <span className="text-sm">10-12-397/A, Doddapuram Street, Tirupati 517501</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5" style={{color: '#ea7425'}} />
              <span className="text-sm">9866485661</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5" style={{color: '#ea7425'}} />
              <span className="text-sm">tptsmd@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2025 Sreenivasa Medical Distributors. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default App;