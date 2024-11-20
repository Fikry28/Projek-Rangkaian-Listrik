
// menampilkan array
var arr = [2,3,5,9];
for(var i = 0; i<arr.length;i++){
    console.log('Hambatan ke-' + (i+1) + "= " + arr[i] + "A");
}
    function generateInput() {
        var jumlah = document.getElementById("jumlahinput").value;
        var container = document.getElementById("InputContainer");
        container.innerHTML = "";  // Kosongkan input sebelumnya
    
        // Membuat input berdasarkan jumlah yang dipilih
        for (var i = 1; i <= jumlah; i++) {
            container.innerHTML += `<label for="R${i}">Hambatan ${i} (Ohm): </label>
                                    <input type="number" id="R${i}" required><br>`;
        }
    }
    function hitungHasil(){
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
        totalResistansi += R; // Penambahan untuk seri, nanti kita bisa ganti untuk paralel
    }
    // Menampilkan hasil berdasarkan jenis rangkaian
    var output = document.getElementById("output");
    output.innerHTML = `Total Hambatan dalam Rangkaian Seri: ${totalResistansi} Ohm`;
}