import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                Welcome to Greta HappyDeel. By using our website, you agree to these terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using Our Website</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be 18 or older to make purchases</li>
                <li>All information you provide must be accurate</li>
                <li>You are responsible for maintaining account security</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Method</h2>
              <p>
                We only accept PayPal payments for all transactions. PayPal provides secure payment processing and protects your payment information. By using our service, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use PayPal for all purchases</li>
                <li>Provide accurate payment information</li>
                <li>Accept PayPal's terms of service</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Product Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Product images are for illustration only</li>
                <li>Prices and availability may change</li>
                <li>We reserve the right to limit quantities</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Order Acceptance</h2>
              <p>
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accept or decline any order</li>
                <li>Cancel orders for any reason</li>
                <li>Limit quantities per customer</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                Questions about our terms? Contact us:
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

export default TermsPage;