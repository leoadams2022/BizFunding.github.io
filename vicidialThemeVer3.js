//9.30
//adding  html elements
const comments = document.querySelector("#comments");
comments.insertAdjacentHTML("afterend", `
	<button onclick="ShowOptions('MyOptionsDiv')" class="myBtn">S/H</button>
	<div id="MyOptionsDiv" class="MyOptionsDiv">
		<select id=\'FormSelect\'>
		<option value=\'New\' selected>New</option>
		<option value=\'Old\'>Old</option>
		</select>

		<Button class=\'myBtn CopyBtn\' onclick=\'Copy()\'>Copy</Button>

		<Button onclick=\'googleForm()\' class=\'myBtn googleFormBtn\'>Our Form</Button>

		<Button onclick=\'MyGoogleForm()\' class=\'myBtn googleFormBtn\'>My Form</Button>
		
		<button onclick="textToAudio(this)"  class="d-default myBtn" id='textToAudioBtn'>talk</button>
		<button onclick="stopTextToAudio()" class="d-none myBtn">stop</button>

		<span id=\'dupspan\' class=\"OnOffSapn\">dupspan</span>
		<br>
		<span id=\'Dispospan\' class=\"OnOffSapn redSpan\"></span>

		<br>

		<span id=\'Dispospan2\'  class=\"OnOffSapn redSpan\"></span>
		<br>
		<button onclick="ShowOptions('moreOptionDiv')" class="myBtn" >more</button>
		<div id="moreOptionDiv" class="MyOptionsDiv">
			<input type=\'number\' id=\'calltime\' value=\'10\'>

			<button class=\"myBtn OnOffBtn\" onclick=\"Switcher('FucnOnOffSapn', 'AutOn', 'AutOff', OnOff)\">Aut</button>

			<button class=\"myBtn OnOffBtn\" onclick=\"Switcher('randomFucnOnOffSapn', 'RanOn', 'RanOff', randomOnOff)\">Ran</button>
				
			<button class=\"myBtn OnOffBtn\" onclick=\"Switcher('autotextToAudioOnOffSpan', 'AutTalkOn', 'AutTalkOff', autotextToAudioOnOff)\">AutTalk</button>
			
			<span class=\'OnOffSapn greenSpan\' id=\'FucnOnOffSapn\'>AutOff</span>

			<span class=\'OnOffSapn redSpan\' id=\'randomFucnOnOffSapn\'>RanOn</span>
			
			<span class=\'OnOffSapn redSpan\' id=\'autotextToAudioOnOffSpan\'>AutTalkOn</span>
			
			<br>
			<!--CHANGE-->
			<button class=\"myBtn OnOffBtn\" onclick=\"Switcher('AutMuSpan', 'AutMuOn', 'AutMuOff', AutMuOnOff)\">AutMu</button>

			<button class=\"myBtn OnOffBtn\" onclick=\"Switcher('RecMuSapn', 'RecMuOn', 'RecMuOff', isRecMuted)\">RecMu</button>

			<span class=\'OnOffSapn greenSpan\' id=\'AutMuSpan\'>AutMuOff</span>

			<span class=\'OnOffSapn greenSpan\' id=\'RecMuSapn\'>RecMuOff</span>
		</div>
	</div>
`);
//                ---------------------------
// Adding the Styles 
const Head = document.querySelector("head");
Head.insertAdjacentHTML("afterbegin", `
	<style>
		\n* {
    \ncolor: white !important;
    \n
}

\nhtml {
    \nbackground: #2e4f53 !important;
    \n
}

\ntd {
    \n background: #2e4f53 !important;
    \n color: white !important;
    \n font-weight: bold;
    \nfont-size: 20px !important;
    \n
}

\na {
    \ncolor: #03a9f4 !important;
    \n
}

\ninput {
    \ncolor: black !important;
    \n font-size: 12px !important;
    \n font-weight: 700 !important;
    \n
}

\nspan#AgentViewStatus table tbody tr td {
    \nbackground: none !important;
    \n
}

\nspan#AgentViewStatus table tbody tr td font {
    \ncolor: black !important;
    \n
}

\nspan#AgentViewSpan {
    \nbackground: #2e4f53 !important;
    \nright: 0px !important;
    \nleft: auto !important;
    \nheight: auto !important;
    \noverflow: auto !important;
    \n
}

\nspan#MainStatuSSpan {
    \nbackground: none !important;
    \n
}

\n textarea#comments {
    color: black !important;
    width: 100%;
}



.myBtn {
    margin: 5px;
    color: black !important;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;

}

.myBtn:hover {
    background: #d8bfd8;

}

select#FormSelect,
select#FormSelect option {
    color: black !important;
}

select#FormSelect,
select.FormSelect {
    height: 27px;
    border-radius: 10px;
    font-weight: bold;
    margin: 5px;
    color: black !important;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;

}

input#calltime {
    width: 50px;

}

span.OnOffSapn {
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
}

.greenSpan {
    color: #00ff0a !important;
}

.redSpan {
    color: #ff9999 !important;
}

span#RecorDMute {
    /*display: none;*/
}

.MyOptionsDiv {
    opacity: 0;
    transition: opacity 0.5s;
}

.show {
    opacity: 1;
}

.d-none {
    display: none;
}

.d-default {
    display: initial;
}

#comments {
    font-size: 15px;
    font-weight: 600;
}

	</stlye>
`);
//                ---------------------------
//ShowOptions function
function ShowOptions(divId) {
	let MyOptionsDiv = document.getElementById(divId);
	MyOptionsDiv.classList.toggle('show');
}
//                ---------------------------
// reset the autoHnangup when user hungup
function IhungedUpFun() {
	clearTimeout(hungupFun);
	clearTimeout(DispoFun);
	clearTimeout(AutoHangupFun);
	setTimeout(AutoHangup, 1000);
	GetDispo();
	console.log('%cIhungedUpFun clicked', 'color: green;');
}
//                ---------------------------
//let AutMuOnOff = { case: 'On', ToF: false };
// onclick="Switcher('RecMuSapn', 'RecMuOn', 'RecMuOff', isRecMuted)"
function Switcher(spanId, spanOnVal, spanOffVal, OnOffObj)//(string,string,string varStr, bloean )
{
	const resSpan = document.getElementById(spanId);
	if (OnOffObj.case === 'On') {
		OnOffObj.case = 'Off';
		resSpan.innerHTML = spanOffVal;
		resSpan.classList.remove('redSpan');
		resSpan.classList.add('greenSpan');
		if ("ToF" in OnOffObj) {
			OnOffObj.ToF = true;
		}
		if ("OffFunc" in OnOffObj) {
			OnOffObj.OffFunc();
		}
	} else if (OnOffObj.case === 'Off') {
		OnOffObj.case = 'On';
		resSpan.innerHTML = spanOnVal;
		resSpan.classList.add('redSpan');
		resSpan.classList.remove('greenSpan');
		if ("OnFunc" in OnOffObj) {
			OnOffObj.OnFunc();
		}
	}
}
// autoMute function
// CHANGE
let AutMuOnOff = { case: 'Off', ToF: false };
// let AutMuOnOff = 'Off';
// let isItMuted = false;
// function autoMute() {
// 	var resSpan = document.getElementById('AutMuSpan');
// 	if (AutMuOnOff === 'On') {
// 		AutMuOnOff = 'Off';
// 		resSpan.innerHTML = 'AutMuOff';
// 		resSpan.classList.remove('redSpan');
// 		resSpan.classList.add('greenSpan');
// 		isItMuted = true;
// 	} else if (AutMuOnOff === 'Off') {
// 		AutMuOnOff = 'On';
// 		resSpan.innerHTML = 'AutMuOn';
// 		resSpan.classList.add('redSpan');
// 		resSpan.classList.remove('greenSpan');
// 	}
// }
//                ---------------------------
//MuteRecording function
// CHANGE 
let isRecMuted = { case: 'Off', OnFunc: function () { MuteRecording('on') }, OffFunc: function () { MuteRecording('off') } };
// let isRecMuted = false;
// function MuteRecordingOnOff() {
// 	var resSpan = document.getElementById('RecMuSapn');
// 	if (isRecMuted == true) {
// 		MuteRecording('off');
// 		isRecMuted = false;
// 		resSpan.innerHTML = 'RecMuOff';
// 		resSpan.classList.remove('redSpan');
// 		resSpan.classList.add('greenSpan');
// 	} else if (isRecMuted == false) {
// 		MuteRecording('on');
// 		isRecMuted = true;
// 		resSpan.innerHTML = 'RecMuOn';
// 		resSpan.classList.add('redSpan');
// 		resSpan.classList.remove('greenSpan');
// 	}
// }
//                ---------------------------
let OnOff = { case: 'Off' };
//Switcher('FucnOnOffSapn', 'AutOn', 'AutOff', OnOff)
// let OnOff = 'Off';
// function AutoHungupOnOff() {
// 	var resSpan = document.getElementById('FucnOnOffSapn');
// 	if (OnOff === 'On') {
// 		OnOff = 'Off';
// 		resSpan.innerHTML = 'AutOff';
// 		resSpan.classList.remove('redSpan');
// 		resSpan.classList.add('greenSpan');
// 	} else if (OnOff === 'Off') {
// 		OnOff = 'On';
// 		resSpan.innerHTML = 'AutOn';
// 		resSpan.classList.add('redSpan');
// 		resSpan.classList.remove('greenSpan');
// 	}
// }
//                ---------------------------
let randomOnOff = { case: 'On' };
// Switcher('randomFucnOnOffSapn', 'RanOn', 'RanOff', randomOnOff)
// let randomOnOff = 'On';
// function randomAutoHungupOnOff() {
// 	var resSpan = document.getElementById('randomFucnOnOffSapn');
// 	if (randomOnOff === 'On') {
// 		randomOnOff = 'Off';
// 		resSpan.innerHTML = 'RanOff';
// 		resSpan.classList.remove('redSpan');
// 		resSpan.classList.add('greenSpan');
// 	} else if (randomOnOff === 'Off') {
// 		randomOnOff = 'On';
// 		resSpan.innerHTML = 'RanOn';
// 		resSpan.classList.add('redSpan');
// 		resSpan.classList.remove('greenSpan');
// 	}
// }
//                ---------------------------
// var's to setTimeout so we can reset it outside the  AutoHangup function
var hungupFun;
var DispoFun;
var AutoHangupFun;
//                ---------------------------
// function to get a randome Disop
function randomDspo() {
	let Arr1, ArrRes, dispoCode, fullDispo;
	Arr1 = ["\'N\'", "\'A\'", "\'NI\'", "\'NV\'"];
	dispoCode = Arr1[Math.floor(Math.random() * Arr1.length)];
	fullDispo = dispoCode + ", \'ADD\', \'YES\'";
	ArrRes = { fullDispo: fullDispo, dispoCode: dispoCode };
	return ArrRes;
}
//                ---------------------------
// function to get a randome Number btween 5 and 30 or any other numbers
function randomNum(fiveToThirty = true, num1 = 5, num2 = 30) {
	let numsArr = [];
	if (fiveToThirty == false) {
		for (let i = num1; i <= num2; i++) {
			numsArr.push(i);
		}
	} else {
		numsArr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
	}
	let randomNum = numsArr[Math.floor(Math.random() * numsArr.length)];
	ArrRes = { 'randomNum': randomNum, 'numsArr': numsArr };
	return ArrRes;
}
//                ---------------------------
function HungUpAndDispo(action = 'hungupAndDiop', fullDispo = "\'NI\', \'ADD\', \'YES\'", funcBeforDispo = () => { console.log('funcBeforDispo') }) {
	if (ativeCallCheack()) { // there is an active call
		if (action === 'hungupAndDiop') {
			dialedcall_send_hangup('', '', '', '', 'YES');
			funcBeforDispo();
			setTimeout(() => { // give it a sec to show the dispo panl
				if (visibleDispoPanlCheack()) { // the dispo panle is visibale 
					DispoSelectContent_create(fullDispo);
					DispoSelect_submit('', '', 'YES');
					return { case: true };
				} else { return { case: false, reason: 'dispo panl not visibale' } }
			}, 1000);
		} else if (action === 'justHungup') {
			dialedcall_send_hangup('', '', '', '', 'YES');
			return { case: true }
		} else if (action === 'justDiosp') {
			if (visibleDispoPanlCheack()) { // the dispo panle is visibale 
				DispoSelectContent_create(fullDispo);
				DispoSelect_submit('', '', 'YES');
				return { case: true }
			} else { return { case: false, reason: 'dispo panl not visibale' } }
		}
	} else {
		return { case: false, reason: 'no active call' }
	}
}
// the AutoHangup function
function AutoHangup() {
	var timeOftheCall;
	if (randomOnOff.case == 'On') {
		timeOftheCall = randomNum()['randomNum'];
	} else {
		//this is the time of the call by SEC's you can change is as u like
		timeOftheCall = document.getElementById('calltime').value;
	}
	var funcOn = '';
	// var HungUpSpan = document.getElementById('HangupControl'),
	// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0];
	// if (typeof HungUpA === 'undefined') 
	if (!ativeCallCheack()) { //check if there is a call
		funcOn = 'off'; //there is no call
		console.log('%cthere is no active call have setTimeout for the func as 1000', 'color: green;');
	} else { //there is call
		funcOn = 'on'
		console.log('%ccall is active func started', 'color: green;');
		// getimg a random dspo rady;
		let randomDispoObj = randomDspo();
		let fullDispo = randomDispoObj.fullDispo;
		let dispoCode = randomDispoObj.dispoCode;
		function hungup() {
			if (OnOff.case === 'On') {
				console.log('%cOnOff is On', 'color: green;');
				// var HungUpSpan = document.getElementById('HangupControl'),
				// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0],
				// 	HungUpImg = HungUpA.getElementsByTagName('img')[0];
				// var ImgSrc = HungUpImg.getAttribute('src');
				// if (ImgSrc == './images/vdc_LB_hangupcustomer.gif') 
				// if (ativeCallCheack()) {//
				// dialedcall_send_hangup('', '', '', '', 'YES');
				let hungupFunc = HungUpAndDispo('justHungup')
				CallDispo = dispoCode;
				CallLogFunction();
				console.log('%c', hungupFunc.case + hungupFunc.reason, 'color: green;');
				// } else {
				// console.log('%cImgSrc is not good cant hungup', 'color: red;');
				// }
			} else if (OnOff.case === 'Off') {
				console.log('%cOnOff is Off didnt hungup the call', 'color: red;');
			}
		}; // the time of the call let's call it X
		hungupFun = setTimeout(hungup, Number(timeOftheCall) * 1000);
		function Dispo() {
			// const DispoSelectBox = document.querySelector('#DispoSelectBox');
			// const visibility = DispoSelectBox.style.visibility;
			// //makeing sure that the Dispo page is visibleq	
			// if (visibility === 'visible') 
			// if (visibleDispoPanlCheack()) {
			// let visibility = 'true';
			// console.log('%cDispo table is visible', 'color: green;');
			// DispoSelectContent_create(fullDispo);
			// DispoSelect_submit('', '', 'YES');
			let dispoFunc = HungUpAndDispo('justDiosp', fullDispo)
			console.log('%chave Disopstioned as ' + fullDispo, dispoFunc.case + dispoFunc.reason, 'color: green;');
			var resSpan = document.getElementById('Dispospan');
			resSpan.innerHTML = fullDispo;
			setTimeout(() => {
				resSpan.innerHTML = '';
			}, 3000);
			// } else {
			// 	console.log('%cdid not Disopstion the Disop table is =  ' + visibleDispoPanlCheack(), 'color: red;');
			// }
		} //this have to be X+2
		DispoFun = setTimeout(Dispo, (Number(timeOftheCall) + 2) * 1000);
	}
	if (funcOn === 'off') {
		AutoHangupFun = setTimeout(AutoHangup, 1000); //this shuld always be 1000
	} else if (funcOn === 'on') {
		AutoHangupFun = setTimeout(AutoHangup, (Number(timeOftheCall) + 3) * 1000); // this have to always be X+3
		console.log('%chave setTimeout for the func as ' + Number(timeOftheCall), 'color: green;');
	}
}
setTimeout(AutoHangup, 1000); //this shuld always be 1000
//                ---------------------------
// auto hung up when cust hungs up function
// cheak if there is a active call 
function ativeCallCheack(type = 'a') {
	if (type === 'a') {
		var HungUpSpan = document.getElementById('HangupControl'),
			HungUpA = HungUpSpan.getElementsByTagName('a')[0];
		if (typeof HungUpA === 'undefined') {
			// there is an active call
			return false;
		} else {
			// there is no active call
			return true;
		}
	} else if (type === 'img') {
		var HungUpSpan = document.getElementById('HangupControl'),
			HungUpA = HungUpSpan.getElementsByTagName('a')[0],
			HungUpImg = HungUpA.getElementsByTagName('img')[0];
		var ImgSrc = HungUpImg.getAttribute('src');
		let imgSrcArr = ImgSrc.split('/');
		let imgName = imgSrcArr[imgSrcArr.length - 1];
		if (imgName == 'vdc_LB_hangupcustomer.gif') {
			// there is an active call
			return true;
		} else {
			// there is no active call
			return false;
		}

	}
}
// chaeck for visible dispo panl
function visibleDispoPanlCheack() {
	const DispoSelectBox = document.querySelector('#DispoSelectBox');
	const visibility = DispoSelectBox.style.visibility;
	//makeing sure that the Dispo page is visibleq	
	if (visibility === 'visible') {
		return true;
	} else {
		return false;
	}
}
//chaeck if cust hungup
function custHungupCheack() {
	var TabsSpan = document.getElementById('Tabs'),
		table = TabsSpan.getElementsByTagName('table')[0],
		tbody = table.getElementsByTagName('tbody')[0],
		tr = tbody.getElementsByTagName('tr')[0],
		td = tr.getElementsByTagName('td')[3],
		img = td.getElementsByTagName('img')[0];
	var ImgSrc = img.getAttribute('src');
	let ImgSrcArr = ImgSrc.split('/');
	let ImgName = ImgSrcArr[ImgSrcArr.length - 1];
	// if (ImgSrc == 'https://ngs1.mscall.net/agc/images/agc_live_call_DEAD.gif' || ImgSrc == 'https://ngs2.mscall.net/agc/images/agc_live_call_DEAD.gif' || ImgSrc == 'https://ngs3.mscall.net/agc/images/agc_live_call_DEAD.gif') 
	if (ImgName == 'agc_live_call_DEAD.gif') {
		return true;
	} else {
		return false;
	}
}
function CustHungUp() {
	var TransferVisibility = document.querySelector('#TransferMain').style.visibility;
	if (TransferVisibility === 'visible') {
		/*transfer panl is on wont do anything*/
	} else {
		// let custHungupCheackV = custHungupCheack();
		if (custHungupCheack()) {
			console.log('%cCust haungup', 'color: blue;');
			// let ativeCallCheackV = ativeCallCheack();
			/*
			ar HungUpSpan = document.getElementById('HangupControl'),
				HungUpA = HungUpSpan.getElementsByTagName('a')[0],
				HungUpImg = HungUpA.getElementsByTagName('img')[0];
			var ImgSrc = HungUpImg.getAttribute('src');
			if (ImgSrc == './images/vdc_LB_hangupcustomer.gif')
			*/
			let hungupwithdispo = HungUpAndDispo('hungupAndDiop', "\'NI\', \'ADD\', \'YES\'", () => {
				clearTimeout(hungupFun)
				clearTimeout(DispoFun)
				clearTimeout(AutoHangupFun)
				CallDispo = 'NI';
				CallLogFunction();
			});
			console.log('%chave hungup with dispo ', hungupwithdispo.case, ' ', hungupwithdispo.reason, 'color: blue;');
			// if (ativeCallCheack('img')) {
			// CallDispo = 'NI';
			// CallLogFunction();
			// dialedcall_send_hangup('', '', '', '', 'YES');
			// console.log('%cImgSrc is good just hungedup the call', 'color: blue;');
			// clearTimeout(hungupFun);
			// clearTimeout(DispoFun);
			// clearTimeout(AutoHangupFun);
			// console.log('%ccanceled timeout for hungupFun & DispoFun & AutoHangupFun and have set timeout as 1000', 'color: blue;');
			// setTimeout(() => {
			// 	// let visibleDispoPanlCheackV = visibleDispoPanlCheack();
			// 	if (visibleDispoPanlCheack()) {
			// 		DispoSelectContent_create('NI', 'ADD', 'YES');
			// 		DispoSelect_submit('', '', 'YES');
			// 		console.log('%chave Disopstioned as ANS', 'color: blue;');
			// 	}
			// }, 1000);
			setTimeout(AutoHangup, 2000);
			var resSpan = document.getElementById('Dispospan');
			resSpan.innerHTML = 'Cust HungUp Not Interested';
			setTimeout(() => {
				resSpan.innerHTML = '';
			}, 4000);
			// }
		} else { }
	}
}
setInterval(CustHungUp, 1000);
//                ---------------------------
// the hungup with the keyboared function
document.getElementById('post_phone_time_diff_span').style.visibility = 'visible';
document.addEventListener("keydown", function (event) {
	var resSpan = document.getElementById('Dispospan');
	switch (event.which) {
		case 112:
			event.preventDefault();
			// var HungUpSpan = document.getElementById('HangupControl'),
			// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0];
			if (!ativeCallCheack()) {
				alert('There is no active call to hungup');
			} else {
				// var HungUpSpan = document.getElementById('HangupControl'),
				// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0],
				// 	HungUpImg = HungUpA.getElementsByTagName('img')[0];
				// var ImgSrc = HungUpImg.getAttribute('src');
				// if (ImgSrc == './images/vdc_LB_hangupcustomer.gif') 
				HungUpAndDispo('hungupAndDiop', "\'N\', \'ADD\', \'YES\'", () => {
					clearTimeout(hungupFun)
					clearTimeout(DispoFun)
					clearTimeout(AutoHangupFun)
					CallDispo = 'N';
					CallLogFunction();
				});
				setTimeout(AutoHangup, 2000);
				resSpan.innerHTML = 'No Answer';
				setTimeout(() => {
					resSpan.innerHTML = '';
				}, 4000);
				// if (ativeCallCheack('img')) {
				// 	clearTimeout(hungupFun);
				// 	clearTimeout(DispoFun);
				// 	clearTimeout(AutoHangupFun);
				// 	console.log('%cIhungedUpFun clicked', 'color: green;');
				// 	dialedcall_send_hangup('', '', '', '', 'YES');
				// 	CallDispo = 'N';
				// 	CallLogFunction();
				// 	setTimeout(() => {
				// 		DispoSelectContent_create('N', 'ADD', 'YES');
				// 		DispoSelect_submit('', '', 'YES');
				// 	}, 1000);
				// 	setTimeout(AutoHangup, 2000);
				// 	resSpan.innerHTML = 'No Answer';
				// 	setTimeout(() => {
				// 		resSpan.innerHTML = '';
				// 	}, 4000);
				// }
			}
			break;
		case 113:
			event.preventDefault();
			// var HungUpSpan = document.getElementById('HangupControl'),
			// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0];
			// if (typeof HungUpA === 'undefined')
			if (!ativeCallCheack()) {
				alert('There is no active call to hungup');
			} else {
				// var HungUpSpan = document.getElementById('HangupControl'),
				// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0],
				// 	HungUpImg = HungUpA.getElementsByTagName('img')[0];
				// var ImgSrc = HungUpImg.getAttribute('src');
				// if (ImgSrc == './images/vdc_LB_hangupcustomer.gif')
				HungUpAndDispo('hungupAndDiop', "\'A\', \'ADD\', \'YES\'", () => {
					clearTimeout(hungupFun)
					clearTimeout(DispoFun)
					clearTimeout(AutoHangupFun)
					CallDispo = 'N';
					CallLogFunction();
				});
				setTimeout(AutoHangup, 2000);
				resSpan.innerHTML = 'Answering Machine';
				setTimeout(() => {
					resSpan.innerHTML = '';
				}, 4000);
				// if (ativeCallCheack('img')) {
				// 	clearTimeout(hungupFun);
				// 	clearTimeout(DispoFun);
				// 	clearTimeout(AutoHangupFun);
				// 	console.log('%cIhungedUpFun clicked', 'color: green;');
				// 	dialedcall_send_hangup('', '', '', '', 'YES');
				// 	CallDispo = 'A';
				// 	CallLogFunction();
				// 	setTimeout(() => {
				// 		DispoSelectContent_create('A', 'ADD', 'YES');
				// 		DispoSelect_submit('', '', 'YES');
				// 	}, 1000);
				// 	setTimeout(AutoHangup, 2000);
				// 	resSpan.innerHTML = 'Answering Machine';
				// 	setTimeout(() => {
				// 		resSpan.innerHTML = '';
				// 	}, 4000);
				// }
			}
			break;
		case 114:
			event.preventDefault();
			// var HungUpSpan = document.getElementById('HangupControl'),
			// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0];
			// if (typeof HungUpA === 'undefined')
			if (!ativeCallCheack()) {
				alert('There is no active call to hungup');
			} else {
				// var HungUpSpan = document.getElementById('HangupControl'),
				// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0],
				// 	HungUpImg = HungUpA.getElementsByTagName('img')[0];
				// var ImgSrc = HungUpImg.getAttribute('src');
				// if (ImgSrc == './images/vdc_LB_hangupcustomer.gif')
				HungUpAndDispo('hungupAndDiop', "\'NI\', \'ADD\', \'YES\'", () => {
					clearTimeout(hungupFun)
					clearTimeout(DispoFun)
					clearTimeout(AutoHangupFun)
					CallDispo = 'N';
					CallLogFunction();
				});
				setTimeout(AutoHangup, 2000);
				resSpan.innerHTML = 'Not Interested';
				setTimeout(() => {
					resSpan.innerHTML = '';
				}, 4000);
				// if (ativeCallCheack('img')) {
				// 	clearTimeout(hungupFun);
				// 	clearTimeout(DispoFun);
				// 	clearTimeout(AutoHangupFun);
				// 	console.log('%cIhungedUpFun clicked', 'color: green;');
				// 	dialedcall_send_hangup('', '', '', '', 'YES');
				// 	CallDispo = 'NI';
				// 	CallLogFunction();
				// 	setTimeout(() => {
				// 		DispoSelectContent_create('NI', 'ADD', 'YES');
				// 		DispoSelect_submit('', '', 'YES');
				// 	}, 1000);
				// 	setTimeout(AutoHangup, 2000);
				// 	resSpan.innerHTML = 'Not Interested';
				// 	setTimeout(() => {
				// 		resSpan.innerHTML = '';
				// 	}, 4000);
				// }
			}
			break;
		case 115:
			event.preventDefault();
			// var HungUpSpan = document.getElementById('HangupControl'),
			// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0];
			// if (typeof HungUpA === 'undefined')
			if (!ativeCallCheack()) {
				alert('There is no active call to hungup');
			} else {
				// var HungUpSpan = document.getElementById('HangupControl'),
				// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0],
				// 	HungUpImg = HungUpA.getElementsByTagName('img')[0];
				// var ImgSrc = HungUpImg.getAttribute('src');
				// if (ImgSrc == './images/vdc_LB_hangupcustomer.gif')
				HungUpAndDispo('hungupAndDiop', "\'NV\', \'ADD\', \'YES\'", () => {
					clearTimeout(hungupFun)
					clearTimeout(DispoFun)
					clearTimeout(AutoHangupFun)
					CallDispo = 'N';
					CallLogFunction();
				});
				setTimeout(AutoHangup, 2000);
				resSpan.innerHTML = 'Not Vetran';
				setTimeout(() => {
					resSpan.innerHTML = '';
				}, 4000);
				// if (ativeCallCheack('img')) {
				// 	clearTimeout(hungupFun);
				// 	clearTimeout(DispoFun);
				// 	clearTimeout(AutoHangupFun);
				// 	console.log('%cIhungedUpFun clicked', 'color: green;');
				// 	dialedcall_send_hangup('', '', '', '', 'YES');
				// 	CallDispo = 'NV';
				// 	CallLogFunction();
				// 	setTimeout(() => {
				// 		DispoSelectContent_create('NV', 'ADD', 'YES');
				// 		DispoSelect_submit('', '', 'YES');
				// 	}, 1000);
				// 	setTimeout(AutoHangup, 2000);
				// 	resSpan.innerHTML = 'Not Vetran';
				// 	setTimeout(() => {
				// 		resSpan.innerHTML = '';
				// 	}, 4000);
				// }
			}
			break;
		case 123:
			event.preventDefault();
			AutoHungupOnOff();
			break;
	}
})
//                ---------------------------
//Copy function
function Copy() {
	var number = document.getElementById('phone_numberDISP').innerText;
	var first = document.getElementById('first_name').value;
	var last = document.getElementById('last_name').value;
	navigator.clipboard.writeText(number + ' ' + first + ' ' + last);
}
//                ---------------------------
// google Form 
function googleForm() {
	// var HungUpSpan = document.getElementById('HangupControl'),
	// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0];
	// if (typeof HungUpA === 'undefined')
	if (!ativeCallCheack()) {
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
//                ---------------------------
// MY  google Form 
function MyGoogleForm() {
	// var HungUpSpan = document.getElementById('HangupControl'),
	// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0];
	// if (typeof HungUpA === 'undefined')
	if (!ativeCallCheack()) {
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
//                ---------------------------
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
//                ---------------------------
// suto mute function;
function autoMute(action) {
	if (AutMuOnOff.case === 'On') {
		if (AutMuOnOff.ToF == true) {//muted
			if (action === 'mute') {
				console.log('%calready Muted,  NO-Active call', 'color: blue;')
			} else if (action === 'unmute') {
				volume_control('UNMUTE', agentchannel, 'AgenT');
				AutMuOnOff.ToF = false;
				console.log('%ci have UN-Muted, isItMuted set to false, Active call', 'color: blue;');
			}
		} else if (AutMuOnOff.ToF == false) {// not muted	
			if (action === 'mute') {
				volume_control('MUTING', agentchannel, 'AgenT');
				AutMuOnOff.ToF = true;
				console.log('%ci have Muted, isItMuted set to true, NO-Active call', 'color: blue;');
			} else if (action === 'unmute') {
				console.log('%calready UN-Muted, Active call', 'color: blue;');
			}
		}
	}
}
// auto check Dup
function AutoCheckDupFun() {
	// var HungUpSpan = document.getElementById('HangupControl'),
	// 	HungUpA = HungUpSpan.getElementsByTagName('a')[0];
	var res = document.getElementById("dupspan");
	var Num = document.getElementById('phone_numberDISP').innerText
	if (!ativeCallCheack()) {
		// console.log('There is no active call to hungup');
		res.innerHTML = "";
		// auto mute part
		// if (AutMuOnOff.case === 'On') {
		// 	if (AutMuOnOff.ToF == true) {
		// 		console.log('%calready Muted,  NO-Active call', 'color: blue;')
		// 	} else if (AutMuOnOff.ToF == false) {
		// 		volume_control('MUTING', agentchannel, 'AgenT');
		// 		AutMuOnOff.ToF = true;
		// 		console.log('%ci have Muted, isItMuted set to true, NO-Active call', 'color: blue;');
		// 	}
		// }
		autoMute('mute');
		/////////////////auto mute part

	} else {
		// auto mute part  {case: 'On',ToF: false }
		// if (AutMuOnOff.case === 'On') {
		// 	if (AutMuOnOff.ToF == true) {
		// 		volume_control('UNMUTE', agentchannel, 'AgenT');
		// 		AutMuOnOff.ToF = false;
		// 		console.log('%ci have UN-Muted, isItMuted set to false, Active call', 'color: blue;');
		// 	} else if (AutMuOnOff.ToF == false) {
		// 		console.log('%calready UN-Muted, Active call', 'color: blue;');
		// 	}
		// }
		autoMute('unmute')
		/////////////////auto mute part

		// auto text To Audio part
		//CHANGE
		// let phone_numberDISP = document.getElementById("phone_numberDISP").innerText; 
		autotextToAudio(Num);
		/////////////////auto text To Audio part

		var SelVal = document.getElementById("FormSelect").value;
		if (SelVal === 'New') {
			if (DupListNew.length === 0) {
				res.innerHTML = "No New dup list in the lucalstorge";
				res.classList.add('redSpan');
				res.classList.remove('greenSpan');
			} else {

				var TorFONew = DupListNew.includes(Num);
				if (TorFONew == true) {
					res.innerHTML = "New=BAD :(";
					res.classList.add('redSpan');
					res.classList.remove('greenSpan');
				} else {
					res.innerHTML = "New=Good :)";
					res.classList.remove('redSpan');
					res.classList.add('greenSpan');
				}
			}
		} else if (SelVal === 'Old') {
			if (DupListOld.length === 0) {
				res.innerHTML = 'No Old dup list in the lucalstorge';
				res.classList.add('redSpan');
				res.classList.remove('greenSpan');
			} else {
				var TorFOld = DupListOld.includes(Num);
				if (TorFOld == true) {
					res.innerHTML = "Old=BAD :(";
					res.classList.add('redSpan');
					res.classList.remove('greenSpan');
				} else {
					res.innerHTML = "Old=Good :)";
					res.classList.remove('redSpan');
					res.classList.add('greenSpan');
				}
			}
		}
		// var number = document.getElementById('phone_numberDISP').innerText;
		var resSpan2 = document.getElementById('Dispospan2');
		var TorF = NumbersArray.includes(Num);
		if (TorF == true) {
			resSpan2.innerHTML = "ReC" + Num;
		} else {
			resSpan2.innerHTML = '';
		}
	}
}
setInterval(AutoCheckDupFun, 1000);
//                ---------------------------
//treger GetDispo and IhungedUpFun when hungup btn or Leave3WayCall btn is clicked
const HangupControl = document.getElementById("HangupControl");
const Leave3WayCall = document.getElementById("Leave3WayCall");

HangupControl.addEventListener("click", GetDispo);

Leave3WayCall.addEventListener("click", GetDispo);

HangupControl.addEventListener("click", IhungedUpFun);

Leave3WayCall.addEventListener("click", IhungedUpFun);
//                ---------------------------
// geting the call log from the local Storage
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
//                ---------------------------
// Call Log function
function CallLogFunction() {
	var number = document.getElementById('phone_numberDISP').innerText; //'                   '
	if (number === '                   ') {
		alert('There is no Number From:CallLogFunction');
	} else {
		var number = document.getElementById('phone_numberDISP').innerText; //'                   '
		var resSpan2 = document.getElementById('Dispospan2');
		var TorF = NumbersArray.includes(number);
		if (TorF == true) {
			CallLogObject.forEach(Element => {
				if (Element[0].number == number) {
					let time = new Date();
					time = time.toLocaleString("en-US");
					Element[0].ReCallDate += `//  ReCallDate: ${time}  //`;
					localStorage.setItem('CallLogLocalStorage', JSON.stringify(CallLogObject));
				}
			})
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
			var CallTime = document.querySelector('#SecondSDISP').innerText;
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
				"CallDispo": CallDispo,
				"ReCallDate": "",
				"CallTime": CallTime
			}];
			CallLogObject.push(NewItem);
			localStorage.setItem('CallLogLocalStorage', JSON.stringify(CallLogObject))
		}
	}
}
//                ---------------------------
// GetDispo function
var CallDispo; // a var to store the GetDispo results in
function GetDispo() {
	setTimeout(() => {
		var DispoTable = document.getElementById('DispoSelectBox').style.visibility; //hidden  visible
		if (DispoTable == 'visible') {
			var A = document.querySelector('[onclick="DispoSelectContent_create(\'A\',\'ADD\',\'YES\');return false;"]');
			A.addEventListener("click", function () {
				CallDispo = 'A';
				CallLogFunction();
			});
			var B = document.querySelector('[onclick="DispoSelectContent_create(\'B\',\'ADD\',\'YES\');return false;"]');
			B.addEventListener("click", function () {
				CallDispo = 'B';
				CallLogFunction();
			});
			var CALLBK = document.querySelector('[onclick="DispoSelectContent_create(\'CALLBK\',\'ADD\',\'YES\');return false;"]');
			CALLBK.addEventListener("click", function () {
				CallDispo = 'CALLBK';
				CallLogFunction();
			});
			var DAIR = document.querySelector('[onclick="DispoSelectContent_create(\'DAIR\',\'ADD\',\'YES\');return false;"]');
			DAIR.addEventListener("click", function () {
				CallDispo = 'DAIR';
				CallLogFunction();
			});
			var DC = document.querySelector('[onclick="DispoSelectContent_create(\'DC\',\'ADD\',\'YES\');return false;"]');
			DC.addEventListener("click", function () {
				CallDispo = 'DC';
				CallLogFunction();
			});
			var DEC = document.querySelector('[onclick="DispoSelectContent_create(\'DEC\',\'ADD\',\'YES\');return false;"]');
			DEC.addEventListener("click", function () {
				CallDispo = 'DEC';
				CallLogFunction();
			});
			var DNC = document.querySelector('[onclick="DispoSelectContent_create(\'DNC\',\'ADD\',\'YES\');return false;"]');
			DNC.addEventListener("click", function () {
				CallDispo = 'DNC';
				CallLogFunction();
			});
			var N = document.querySelector('[onclick="DispoSelectContent_create(\'N\',\'ADD\',\'YES\');return false;"]');
			N.addEventListener("click", function () {
				CallDispo = 'N';
				CallLogFunction();
			});
			var NI = document.querySelector('[onclick="DispoSelectContent_create(\'NI\',\'ADD\',\'YES\');return false;"]');
			NI.addEventListener("click", function () {
				CallDispo = 'NI';
				CallLogFunction();
			});
			var NP = document.querySelector('[onclick="DispoSelectContent_create(\'NP\',\'ADD\',\'YES\');return false;"]');
			NP.addEventListener("click", function () {
				CallDispo = 'NP';
				CallLogFunction();
			});
			var NV = document.querySelector('[onclick="DispoSelectContent_create(\'NV\',\'ADD\',\'YES\');return false;"]');
			NV.addEventListener("click", function () {
				CallDispo = 'NV';
				CallLogFunction();
			});
			var SALE = document.querySelector('[onclick="DispoSelectContent_create(\'SALE\',\'ADD\',\'YES\');return false;"]');
			SALE.addEventListener("click", function () {
				CallDispo = 'SALE';
				CallLogFunction();
			});
			var XFER = document.querySelector('[onclick="DispoSelectContent_create(\'XFER\',\'ADD\',\'YES\');return false;"]');
			XFER.addEventListener("click", function () {
				CallDispo = 'XFER';
				CallLogFunction();
			});
		} else {
			console.log('DispoTable != visible', DispoTable);
		}
	}, 1000);
}
//                ---------------------------
// Text To Speech function
let autotextToAudioOnOff = { case: 'On' };
// Switcher('autotextToAudioOnOffSpan', 'AutTalkOn', 'AutTalkOff', autotextToAudioOnOff)
// let autotextToAudioOnOff = 'On';
// function autotextToAudioOnOffFunc() {
// 	var resSpan = document.getElementById('autotextToAudioOnOffSpan');
// 	if (autotextToAudioOnOff === 'On') {
// 		autotextToAudioOnOff = 'Off';
// 		resSpan.innerHTML = 'AutTalkOff';
// 		resSpan.classList.remove('redSpan');
// 		resSpan.classList.add('greenSpan');
// 	} else {
// 		autotextToAudioOnOff = 'On';
// 		resSpan.innerHTML = 'AutTalkOn';
// 		resSpan.classList.add('redSpan');
// 		resSpan.classList.remove('greenSpan');
// 	}
// }
let oldNumber = 'no number';
function autotextToAudio(newNumber) {

	if (autotextToAudioOnOff.case === 'On') {
		if (oldNumber != newNumber) {
			let textToAudioBtn = document.getElementById("textToAudioBtn");
			textToAudio(textToAudioBtn);
			oldNumber = newNumber;
		}
	}
}
function stopTextToAudio() {
	window.speechSynthesis.cancel();
}
function textToAudio(span) {
	const first_name = document.getElementById("first_name").value;
	const last_name = document.getElementById("last_name").value;
	const msg = first_name + ' ' + last_name
	let speech = new SpeechSynthesisUtterance();
	speech.voiceURI = 'Google US English';
	speech.lang = 'en-US';
	speech.name = 'Google US English';
	speech.text = msg;
	const synth = window.speechSynthesis;
	synth.speak(speech);
	// console.log(span.nextElementSibling)

	function everyTime() {
		if (!synth.speaking) {
			clearInterval(myInterval);
			span.classList.remove('d-none');
			span.classList.add('d-default');
			span.nextElementSibling.classList.add('d-none');
			span.nextElementSibling.classList.remove('d-default');
		} else {
			if (span.classList.contains('d-default')) {
				span.classList.remove('d-default');
				span.classList.add('d-none');
				span.nextElementSibling.classList.add('d-default');
				span.nextElementSibling.classList.remove('d-none');
			}
		}
	}
	var myInterval = setInterval(everyTime, 50);

}
