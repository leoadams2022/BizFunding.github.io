// Adding the Styles 
const Head = document.querySelector("head");
Head.insertAdjacentHTML("afterbegin", "<style>\n* {\ncolor: white !important;\n}\nhtml {\nbackground: #2e4f53 !important;\n}\ntd {\n    background: #2e4f53 !important;\n    color: white !important;\n    font-weight: bold;\nfont-size: 20px !important;\n}\na {\ncolor: #03a9f4 !important;\n}\ninput {\ncolor: black !important;\n    font-size: 12px !important;\n    font-weight: 700 !important;\n}\n.myBtn {\nmargin: 5px;\ncolor: black !important;\nfont-size: 15px;\nfont-weight: 600;\nborder: none;\nborder-radius: 10px;\npadding: 5px 10px;\n}\n.myBtn:hover {\n    background: #d8bfd8;\n}\nspan#AgentViewStatus table tbody tr td {\nbackground: none !important;\n}\nspan#AgentViewStatus table tbody tr td font {\ncolor: black !important;\n}\nspan#AgentViewSpan {\nbackground: #2e4f53 !important;\nright: 0px !important;\nleft: auto !important;\nheight: auto !important;\noverflow: auto !important;\n}\nspan#MainStatuSSpan {\nbackground: none !important;\n}\n textarea#comments { color: black !important; width: 100%;}select#FormSelect, select#FormSelect option{color: black !important;}\nselect#FormSelect,select.FormSelect {\nheight: 27px;\nborder-radius: 10px;\nfont-weight: bold;\nmargin: 5px;\ncolor: black !important;\nfont-size: 15px;\nfont-weight: 600;\nborder: none;\nborder-radius: 10px;\npadding: 5px 10px;\n}\n</stlye>");
//                ---------------------------
//Copy function
function Copy() {
	var number = document.getElementById('phone_numberDISP').innerText;
	var first = document.getElementById('first_name').value;
	var last = document.getElementById('last_name').value;
	navigator.clipboard.writeText(number + ' ' + first + ' ' + last);
}
//Adding the Button's
const comments = document.querySelector("#comments");
comments.insertAdjacentHTML("afterend", "<select id=\"FormSelect\"><option value=\"New\" selected>New</option><option value=\"Old\" >Old</option></select><Button class='myBtn CopyBtn' onclick=\"Copy()\">Copy</Button><Button onclick=\"googleForm()\" class=\"myBtn googleFormBtn\">Our Form</Button><Button onclick=\"MyGoogleForm()\" class=\"myBtn googleFormBtn\">My Form</Button><span id=\"dupspan\"></span><br><span id=\"Dispospan\"  style=\"color: #ff9999  !important;\"></span><br><span id=\"Dispospan2\"  style=\"color: #ff9999  !important;\"></span>");
//                ---------------------------
// google Form 
function googleForm() {
	var HungUpSpan = document.getElementById('HangupControl'),
		HungUpA = HungUpSpan.getElementsByTagName('a')[0];
	if (typeof HungUpA === 'undefined') {
		alert('There is No Active Call');
	} else {
		var number = document.getElementById('phone_numberDISP').innerText;
		var first = document.getElementById('first_name').value;
		var last = document.getElementById('last_name').value;
		var address = document.getElementById('address1').value;
		var city = document.getElementById('city').value;
		var state = document.getElementById('state').value;
		var zip = document.getElementById('postal_code').value;
		var email = document.getElementById('email').value;
		var comments = document.getElementById('comments').value;
		var phone_code = document.getElementById('phone_code').value;
		var SelVal = document.getElementById("FormSelect").value;
		if (SelVal === 'New') {
			window.open(`https://docs.google.com/forms/d/e/1FAIpQLSfrMa2vUwg5GRkHo9_oZch4KcvQdPG-uGhBKZ9IDfbXFKpsDQ/viewform?usp=pp_url&entry.1571300582=${first}+${last}&entry.916874017=${address}+${city}+${state}+${zip}&entry.75396275=&entry.160962226=&entry.723605801=Leo&entry.1490107561=${number}`);
		} else if (SelVal === 'Old') {
			window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdOidVDfY1ZgRA6Hc5WVEibSowAngnUpJ8YiI_dpqgLTlrtaQ/viewform?usp=pp_url&entry.639391463=${first}+${last}&entry.103003790=${address}+${city}+${state}+${zip}&entry.1471785011=${number}&entry.1146160959=Leo`);
		}
	}
}
// MY  google Form 
//adding the button
/*const comments = document.querySelector("#comments");
comments.insertAdjacentHTML("afterend", "<Button onclick=\"MyGoogleForm()\" class=\"myBtn googleFormBtn\">My Form</Button>");*/
function MyGoogleForm() {
	var HungUpSpan = document.getElementById('HangupControl'),
		HungUpA = HungUpSpan.getElementsByTagName('a')[0];
	if (typeof HungUpA === 'undefined') {
		alert('There is No Active Call');
	} else {
		var number = document.getElementById('phone_numberDISP').innerText;
		var first = document.getElementById('first_name').value;
		var last = document.getElementById('last_name').value;
		var address = document.getElementById('address1').value;
		var city = document.getElementById('city').value;
		var state = document.getElementById('state').value;
		var zip = document.getElementById('postal_code').value;
		var email = document.getElementById('email').value;
		var comments = document.getElementById('comments').value;
		var phone_code = document.getElementById('phone_code').value;
		var SelVal = document.getElementById("FormSelect").value;
		var NewOld = '';
		if (SelVal === 'New') {
			NewOld = "New Tort"
		} else if (SelVal === 'Old') {
			NewOld = "Old Tort"
		}
		window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdZpEg__LoOqaKDENr2V8i8EbWQ4lY6mCVf-F_OQu0aZk3aMw/viewform?usp=pp_url&entry.1714741896=${first}+${last}&entry.79476890=${number}&entry.1938784237=${address}+${city}+${state}+${zip}&entry.1521110734=${email}&entry.1004047280=${comments}&entry.2042514721=${NewOld}`);
	}
}
//adding the button
/*const comments = document.querySelector("#comments");
comments.insertAdjacentHTML("afterend", "<select id=\"FormSelect\"><option value=\"Old\" selected>Old</option><option value=\"New\">New</option></select><Button onclick=\"googleForm()\" class=\"myBtn googleFormBtn\">Our Form</Button>");*/
//                ---------------------------
// AUTO Dup Checker
// get the dup list from the localStorage
//        Old 
var DupListOld = [];
const SavedListOld = JSON.parse(localStorage.getItem("DupListOld"));
if (null == SavedListOld) alert('no Old dup list in the lucalstorge');
else null != SavedListOld && (DupListOld = SavedListOld);
//        New
var DupListNew = [];
const SavedListNew = JSON.parse(localStorage.getItem("DupListNew"));
if (null == SavedListNew) alert('no New dup list in the lucalstorge');
else null != SavedListNew && (DupListNew = SavedListNew);
//adding the button
/*const comments = document.querySelector("#comments");
comments.insertAdjacentHTML("afterend", "<select id=\"FormSelect\"><option value=\"Old\" selected>Old</option><option value=\"New\">New</option></select><span id=\"dupspan\"></span>");*/
// auto check Dup ----------------------------------
function AutoCheckDupFun() {
	var HungUpSpan = document.getElementById('HangupControl'),
		HungUpA = HungUpSpan.getElementsByTagName('a')[0];
	var res = document.getElementById("dupspan");
	var Num = document.getElementById('phone_numberDISP').innerText
	if (typeof HungUpA === 'undefined') {
		// console.log('There is no active call to hungup');
		res.innerHTML = "";
	} else {
		var SelVal = document.getElementById("FormSelect").value;
		if (SelVal === 'New') {
			var TorFONew = DupListNew.includes(Num);
			if (TorFONew == true) {
				res.innerHTML = "New=BAD :(";
				res.setAttribute("style", "color: red !important;"); //#00ff0a
			} else {
				res.innerHTML = "New=Good :)";
				res.setAttribute("style", "color: #00ff0a !important;"); //#00ff0a
			}
		} else if (SelVal === 'Old') {
			var TorFOld = DupListOld.includes(Num);
			if (TorFOld == true) {
				res.innerHTML = "Old=BAD :(";
				res.setAttribute("style", "color: red !important;"); //#00ff0a
			} else {
				res.innerHTML = "Old=Good :)";
				res.setAttribute("style", "color: #00ff0a !important;"); //#00ff0a
			}
		}
		var number = document.getElementById('phone_numberDISP').innerText;
		var resSpan2 = document.getElementById('Dispospan2');
		var TorF = NumbersArray.includes(number);
		if (TorF == true) {
			resSpan2.innerHTML = "ReC" + number;
			/*setTimeout(() => {
					resSpan2.innerHTML = '';
				}, 5000);*/
		} else {
			resSpan2.innerHTML = '';
		}
	}
}
setInterval(AutoCheckDupFun, 1000);
// auto hung up when cust hungs up
function CustHungUp() {
	var TransferVisibility = document.querySelector('#TransferMain').style.visibility;
	if (TransferVisibility === 'visible') {
		/*alert('Cust Hung Up')*/
	} else {
		var TabsSpan = document.getElementById('Tabs'),
			table = TabsSpan.getElementsByTagName('table')[0],
			tbody = table.getElementsByTagName('tbody')[0],
			tr = tbody.getElementsByTagName('tr')[0],
			td = tr.getElementsByTagName('td')[3],
			img = td.getElementsByTagName('img')[0];
		var ImgSrc = img.getAttribute('src');
		if (ImgSrc == 'https://ngs1.mscall.net/agc/images/agc_live_call_DEAD.gif' || ImgSrc == 'https://ngs2.mscall.net/agc/images/agc_live_call_DEAD.gif') {
			var HungUpSpan = document.getElementById('HangupControl'),
				HungUpA = HungUpSpan.getElementsByTagName('a')[0],
				HungUpImg = HungUpA.getElementsByTagName('img')[0];
			var ImgSrc = HungUpImg.getAttribute('src');
			if (ImgSrc == './images/vdc_LB_hangupcustomer.gif') {
				var Num = document.getElementById('phone_numberDISP').innerText
				CallDispo = 'NI';
				CallLogFunction();
				dialedcall_send_hangup('', '', '', '', 'YES');
				setTimeout(() => {
					DispoSelectContent_create('NI', 'ADD', 'YES');
					DispoSelect_submit('', '', 'YES');
				}, 1000);
				var resSpan = document.getElementById('Dispospan');
				resSpan.innerHTML = `Cust HungUp Not Interested ${Num}`;
				setTimeout(() => {
					resSpan.innerHTML = '';
				}, 10000);
			}
		} else {}
	}
}
setInterval(CustHungUp, 1000);
//Hung up with kayboard
/*
F1 : no answer
F2 : answer meachin
F3 : Not intersted
F4 : Not vaitern
*/
//document.getElementById('post_phone_time_diff_span').style.visibility = 'visible';
document.addEventListener("keydown", function(event) {
	var resSpan = document.getElementById('Dispospan');
	switch (event.which) {
		case 112:
			event.preventDefault();
			var HungUpSpan = document.getElementById('HangupControl'),
				HungUpA = HungUpSpan.getElementsByTagName('a')[0];
			if (typeof HungUpA === 'undefined') {
				alert('There is no active call to hungup');
			} else {
				var HungUpSpan = document.getElementById('HangupControl'),
					HungUpA = HungUpSpan.getElementsByTagName('a')[0],
					HungUpImg = HungUpA.getElementsByTagName('img')[0];
				var ImgSrc = HungUpImg.getAttribute('src');
				if (ImgSrc == './images/vdc_LB_hangupcustomer.gif') {
					CallDispo = 'N';
					CallLogFunction();
					dialedcall_send_hangup('', '', '', '', 'YES');
					setTimeout(() => {
						DispoSelectContent_create('N', 'ADD', 'YES');
						DispoSelect_submit('', '', 'YES');
					}, 1000);
					resSpan.innerHTML = 'No Answer';
					setTimeout(() => {
						resSpan.innerHTML = '';
					}, 3000);
				}
			}
			break;
		case 113:
			event.preventDefault();
			var HungUpSpan = document.getElementById('HangupControl'),
				HungUpA = HungUpSpan.getElementsByTagName('a')[0];
			if (typeof HungUpA === 'undefined') {
				alert('There is no active call to hungup');
			} else {
				var HungUpSpan = document.getElementById('HangupControl'),
					HungUpA = HungUpSpan.getElementsByTagName('a')[0],
					HungUpImg = HungUpA.getElementsByTagName('img')[0];
				var ImgSrc = HungUpImg.getAttribute('src');
				if (ImgSrc == './images/vdc_LB_hangupcustomer.gif') {
					CallDispo = 'A';
					CallLogFunction();
					dialedcall_send_hangup('', '', '', '', 'YES');
					setTimeout(() => {
						DispoSelectContent_create('A', 'ADD', 'YES');
						DispoSelect_submit('', '', 'YES');
					}, 1000);
					resSpan.innerHTML = 'Answering Machine';
					setTimeout(() => {
						resSpan.innerHTML = '';
					}, 3000);
				}
			}
			break;
		case 114:
			event.preventDefault();
			var HungUpSpan = document.getElementById('HangupControl'),
				HungUpA = HungUpSpan.getElementsByTagName('a')[0];
			if (typeof HungUpA === 'undefined') {
				alert('There is no active call to hungup');
			} else {
				var HungUpSpan = document.getElementById('HangupControl'),
					HungUpA = HungUpSpan.getElementsByTagName('a')[0],
					HungUpImg = HungUpA.getElementsByTagName('img')[0];
				var ImgSrc = HungUpImg.getAttribute('src');
				if (ImgSrc == './images/vdc_LB_hangupcustomer.gif') {
					CallDispo = 'NI';
					CallLogFunction();
					dialedcall_send_hangup('', '', '', '', 'YES');
					setTimeout(() => {
						DispoSelectContent_create('NI', 'ADD', 'YES');
						DispoSelect_submit('', '', 'YES');
					}, 1000);
					resSpan.innerHTML = 'Not Interested';
					setTimeout(() => {
						resSpan.innerHTML = '';
					}, 3000);
				}
			}
			break;
		case 115:
			event.preventDefault();
			var HungUpSpan = document.getElementById('HangupControl'),
				HungUpA = HungUpSpan.getElementsByTagName('a')[0];
			if (typeof HungUpA === 'undefined') {
				alert('There is no active call to hungup');
			} else {
				var HungUpSpan = document.getElementById('HangupControl'),
					HungUpA = HungUpSpan.getElementsByTagName('a')[0],
					HungUpImg = HungUpA.getElementsByTagName('img')[0];
				var ImgSrc = HungUpImg.getAttribute('src');
				if (ImgSrc == './images/vdc_LB_hangupcustomer.gif') {
					CallDispo = 'NV';
					CallLogFunction();
					dialedcall_send_hangup('', '', '', '', 'YES');
					setTimeout(() => {
						DispoSelectContent_create('NV', 'ADD', 'YES');
						DispoSelect_submit('', '', 'YES');
					}, 1000);
					resSpan.innerHTML = 'Not Vetran';
					setTimeout(() => {
						resSpan.innerHTML = '';
					}, 3000);
				}
			}
			break;
	}
})
// Call Log function
const SavedList = JSON.parse(localStorage.getItem('CallLogLocalStorage'));
if (SavedList == null) {
	var CallLogObject = [];
	var NumbersArray = [];
} else if (SavedList != null) {
	CallLogObject = SavedList;
	var NumbersArray = [];
	var CallLogObjectFlat = CallLogObject.flat();
	for (var j = 0; j < CallLogObjectFlat.length; j++) {
		NumbersArray.push(CallLogObjectFlat[j].number);
	}
}
const HangupControl = document.getElementById("HangupControl");
HangupControl.addEventListener("click", GetDispo);
const Leave3WayCall = document.getElementById("Leave3WayCall");
Leave3WayCall.addEventListener("click", GetDispo);


