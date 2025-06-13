import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PayPalButton from '../components/PayPalButton';
import { getProductBySlug } from '../api/products';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, X, MapPin, Truck, DollarSign, RefreshCw } from 'lucide-react';

const ProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadProduct = async () => {
      try {
        if (!slug) {
          navigate('/', { replace: true });
          return;
        }

        const data = await getProductBySlug(slug);
        
        if (!mounted) return;

        if (!data) {
          navigate('/', { replace: true });
          return;
        }

        setProduct(data);
        document.title = `${data.title} - HappyDeel`;

      } catch (error) {
        console.error('Error loading product:', error);
        if (mounted) {
          setError(error);
          navigate('/', { replace: true });
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProduct();

    return () => {
      mounted = false;
    };
  }, [slug, navigate]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (showZoom) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [showZoom]);

  const faqItems = useMemo(() => [
    {
      question: "What does Greta HappyDeel sell?",
      answer: "We offer new and gently used baby essentials—clothes, gear, toys, and more."
    },
    {
      question: "Are your products new or used?",
      answer: "We sell both. Each product is clearly marked as new or pre-loved."
    },
    {
      question: "Can I return an item?",
      answer: "Yes, returns are accepted within 30 days if the item is unused and in original condition."
    },
    {
      question: "How long does shipping take?",
      answer: "Most orders arrive in 5–8 business days."
    },
    {
      question: "Is shipping free?",
      answer: "Yes, shipping is free on all orders ."
    },
    {
      question: "Are used items clean and safe?",
      answer: "Absolutely. All pre-loved items are cleaned and checked before shipping."
    },
    {
      question: "Are the photos real?",
      answer: "Yes, our photos show the actual product you’ll receive."
    },
    {
      question: "Do you offer local pickup?",
      answer: "Not yet. We currently ship everywhere in the US."
    },
    {
      question: "How do I contact Greta HappyDeel?",
      answer: "Email dorothymoore2757187@gmail.com or call +17176484487."
    }
  ], []);

  const getDeliveryDates = () => {
    const today = new Date();
    const day1 = new Date(today);
    day1.setDate(today.getDate() + 5);
    const day2 = new Date(today);
    day2.setDate(today.getDate() + 8);
    
    const formatDate = (date) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}`;
    };

    return `${formatDate(day1)}-${formatDate(day2)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl text-gray-600">Loading...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're having trouble loading this product.</p>
            <Link to="/" className="text-[#0046be] hover:text-[#003494]">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link to="/" className="text-[#0046be] hover:text-[#003494]">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const { title, description, price, images, condition } = product;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery - Fixed */}
            <div className="relative lg:sticky lg:top-24 lg:self-start">
              <div 
                onClick={() => setShowZoom(true)}
                className="cursor-zoom-in relative group"
              >
                <img 
                  src={images[activeImage]} 
                  alt={`${title} - Image ${activeImage + 1}`}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-lg"></div>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex justify-center space-x-2 overflow-x-auto py-2">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                      activeImage === idx ? 'ring-2 ring-[#0046be]' : 'ring-1 ring-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${title} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {activeImage === idx && (
                      <div className="absolute inset-0 bg-white/10"></div>
                    )}
                  </button>
                ))}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-[#0046be] hover:text-white p-2 rounded-full transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-[#0046be] hover:text-white p-2 rounded-full transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
            
            {/* Product Info - Scrollable */}
            <div className="lg:h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-4 scrollbar-hide">
              <h1 className="text-3xl font-medium text-gray-900">{title}</h1>
              <div className="mt-2 text-gray-600">{condition}</div>
              <div className="mt-4 text-4xl font-bold text-gray-900">
                ${price.toLocaleString()}
              </div>
              
              {/* Shipping Information */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#0046be] mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Ships from:</p>
                    <p className="text-sm text-gray-600">United States</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Truck className="h-6 w-6 text-[#0046be] mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Order today to get by:</p>
                    <p className="text-sm text-gray-600">{getDeliveryDates()}</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <DollarSign className="h-6 w-6 text-[#0046be] mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Cost to ship:</p>
                    <p className="text-sm text-gray-600">FREE</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-[#0046be] mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Returns:</p>
                    <p className="text-sm text-gray-600">Accepted</p>
                  </div>
                </div>
              </div>

              {/* PayPal Button */}
              <div className="mt-8 relative z-10">
                <PayPalButton 
                  amount={product.price} 
                  description={product.title}
                  payeeEmail={product.payeeEmail || ''} 
                />
              </div>
              
              {/* Product Description */}
              <div className="mt-8">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Product Description</h2>
                <p className="text-gray-600">{description}</p>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-12 border-t pt-8">
                <button
                  onClick={() => setShowFAQ(!showFAQ)}
                  className="w-full flex items-center justify-between text-left text-gray-900 hover:text-[#0046be] transition-colors duration-300"
                >
                  <span className="text-xl font-medium">Frequently Asked Questions</span>
                  {showFAQ ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {showFAQ && (
                  <div className="mt-6 space-y-6">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                        <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Zoom Modal */}
      {showZoom && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50"
          onClick={() => setShowZoom(false)}
        >
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowZoom(false);
              }}
              className="p-2 text-white hover:text-[#0046be] transition-colors duration-200"
              aria-label="Close zoom view"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          
          <div 
            className="absolute inset-0 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-full max-h-full">
              <img
                src={images[activeImage]}
                alt={`${title} - Image ${activeImage + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-[#0046be] p-3 rounded-full text-white transition-colors duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-[#0046be] p-3 rounded-full text-white transition-colors duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;