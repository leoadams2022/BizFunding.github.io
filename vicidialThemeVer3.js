// 1.40
//adding  html elements
const commentss = document.querySelector("#comments");
commentss.insertAdjacentHTML("afterend", `
	<button onclick="ShowOptions('MyOptionsDiv')" class="myBtn">S/H</button>
	<div id="MyOptionsDiv" class="MyOptionsDiv">
		

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

			<button class=\"myBtn OnOffBtn\" onclick=\"AutoHungupOnOff()\">Aut</button>

			<button class=\"myBtn OnOffBtn\" onclick=\"randomAutoHungupOnOff()\">Ran</button>
				
			<button class=\"myBtn OnOffBtn\" onclick=\"autotextToAudioOnOffFunc()\">AutTalk</button>
			
			<span class=\'OnOffSapn greenSpan\' id=\'FucnOnOffSapn\'>AutOff</span>

			<span class=\'OnOffSapn redSpan\' id=\'randomFucnOnOffSapn\'>RanOn</span>
			
			<span class=\'OnOffSapn redSpan\' id=\'autotextToAudioOnOffSpan\'>AutTalkOn</span>
			
			<br>

			<button class=\"myBtn OnOffBtn\" onclick=\"autoMute()\">AutMu</button>

			<button class=\"myBtn OnOffBtn\" onclick=\"MuteRecordingOnOff()\">RecMu</button>

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

//   --------------------------- SWITCHERS  ---------------------------
// autoMute switch function
let AutMuOnOff = 'Off';
let isItMuted = false;
function autoMute() {
    var resSpan = document.getElementById('AutMuSpan');
    if (AutMuOnOff === 'On') {
        AutMuOnOff = 'Off';
        resSpan.innerHTML = 'AutMuOff';
        resSpan.classList.remove('redSpan');
        resSpan.classList.add('greenSpan');
        isItMuted = true;
    } else if (AutMuOnOff === 'Off') {
        AutMuOnOff = 'On';
        resSpan.innerHTML = 'AutMuOn';
        resSpan.classList.add('redSpan');
        resSpan.classList.remove('greenSpan');
    }
}
//                ---------------------------
// AutoHungupOnOff switch function
let OnOff = 'Off';
function AutoHungupOnOff() {
    var resSpan = document.getElementById('FucnOnOffSapn');
    if (OnOff === 'On') {
        OnOff = 'Off';
        resSpan.innerHTML = 'AutOff';
        resSpan.classList.remove('redSpan');
        resSpan.classList.add('greenSpan');
    } else if (OnOff === 'Off') {
        OnOff = 'On';
        resSpan.innerHTML = 'AutOn';
        resSpan.classList.add('redSpan');
        resSpan.classList.remove('greenSpan');
    }
    alert('AutoHungup function is still ')
}
//                ---------------------------
// randomAutoHungupOnOff switch function
let randomOnOff = 'On';
function randomAutoHungupOnOff() {
    var resSpan = document.getElementById('randomFucnOnOffSapn');
    if (randomOnOff === 'On') {
        randomOnOff = 'Off';
        resSpan.innerHTML = 'RanOff';
        resSpan.classList.remove('redSpan');
        resSpan.classList.add('greenSpan');
    } else if (randomOnOff === 'Off') {
        randomOnOff = 'On';
        resSpan.innerHTML = 'RanOn';
        resSpan.classList.add('redSpan');
        resSpan.classList.remove('greenSpan');
    }
}
//                ---------------------------
// autotextToAudioOnOffFunc switch function
let autotextToAudioOnOff = 'On';
function autotextToAudioOnOffFunc() {
    var resSpan = document.getElementById('autotextToAudioOnOffSpan');
    if (autotextToAudioOnOff === 'On') {
        autotextToAudioOnOff = 'Off';
        resSpan.innerHTML = 'AutTalkOff';
        resSpan.classList.remove('redSpan');
        resSpan.classList.add('greenSpan');
    } else {
        autotextToAudioOnOff = 'On';
        resSpan.innerHTML = 'AutTalkOn';
        resSpan.classList.add('redSpan');
        resSpan.classList.remove('greenSpan');
    }
}
//MuteRecording switch function this is the full function
let isRecMuted = false;
function MuteRecordingOnOff() {
    var resSpan = document.getElementById('RecMuSapn');
    if (isRecMuted == true) {
        MuteRecording('off');
        isRecMuted = false;
        resSpan.innerHTML = 'RecMuOff';
        resSpan.classList.remove('redSpan');
        resSpan.classList.add('greenSpan');
    } else if (isRecMuted == false) {
        MuteRecording('on');
        isRecMuted = true;
        resSpan.innerHTML = 'RecMuOn';
        resSpan.classList.add('redSpan');
        resSpan.classList.remove('greenSpan');
    }
}
//                ---------------------------
//   --------------------------- //SWITCHERS  ---------------------------

//   --------------------------- Help Functions  ---------------------------
// function to get a randome Disop
function randomDspo() {
    let Arr1, ArrRes, dispoCode, fullDispo;
    Arr1 = ["\'N\'", "\'A\'", "\'NI\'", "\'NV\'"];
    dispoCode = Arr1[Math.floor(Math.random() * Arr1.length)];
    fullDispo = fullDispo + ", \'ADD\', \'YES\'";
    ArrRes = { 'fullDispo': fullDispo, 'dispoCode': dispoCode };
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
// cheack if there is an active call
function cheackActiveCall(type = 'a') { // false : no active call true: active call
    if (type === 'a') {
        var HungUpSpan = document.getElementById('HangupControl'),
            HungUpA = HungUpSpan.getElementsByTagName('a')[0];
        if (typeof HungUpA === 'undefined') {
            // there is no call 
            return false;
        } else {
            return true;
        }
    } else if (type === 'img') {
        var HungUpSpan = document.getElementById('HangupControl'),
            HungUpA = HungUpSpan.getElementsByTagName('a')[0],
            HungUpImg = HungUpA.getElementsByTagName('img')[0];
        var ImgSrc = HungUpImg.getAttribute('src');
        if (ImgSrc == './images/vdc_LB_hangupcustomer.gif') {
            // there is an active call
            return true;
        } else {
            return false;
        }
    }

}
//                ---------------------------
// check if cust hungup
function cheackCustHungUP() {
    if (cheackActiveCall()) {
        var TabsSpan = document.getElementById('Tabs'),
            table = TabsSpan.getElementsByTagName('table')[0],
            tbody = table.getElementsByTagName('tbody')[0],
            tr = tbody.getElementsByTagName('tr')[0],
            td = tr.getElementsByTagName('td')[3],
            img = td.getElementsByTagName('img')[0];
        var ImgSrc = img.getAttribute('src');
        let ImgSrcArr = ImgSrc.split('/');
        let ImgName = ImgSrcArr[ImgSrcArr.length - 1];
        if (ImgName == 'agc_live_call_DEAD.gif') {
            //cust did hung up
            return true;
        } else {
            return false;
        }
    } else {
        return 'no active call';
    }
}
//                ---------------------------
// cheack dispo panl visiblty
function cheackDispoPanlVisibalty() {
    //makeing sure that the Dispo page is visibleq	
    const DispoSelectBox = document.querySelector('#DispoSelectBox');
    const visibility = DispoSelectBox.style.visibility;
    if (visibility === 'visible') {
        return true;
    } else {
        return false;
    }
}
// hungup and dispo function
function hungupAndDispo(fullDispo = "\'NI\', \'ADD\', \'YES\'", action = 'both', callBackFunc = () => { console.log('hungupAndDispo callBackFunc') }) {
    return new Promise((resolve, reject) => {
        if (cheackActiveCall()) {
            if (action === 'both') {
                dialedcall_send_hangup('', '', '', '', 'YES');
                callBackFunc();
                setTimeout(() => {
                    if (cheackDispoPanlVisibalty()) {
                        DispoSelectContent_create(fullDispo);
                        DispoSelect_submit('', '', 'YES');
                        resolve(true);
                    } else { reject({ case: false, reason: 'Dispo Panl not Visible' }) }
                }, 1000);
            } else if (action === 'hungup') {
                dialedcall_send_hangup('', '', '', '', 'YES');
                resolve(true);
            } else if (action === 'dispo') {
                if (cheackDispoPanlVisibalty()) {
                    DispoSelectContent_create(fullDispo);
                    DispoSelect_submit('', '', 'YES');
                    resolve(true);
                } else { reject({ case: false, reason: 'Dispo Panl not Visible' }) }
            }
        } else { reject({ case: false, reason: 'no active call' }) }
    });
}
//   --------------------------- //Help Functions  ---------------------------

// --------------------------- Vars  -----------------------------
var phoneNumber, firstName, lastName, address, city, state, zip, comments, phone_code, email;
function setAllVars() {
    phoneNumber = document.getElementById('phone_numberDISP').innerText;
    firstName = document.getElementById('first_name').value;
    lastName = document.getElementById('last_name').value;
    address = document.getElementById('address1').value;
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    zip = document.getElementById('postal_code').value;
    email = document.getElementById('email').value;
    comments = document.getElementById('comments').value;
    phone_code = document.getElementById('phone_code').value;
    email = document.getElementById('email').value;
}
// --------------------------- //Vars  ---------------------------

//   --------------------------- First Row Functions  ---------------------------
//Copy function
function Copy() {
    setAllVars();
    navigator.clipboard.writeText(phoneNumber + ' ' + firstName + ' ' + lastName);
}
//                ---------------------------
// google Form 
function googleForm() {
    if (!cheackActiveCall()) {
        alert('There is No Active Call');
    } else {
        setAllVars();
        // if (SelVal === 'New') {
        //     window.open(`https://docs.google.com/forms/d/e/1FAIpQLSfrMa2vUwg5GRkHo9_oZch4KcvQdPG-uGhBKZ9IDfbXFKpsDQ/viewform?usp=pp_url&entry.1571300582=${firstName}+${lastName}&entry.916874017=${address}+${city}+${state}+${zip}&entry.75396275=&entry.160962226=&entry.723605801=Leo&entry.1490107561=${phoneNumber}`);
        // } else if (SelVal === 'Old') {
        window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdOidVDfY1ZgRA6Hc5WVEibSowAngnUpJ8YiI_dpqgLTlrtaQ/viewform?usp=pp_url&entry.639391463=${firstName}+${lastName}&entry.103003790=${address}+${city}+${state}+${zip}&entry.1471785011=${phoneNumber}&entry.1146160959=Leo`);
        // }
    }
}
//                ---------------------------
// MY  google Form 
function MyGoogleForm() {
    if (!cheackActiveCall()) {
        alert('There is No Active Call');
    } else {
        setAllVars();
        var NewOld = 'ngs';
        // if (SelVal === 'New') {
        //     NewOld = "New Tort"
        // } else if (SelVal === 'Old') {
        //     NewOld = "Old Tort"
        // }
        window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdZpEg__LoOqaKDENr2V8i8EbWQ4lY6mCVf-F_OQu0aZk3aMw/viewform?usp=pp_url&entry.1714741896=${firstName}+${lastName}&entry.79476890=${phoneNumber}&entry.1938784237=${address}+${city}+${state}+${zip}&entry.1521110734=${email}&entry.1004047280=${comments}&entry.2042514721=${NewOld}`);
    }
}
//                ---------------------------
// Text To Audio functions 
let oldNumber = 'no number';
function autotextToAudio(newNumber) {
    if (autotextToAudioOnOff === 'On') {
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
function textToAudio(btn) {
    setAllVars();
    const msg = firstName + ' ' + lastName
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
            btn.classList.remove('d-none');
            btn.classList.add('d-default');
            btn.nextElementSibling.classList.add('d-none');
            btn.nextElementSibling.classList.remove('d-default');
        } else {
            if (btn.classList.contains('d-default')) {
                btn.classList.remove('d-default');
                btn.classList.add('d-none');
                btn.nextElementSibling.classList.add('d-default');
                btn.nextElementSibling.classList.remove('d-none');
            }
        }
    }
    var myInterval = setInterval(everyTime, 50);

}
//                ---------------------------
// auto check Dup
// get the dup list from the localStorage
var DupList = [];
const SavedDupList = JSON.parse(localStorage.getItem("DupList"));
if (null == SavedDupList) alert('no dup list in the lucalstorge');
else null != SavedDupList && (DupList = SavedDupList);
// auto check Dup function
function AutoCheckDupFun() {
    var res = document.getElementById("dupspan");
    setAllVars();
    var Num = phoneNumber;
    if (!cheackActiveCall()) {
        //three is no active call
        res.innerHTML = "";
    } else {
        // there is an active call
        // auto text To Audio part
        autotextToAudio(Num);
        /////////////////auto text To Audio part

        if (DupList.length === 0) {
            res.innerHTML = "No Dup List Found";
            res.classList.add('redSpan');
            res.classList.remove('greenSpan');
        } else {
            var TorFDup = DupList.includes(Num);
            if (TorFDup == true) {
                res.innerHTML = "New=BAD :(";
                res.classList.add('redSpan');
                res.classList.remove('greenSpan');
            } else {
                res.innerHTML = "New=Good :)";
                res.classList.remove('redSpan');
                res.classList.add('greenSpan');
            }
        }
        // re call number part NumbersArray globel var from the call log part 
        if (Array.isArray(NumbersArray) && NumbersArray.length > 0) {
            var resSpan2 = document.getElementById('Dispospan2');
            var TorF = NumbersArray.includes(Num);
            if (TorF == true) {
                resSpan2.innerHTML = "ReC" + number;
            } else {
                resSpan2.innerHTML = '';
            }
        }
        //////////////////////// re call number part
    }
}
setInterval(AutoCheckDupFun, 1000);
//                ---------------------------
//   --------------------------- //First Row Functions  ---------------------------

