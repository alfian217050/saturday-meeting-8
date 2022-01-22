document.getElementById("btn").addEventListener("click", function () {
	let nama = document.getElementById("nama").value;
	let kelas = document.getElementById("kelas").value;
	let alamat = document.getElementById("alamat").value;
	let tentang = document.getElementById("tentang-kamu").value;

	alert(`Hai, ${nama}!`);
	alert(`Kamu kelas ${kelas}!`);
	alert(`Alamat : ${alamat}`);
	alert(`Tentang Kamu : ${tentang}`);
});
