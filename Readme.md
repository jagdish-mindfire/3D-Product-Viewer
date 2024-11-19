# Mindfire FOSS: Three.js POCs

This repository is a collection of **Three.js** proof-of-concept (POC) projects built using **React** and **Vite**. These demos explore various capabilities of Three.js and provide examples of its integration with React using React Three Fiber.

## Features
- A collection of standalone Three.js POCs.
- Built with modern frontend tools (React + Vite).
- Open source and contribution-friendly.

---

## Getting Started

Follow the steps below to clone and run this project locally.

### Prerequisites
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Steps to Run Locally
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/anujmindfire/3D-Product-Viewer.git
   cd 3D-Product-Viewer
   ```
2. **Install Dependencies**
```bash
npm install
```
3. **Start the Development Server**
```bash
npm run dev
```
4. **Open your browser and navigate to:**
```bash
http://localhost:5173
```
### How to Contribute

We welcome contributions to improve and expand the POCs. Follow these steps to contribute:

1. **Fork the Repository**

Go to the repository's GitHub page and click the Fork button.

2. **Clone Your Fork and create a new branch**

```bash
git clone https://github.com/<your-username>/3D-Product-Viewer.git
cd 3D-Product-Viewer
git checkout -b feature/your-feature-name
```

3. **Make your changes**
- To include a new project, create a directory inside the src/projects/ directory and place all associated code within it. Ensure an index.jsx file that serves the project.
- The URL for your project will correspond to /your-folder-name.
- Create a folder in the /public directory with the same name as your project folder. Place all assets (e.g., public/your-folder-name/image.jpg) in this folder.
- Update the src/data/projectsData.js file to include the title, description, and route for your project.
- Ensure your code adheres to the existing structure and style.
- Run the app locally to verify the functionality.



4. **Create a Pull Request**
- Go to the repository's GitHub page and click Pull Request.
- Provide a clear description of your changes.

### License
- Copyright (c) Mindfire Digital llp. All rights reserved.

- Licensed under the MIT license.




