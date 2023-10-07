// if, else, dan nested if
var age = 25;

if (age >= 18) {
    console.log("Anda adalah dewasa.");
} else {
    console.log("Anda masih anak-anak.");
}

var time = 14;

if (time < 12) {
    console.log("Selamat pagi!");
} else if (time < 18) {
    console.log("Selamat siang!");
} else {
    console.log("Selamat malam!");
}

// switch case
var day = "Senin";

switch (day) {
    case "Senin":
        console.log("Hari ini adalah hari kerja.");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari ini adalah akhir pekan.");
        break;
    default:
        console.log("Hari tidak valid.");
}

// for statement
for (var i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// while loop
var count = 1;

while (count <= 5) {
    console.log("Iterasi ke-" + count);
    count++;
}

// do while loop
var count = 1;

do {
    console.log("Iterasi ke-" + count);
    count++;
} while (count <= 5);

// function
function tambah(a, b) {
    return a + b;
}

var hasil = tambah(3, 5);
console.log("Hasil penambahan: " + hasil);
