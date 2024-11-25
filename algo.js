// Fungsi untuk membuat input hambatan berdasarkan jumlah yang dipilih
function generateInput() {
    var jumlah = document.getElementById("jumlahinput").value;  // Ambil jumlah hambatan yang dipilih
    var container = document.getElementById("InputContainer");
    container.innerHTML = '';  // Kosongkan container input sebelumnya
    
    // Membuat input untuk hambatan sesuai jumlah yang dipilih
    for (var i = 1; i <= jumlah; i++) {
        var label = document.createElement("label");
        label.innerHTML = "Hambatan " + i + ": ";
        
        var input = document.createElement("input");
        input.type = "number";
        input.id = "R" + i;  // Set ID untuk input hambatan
        input.placeholder = "Masukkan nilai hambatan " + i;
        
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
}

// Fungsi untuk menghitung hasil berdasarkan input hambatan
function hitungHasil() {
    var jumlah = document.getElementById("jumlahinput").value;
    var totalResistansi = 0;
    var hasil = 0;

    // Cek apakah jumlah hambatan dipilih
    if (jumlah === "") {
        alert("Pilih jumlah hambatan terlebih dahulu.");
        return;
    }

  

    // Menghitung total resistansi berdasarkan rangkaian
    for (var i = 1; i <= jumlah; i++) {
        var R = parseFloat(document.getElementById("R" + i).value);
        if (isNaN(R)) {
            alert("Masukkan nilai hambatan yang valid.");
            return;
        }
            totalResistansi += R;  // Penambahan untuk rangkaian seri
       
    }

   

    // Menampilkan hasil
    hasil = totalResistansi.toFixed(2);  // Menampilkan dengan dua angka di belakang koma
    document.getElementById("output").innerHTML = "Total Resistansi: " + hasil + " Ohm";
}