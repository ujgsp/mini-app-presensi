// Fungsi untuk melakukan check-in
function checkIn() {
    const userName = "@ujgsp"; // Ganti dengan nama pengguna yang sesuai

    // Mengirimkan request AJAX untuk check-in
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwQshPrA768k6u-a-ElFo8O6dbQjcUqWdQu43XaSRV0LTULcTjuPuJ7F6E8o-qnDYoM/exec", // URL API Google Apps Script
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            message: {
                text: "/checkin",
                chat: {
                    id: "315354966" // Ganti dengan ID Chat Telegram
                },
                from: {
                    first_name: userName
                }
            }
        }),
        success: function(response) {
            // Tanggapan berhasil dari server
            console.log(response);
            alert("Check-in berhasil!");
        },
        error: function(xhr, status, error) {
            // Tangani error jika ada
            console.error("Error:", error);
            alert("Terjadi kesalahan, silakan coba lagi.");
        }
    });
}

// Fungsi untuk melakukan check-out
function checkOut() {
    const userName = "Nama Pengguna"; // Ganti dengan nama pengguna yang sesuai

    // Mengirimkan request AJAX untuk check-out
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwQshPrA768k6u-a-ElFo8O6dbQjcUqWdQu43XaSRV0LTULcTjuPuJ7F6E8o-qnDYoM/exec", // URL API Google Apps Script
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            message: {
                text: "/checkout",
                chat: {
                    id: "ID_Chat_Telegram" // Ganti dengan ID Chat Telegram
                },
                from: {
                    first_name: userName
                }
            }
        }),
        success: function(response) {
            // Tanggapan berhasil dari server
            console.log(response);
            alert("Check-out berhasil!");
        },
        error: function(xhr, status, error) {
            // Tangani error jika ada
            console.error("Error:", error);
            alert("Terjadi kesalahan, silakan coba lagi.");
        }
    });
}

// Menambahkan event listener pada tombol check-in dan check-out
document.getElementById("checkInButton").addEventListener("click", checkIn);
document.getElementById("checkOutButton").addEventListener("click", checkOut);