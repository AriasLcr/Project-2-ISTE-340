# ISTE-340 Project 2: iSchool Page using React.js
## iSchool Website

This project is a professional web presence for the iSchool at RIT, leveraging information from an existing API and enhancing user experience through custom and third-party React UI components.
#### Link to project: [iSchool Page - Gabriel Arias](https://people.rit.edu/gma5404/ISTE340/Project-2/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [UI Components](#ui-components)
- [API Reference](#api-reference)
- [License](#license)

## Overview

This single-page application (SPA) displays data from the iSchool API at RIT, offering information on **About, Degrees, Minors, Employment, People**, and **Courses on Demand** within Minors. The UI is enhanced with interactive components and professional styling, making it user-friendly and visually engaging.

## Features

- **Dynamic Data Fetching**: Utilizes `fetch()` to retrieve data from the iSchool API and RIT’s proxy servers.
- **Interactive UI Components**:
  - Customized and downloaded React components to enhance the user interface.
  - Interactive elements for each data area (e.g., cards, tabs).
- **Single-Page Application**: Complete SPA structure with navigation, header, footer, and smooth scrolling.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AriasLcr/Project-2-ISTE-340.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd Project-2-ISTE-340/
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the Development Server**:
   ```bash
   npm run dev # or npm start if using create-react-app
   ```
2. Open your browser and go to `http://localhost:5173` (or the specified port).

## Components Summary

The project incorporates various components that collectively offer a feature-rich and dynamic user experience. Each component is designed to display data dynamically, interactively, and responsively.

---

### Core Components:

1. **About Component**
   - Displays an advertisement or informational message with a title, description, and optional quote.

2. **Careers Component**
   - Dynamically renders a list of career opportunities.

3. **Degrees Component**
   - Fetches and displays undergraduate and graduate degrees using Material-UI Accordion for collapsible sections.

4. **Minors Component**
   - Displays a list of undergraduate minors with collapsible sections for detailed information.

5. **Employment Component**
   - Displays employment-related information, such as degree statistics, employer lists, and career opportunities, integrating subcomponents for a cohesive presentation.

6. **Hero Component**
   - A visually striking header with a background image and a bold tagline.

7. **Navbar Component**
   - Responsive navigation bar with interactive desktop and mobile layouts.

8. **Footer Component**
   - Displays social media links, quick links, and copyright details, fetching data dynamically.

---

### Subcomponents:

1. **CoopTable Component**
   - Interactive table with search and pagination for cooperative education data.

2. **EmploymentTable Component**
   - Searchable and paginated table displaying professional employment information.

3. **DegreeStatistics Component**
   - Showcases statistics related to degree programs in a visually appealing grid layout.

4. **Employers Component**
   - Lists employers who hire graduates dynamically.

5. **Introduction Component**
   - Displays a title and a list of content items with detailed descriptions.

---

### People Components:

1. **PeopleTabs Component**
   - Tabbed interface for displaying Faculty and Staff categories dynamically.

2. **PeopleGroup Component**
   - Groups and paginates people data into interactive card layouts.

3. **PeopleCard Component**
   - Individual card with a person's image, title, and a modal for detailed information.

4. **PeopleModal Component**
   - Modal providing a detailed view of a person, including social links and contact information.

---

### Above and Beyond
The project goes "above and beyond" by implementing the following advanced features:

1. **Dynamic Data Handling**
   - All components dynamically fetch and render data from external APIs, ensuring scalability and maintainability.

2. **Interactivity**
   - Interactive features like:
     - **Accordion menus** for Degrees and Minors.
     - **Tabs** for categorizing and displaying Faculty and Staff.
     - **Modals** for detailed person views.
     - **Searchable and paginated tables** for employment and cooperative education data.

3. **Search & Pagination**
   - **CoopTable** and **EmploymentTable** include dynamic search filters and pagination, allowing users to navigate large datasets efficiently.

4. **Responsive Design**
   - All components adapt seamlessly to various screen sizes, from mobile devices to desktops, ensuring accessibility for all users.

5. **Third-Party UI Libraries**
   - **Material-UI**: Used for Accordions, Tables, and Pagination to enhance the UI/UX.
   - **Semantic UI React**: Used for Navbar, Modals, Cards, and Tabs to provide a polished and professional design.
   - **TailwindCSS**: Used for styling of the website.

6. **Reusable and Modular Design**
   - Components like **PeopleGroup**, **PeopleCard**, and **PeopleModal** are designed to be reusable and modular, following industry-standard practices.


## API Reference

Data is sourced from the iSchool API, which provides information on various areas such as **About, Degrees, Minors, Employment, People**, and **Courses**.

- **API Endpoint**: `https://ischool.gccis.rit.edu/api/`
- **Proxy Servers** (Use with `fetch()` if needed):
  - `https://solace.ist.rit.edu/~dsbics/proxy/` (Requires VPN off-campus)
  - `https://people.rit.edu/~dsbics/proxy/`
