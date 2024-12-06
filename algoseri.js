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

    // Menghitung total resistansi berdasarkan rangkaian seri
    for (var i = 1; i <= jumlah; i++) {
        var R = parseFloat(document.getElementById("R" + i).value);
        if (isNaN(R)) {
            alert("Masukkan nilai hambatan yang valid.");
            return;
        }
        totalResistansi += R;  // Penambahan untuk rangkaian seri
    }

    // Cek apakah arus atau tegangan dipilih
    const inputArus = document.getElementById('nilaiArus');  // Mengambil input arus
    const inputTegangan = document.getElementById('nilaiTegangan');  // Mengambil input tegangan
    
    // Ambil nilai input arus dan tegangan
    var arus = parseFloat(inputArus.value);
    var tegangan = parseFloat(inputTegangan.value);

    // Validasi input: pastikan hanya satu yang diisi
    if (isNaN(arus) && isNaN(tegangan)) {
        alert("Masukkan nilai arus atau tegangan.");
        return;
    }

    if (!isNaN(arus) && !isNaN(tegangan)) {
        alert("Hanya satu nilai yang boleh diisi: arus atau tegangan.");
        return;
    }

    // Jika Arus dipilih, menghitung arus I = V / R_total
    if (!isNaN(tegangan)) {
        hasil = tegangan / totalResistansi;  // Rumus untuk menghitung arus
        document.getElementById("output").innerHTML = "Arus: " + hasil + " A";
    }
    // Jika Tegangan dipilih, menghitung tegangan V = I * R_total
    else if (!isNaN(arus)) {
        hasil = arus * totalResistansi;  // Rumus untuk menghitung tegangan
        document.getElementById("output").innerHTML = "Tegangan: " + hasil + " V";
    }
}

// Fungsi untuk toggle input arus atau tegangan
function toggleInput() {
    const isArusSelected = document.getElementById('arus').checked;  // Memeriksa apakah radio button 'arus' dipilih
    const inputArus = document.getElementById('inputArus');  // Mengambil elemen input untuk arus
    const inputTegangan = document.getElementById('inputTegangan');  // Mengambil elemen input untuk tegangan
    const arusField = document.getElementById('nilaiArus');  // Input field untuk arus
    const teganganField = document.getElementById('nilaiTegangan');  // Input field untuk tegangan
    
    if (isArusSelected) {
        // Tampilkan input arus, sembunyikan input tegangan
        inputArus.style.display = 'block';
        inputTegangan.style.display = 'none';
        teganganField.value = "";  // Reset nilai tegangan
    } else {
        // Tampilkan input tegangan, sembunyikan input arus
        inputTegangan.style.display = 'block';
        inputArus.style.display = 'none';
        arusField.value = "";  // Reset nilai arus
    }
}

