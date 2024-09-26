import React, { useState } from "react";
import MainNav from './MainNavbar';

const FAQ = () => {
    // State to manage the visibility of answers
    const [showAnswers, setShowAnswers] = useState({});

    // Function to toggle the visibility of answers
    const toggleAnswer = (question) => {
        setShowAnswers(prevState => ({
            ...prevState,
            [question]: !prevState[question]
        }));
    };

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-center gap-8">
                <div className="w-full lg:w-5/6">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">FAQ</h1>
                    <div className="flex flex-col">
                        {faqData.map((item, index) => (
                            <div key={index} className="flex flex-col border border-gray-300 rounded-lg mb-4">
                                <div className="flex justify-between items-center cursor-pointer px-4 py-3" onClick={() => toggleAnswer(item.question)}>
                                    <div className="flex items-center">
                                        <span className="font-bold mr-2">{index + 1}.</span>
                                        <p className="font-normal text-base leading-6 text-gray-600">{item.question}</p>
                                    </div>
                                    <span>{showAnswers[item.question] ? '-' : '+'}</span>
                                </div>
                                {showAnswers[item.question] && (
                                    <div className="px-4 pb-3 border-t border-gray-300">
                                        <p className="font-normal text-base leading-6 text-gray-600">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MainNav />
        </div>
    );
};

const faqData = [
    {
        question: "How good are the books?",
        answer: "We strive to provide high-quality books to our customers. Our books undergo thorough inspection and quality checks to ensure that they meet our standards. However, since some of our books are used or refurbished, their condition may vary. We do our best to accurately represent the condition of each book in its description."
    },
    {
        question: "Are these books genuine?",
        answer: "Yes, all our books are genuine. We source our books from reputable suppliers and publishers to ensure authenticity. If you have any concerns about the authenticity of a particular book, please contact us, and we will address your concerns."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a hassle-free return policy. If you are not satisfied with your purchase for any reason, you can return the books within 30 days of delivery for a full refund. Please see our Returns & Refunds page for more information."
    },
    {
        question: "How do I return books purchased from BookHub?",
        answer: "To return books purchased from BookHub, simply contact our customer support team, and they will guide you through the return process. You may be required to provide proof of purchase, such as your order number or receipt."
    },
    {
        question: "Where can I find book information not listed on BookHub?",
        answer: "If you cannot find the information you are looking for on BookHub, you can try searching for the book on other websites or contacting the publisher directly. You can also reach out to our customer support team, and they will assist you in finding the information you need."
    },
    {
        question: "How do I check the status of my order?",
        answer: "You can check the status of your order by logging into your BookHub account and navigating to the Order History section. Alternatively, you can contact our customer support team, and they will provide you with updates on your order."
    },
    {
        question: "How long will it take for my order to be delivered?",
        answer: "Delivery times may vary depending on your location and the shipping method selected at checkout. Typically, orders are processed and shipped within 1-2 business days. Once shipped, you will receive a tracking number to monitor the progress of your delivery."
    },
    {
        question: "Do I have to wait at my house or my office all day for my delivery?",
        answer: "No, you do not have to wait at your house or office all day for your delivery. Our shipping carriers typically require a signature upon delivery, but you can provide instructions for leaving the package in a secure location if you will not be available."
    },
    {
        question: "Why does my order not qualify for free delivery?",
        answer: "Free delivery is available for orders that meet certain criteria, such as a minimum purchase amount or delivery location. If your order does not qualify for free delivery, you may be required to pay a shipping fee. Please refer to our Shipping & Delivery page for more information."
    },
    {
        question: "Where can I find information about special promotions, offers & discounts?",
        answer: "You can find information about special promotions, offers, and discounts on our website or by subscribing to our newsletter. We regularly update our website with new deals and discounts, so be sure to check back frequently for the latest offers."
    },
    {
        question: "What methods of payment does BookHub accept?",
        answer: "BookHub accepts all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept payment via PayPal for added convenience."
    },
    {
        question: "How do I redeem a coupon on the BookHub app?",
        answer: "To redeem a coupon on the BookHub app, simply enter the coupon code during the checkout process. The discount will be applied automatically to your order total. Please note that some coupons may have specific terms and conditions, so be sure to read them carefully before redeeming."
    },
    // Add more questions and answers as needed
];

export default FAQ;
