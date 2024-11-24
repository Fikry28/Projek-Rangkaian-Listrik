function hitungHasil() {
    var jumlah = document.getElementById("jumlahinput").value;
    var totalResistansi = 0;
    var hasil = 0;
    
    // Cek apakah jumlah hambatan dipilih
    if (jumlah === "") {
        alert("Pilih jumlah hambatan terlebih dahulu.");
        return;
    }

    // Menentukan jenis rangkaian (seri atau paralel)
    var jenisRangkaian = document.querySelector('input[name="jenisRangkaian"]:checked').value;

    // Menghitung total resistansi berdasarkan rangkaian
    for (var i = 1; i <= jumlah; i++) {
        var R = parseFloat(document.getElementById("R" + i).value);
        if (isNaN(R)) {
            alert("Masukkan nilai hambatan yang valid.");
            return;
        }

        if (jenisRangkaian === "seri") {
            totalResistansi += R;  // Penambahan untuk rangkaian seri
        } else if (jenisRangkaian === "paralel") {
            totalResistansi += 1 / R;  // Penambahan untuk rangkaian paralel
        }
    }

    // Menampilkan hasil berdasarkan jenis rangkaian
    var output = document.getElementById("output");
    if (jenisRangkaian === "seri") {
        output.innerHTML = `Total Hambatan dalam Rangkaian Seri: ${totalResistansi} Ohm`;
    } else if (jenisRangkaian === "paralel") {
        totalResistansi = 1 / totalResistansi;
        output.innerHTML = `Total Hambatan dalam Rangkaian Paralel: ${totalResistansi} Ohm`;
    }
}
