import React from "react";
import MainNav from './MainNavbar';

const About1 = () => {
    return (
        <div className="2xl:container mx-auto flex justify-center items-center lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 lg:mt-20">
            <div className="w-full lg:w-5/6">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">TERMS AND CONDITIONS</h1>
                <p className="font-normal text-base leading-6 text-gray-600">
                    PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.

                    This Terms of Service Agreement (the "Agreement") governs your use of this website, www.bookhub.com (the "Website"), BookHub ("Business Name") offer of products for purchase on this Website, or your purchase of products available on this Website. This Agreement includes, and incorporates by this reference, the policies and guidelines referenced below. BookHub reserves the right to change or revise the terms and conditions of this Agreement at any time by posting any changes or a revised Agreement on this Website. BookHub will alert you that changes or revisions have been made by indicating on the top of this Agreement the date it was last revised. The changed or revised Agreement will be effective immediately after it is posted on this Website. Your use of the Website following the posting any such changes or of a revised Agreement will constitute your acceptance of any such changes or revisions. BookHub encourages you to review this Agreement whenever you visit the Website to make sure that you understand the terms and conditions governing use of the Website. This Agreement does not alter in any way the terms or conditions of any other written agreement you may have with BookHub for other products or services. If you do not agree to this Agreement (including any referenced policies or guidelines), please immediately terminate your use of the Website. If you would like to print this Agreement, please click the print button on your browser toolbar.
                </p>
            </div>
            <MainNav />
        </div>
    );
};

export default About1;
