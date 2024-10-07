



# Online Bookstore

## Overview

This project is a simple online bookstore web application developed using React.js and Tailwind CSS for the frontend, with MongoDB serving as the database for storing user information such as names, emails, and passwords. The application allows users to browse and purchase books. However, it is still under development and does not yet include all the features typically found in a complete online shopping platform.

## Features

- **Frontend:** Built using React.js for a dynamic and responsive user interface.
- **Styling:** Tailwind CSS is used for styling the application with utility-first CSS classes.
- **Database:** MongoDB is used to store user sign-in information, including names, emails, and passwords.
- **User Authentication:** Basic sign-up and login functionality with data stored in MongoDB.
- **Book Browsing:** Users can browse through a list of available books.
- **Purchasing:** Users can add books to a shopping cart and proceed to a basic checkout process (Note: Full backend integration for payment processing is not yet implemented).

## Project Structure

```
online-bookstore/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes for authentication and book management
│   ├── server.js        # Entry point for the backend server
│   ├── .env             # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Different pages of the application (Home, SignIn, BookList, etc.)
│   │   ├── App.js       # Main React app component
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── index.html       # Main HTML file
├── README.md            # This file
└── package.json         # Project metadata and dependencies
```

## Current Limitations

- **Backend Integration:** The backend is not fully integrated. Payment processing and order management features are yet to be implemented.
- **User Experience:** The user interface and experience are still in the development phase and may require further enhancements.
- **Feature Completeness:** This project is a work-in-progress and does not yet include all the features expected in a full-fledged online bookstore.

## Future Enhancements

- **Payment Gateway Integration:** Add functionality to process payments securely.
- **Order Management:** Implement features to handle order history and tracking.
- **Admin Panel:** Develop an admin interface to manage book inventory, user accounts, and orders.
- **Improved Authentication:** Enhance user authentication with JWT and OAuth support.

## Contributing

Contributions to this project are welcome! If you have any suggestions or find any issues, feel free to open an issue or submit a pull request.


## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)


## Sample screenshots
 ![registration page](https://github.com/user-attachments/assets/53f5bde9-8a81-4e16-a235-1482f9e1315b)
 ![login](https://github.com/user-attachments/assets/ebcadb32-b958-4890-ab76-8b0fcec8dfc4)
 ![home](https://github.com/user-attachments/assets/ebd0945a-db19-4482-aa2f-c7dd78544ca5)
 ![other pages](https://github.com/user-attachments/assets/77fe5a1f-4bd7-4054-af4b-f1a7b1b5d490)
 ![next pages](https://github.com/user-attachments/assets/af9633d8-b0b4-4d06-9393-d8f4f305c4ca)
![cart](https://github.com/user-attachments/assets/f5439601-d178-4953-8dd4-efe6f30d4d4d)
![faqs](https://github.com/user-attachments/assets/9cc21ec6-8404-41b3-b866-d871c0f33875)






