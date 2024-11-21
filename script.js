function checkIn() {
    fetch('https://script.google.com/macros/s/AKfycbwQshPrA768k6u-a-ElFo8O6dbQjcUqWdQu43XaSRV0LTULcTjuPuJ7F6E8o-qnDYoM/exec', {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify({
                action: 'checkin'
            })
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            // console.log(data); // Tampilkan data yang diterima
        })
        .catch(error => {
            let setAlert = '';
            setAlert += '<div class="alert alert-danger" role="alert">';
            setAlert += 'Error: ' + error;
            setAlert += '</div>';
            $('#status').html(setAlert);
        });
}


function checkOut() {
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbwQshPrA768k6u-a-ElFo8O6dbQjcUqWdQu43XaSRV0LTULcTjuPuJ7F6E8o-qnDYoM/exec',
        method: 'POST',
        success: function(data) {
            alert(data.message); // Tampilkan pesan dari response
        },
        error: function(xhr, status, error) {
            alert('Gagal Check Out.'); // Tangani error jika gagal
        }
    });
}