var CallDispo;

function CallLogFunction() {
	var number = document.getElementById('phone_numberDISP').innerText; //'                   '
	if (number === '                   ') {
		alert('There is no Number From:CallLogFunction');
	} else {
		var number = document.getElementById('phone_numberDISP').innerText; //'                   '
		var resSpan2 = document.getElementById('Dispospan2');
		var TorF = NumbersArray.includes(number);
		if (TorF == true) {
			/*resSpan2.innerHTML = "I have called This Number before "+number;
				// this is being done at the autoDupCheacker so you can see it before you hung up
				setTimeout(() => {
						resSpan2.innerHTML = '';
					}, 5000);*/
		} else {
			NumbersArray.push(number);
			var first = document.getElementById('first_name').value;
			var last = document.getElementById('last_name').value;
			var address = document.getElementById('address1').value;
			var city = document.getElementById('city').value;
			var state = document.getElementById('state').value;
			var zip = document.getElementById('postal_code').value;
			var email = document.getElementById('email').value;
			var comments = document.getElementById('comments').value;
			var phone_code = document.getElementById('phone_code').value;
			document.getElementById('phone_code').value = 'add';
			var list = CallLogObject.flat();
			let time = new Date();
			time = time.toLocaleString("en-US");
			var NewItem = [{
				"Date": time,
				"number": number,
				"first": first,
				"last": last,
				"address": address,
				"city": city,
				"state": state,
				"zip": zip,
				"email": email,
				"comments": comments,
				"phone_code": phone_code,
				"CallDispo": CallDispo
			}];
			CallLogObject.push(NewItem);
			localStorage.setItem('CallLogLocalStorage', JSON.stringify(CallLogObject))
		}
	}
}

