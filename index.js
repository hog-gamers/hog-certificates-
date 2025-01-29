const searchBtn = document.querySelector('.search-btn');
const resultDiv = document.getElementById('result');

// Mock certificate database (replace this with real data source later)
const certificates = {
  "ABC123": "https://example.com/certificates/ABC123.pdf",
  "DEF456": "https://example.com/certificates/DEF456.pdf"
};

searchBtn.addEventListener('click', () => {
  const certNumber = document.getElementById('certNumber').value.trim();
  
  // Check if certificate exists
  if (certificates[certNumber]) {
    resultDiv.innerHTML = `
      <p style="color: green;">Certificate Found!</p>
      <a href="${certificates[certNumber]}" download>Download Certificate</a>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color: red;">Certificate Not Found. Please try again.</p>`;
  }
});
