function openScanner() {
	var html5QrcodeScanner = new Html5QrcodeScanner(
		"qr-reader", { fps: 10, qrbox: 250 });

	html5QrcodeScanner.render(onScanSuccess);
}

// sample json data to be stored in QR code.
// {
// 	"albumID": 1,
// 	"albumArtist": "Focus",
// 	"albumType": "Jazz Fusion",
// 	"albumName": "Moving Waves",
// 	"albumCoverURL": "https://------------------",
// 	"albumReview": "This is a classic prog album recorded in 1971 in mostly instrumental and there are lengthy solos. I first bought this record in the early 1970s and I loved it. It still sounds good. I grew up in Brisbane and Focus was a popular band in 1973. Jan Akkerman the world's top guitarist in 1973 - and now!. Saw these Guys in Brisbane at Festival Hall - age 15 - great! - pcw"
// }

// {
// 	"albumID": 2,
// 	"albumArtist": "PJ Harvey",
// 	"albumType: "Alternative rock",
// 	"albumName": "Stories from the City, Stories from the Sea",
// 	'albumCoverURL': "",
// 	"albumReview": "Polly Harvey, happy? It was a surprise: Harvey had spent four records howling her sexual obsessions and romantic disappointments over stark postmodern blues. But album number five found her in New York and in love, crowing, 'I'm immortal/When I'm with you' in the surging opener, 'Big Exit.' Her guitar attack was still forceful but softened around the edges by marimba, piano, organ and guest vocalist Thom Yorke. The result was lusher than anything she had recorded but also vibrant and catchy as all hell, especially the garage-y 'Good Fortune' and the yearning 'A Place Called Home' — mash notes to lovers in the big city."
// }

// {
// 	"albumID": 3,
// 	"albumArtist": "OutKast",
// 	"albumType: " Hip hop music, Funk, Rhythm and blues, Soul music",
// 	"albumName": "Speakerboxxx/The Love Below",
// 	'albumCoverURL': "",
// 	"albumReview": "It sounded crazy: For their fifth record, both members of hip-hop's most creative duo would record his own LP. What they ended up with was hip-hop's White Album, an overlong but thrilling behemoth fueled by weed, ego and a thousand old funk records. Big Boi's pulverizing Speakerboxxx deepened OutKast's adventures in crunk. Far wonkier was The Love Below, where André 3000 tried to be Prince, Beck and George Clinton all at once, crafting tunes as bright and strange as his wardrobe — including the smash 'Hey Ya!' and 'Roses,'' which 'really smell like poo-poo.''
// }


// {
// 	"albumID": 4,
// 	"albumArtist": "Daft Punk",
// 	"albumType: "French house; disco; post-disco",
// 	"albumName": "Discovery",
// 	'albumCoverURL': "Sci-Fi",
// 	"albumReview": "The French techno duo taught a generation of indie kids to dance with this international club hit, building a disco empire out of house bass lines, off-kilter keyboards, mysterious robot vocals and a stack of old Chic records. Thomas Bangalter and Guy-Manuel de Homem-Christo never liked to show their faces, but for all their glitz and sci-fi costumes, they sounded inescapably humane. Their 1970s sci-fi moves were a true time warp — like watching TRON and Saturday Night Fever morph into the same movie. And with the Wurlitzer burble of 'Digital Love,' they made the Supertramp-keyboard sound seem funky."
// }

function displayLocalData() {

}

function uploadToCloud() {

}

function displayCloudData() {

}


function onScanSuccess(qrMessage) {
	// handle the scanned code as you like, for example:
	console.log(`QR matched = ${qrMessage}`);
}

function onScanFailure(error) {
	// handle scan failure, usually better to ignore and keep scanning.
	// for example:
	console.warn(`QR error = ${error}`);
}
