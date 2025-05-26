# Life and Works of Rizal - Digital Library

This project is a digital learning library dedicated to the life and works of Dr. Jose Rizal, the national hero of the Philippines. It aims to provide an engaging and informative experience with an 1800s theme, showcasing Rizal's biography, literary contributions, historical timeline, and significant places related to his life.

## Features

- **Vintage 1800s Theme**: Immersive design with period-appropriate aesthetics, including vintage paper textures, classic typography, and historical imagery.
- **Comprehensive Content**:
    - **Biography**: Detailed accounts of Rizal's early life, education, writings, and final years.
    - **Literary Works**: Exploration of his major novels (Noli Me Tángere, El Filibusterismo), essays, and poems.
    - **Timeline**: Interactive timeline highlighting key events in Rizal's life.
    - **Historical Places**: Information and images of significant locations such as his birthplace in Calamba, Luneta Park, Fort Santiago, and his exile in Dapitan.
- **Interactive Elements**: Smooth animations and transitions to enhance user experience.
- **Responsive Design**: Optimized for viewing on various devices, including desktops, tablets, and mobile phones.
- **Image Gallery**: A collection of historical images related to Rizal.

## Technologies Used

- **Frontend**:
    - **React 18.2.0**: A JavaScript library for building user interfaces.
    - **Vite**: A fast build tool and development server.
    - **React Router 6.16.0**: For client-side navigation between different sections of the library.
    - **TailwindCSS 3.3.3**: A utility-first CSS framework for styling.
    - **shadcn/ui**: Re-usable components built using Radix UI and Tailwind CSS.
    - **Framer Motion 10.16.4**: For animations and transitions.
    - **Lucide React 0.285.0**: For icons.
- **Programming Language**: JavaScript (using .jsx for React components)

## Project Structure

```
rizal-digital-library/
├── public/
│   ├── textures/             # Vintage texture images
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/
│   │   ├── biography/        # Biography specific components
│   │   ├── home/             # Components for the homepage
│   │   ├── layout/           # Header, Footer
│   │   ├── places/           # Historical Places specific components
│   │   ├── timeline/         # Timeline specific components
│   │   ├── ui/               # Re-usable UI components (shadcn/ui)
│   │   └── works/            # Literary Works specific components
│   ├── lib/
│   │   └── utils.js          # Utility functions
│   ├── pages/                # Page-level components (HomePage, BiographyPage, etc.)
│   ├── App.jsx               # Main application component with routing
│   ├── index.css             # Global styles and TailwindCSS setup
│   └── main.jsx              # Main entry point for the React application
├── .eslintrc.cjs             # ESLint configuration
├── .gitignore                # Specifies intentionally untracked files that Git should ignore
├── index.html                # Main HTML file
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # This file
└── tailwind.config.js        # TailwindCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm (Node Package Manager), typically comes with Node.js

### Installation

1.  **Clone the repository (if applicable) or download the project files.**
2.  **Navigate to the project directory:**
    ```bash
    cd rizal-digital-library
    ```
3.  **Install dependencies:**
    The environment handles `npm install` automatically when `package.json` is created or updated.

### Running the Development Server

The environment runs `npm run dev` automatically.

The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

The environment runs `npm run build` automatically.

This command will create a `dist` folder in the project root with the optimized production build.

## Usage

Navigate through the different sections using the header menu:
- **Home**: Overview and entry point to the library.
- **Biography**: Learn about Rizal's life story.
- **Literary Works**: Explore his novels, essays, and poems.
- **Timeline**: Follow a chronological account of key events in his life.
- **Historical Places**: Discover locations significant to Rizal's journey.

## Contributing

Contributions are welcome. Please follow standard Git workflow:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.

## License

This project is for educational purposes. Content related to Dr. Jose Rizal is based on historical information.

---

This README provides a comprehensive overview of the "Life and Works of Rizal" digital library.
