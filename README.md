# MobilityPartnerTestTask

A test project focused on setting up a Webpack-based environment for SCSS compilation, asset optimization, and production-ready builds.

## Requirements
- **Node.js** (version 14 or later)
- **npm** or **yarn**

## Setup

1. Clone the repository:
  
        git clone https://github.com/VasylUlianovskyi/MobilityPartnerTestTask


2. Install dependencies:

        npm install or yarn install

## Development Mode
    To start the project in development mode with a local Webpack server:

        npm start

    The project will be available at http://localhost:8080.

## Production Build
    To create an optimized production build:
  
        npm run build

    After running this command, the dist folder will contain the final build files:

        index.html — main HTML file of the project
        css/ — folder with compiled CSS styles
        index.js — main JavaScript file


## Folder Structure

        MobilityPartnerTestTask/
        ├── dist/
        │   ├── index.html
        │   ├── css/
        │   └── index.js
        ├── ... (other project files)

## Technologies Used

        Webpack — for project bundling and optimization
        SCSS — CSS preprocessor for styles
        Bootstrap and Bootstrap Icons — for UI styling
        jQuery — for DOM manipulation



