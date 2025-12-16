
#  Aviral's Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and journey as a web developer. It's built with modern technologies and features a clean, animated design.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js (v18.x or later recommended)
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/codespec01/Portfolio.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root directory and add all the environment variables from `.local.env` file:
    ```
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password 
    ```
    *Note: You will need to enable 2-factor authentication on your google account and generate an app password to use for `EMAIL_PASS`*
    
    *Additionally, for the spotify card to work, you need to create an api account on Last.fm:*
    ```
    LASTFM_API_KEY = your-lastfm-api-key
    LASTFM_USERNAME = your-lastfm-username
    ```

4.  Run the development server
    ```sh
    npm run dev
    ```

## 💻 Technologies Used

This project is built with a modern tech stack, including:

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript at Any Scale
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - A production-ready motion library for React
- **[GSAP](https://greensock.com/gsap/)** - A robust JavaScript toolset for professional-grade animation
- **[Nodemailer](https://nodemailer.com/)** - A module for Node.js applications to allow easy as cake email sending

## 📂 File Structure

The project follows a standard Next.js App Router structure:

```
├── app/
│   ├── (group)/              # Grouped routes with a shared layout
│   │   ├── about/
│   │   ├── journey/
│   │   ├── others/
│   │   └── projects/
│   ├── api/                  # API routes
│   │   ├── get-spotify/
│   │   ├── send-connect/
│   │   └── verify-email/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
├── constants/
│   └── constants.ts        # Centralized content for the site
├── public/                 # Static assets (images, fonts)
└── utils/                  # Utility functions
```

### Key Files

-   `constants/constants.ts`: This file is the "single source of truth" for the portfolio's content. It contains all the text, project data, skills, and other content displayed on the site.
-   `app/layout.tsx`: The root layout for the entire application.
-   `app/(group)/layout.tsx`: The shared layout for the main content pages (`about`, `projects`, etc.).
-   `app/api/`: This directory contains the backend logic for the application, including:
    -   `send-connect`: Handles the contact form submission using Nodemailer.
    -   `get-spotify`: Fetches my current listening data from Spotify.

## ✨ Features

-   **Animated UI**: Smooth animations and transitions using GSAP and Framer Motion.
-   **Responsive Design**: The website is fully responsive and works on all devices.
-   **Interactive Elements**: Engaging user interactions, such as the custom cursor and animated modals.
-   **Contact Form**: A functional contact form that sends an email to me.
-   **Spotify Integration**: Shows what I'm currently listening to on Spotify.
