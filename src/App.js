import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Package, Truck, Shield, Award, Users, CheckCircle, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// Main App Component with Navigation State
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => navigateTo('home')} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Sreenivasa</span>
                <span className="text-xs text-gray-600">Medical Distributors</span>
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === link.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => navigateTo('contact')}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === link.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => navigateTo('contact')}
                className="block w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium text-center hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'products' && <ProductsPage />}
      {currentPage === 'services' && <ServicesPage navigateTo={navigateTo} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

// Home Page Component
const HomePage = ({ navigateTo }) => {
  const features = [
    { icon: Truck, title: 'Fast Delivery', desc: '24-48 hour delivery on most items' },
    { icon: Shield, title: 'Quality Assured', desc: 'FDA approved and certified products' },
    { icon: Award, title: '20+ Years', desc: 'Industry leading experience' },
    { icon: Users, title: '24/7 Support', desc: 'Dedicated customer service team' }
  ];

  const categories = [
    { name: 'Diagnostic Equipment', items: '500+ Products', image: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { name: 'Surgical Instruments', items: '800+ Products', image: 'bg-gradient-to-br from-green-500 to-green-600' },
    { name: 'Medical Supplies', items: '1200+ Products', image: 'bg-gradient-to-br from-purple-500 to-purple-600' },
    { name: 'PPE & Safety', items: '300+ Products', image: 'bg-gradient-to-br from-orange-500 to-orange-600' }
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Trusted by 5,000+ Healthcare Providers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Partner in Medical Supply Distribution
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Providing high-quality medical equipment and supplies to healthcare facilities nationwide with unmatched reliability and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('products')} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center space-x-2">
                  <span>Browse Products</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => navigateTo('contact')} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors text-center">
                  Request Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl flex items-center justify-center">
                <Package className="w-48 h-48 text-white/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-blue-600">99.8%</div>
                <div className="text-sm text-gray-600">On-time Delivery</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-green-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">Comprehensive medical supply solutions for every need</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <button key={idx} onClick={() => navigateTo('products')} className="group text-left">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`h-48 ${cat.image} flex items-center justify-center`}>
                    <Package className="w-20 h-20 text-white/80" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{cat.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{cat.items}</p>
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                      <span>Explore</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of healthcare providers who trust us for their medical supply needs
          </p>
          <button onClick={() => navigateTo('contact')} className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

// Products Page Component
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Diagnostic', 'Surgical', 'Supplies', 'PPE'];
  
  const products = [
    { name: 'Digital Blood Pressure Monitor', category: 'Diagnostic', price: '$299', image: 'bg-blue-100' },
    { name: 'Surgical Scissors Set', category: 'Surgical', price: '$159', image: 'bg-green-100' },
    { name: 'Disposable Gloves (Box of 100)', category: 'PPE', price: '$24', image: 'bg-purple-100' },
    { name: 'Stethoscope Professional', category: 'Diagnostic', price: '$189', image: 'bg-blue-100' },
    { name: 'Surgical Masks (Box of 50)', category: 'PPE', price: '$19', image: 'bg-purple-100' },
    { name: 'Medical Gauze Pads', category: 'Supplies', price: '$12', image: 'bg-orange-100' },
    { name: 'Digital Thermometer', category: 'Diagnostic', price: '$45', image: 'bg-blue-100' },
    { name: 'Bandage Rolls', category: 'Supplies', price: '$8', image: 'bg-orange-100' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">Browse our extensive catalog of medical equipment and supplies</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                <div className={`h-48 ${product.image} flex items-center justify-center`}>
                  <Package className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-medium mb-2">{product.category}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Services Page Component
const ServicesPage = ({ navigateTo }) => {
  const services = [
    {
      icon: Truck,
      title: 'Fast & Reliable Delivery',
      desc: 'Next-day delivery available for most products with real-time tracking',
      features: ['24-48 hour standard delivery', 'Emergency rush orders', 'Temperature-controlled transport', 'Real-time tracking']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      desc: 'All products are FDA approved and undergo rigorous quality control',
      features: ['FDA certified products', 'Quality verification', 'Compliance documentation', 'Product warranties']
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      desc: '24/7 customer service team ready to assist with any questions or concerns',
      features: ['24/7 phone support', 'Online chat assistance', 'Technical support', 'Account management']
    },
    {
      icon: Award,
      title: 'Custom Solutions',
      desc: 'Tailored procurement programs for healthcare facilities of all sizes',
      features: ['Bulk ordering discounts', 'Custom packaging', 'Inventory management', 'Automated reordering']
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive solutions to support your healthcare facility</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
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
          <p className="text-lg text-gray-600 mb-8">
            Our team can work with you to create a tailored supply program that meets your specific needs
          </p>
          <button onClick={() => navigateTo('contact')} className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  const stats = [
    { number: '20+', label: 'Years in Business' },
    { number: '5000+', label: 'Healthcare Partners' },
    { number: '10000+', label: 'Products Available' },
    { number: '99.8%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Sreenivasa</h1>
          <p className="text-xl text-gray-600">Leading the way in medical supply distribution since 2005</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To provide healthcare facilities with reliable access to high-quality medical equipment and supplies, enabling them to deliver the best possible patient care.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that when it comes to healthcare, every second counts. That's why we've built our business around speed, reliability, and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl flex items-center justify-center">
                <Award className="w-48 h-48 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">All products are sourced from certified manufacturers and undergo strict quality control.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Industry-leading delivery times with options for rush and emergency orders.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">Dedicated account managers and 24/7 customer service team at your disposal.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, and Message)');
      return;
    }
    
    // Show success message immediately
    setIsSubmitted(true);
    console.log('isSubmitted set to true');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitted(false);
      console.log('Form reset');
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team for quotes, support, or inquiries</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">Thank you! We'll contact you shortly.</p>
                  </div>
                </div>
              )}
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">10-12-397/A, Doddapuram Street<br />Tirupati, Andhra Pradesh<br />PIN: 517501</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9866485661</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">tptsmd@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm text-blue-600 font-medium mt-3">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Sreenivasa</span>
            </div>
            <p className="text-sm mb-4">Leading medical equipment and supplies distributor serving healthcare providers nationwide.</p>
            <div className="flex space-x-3">
              <button onClick={() => window.open('https://facebook.com', '_blank')} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button onClick={() => window.open('https://twitter.com', '_blank')} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button onClick={() => window.open('https://linkedin.com', '_blank')} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button onClick={() => window.open('https://instagram.com', '_blank')} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('products')} className="text-sm hover:text-white transition-colors">Products</button></li>
              <li><button onClick={() => navigateTo('services')} className="text-sm hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => navigateTo('about')} className="text-sm hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo('contact')} className="text-sm hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('products')} className="text-sm hover:text-white transition-colors">Diagnostic Equipment</button></li>
              <li><button onClick={() => navigateTo('products')} className="text-sm hover:text-white transition-colors">Surgical Instruments</button></li>
              <li><button onClick={() => navigateTo('products')} className="text-sm hover:text-white transition-colors">Medical Supplies</button></li>
              <li><button onClick={() => navigateTo('products')} className="text-sm hover:text-white transition-colors">Personal Protective Equipment</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">10-12-397/A, Doddapuram Street, Tirupati, Andhra Pradesh 517501</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">9866485661</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
};

export default App;