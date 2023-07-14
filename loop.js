const printNumbers = () => {
    const inputNumber = document.getElementById("number").value;
    const num = parseInt(inputNumber);
    let hasil = document.getElementById("tampil");
    hasil.innerHTML = "";

    for (let i=0; i < num; i++) {
        hasil.innerHTML += `Angka ke ${i} <br>`;
    }
}