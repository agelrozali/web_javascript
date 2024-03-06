window.addEventListener('DOMContentLoaded', (event) => {
    const contentDiv = document.getElementById('content');
  
    contentDiv.innerHTML = `
      <h2>Login</h2>
      <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Login">
      </form>
    `;
  
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Proses login pengguna
      // ...
      // Jika login berhasil, tampilkan menu utama
      showMainMenu();
    });
  });