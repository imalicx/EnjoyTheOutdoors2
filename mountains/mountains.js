// fetch the sunrise/sunset times for a specific mountain

async function getSunsetForMountain(lat, lng) {
  let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
  let data = await response.json();
  return data.results;
}

// function to populate the dropdown list with mountain names

function populateDropdown() {
  const mountainSelect = document.getElementById('mountain-select');
  
  for (let i = 0; i < mountainData.length; i++) {
    const mountainOption = document.createElement('option');
    mountainOption.value = i;
    mountainOption.text = mountainData[i].name;  //i=0 to 47
    mountainSelect.appendChild(mountainOption);
  }
}

// fuction to display the selected mountain information

function displayMountainInfo() {
  const mountainIndex = document.getElementById('mountain-select').value;
  const mountain = mountainData[mountainIndex];

  document.getElementById('mountain-name').innerHTML = `<p> <strong> Name:</strong> ${mountain.name} </p>`;
  document.getElementById('mountain-description').innerHTML =`<p> <strong> Description: </strong>  ${mountain.desc} </p>`;
  document.getElementById('mountain-elevation').innerHTML = `<p> <strong> Elevation: </strong> ${mountain.elevation} meters </p>`;
  document.getElementById('mountain-effort').innerHTML = `<p> <strong> Effort: </strong> ${mountain.effort} </p>`;
  document.getElementById('mountain-image').setAttribute('src', mountain.img);

  getSunsetForMountain(mountain.lat, mountain.lng).then(data => {
    document.getElementById('sunrise-time').innerHTML = `<p> <strong> Sunrise (UTC): </strong> ${data.sunrise} </p>`;
    document.getElementById('sunset-time').innerHTML = `<p> <strong> Sunset (UTC): </strong> ${data.sunset} </p>`;
  });
}


// event listener when the dropdown selection changes
document.getElementById('mountain-select').addEventListener('change', displayMountainInfo);

// populate the dropdown list 
populateDropdown();
