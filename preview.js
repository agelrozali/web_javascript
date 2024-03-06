function showPreview() {
    const contentDiv = document.getElementById('content');
  
    contentDiv.innerHTML = `
      <h2>Preview</h2>
      <div class="preview">
        <img id="previewImage" src="" alt="Preview" width="200">
        <button class="close-btn" onclick="closePreview()">Tutup</button>
      </div>
    `;
  
    const previewImage = document.getElementById('previewImage');
    const fileInput = document.getElementById('gambar');
  
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function(e) {
        previewImage.src = e.target.result;
      }
  
      reader.readAsDataURL(file);
      contentDiv.querySelector('.preview').style.display = 'block';
    });
  }
  
  function closePreview() {
    const contentDiv = document.getElementById('content');
    contentDiv.querySelector('.preview').style.display = 'none';
  }