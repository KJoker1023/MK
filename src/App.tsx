import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  Smartphone, 
  Clock, 
  Users, 
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Download,
  CreditCard,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { useUrlState } from './hooks/useUrlState';
import { DocumentViewer } from './components/DocumentViewer';
import { privacyPolicy, termsOfService, loanTerms, complaintsPolicy } from './data/legalDocuments';

function App() {
  const [activeDocument, setActiveDocument] = useUrlState<string | null>('doc', null);

  const openDocument = (docType: string) => {
    setActiveDocument(docType);
  };

  const closeDocument = () => {
    setActiveDocument(null);
  };

  const getDocumentContent = (docType: string) => {
    switch (docType) {
      case 'privacy':
        return { title: 'Privacy Policy', content: privacyPolicy };
      case 'terms':
        return { title: 'Terms of Service', content: termsOfService };
      case 'loan-terms':
        return { title: 'Loan Terms and Conditions', content: loanTerms };
      case 'complaints':
        return { title: 'Complaints Policy', content: complaintsPolicy };
      default:
        return { title: '', content: '' };
    }
  };

  const currentDoc = activeDocument ? getDocumentContent(activeDocument) : { title: '', content: '' };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">MK</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MKULIMAPAY</h1>
                <p className="text-xs text-gray-600">CREDIT LIMITED</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-lime-500 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-lime-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-lime-500 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-lime-500 transition-colors">Contact</a>
            </nav>
            <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-lime-50 to-lime-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Fast Digital
                <span className="text-lime-500"> Loans</span>
                <br />
                for Kenya
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access instant credit through our mobile app. Quick approvals, 
                competitive rates, and flexible repayment terms designed for 
                the Kenyan market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-lime-400 text-lime-600 hover:bg-lime-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                  Download App
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto bg-black rounded-3xl p-8 shadow-2xl">
                <div className="bg-lime-400 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-black font-semibold">Loan Amount</span>
                    <Smartphone className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">KES 50,000</div>
                  <div className="text-black opacity-80">Available instantly</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-lime-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Instant approval</span>
                  </div>
                  <div className="flex items-center text-lime-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>No collateral required</span>
                  </div>
                  <div className="flex items-center text-lime-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Flexible repayment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MKULIMAPAY?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of digital lending in Kenya with our innovative platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-lime-50 to-lime-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Processing</h3>
              <p className="text-gray-600">
                Get loan approvals in minutes, not days. Our AI-powered system processes 
                applications 24/7.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-lime-50 to-lime-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Safe</h3>
              <p className="text-gray-600">
                Your data is protected with bank-level security. Licensed and regulated 
                by Kenyan financial authorities.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-lime-50 to-lime-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile First</h3>
              <p className="text-gray-600">
                Designed for your smartphone. Apply, manage, and repay loans 
                entirely through our mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Lending Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored financial products for every need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Loans</h3>
              <p className="text-gray-600 mb-6">
                Quick personal loans from KES 1,000 to KES 100,000 with flexible repayment terms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  Up to KES 100,000
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  1-12 months repayment
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  Competitive rates
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Loans</h3>
              <p className="text-gray-600 mb-6">
                Grow your business with our tailored business financing solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  Up to KES 500,000
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  3-24 months repayment
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  Business support
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Loans</h3>
              <p className="text-gray-600 mb-6">
                Quick access to funds for unexpected expenses and emergencies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  Instant approval
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  Same-day disbursement
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                  24/7 availability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted by
                <span className="text-lime-400"> 50,000+</span>
                <br />
                Kenyans
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of satisfied customers who trust MKULIMAPAY 
                for their financial needs. Licensed and regulated for your protection.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-lime-400">50,000+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime-400">KES 2B+</div>
                  <div className="text-gray-300">Loans Disbursed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime-400">98%</div>
                  <div className="text-gray-300">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime-400">24/7</div>
                  <div className="text-gray-300">Customer Support</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-lime-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white ml-2 font-semibold">4.9/5</span>
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">
                "MKULIMAPAY saved my business during a cash flow crisis. The application 
                was simple, approval was instant, and the terms were fair. Highly recommended!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-semibold">Sarah Wanjiku</div>
                  <div className="text-gray-400">Small Business Owner, Nairobi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Digital Finance in Kenya
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                MKULIMAPAY CREDIT LIMITED is at the forefront of Kenya's digital 
                financial revolution. We leverage cutting-edge technology to provide 
                accessible, transparent, and affordable credit solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Licensed by the Central Bank of Kenya and committed to financial 
                inclusion, we're bridging the gap between traditional banking and 
                the digital future.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                    <p className="text-gray-600">Fully licensed and regulated by Kenyan authorities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Financial Inclusion</h4>
                    <p className="text-gray-600">Serving underbanked communities across Kenya</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation Focus</h4>
                    <p className="text-gray-600">Continuous improvement of our digital platform</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Download Our App</h3>
                  <p className="text-gray-600 mb-6">
                    Get instant access to loans, manage your account, and build your credit score.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-800 transition-colors">
                      <Download className="w-5 h-5 mr-2" />
                      Download for Android
                    </button>
                    <button className="border-2 border-black text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                      <Download className="w-5 h-5 mr-2" />
                      Download for iOS
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-black font-semibold text-lg mb-2">Available 24/7</div>
                  <div className="text-black opacity-80">Apply anytime, anywhere</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you succeed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-2">Customer Support</p>
              <p className="text-lime-600 font-semibold">+254 700 123 456</p>
              <p className="text-gray-500 text-sm mt-2">Available 24/7</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <p className="text-lime-600 font-semibold">info@mkulimapay.co.ke</p>
              <p className="text-gray-500 text-sm mt-2">Response within 24hrs</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-2">Head Office</p>
              <p className="text-lime-600 font-semibold">Nairobi, Kenya</p>
              <p className="text-gray-500 text-sm mt-2">Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">MK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">MKULIMAPAY</h3>
                  <p className="text-sm text-gray-400">CREDIT LIMITED</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering Kenyans with accessible digital financial services. 
                Licensed and regulated for your protection.
              </p>
              <p className="text-sm text-gray-400">
                Licensed by the Central Bank of Kenya<br />
                Registration No: CBK/LICENSE/2024/001
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-lime-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-lime-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-lime-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-lime-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => openDocument('privacy')}
                    className="hover:text-lime-400 transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openDocument('terms')}
                    className="hover:text-lime-400 transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openDocument('loan-terms')}
                    className="hover:text-lime-400 transition-colors text-left"
                  >
                    Loan Terms
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openDocument('complaints')}
                    className="hover:text-lime-400 transition-colors text-left"
                  >
                    Complaints
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MKULIMAPAY CREDIT LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Document Viewer */}
      <DocumentViewer
        title={currentDoc.title}
        content={currentDoc.content}
        isOpen={activeDocument !== null}
        onClose={closeDocument}
      />
    </div>
  );
}

export default App;