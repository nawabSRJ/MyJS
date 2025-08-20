document.getElementById('teaList').addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'LI') {
    // Create tooltip element if it doesn't exist
    if (!event.target.querySelector('.tooltip')) {
      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip';
      tooltip.textContent = event.target.textContent;
      event.target.appendChild(tooltip);
    }
    
    // Optional: Add highlight class
    event.target.classList.add('highlighter');
  }
});

document.getElementById('teaList').addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'LI') {
    // Optional: Remove highlight class
    event.target.classList.remove('highlighter');
  }
});

// form handling

document.getElementById('feedbackForm').addEventListener('submit', function(event){
  // e.preventDefault();
  alert('Submission Done');

  const para = document.getElementById('feedbackDisplay');
  const inputPara = document.getElementById('feedbackInput')
  inputPara.textContent = para.textContent;
})