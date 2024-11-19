function checkIn() {
    fetch('/checkin', { method: 'POST' })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => alert('Gagal Check In.'));
}

function checkOut() {
    fetch('/checkout', { method: 'POST' })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => alert('Gagal Check Out.'));
}