const supabaseUrl = "https://iftnhrbkmavcxzxzcoky.supabase.co";  // Replace with your actual Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmdG5ocmJrbWF2Y3h6eHpjb2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2ODY5OTMsImV4cCI6MjA1NDI2Mjk5M30.M93Nsbw6enYWmlGliV_GblpI2N_BF8Y-oaE224-BO6g";  // Replace with your actual Supabase key (public anon key)

// Fetch data from Supabase
async function fetchData() {
  const response = await fetch(`${supabaseUrl}/rest/v1/test_data`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  displayData(data);
}

// Display data on the page
function displayData(data) {
  const dataContainer = document.getElementById("data");
  data.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "data-item";
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><small>Created At: ${item.created_at}</small></p>
    `;
    dataContainer.appendChild(itemDiv);
  });
}

// Call the fetchData function when the page loads
window.onload = fetchData;