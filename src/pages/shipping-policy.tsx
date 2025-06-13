import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShippingPolicyPage: React.FC = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                We offer free shipping on all orders to make your baby essentials shopping experience even better.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping Timeline</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Processing Time:</span>
                    <span>1 business day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Shipping Time:</span>
                    <span>4-8 business days</span>
                  </div>
                  <div className="border-t pt-4">
                    <span className="font-medium">Total Delivery Time:</span>
                    <span className="ml-2">5-9 business days</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free shipping on all orders</li>
                <li>Orders are processed within 1 business day</li>
                <li>Tracking number provided via email</li>
                <li>Signature confirmation for orders over $500</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping Areas</h2>
              <p>
                We currently ship to all 50 US states and Canada. International shipping is not available at this time.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                Questions about shipping? Contact us:
              </p>
              <ul className="list-none mt-4">
                <li>Phone: +17176484487</li>
                <li>Email: dorothymoore2757187@gmail.com</li>
                <li>Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicyPage;