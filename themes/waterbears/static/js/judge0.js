const API_URL = "https://judge0-ce.p.rapidapi.com/submissions";
const API_KEY = "f510fe5c0amsh1f84026d6670014p1f7782jsn56ec1abd5c11";

async function submitCode() {
    const language = document.getElementById("language").value;
    const sourceCode = document.getElementById("code").value;
    const input = document.getElementById("input").value;

    const requestData = {
        language_id: language,
        source_code: btoa(sourceCode), // Convert to Base64
        stdin: btoa(input) // Convert input to Base64
    };

    // Send request to Judge0 API
    const response = await fetch(`${API_URL}?base64_encoded=true`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": API_KEY
        },
        body: JSON.stringify(requestData)
    });

    const result = await response.json();
    checkStatus(result.token);
}

async function checkStatus(token) {
    setTimeout(async () => {
        const response = await fetch(`${API_URL}/${token}`, {
            headers: { "X-RapidAPI-Key": API_KEY }
        });
        const result = await response.json();

        if (result.status.id <= 2) {
            checkStatus(token);
        } else {
            document.getElementById("output").textContent = atob(result.stdout || result.stderr || "No output");
        }
    }, 2000);
}