# PopX - Mobile-First React Application

![PopX Logo](https://via.placeholder.com/150x50?text=PopX)

## Overview

PopX is a pixel-perfect, mobile-first React application that provides a seamless experience for users to create accounts, log in, and manage their profiles. The application is designed with a modern UI and smooth transitions between pages.

## Features

- **Responsive Mobile Design**: Centered mobile app interface that looks great on all devices
- **User Authentication**: Sign up and login functionality with form validation
- **Profile Management**: View and manage your profile information
- **Seamless Navigation**: Smooth transitions between pages
- **Local Storage**: User data persists between sessions using browser's localStorage

## Live Demo

Visit the live demo at: (https://popx-three.vercel.app/)

## Screenshots

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <img src="https://via.placeholder.com/150x300?text=Home" alt="Home Page" width="30%">
  <img src="https://via.placeholder.com/150x300?text=SignUp" alt="Sign Up Page" width="30%">
  <img src="https://via.placeholder.com/150x300?text=Account" alt="Account Page" width="30%">
</div>

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/popx.git
   cd popx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open (https://popx-three.vercel.app/)] to view it in your browser.

## Project Structure

```
popx/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Account.js         # Account page component
│   ├── Home.js            # Home page component
│   ├── Login.js           # Login page component
│   ├── Signup.js          # Signup page component
│   ├── account-setting.css # Account page styles
│   ├── home.css           # Home page styles
│   ├── index.js           # Application entry point
│   ├── login.css          # Login page styles
│   ├── signup.css         # Signup page styles
│   └── styles.css         # Global styles
└── package.json           # Project dependencies and scripts
```

## Technologies Used

- **React**: UI library for building the user interface
- **React Router**: For navigation between pages
- **CSS3**: For styling components with a mobile-first approach
- **localStorage API**: For persisting user data between sessions

## Development Notes

- The application uses a mobile-first design approach
- User data is stored in localStorage for demonstration purposes
- In a production environment, you would integrate with a backend service for user authentication and data storage

## Future Enhancements

- Add backend integration with a database
- Implement proper authentication with JWT
- Add more profile customization options
- Implement form validation with error messages
- Add dark mode support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Feather Icons](https://feathericons.com/) for SVG icons

---

Made with ❤️ by [Your Name]
