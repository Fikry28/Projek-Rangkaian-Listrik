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
    // Ambil elemen-elemen yang dibutuhkan
const form = document.getElementById("radioForm");
const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");
const extraInput = document.getElementById("extraInput");
const detailsInput = document.getElementById("details");

// Tambahkan event listener untuk tombol submit
submitButton.addEventListener("click", function () {
    // Ambil semua input dengan name "color"
    const selectedOption = form.querySelector('input[name="Hitung"]:checked');
    
    // Cek apakah ada opsi yang dipilih
    if (selectedOption) {
        result.textContent = `Anda memilih  ${selectedOption.value}`;
    } else {
        result.textContent = "Silakan pilih Arus/Tegangan terlebih dahulu!";
    }});
    // Tambahkan event listener untuk radio button
    form.addEventListener("change", function () {
        const selectedOption = form.querySelector('input[name="category"]:checked');

        // Tampilkan input tambahan jika salah satu radio dipilih
        if (selectedOption) {
            extraInput.style.display = "block";
        }
    });

    // Event listener untuk tombol submit
    submitButton.addEventListener("click", function () {
        const selectedOption = form.querySelector('input[name="Hitung"]:checked');
        const details = detailsInput.value;
 // Aktifkan input detail jika salah satu radio dipilih
 if (selectedOption) {
    detailsInput.disabled = false;
 }
        if (selectedOption && details) {
            result.textContent = `Anda memilih kategori: ${selectedOption.value} dengan detail: ${details}`;
        } else if (!selectedOption) {
            result.textContent = "Silakan pilih kategori terlebih dahulu!";
        } else {
            result.textContent = "Silakan masukkan detail tambahan!";
        }
    });
    
   

    // Menampilkan hasil
    hasil = totalResistansi.toFixed(2);  // Menampilkan dengan dua angka di belakang koma
    document.getElementById("output").innerHTML = "Total Resistansi: " + hasil + " Ohm";
}
