function showInputForm() {
    const contentDiv = document.getElementById('content');
  
    contentDiv.innerHTML = `
      <h2>Input Data Ikan</h2>
      <form id="dataForm">
        <label for="no">Nomor:</label>
        <input type="text" id="no" name="no" required><br><br>
        <label for="jenis">Jenis:</label>
        <input type="text" id="jenis" name="jenis" required><br><br>
        <label for="gambar">Gambar Ikan:</label>
        <input type="file" id="gambar" name="gambar" required><br><br>
        <input type="submit" value="Save">
      </form>
    `;
  
    const dataForm = document.getElementById('dataForm');
    dataForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Proses penyimpanan data ikan
      // ...
      // Jika penyimpanan berhasil, tampilkan pesan sukses
      contentDiv.innerHTML = '<h2>Data ikan berhasil disimpan!</h2>';
    });
  }