function GetDispo() {
	setTimeout(() => {
		var DispoTable = document.getElementById('DispoSelectBox').style.visibility; //hidden  visible
		if (DispoTable == 'visible') {
			var A = document.querySelector('[onclick="DispoSelectContent_create(\'A\',\'ADD\',\'YES\');return false;"]');
			A.addEventListener("click", function() {
				CallDispo = 'A';
				CallLogFunction();
			});
			var B = document.querySelector('[onclick="DispoSelectContent_create(\'B\',\'ADD\',\'YES\');return false;"]');
			B.addEventListener("click", function() {
				CallDispo = 'B';
				CallLogFunction();
			});
			var CALLBK = document.querySelector('[onclick="DispoSelectContent_create(\'CALLBK\',\'ADD\',\'YES\');return false;"]');
			CALLBK.addEventListener("click", function() {
				CallDispo = 'CALLBK';
				CallLogFunction();
			});
			var DAIR = document.querySelector('[onclick="DispoSelectContent_create(\'DAIR\',\'ADD\',\'YES\');return false;"]');
			DAIR.addEventListener("click", function() {
				CallDispo = 'DAIR';
				CallLogFunction();
			});
			var DC = document.querySelector('[onclick="DispoSelectContent_create(\'DC\',\'ADD\',\'YES\');return false;"]');
			DC.addEventListener("click", function() {
				CallDispo = 'DC';
				CallLogFunction();
			});
			var DEC = document.querySelector('[onclick="DispoSelectContent_create(\'DEC\',\'ADD\',\'YES\');return false;"]');
			DEC.addEventListener("click", function() {
				CallDispo = 'DEC';
				CallLogFunction();
			});
			var DNC = document.querySelector('[onclick="DispoSelectContent_create(\'DNC\',\'ADD\',\'YES\');return false;"]');
			DNC.addEventListener("click", function() {
				CallDispo = 'DNC';
				CallLogFunction();
			});
			var N = document.querySelector('[onclick="DispoSelectContent_create(\'N\',\'ADD\',\'YES\');return false;"]');
			N.addEventListener("click", function() {
				CallDispo = 'N';
				CallLogFunction();
			});
			var NI = document.querySelector('[onclick="DispoSelectContent_create(\'NI\',\'ADD\',\'YES\');return false;"]');
			NI.addEventListener("click", function() {
				CallDispo = 'NI';
				CallLogFunction();
			});
			var NP = document.querySelector('[onclick="DispoSelectContent_create(\'NP\',\'ADD\',\'YES\');return false;"]');
			NP.addEventListener("click", function() {
				CallDispo = 'NP';
				CallLogFunction();
			});
			var NV = document.querySelector('[onclick="DispoSelectContent_create(\'NV\',\'ADD\',\'YES\');return false;"]');
			NV.addEventListener("click", function() {
				CallDispo = 'NV';
				CallLogFunction();
			});
			var SALE = document.querySelector('[onclick="DispoSelectContent_create(\'SALE\',\'ADD\',\'YES\');return false;"]');
			SALE.addEventListener("click", function() {
				CallDispo = 'SALE';
				CallLogFunction();
			});
			var XFER = document.querySelector('[onclick="DispoSelectContent_create(\'XFER\',\'ADD\',\'YES\');return false;"]');
			XFER.addEventListener("click", function() {
				CallDispo = 'XFER';
				CallLogFunction();
			});
		} else {
			console.log('DispoTable != visible', DispoTable);
		}
	}, 1000);
}
//----------------------------------------------------------