import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-[#0046be] hover:text-[#003494] mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">About HappyDeel</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Main Content */}
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-6">
                  Welcome to Greta Happy Deel – your trusted baby essentials store. We offer quality products to make parenting simple, safe, and joyful.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
                <p className="mb-6">
                  At Greta HappyDeel, our mission is to provide families with safe, high-quality, and affordable baby essentials. We are dedicated to making parenting easier and more joyful by offering products you can trust, backed by caring customer support.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us</h2>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>Carefully chosen, safe baby products</li>
                  <li>Friendly, real customer support</li>
                  <li>Fair prices, no hidden fees</li>
                  <li>Fast, free shipping in the US & Canada</li>
                  <li>30-day easy returns</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Quality you can trust</li>
                  <li>Honesty in everything we do</li>
                  <li>Customers always come first</li>
                </ul>
              </div>

              {/* Stats and Contact */}
              <div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-900">Address:</div>
                      <div className="text-gray-600">1726 Parsons Ave, Columbus, OH 43207, USA</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone:</div>
                      <div className="text-gray-600">+17176484487</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email:</div>
                      <div className="text-gray-600">dorothymoore2757187@gmail.com</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Business Hours:</div>
                      <div className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM EST</div>
                      <div className="text-gray-600">Saturday: 10:00 AM - 3:00 PM EST</div>
                      <div className="text-gray-600">Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;