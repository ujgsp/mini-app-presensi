function checkIn() {
    fetch('https://script.google.com/macros/s/AKfycbwQshPrA768k6u-a-ElFo8O6dbQjcUqWdQu43XaSRV0LTULcTjuPuJ7F6E8o-qnDYoM/exec?action=checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://ujgsp.github.io'
        },
        body: JSON.stringify({
          action: 'checkin'
        }),
        mode: 'cors'  // Pastikan Anda menambahkan mode: 'cors'
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
      
}

function checkOut() {
    fetch('https://script.google.com/macros/s/AKfycbwQshPrA768k6u-a-ElFo8O6dbQjcUqWdQu43XaSRV0LTULcTjuPuJ7F6E8o-qnDYoM/exec?action=checkout', { method: 'POST' })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => alert('Gagal Check Out.'));
}