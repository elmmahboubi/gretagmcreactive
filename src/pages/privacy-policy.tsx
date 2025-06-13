import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                At Greta HappyDeel, we take your privacy seriously. This policy explains how we collect and use your information.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Shipping and billing addresses</li>
                <li>PayPal account information (processed securely by PayPal)</li>
                <li>Order history and preferences</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Processing</h2>
              <p>
                All payments are processed securely through PayPal. We never store or process your payment information directly. PayPal handles all payment data according to their security standards and privacy policy.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your orders</li>
                <li>Send order updates</li>
                <li>Improve our services</li>
                <li>Send marketing emails (with your consent)</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p>
                You can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Update your preferences</li>
                <li>Request data deletion</li>
                <li>Opt out of marketing emails</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                Questions about your privacy? Contact us:
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

export default PrivacyPolicyPage;