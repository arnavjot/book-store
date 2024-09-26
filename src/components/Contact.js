/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import MainNav from './MainNavbar';
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactSection14() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        console.log('Message sent successfully:', data.message);
        // Optionally, you can reset the form here
        setFormData({
          first: "",
          last: "",
          email: "",
          message: "",
        });
      } else {
        console.error('Error sending message:', data.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section className="px-8 py-8 lg:py-16">
      <MainNav />
      <div className="container mx-auto text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src="https://images.adsttc.com/media/image_maps/5ffd/d378/63c0/17d7/2200/0440/large/open-uri20210112-27384-16i4ppw.jpg?1610470490"
            className="w-full h-full lg:max-h-[510px]"
          />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:max-w-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="focus:border-t-gray-900"
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="focus:border-t-gray-900"
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="focus:border-t-gray-900"
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="focus:border-t-gray-900"
              />
            </div>
            <Button type="submit" className="w-full" color="gray">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection14;
