import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReturnPolicyPage: React.FC = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Return Policy</h1>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                We want you to be completely satisfied with your baby essentials purchase. Here's our simple return policy:
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Return Window</h2>
              <p>
                You have 30 days from delivery to return items. Items must be:
              </p>
              <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Unused and in original packaging</li>
                <li>With all tags and labels attached</li>
                <li>Include original receipt</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Return Process</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Email us at dorothymoore2757187@gmail.com with your order number</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Ship to: 1726 Parsons Ave, Columbus, OH 43207, USA</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refunds</h2>
              <p>
                Once we receive your return, we'll process your refund within 5 business days. The refund will be issued to your original payment method.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                Questions about returns? Contact us:
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

export default ReturnPolicyPage;