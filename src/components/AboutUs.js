import React from "react";
import MainNav from './MainNavbar';

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                        Welcome to BookHub, your go-to destination for all things book-related! At BookHub, we're dedicated to fostering a community of readers, providing access to a wide range of titles, and promoting a love of literature. Our mission at BookHub is to connect readers with their next great read while supporting authors and publishers. We believe that books have the power to educate, inspire, and transform lives, and we're committed to making the world of literature more accessible to everyone.
                    </p>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pt-12">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                        BookHub was born out of a shared love for literature and a desire to create a platform where readers could come together to explore, discuss, and celebrate books. What started as a small idea quickly grew into a thriving online bookstore, thanks to the support of our wonderful community and the dedication of our team
                    </p>
                </div>
                <div className="w-full lg:w-7/12 flex justify-end mt-8 lg:mt-0">
                    <img className="w-full h-full lg:max-w-none max-w-xs" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg" alt="A group of People" />
                </div>
            </div>
            <MainNav />
        </div>
    );
};

export default About1;
