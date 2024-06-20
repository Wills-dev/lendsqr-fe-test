# Admin Dashboard Application

## Overview

This application is an admin dashboard designed to manage users. It includes three main pages: a login page, a user listing page, and a user detail page. It is built with Vite, React, and TypeScript.

### Table of Contents

- Overview
- Features
- Installation
- Usage
- Folder Structure
- Dependencies
- Testing
- Contributing
- License

## Features

- Login Page: User authentication.
- User Listing Page: View all users.
- User Details Page: View detailed information about a specific user.

## Installation

- Clone the repository:
  git clone [<repository-url>](https://github.com/Wills-dev/lendsqr-fe-test.git)
  <br/>
- Navigate to the project directory:
  cd lendsqr-fe-test
  <br/>
- Install the dependencies:
  npm install
  <br/>
- Start the development server:
  npm run dev
  <br/>

## Usage

Navigate to the following routes:

- Login: /login
- User Listing: /dashboard/users
- User Details: /dashboard/users/user-info/:userId

## Folder Structure

- hooks: Custom hooks for API calls:

- - useLogin.ts: Handles login API.
- - useGetAllUsers.ts: Fetches all users.
- - useGetUserInfo.ts: Fetches user details.

- components: Reusable components.

- context: Global state management using React's Context API.

- helpers: Reusable utility functions.

- constants: Contains dummy data and platform-specific links.

- pages: Page components and their styles:

- - Login.tsx
- - Users.tsx
- - UserDetails.tsx

- styles: Global SCSS styles.

- test: Test files.

- types: Type definitions for TypeScript.

- axiosInstance.ts: Configured Axios instance for API calls.

- main.tsx: Entry point for the app.

- App.tsx: Main app component.

## Dependencies

- antd: UI components (Loading spinner).
- date-fns: Date manipulation.
- jest-environment-jsdom: Testing environment.
- react: React library.
- react-dom: React DOM bindings.
- react-hot-toast: Notifications.
- react-paginate: Pagination.
- react-router-dom: Routing.
- axios: HTTP client.
- sass: CSS preprocessor.
- vitest
- @testing-library/react
- @testing-library/user-event

## Testing

- npm run test
