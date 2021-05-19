const PREFIX = "ALBUM";
const API_URI = "http://localhost:4000";

function openScanner() {
	var html5QrcodeScanner = new Html5QrcodeScanner(
		"qr-reader", { fps: 10, qrbox: 250 });

	html5QrcodeScanner.render(onScanSuccess);
}

function getLocalData() {
	const keys = Object.keys(localStorage);
	const data = [];

	keys.forEach(key => {
		const [prefix, id] = key.split("-");

		if (prefix === PREFIX) {
			const d = localStorage.getItem(key);
			data.push(d);
		}
	});

	return data;
}

function displayLocalData() {
	const data = getLocalData();

	createHtml(data);
}

function createHtml(data) {
	let items = [];

	console.log('--------', data)
	if (data.length) {
		data.forEach(da => {

			let d = da;
			let msg1 = "Cloud Data";
			let msg2 = "No Cloud Data";

			console.log("XXXXXX", typeof da);

			if (typeof da === "string") {
				// This is local data
				d = JSON.parse(da);
				msg1 = "Local Data";
				msg2 = "No Local Data";
			}

			items.push('<div> <div>' + msg1 + '</div> <div class="row"> <h4>Cover</h4> <img src="' + d.albumCoverURL + '"/> </div> <div  class="row"><h4>ID</h4> <div>' + d.albumID + '</div> </div> <div  class="row"> <h4>Artist </h4> <div>' + d.albumArtist + ' </div> </div> <div  class="row"> <h4>Album </h4><div>' + d.albumName + ' </div> </div> <div  class="row"> <h4>Album </h4><div>' + d.albumType + ' </div></div> <div  class="row"> <h4>Review</h4> <div>' + d.albumReview + ' </div></div></div>');

		});

		$('#albumData').html(items.join(''));
	} else {
		$('#albumData').html(msg2);
	}
}

function uploadToCloud() {
	const data = getLocalData();

	const url = `${API_URI}/postData`;

	const parsedArrayData = data.map(d => JSON.parse(d));

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(parsedArrayData)
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			alert(JSON.stringify({
				"code": 200,
				"status": "Success",
				"msg": "Data saved to Cloud"
			}));
		})
		.catch(err => console.log("Error: ", err));
}

function redirectToPage(pageName) {
	window.location.href = pageName;
}

function getCloudDataFromAPI() {
	const url = `${API_URI}/getData`;

	return fetch(url)
		.then(response => response.json())
		.then(albums => albums)
		.catch(err => {
			console.log("Error", err);
		});
}

function displayCloudData() {
	getCloudDataFromAPI().then(data => {

		createHtml(data);
	}).catch(err => {
		console.log("Error: ", err);
	});
}

function deleteCLoudData() {
	const url = `${API_URI}/delData`;

	fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(response => response.json())
		.then(data => {
			alert(JSON.stringify({
				"code": 200,
				"status": "Success",
				"msg": "Data Deleted from cloud"
			}));
		})
		.catch(err => console.log("Error: ", err));
}

function deleteLocalData() {
	localStorage.clear();
	alert(JSON.stringify({
		"code": 200,
		"status": "Success",
		"msg": "Data Deleted from Local"
	}));
}


function onScanSuccess(qrMessage) {
	// handle the scanned code as you like, for example:
	console.log(`QR matched = ${qrMessage}`);

	saveDataToLocalStorage(qrMessage);
}

function onScanFailure(error) {
	// handle scan failure, usually better to ignore and keep scanning.
	// for example:
	console.warn(`QR error = ${error}`);
}

function saveDataToLocalStorage(data) {
	const KEY = `${PREFIX}-${JSON.parse(data).albumID}`;

	localStorage.setItem(KEY, data);
}


function showAdminMenu() {
	var x = document.getElementById("adminMenu");

	if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