//   --------------------------- Secound Row Functions  ---------------------------
// auto hung up when cust hungs up function
async function CustHungUp() {
    var TransferVisibility = document.querySelector('#TransferMain').style.visibility;
    if (TransferVisibility === 'visible') {
        //Transfer panl Visibility is visible dont hungup
    } else {
        if (cheackCustHungUP() === true) {
            // cust did hung up
            setTimeout(() => { // get it to be 500ms late to give time for me to hungup if i want to :)
                console.log('%cCust haungup', 'color: blue;');
                try {
                    let hungupAnddispo = await hungupAndDispo("\'NI\', \'ADD\', \'YES\'", 'both', () => {
                        CallDispo = 'NI';
                        CallLogFunction();
                        /* still not diffiend
                        clearTimeout(hungupFun);
                        clearTimeout(DispoFun);
                        clearTimeout(AutoHangupFun);
                        */
                    });
                    console.log('hungupAnddispo: ', hungupAnddispo);
                } catch (error) {
                    console.log('case: ', error.case, 'reason: ', error.reason);
                }
                // setTimeout(AutoHangup, 2000); //  AutoHangup still not diffaied
                var resSpan = document.getElementById('Dispospan');
                resSpan.innerHTML = 'Cust HungUp Not Interested';
                setTimeout(() => {
                    resSpan.innerHTML = '';
                }, 4000);
            }, 500);
        } else { }
    }
}
setInterval(CustHungUp, 1000);
//                ---------------------------
// auto mute function
function AutoMuteFunc() {
    if (cheackActiveCall()) {
        if (AutMuOnOff === 'On') {
            if (isItMuted == true) {
                volume_control('UNMUTE', agentchannel, 'AgenT');
                isItMuted = false;
                console.log('%ci have UN-Muted, isItMuted set to false, Active call', 'color: blue;');
            } else if (isItMuted == false) {
                console.log('%calready UN-Muted, Active call', 'color: blue;');
            }
        }
    } else {
        if (AutMuOnOff === 'On') {
            if (isItMuted == true) {
                console.log('%calready Muted,  NO-Active call', 'color: blue;')
            } else if (isItMuted == false) {
                volume_control('MUTING', agentchannel, 'AgenT');
                isItMuted = true;
                console.log('%ci have Muted, isItMuted set to true, NO-Active call', 'color: blue;');
            }
        }
    }
}
setInterval(AutoMuteFunc, 1000);
//                ---------------------------
// Call Log 
//treger GetDispo and IhungedUpFun when hungup btn or Leave3WayCall btn is clicked
const HangupControl = document.getElementById("HangupControl");
const Leave3WayCall = document.getElementById("Leave3WayCall");

