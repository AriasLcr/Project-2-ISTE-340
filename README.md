# ISTE-340 Project 2: iSchool Page using React.js
## iSchool Web Presence Project

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

### UI Components

The following external UI components were used to extend functionality and enhance user experience:

1. **Semantic UI React** - [semantic-ui-react](https://react.semantic-ui.com/)
   - Used for responsive tab component.

### Custom Components

- **People Card Component**: Custom card UI to display detailed information about people.

## API Reference

Data is sourced from the iSchool API, which provides information on various areas such as **About, Degrees, Minors, Employment, People**, and **Courses**.

- **API Endpoint**: `https://ischool.gccis.rit.edu/api/`
- **Proxy Servers** (Use with `fetch()` if needed):
  - `https://solace.ist.rit.edu/~dsbics/proxy/` (Requires VPN off-campus)
  - `https://people.rit.edu/~dsbics/proxy/`
