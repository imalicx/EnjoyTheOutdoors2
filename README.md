# EnjoyTheOutdoors2
capstone 2 project

Description

Learn To Code - Capstone 2: Enjoy the Outdoors is a web application that helps users find activities to enjoy in the great outdoors. The website focuses on providing information about national parks and mountains for users to explore. This project utilizes HTML, CSS, and JavaScript to create an interactive and informative user experience. It also encourages research skills to overcome any challenges that may arise during development.

 

Pages

The website includes the following pages:

 

Homepage

The homepage serves as an introduction to the organization and provides links to two main pages: the National Parks search page and the Mountains information page.

 

National Parks Search Page

The National Parks search page allows users to search for national parks based on location and park type. Users can search by selecting a state/territory or choosing a park type from dropdown menus. The park data is sourced from the nationalParks.js file. The search by location feature takes priority in implementation.

 

Mountains Information Page

The Mountains information page provides a dropdown list of 48 different mountains. When a user selects a mountain from the list, the page displays detailed information about that mountain, including its name, description, elevation, and other interesting facts. The mountain data is sourced from the mountains.js file.

 

Installation and Usage

To run this project locally, follow these steps:

1. clone the repository
git clone https://github.com/imalicx/EnjoyTheOutdoors2.git

2. Navigate to the project directory 
cd  EnjoyTheOutdoors2 

 

Screenshots

Homepage

National Parks Search Page

Mountains Information Page

 

Interesting JavaScript Code

One interesting piece of JavaScript code used in this project is a function that fetches the sunrise and sunset times for a specific mountain using the Sunrise-Sunset API. Here's an example:

 

 

 

 

This code demonstrates the usage of the Fetch API to retrieve sunrise and sunset times for a specific mountain based on its latitude and longitude coordinates. The getSunsetForMountain function makes an asynchronous request to the Sunrise-Sunset API and returns the retrieved data. It allows the website to display the sunrise and sunset times for each mountain, providing additional information to the users