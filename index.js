// Create function fetchData yang dimana untuk mengambil data dari API yang sudah disediakan
function fetchData(link, callback) {
  fetch(link)
    .then(response => response.json()) // Mengubah respon dari format JSON ke objek JavaScript
    .then(user => callback(user));
  // Memanggil fungsi callback dengan data yang telah diambil
};

// Create function displayData untuk mengambil data yang telah diambil di HTML
function displayData(data) {
  const tbody = document.querySelector('table tbody'); // Search element tbody in HTML
  data.forEach(function(user) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.address.street}, ${user.address.suite}, ${user.address.city}</td>
    <td>${user.company.name}</td>
    `; // Input value from property id, name, username, email, address and company to element tr
    tbody.appendChild(tr); // Append element tr into the element tbody
  });
};

const link = 'https://jsonplaceholder.typicode.com/users'; // URL endpoint API JSONPlaceholder
fetchData(link, displayData);