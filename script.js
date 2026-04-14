function getApiBase() {
  const isCapacitorApp = window.location.hostname === "localhost";
  const isAndroid = /Android/i.test(navigator.userAgent);

  if (isCapacitorApp && isAndroid) {
    return "http://10.0.2.2:5000";
  }

  return "http://127.0.0.1:5000";
}

const API_BASE = getApiBase();
console.log("Using API base:", API_BASE);

async function uploadPDF() {
  const fileInput = document.getElementById("pdf-file");
  const status = document.getElementById("upload-status");

  if (!fileInput.files.length) {
    status.textContent = "Please choose a PDF first.";
    return;
  }

  const selectedFile = fileInput.files[0];
  console.log("Selected file:", selectedFile);
  console.log("Using API base:", API_BASE);

  const formData = new FormData();
  formData.append("file", selectedFile);

  status.textContent = "Uploading PDF...";

  try {
    const response = await fetch(`${API_BASE}/upload`, {
      method: "POST",
      body: formData
    });

    console.log("Upload response status:", response.status);
    console.log("Upload response ok:", response.ok);

    const text = await response.text();
    console.log("Raw upload response:", text);

    try {
      const data = JSON.parse(text);
      status.textContent = data.message || "Upload finished.";
    } catch {
      status.textContent = `Upload failed: unexpected response (${response.status})`;
    }
  } catch (error) {
    console.error("Upload error:", error);
    status.textContent = `Upload failed: ${error.message}`;
  }
}

async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.trim();

  if (!message) return;

  chatBox.innerHTML += `<div class="message user"><strong>You:</strong> ${message}</div>`;
  input.value = "";

  try {
    const response = await fetch(`${API_BASE}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    chatBox.innerHTML += `<div class="message bot"><strong>Bot:</strong> ${data.reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (error) {
    chatBox.innerHTML += `<div class="message bot"><strong>Bot:</strong> Error sending message.</div>`;
  }
}
