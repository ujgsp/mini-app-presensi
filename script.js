function checkIn() {
    fetch('https://script.google.com/macros/s/AKfycbwQshPrA768k6u-a-ElFo8O6dbQjcUqWdQu43XaSRV0LTULcTjuPuJ7F6E8o-qnDYoM/exec?action=checkin', { method: 'POST' })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => alert('Gagal Check In.'));
}

function checkOut() {
    fetch('https://script.google.com/macros/s/AKfycbwQshPrA768k6u-a-ElFo8O6dbQjcUqWdQu43XaSRV0LTULcTjuPuJ7F6E8o-qnDYoM/exec?action=checkout', { method: 'POST' })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => alert('Gagal Check Out.'));
}