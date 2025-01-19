# ALX Listing App

## Description
This project is an Airbnb clone, focused on building the listing page for displaying property details. The application dynamically renders property information, including details such as name, rating, location, amenities, reviews, and booking options.

## Project Structure
- **components/**: Contains reusable UI components, including:
  - **property/**: Components for the Property Detail Page like `PropertyDetail.tsx`, `BookingSection.tsx`, and `ReviewSection.tsx`.
- **interfaces/**: Defines TypeScript interfaces for props (e.g., `PropertyProps`).
- **constants/**: Stores reusable constants like property listings and sample data.
- **public/assets/**: Contains static assets like images and SVGs.
- **pages/**: Contains the dynamic pages. Specifically:
  - **property/[id].tsx**: Displays the details of the property based on the dynamic route.

## How to Run the Project
1. Clone the repository.
   ```bash
   git clone <https://github.com/tladikholofelo/alx-listing-app-detail.git>
   ```

2. Install the dependencies
   ```bash
   npm install
   ```

3. Start the development server.
   ```bash
   npm run dev
   ```

4. Open your browser and go to http://localhost:3000 to view the app.

## Features

- Responsive Property Detail Page.
- Dynamic property rendering based on the ID in the URL.
- Reviews section with ratings and comments.
- Booking section with pricing and reservation functionality.
- Styled using Tailwind CSS.

## Technologies Used

- **Next.js**: For the React-based server-side rendering.
- **TypeScript**: For type safety.
- **Tailwind CSS**: For responsive and utility-first styling.