HangupControl.addEventListener("click", GetDispo);

Leave3WayCall.addEventListener("click", GetDispo);
// for when we have the auto hung up
// HangupControl.addEventListener("click", IhungedUpFun);
// Leave3WayCall.addEventListener("click", IhungedUpFun);

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
// Call Log  function
function CallLogFunction() {
    setAllVars();
    var number = phoneNumber;
    if (number === '                   ') {
        alert('There is no Number From:CallLogFunction');
    } else {
        // var number = document.getElementById('phone_numberDISP').innerText; //'                   '
        // var resSpan2 = document.getElementById('Dispospan2');
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
            //phoneNumber, firstName, lastName, address, city, state, zip, comments, phone_code;
            NumbersArray.push(number);
            var CallTime = document.querySelector('#SecondSDISP').innerText;
            document.getElementById('phone_code').value = 'add';
            // var list = CallLogObject.flat();
            let time = new Date();
            time = time.toLocaleString("en-US");
            var NewItem = [{
                "Date": time,
                "number": number,
                "first": firstName,
                "last": lastName,
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
// the hungup with the keyboared function
document.addEventListener("keydown", async function (event) {
    var resSpan = document.getElementById('Dispospan');
    switch (event.which) {
        case 112:
            event.preventDefault();
            try {
                let hungupAnddispo = await hungupAndDispo("\'N\', \'ADD\', \'YES\'", 'both', () => {
                    CallDispo = 'N';
                    CallLogFunction();
                    /* still not diffiend
                    clearTimeout(hungupFun);
                    clearTimeout(DispoFun);
                    clearTimeout(AutoHangupFun);
                    */
                });
                console.log('hungupAnddispo: ', hungupAnddispo);
                // setTimeout(AutoHangup, 2000); //still not diffiend
                resSpan.innerHTML = 'No Answer';
                setTimeout(() => {
                    resSpan.innerHTML = '';
                }, 4000);
            } catch (error) {
                console.log('case: ', error.case, 'reason: ', error.reason);
                alert(error.reason)
            }
            break;
        case 113:
            event.preventDefault();
            try {
                let hungupAnddispo = await hungupAndDispo("\'A\', \'ADD\', \'YES\'", 'both', () => {
                    CallDispo = 'A';
                    CallLogFunction();
                    /* still not diffiend
                    clearTimeout(hungupFun);
                    clearTimeout(DispoFun);
                    clearTimeout(AutoHangupFun);
                    */
                });
                console.log('hungupAnddispo: ', hungupAnddispo);
                // setTimeout(AutoHangup, 2000); //still not diffiend
                resSpan.innerHTML = 'Answering Machine';
                setTimeout(() => {
                    resSpan.innerHTML = '';
                }, 4000);
            } catch (error) {
                console.log('case: ', error.case, 'reason: ', error.reason);
                alert(error.reason)
            }
            break;
        case 114:
            event.preventDefault();
            try {
                let hungupAnddispo = await hungupAndDispo("\'NI\', \'ADD\', \'YES\'", 'both', () => {
                    CallDispo = 'NI';
                    CallLogFunction();
                    /* still not diffiend
                    clearTimeout(hungupFun);
                    clearTimeout(DispoFun);
                    clearTimeout(AutoHangupFun);
                    */
                });
                console.log('hungupAnddispo: ', hungupAnddispo);
                // setTimeout(AutoHangup, 2000); //still not diffiend
                resSpan.innerHTML = 'Not Interested';
                setTimeout(() => {
                    resSpan.innerHTML = '';
                }, 4000);
            } catch (error) {
                console.log('case: ', error.case, 'reason: ', error.reason);
                alert(error.reason)
            }
            break;
        case 115:
            event.preventDefault();
            try {
                let hungupAnddispo = await hungupAndDispo("\'NV\', \'ADD\', \'YES\'", 'both', () => {
                    CallDispo = 'NV';
                    CallLogFunction();
                    /* still not diffiend
                    clearTimeout(hungupFun);
                    clearTimeout(DispoFun);
                    clearTimeout(AutoHangupFun);
                    */
                });
                console.log('hungupAnddispo: ', hungupAnddispo);
                // setTimeout(AutoHangup, 2000); //still not diffiend
                resSpan.innerHTML = 'Not Vetran';
                setTimeout(() => {
                    resSpan.innerHTML = '';
                }, 4000);
            } catch (error) {
                console.log('case: ', error.case, 'reason: ', error.reason);
                alert(error.reason)
            }
            break;
        case 123:
            event.preventDefault();
            AutoHungupOnOff();
            break;
    }
})
//                ---------------------------
//   --------------------------- //Secound Row Functions  ---------------------------
