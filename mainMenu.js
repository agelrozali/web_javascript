function showMainMenu() {
    const contentDiv = document.getElementById('content');
  
    contentDiv.innerHTML = `
      <div class="logo">
        <img src="logo_unpam.png" alt="Logo UNPAM">
        <h1>Nama Kelompok</h1>
      </div>
  
      <h2>Menu Utama</h2>
      <button onclick="showInputForm()">Input Data</button>
      <button onclick="showData()">Tampilkan Data</button>
      <button onclick="showPreview()">Preview</button>
      <button onclick="logout()">Tutup</button>
    `;
  }
  
  function logout() {
    // Proses logout pengguna
    // ...
    // Kembali ke halaman login
    window.location.reload();
  }