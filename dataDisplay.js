function showData() {
    const contentDiv = document.getElementById('content');
  
    contentDiv.innerHTML = `
      <h2>Data Ikan</h2>
      <table id="dataTable">
        <tr>
          <th>Nomor</th>
          <th>Jenis</th>
          <th>Gambar Ikan</th>
        </tr>
      </table>
    `;
  
    const dataTable = document.getElementById('dataTable');
  
    // Ambil data ikan dari database atau penyimpanan yang sesuai dan tampilkan dalam tabel
    // Contoh:
    const data = [
      { no: 1, jenis: "Ikan Nila", gambar: "gambar1.jpg" },
      { no: 2, jenis: "Ikan Lele", gambar: "gambar2.jpg" },
      { no: 3, jenis: "Ikan Gurame", gambar: "gambar3.jpg" }
    ];
  
    data.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.no}</td>
        <td>${item.jenis}</td>
        <td><img src="${item.gambar}" alt="${item.jenis}" width="100"></td>
      `;
      dataTable.appendChild(row);
    });
  }