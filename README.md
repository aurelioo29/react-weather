# 🌦️ **Weather App**

## 🏙️ **Overview**

Welcome to the **Weather App**! This project provides real-time weather information for any city by fetching data from a public weather API. Built with **React.js**, it displays current weather details such as temperature, humidity, wind speed, and more in a clean, responsive UI. It's designed to be simple, intuitive, and easy to use.

## 🔑 **Key Features**

- **🌍 Real-time Weather Updates**: Fetches live weather data from a public API for any location.
- **🌞 Clear and Interactive UI**: Displays temperature, humidity, wind speed, and weather conditions in a user-friendly interface.
- **🌐 Global Location Search**: Allows users to enter any city name and get weather information.
- **💻 Responsive Design**: Mobile-first layout that works seamlessly on devices of all sizes.
- **🛠️ Built with React**: Easy to maintain and scalable using React.js.

## 🚀 **Technologies Used**

- **Frontend**: React.js
- **API**: Public Weather API (e.g., OpenWeatherMap API)
- **Styling**: CSS (for custom styles)
- **Build Tool**: Vite (fast and modern development environment)

## 💡 **Installation Guide**

To run this project locally, follow these steps:

1. **Clone** the repository:

   ```bash
   git clone https://github.com/aurelioo29/Weather-App.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Weather-App
   ```

3. **Install the required dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## 📂 **Folder Structure**

Here's an overview of the project's folder structure:

```bash
Weather-App/
├── README.md               # Project documentation
├── index.html              # Main HTML file
├── package.json            # NPM package file
├── vite.config.js          # Vite configuration file
├── .eslintrc.cjs           # ESLint configuration file
├── public/                 # Public assets (e.g., images, favicon)
└── src/                    # Source code files
    ├── App.jsx             # Main App component
    ├── index.css           # Global CSS file
    ├── main.jsx            # React entry point
    ├── assets/             # Static assets
    └── components/         # React components
        ├── Weather.css     # Custom styles for Weather component
        └── Weather.jsx     # Weather component for displaying weather info
```

- **`public/`**: Contains public assets such as the `index.html` file and favicon.
- **`src/`**: Contains all source code files, including components, assets, and styles.
- **`components/`**: Contains the main `Weather.jsx` component that handles fetching and displaying weather data.
- **`assets/`**: Stores any additional static resources (images, icons, etc.).

## 🧭 **How to Use**

1. Enter any city name in the search bar to get the current weather data.
2. The weather information is displayed, including:
   - Temperature (in Celsius or Fahrenheit)
   - Humidity percentage
   - Wind speed
   - Weather description
3. The app automatically updates with live weather information as you change the city.

## 🤝 **Contributing**

Contributions are welcome! If you'd like to improve the project or suggest new features, feel free to fork the repository and submit a pull request. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

Thanks for checking out the **Weather App**! Enjoy the seamless weather experience! 🌤️
