const supers = [
	  `Bye.`,
	  `さようなら。`,
	  `Au revoir.`,
	  `وداعًا.`,
	  `Auf Wiedersehen.`,
	  `Selamat tinggal.`,
	  `Հաջողություն.`,
	  `Tot ziens.`,
	  `До свидания.`,
	  `안녕히.`,
	  `خداحافظ.`,
	  `Αντίο.`,
	  `Hejdå.`,
];

const target = document.getElementById("super");

function tamat(content) {
	  target.innerHTML = content;
}

function invokeRandomly() {
	  let rnd = Math.floor(Math.random() * supers.length);
	  tamat(supers[rnd]);
	  loop();
}

function loop() {
	  setTimeout(invokeRandomly, 83); // 83 ms is 1 frame 12fps
}

loop();

