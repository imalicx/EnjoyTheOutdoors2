// Function to populate the search criteria dropdown based on the selected search type
function populateSearchCriteria() {
  const searchType = document.getElementById("search-type").value;
  const searchCriteriaContainer = document.getElementById("search-criteria");

  // Clear previous criteria
  searchCriteriaContainer.innerHTML = "";

  // Create and populate the appropriate dropdown
  if (searchType === "location") {
    const locationDropdown = document.createElement("select");
    locationDropdown.id = "location-dropdown";

    locationData.forEach(state => {
      const option = document.createElement("option");
      option.value = state;
      option.text = state;
      locationDropdown.appendChild(option);
    });

    searchCriteriaContainer.appendChild(locationDropdown);
  } else if (searchType === "parkType") {
    const parkTypeDropdown = document.createElement("select");
    parkTypeDropdown.id = "park-type-dropdown";

    parkTypeData.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.text = type;
      parkTypeDropdown.appendChild(option);
    });

    searchCriteriaContainer.appendChild(parkTypeDropdown);
  }
}

// Function to display the search results
function displaySearchResults(parks) {
  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML = ""; // Clear previous results

  parks.forEach(park => {
    const parkElement = document.createElement("div");
    parkElement.className = "park";
    parkElement.innerHTML = `
      <h2>${park.LocationName}</h2>
      <p><strong>Location ID:</strong> ${park.LocationID}</p>
      <p><strong>State:</strong> ${park.State}</p>
      <p><strong>Location Name:</strong> ${park.LocationName}</p>
      <p><strong>Address:</strong> ${park.Address}</p>
      <p><strong>Latitude:</strong> ${park.Latitude} degrees</p>
      <p><strong>Longitude:</strong> ${park.Longitude} degrees</p>
      ${park.Visit ? `<p><strong>Visit:</strong> <a href="${park.Visit}" target="_blank">${park.Visit}</a></p>` : ""}
    `;
    searchResultsContainer.appendChild(parkElement);
  });

  if (parks.length === 0) {
    const noResultsElement = document.createElement("p");
    noResultsElement.textContent = "No results found.";
    searchResultsContainer.appendChild(noResultsElement);
  }
}

// Function to perform the search based on the selected search type and criteria
function performSearch() {
  const searchType = document.getElementById("search-type").value;
  const searchCriteria = searchType === "location" ? document.getElementById("location-dropdown").value : document.getElementById("park-type-dropdown").value;
  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML = ""; // Clear previous results

  // Perform the search based on the selected search type and criteria
  let filteredParks = [];

  if (searchType === "location") {
    filteredParks = nationalParkData.filter(park => park.State.toLowerCase() === searchCriteria.toLowerCase());
  } else if (searchType === "parkType") {
    filteredParks = nationalParkData.filter(park => park.LocationName.toLowerCase().includes(searchCriteria.toLowerCase()));
  }

  // Display the search results
  displaySearchResults(filteredParks);

  if (filteredParks.length === 0) {
    const noResultsElement = document.createElement("p");
    noResultsElement.textContent = "No results found.";
    searchResultsContainer.appendChild(noResultsElement);
  }
}

// Function to handle the "View All" option
function handleViewAllOption() {
  const viewAllOption = document.getElementById("view-all");
  if (viewAllOption.checked) {
    displaySearchResults(nationalParkData);
  }
}

// Event listeners
document.getElementById("search-type").addEventListener("change", populateSearchCriteria);
document.getElementById("search-button").addEventListener("click", performSearch);
document.getElementById("view-all").addEventListener("change", handleViewAllOption);