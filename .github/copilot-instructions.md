# Copilot Instructions for Portfolio Project

## Overview
This project is a **Next.js** application designed as a personal portfolio for Josué BOSSOU, showcasing skills, projects, and contact information. The architecture is modular, with a clear separation of components, pages, and data management.

## Architecture
- **Pages**: The application follows the Next.js file-based routing system. Key pages include:
  - **Home**: Located at `app/page.tsx`, serves as the landing page.
  - **Contact**: Found in `app/contact/page.tsx`, includes a contact form and social links.
  - **CV**: Located at `app/cv/page.tsx`, displays Josué's professional experience and skills.
  
- **Components**: Reusable UI components are stored in `src/components/`. Notable components include:
  - `Header.tsx`: Displays the navigation bar.
  - `Footer.tsx`: Contains footer information.
  - `ContactForm.tsx`: Handles user input for contact messages.

- **Data Management**: Data for the CV is managed in `data/cv.ts` and `data/projects.ts`, allowing for easy updates and maintenance.

## Developer Workflows
- **Development**: Start the development server using:
  ```bash
  npm run dev
  ```
  Access the application at [http://localhost:3000](http://localhost:3000).

- **Building**: Use the following command to build the project:
  ```bash
  npm run build
  ```

- **Testing**: Ensure to run tests (if implemented) using:
  ```bash
  npm test
  ```

## Project Conventions
- **Styling**: The project uses Tailwind CSS for styling, with utility classes applied directly in JSX.
- **TypeScript**: The project is written in TypeScript, ensuring type safety across components and pages.

## Integration Points
- **External Libraries**: The project utilizes libraries such as `lucide-react` for icons and `next/font` for font optimization.
- **API Integration**: Any API calls (e.g., for form submissions) should be handled in the respective component files, ensuring separation of concerns.

## Communication Patterns
- **Props and State Management**: Components communicate through props, and local state is managed using React's `useState` hook.
- **Event Handling**: User interactions (e.g., form submissions) are handled with event handlers defined within the components.

## Key Files
- **Main Layout**: `app/layout.tsx` defines the overall structure of the application, including the header and footer.
- **CV Data**: `data/cv.ts` contains structured data for the CV page, including experiences, skills, and education.

## Conclusion
This document serves as a guide for AI agents to understand the structure and conventions of the portfolio project. For further details, refer to the specific component and page files as needed.
