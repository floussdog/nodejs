var unirest = require("unirest");

var req = unirest("POST", "https://quick-easy-sms.p.rapidapi.com/send");

req.headers({
	"content-type": "application/x-www-form-urlencoded",
	"x-rapidapi-key": "87aa264292msh2e35dac4ce1ce22p11813ejsn51eefb26e5ba",
	"x-rapidapi-host": "quick-easy-sms.p.rapidapi.com",
	"useQueryString": true
});

req.form({
	"message": "message content from RapidAPI",
	"toNumber": "1xxxxxxxxxx""1xxxxxxxxxx""1xxxxxxxxxx"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
