// ini javascript

console.log('javascript tersambung');

function validateform() {
    console.log('validasi fungsi berhasil terpanggil')
    const Inputsuhu = document.getElementById('Input-suhu').value;
    
    if (Inputsuhu == ' ') {
        alert('Inputan anda kosong');
    } else {
        calculate(Inputsuhu);
    }
    
}

function calculate(value) {
    let result = parseInt(value) * 9 / 5 + 32
    document.getElementById('Hasil-suhu').value = result;
    document.getElementById('How-to-suhu').value = value + ' x 9 / 5 + 32 = ' + result;
}

function reset() {
    document.getElementById('Input-suhu').value = ' ';
    document.getElementById('Hasil-suhu').value = ' ';
    document.getElementById('How-to-suhu').value = ' ';
}