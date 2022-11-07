const getTimeString = ({ hours, minutes, seconds, zone }) => {
  if (minutes / 10 < 1) {
    minutes = "0" + minutes;
  }
  if (seconds / 10 < 1) {
    seconds = "0" + seconds;
  }
  return `${hours}:${minutes}:${seconds} ${zone}`;
};

function drawTable(jsData, tbody) {
    var tr, td;
    tbody = document.getElementById(tbody);
    tbody.innerHTML = '';
    for (var i = 0; i < jsData.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
		tr.setAttribute("class", "Mytr");
		
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");
		td.setAttribute("class", "phone_number");
        td.innerHTML = jsData[i].phone_number;
		
        td = tr.insertCell(tr.cells.length);
		td.setAttribute("align", "center");
		td.setAttribute("class", "AlarmTime");
        td.innerHTML = jsData[i].time;
		
        td = tr.insertCell(tr.cells.length);
		td.setAttribute("align", "center");
		td.setAttribute("class", "note");
        td.innerHTML = jsData[i].note;
		
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");
		td.setAttribute("class", "stete");
        td.innerHTML =jsData[i].stete;
		
		td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");
		td.setAttribute("id", "Timezone");
		td.setAttribute("class", "Timezone");
        td.innerHTML =jsData[i].Timezone;
		
		td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");
		td.setAttribute("class", "time");
        td.innerHTML ='';
		
		td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");
		td.setAttribute("class", "deleteBt");
        td.innerHTML ='';
		
        }
}

function filter(array, value, key) {
    return array.filter(key ?
        a => a[key] === value :
        a => Object.keys(a).some(k => a[k] === value)
    );
}
//=================================================================================================================
var AreaCodeState =[{"Area_Code":201,"State":"NewJersey"},{"Area_Code":202,"State":"WashingtonDC"},{"Area_Code":203,"State":"Connecticut"},{"Area_Code":204,"State":"Manitoba"},{"Area_Code":205,"State":"Alabama"},{"Area_Code":206,"State":"Washington"},{"Area_Code":207,"State":"Maine"},{"Area_Code":208,"State":"Idaho"},{"Area_Code":209,"State":"California"},{"Area_Code":210,"State":"Texas"},{"Area_Code":212,"State":"NewYork"},{"Area_Code":213,"State":"California"},{"Area_Code":214,"State":"Texas"},{"Area_Code":215,"State":"Pennsylvania"},{"Area_Code":216,"State":"Ohio"},{"Area_Code":217,"State":"Illinois"},{"Area_Code":218,"State":"Minnesota"},{"Area_Code":219,"State":"Indiana"},{"Area_Code":220,"State":"Ohio"},{"Area_Code":223,"State":"Pennsylvania"},{"Area_Code":224,"State":"Illinois"},{"Area_Code":225,"State":"Louisiana"},{"Area_Code":226,"State":"Ontario"},{"Area_Code":228,"State":"Mississippi"},{"Area_Code":229,"State":"Georgia"},{"Area_Code":231,"State":"Michigan"},{"Area_Code":234,"State":"Ohio"},{"Area_Code":236,"State":"British Columbia"},{"Area_Code":239,"State":"Florida"},{"Area_Code":240,"State":"Maryland"},{"Area_Code":248,"State":"Michigan"},{"Area_Code":249,"State":"Ontario"},{"Area_Code":250,"State":"British Columbia"},{"Area_Code":251,"State":"Alabama"},{"Area_Code":252,"State":"NorthCarolina"},{"Area_Code":253,"State":"Washington"},{"Area_Code":254,"State":"Texas"},{"Area_Code":256,"State":"Alabama"},{"Area_Code":260,"State":"Indiana"},{"Area_Code":262,"State":"Wisconsin"},{"Area_Code":267,"State":"Pennsylvania"},{"Area_Code":269,"State":"Michigan"},{"Area_Code":270,"State":"Kentucky"},{"Area_Code":272,"State":"Pennsylvania"},{"Area_Code":276,"State":"Virginia"},{"Area_Code":279,"State":"California"},{"Area_Code":281,"State":"Texas"},{"Area_Code":289,"State":"Ontario"},{"Area_Code":301,"State":"Maryland"},{"Area_Code":302,"State":"Delaware"},{"Area_Code":303,"State":"Colorado"},{"Area_Code":304,"State":"WestVirginia"},{"Area_Code":305,"State":"Florida"},{"Area_Code":306,"State":"Saskatchewan"},{"Area_Code":307,"State":"Wyoming"},{"Area_Code":308,"State":"Nebraska"},{"Area_Code":309,"State":"Illinois"},{"Area_Code":310,"State":"California"},{"Area_Code":312,"State":"Illinois"},{"Area_Code":313,"State":"Michigan"},{"Area_Code":314,"State":"Missouri"},{"Area_Code":315,"State":"NewYork"},{"Area_Code":316,"State":"Kansas"},{"Area_Code":317,"State":"Indiana"},{"Area_Code":318,"State":"Louisiana"},{"Area_Code":319,"State":"Iowa"},{"Area_Code":320,"State":"Minnesota"},{"Area_Code":321,"State":"Florida"},{"Area_Code":323,"State":"California"},{"Area_Code":325,"State":"Texas"},{"Area_Code":330,"State":"Ohio"},{"Area_Code":331,"State":"Illinois"},{"Area_Code":332,"State":"NewYork"},{"Area_Code":334,"State":"Alabama"},{"Area_Code":336,"State":"NorthCarolina"},{"Area_Code":337,"State":"Louisiana"},{"Area_Code":339,"State":"Massachusetts"},{"Area_Code":340,"State":"Virgin Islands"},{"Area_Code":343,"State":"Ontario"},{"Area_Code":346,"State":"Texas"},{"Area_Code":347,"State":"NewYork"},{"Area_Code":351,"State":"Massachusetts"},{"Area_Code":352,"State":"Florida"},{"Area_Code":360,"State":"Washington"},{"Area_Code":361,"State":"Texas"},{"Area_Code":364,"State":"Kentucky"},{"Area_Code":365,"State":"Ontario"},{"Area_Code":367,"State":"Quebec"},{"Area_Code":380,"State":"Ohio"},{"Area_Code":385,"State":"Utah"},{"Area_Code":386,"State":"Florida"},{"Area_Code":401,"State":"RhodeIsland"},{"Area_Code":402,"State":"Nebraska"},{"Area_Code":403,"State":"Alberta"},{"Area_Code":404,"State":"Georgia"},{"Area_Code":405,"State":"Oklahoma"},{"Area_Code":406,"State":"Montana"},{"Area_Code":407,"State":"Florida"},{"Area_Code":408,"State":"California"},{"Area_Code":409,"State":"Texas"},{"Area_Code":410,"State":"Maryland"},{"Area_Code":412,"State":"Pennsylvania"},{"Area_Code":413,"State":"Massachusetts"},{"Area_Code":414,"State":"Wisconsin"},{"Area_Code":415,"State":"California"},{"Area_Code":416,"State":"Ontario"},{"Area_Code":417,"State":"Missouri"},{"Area_Code":418,"State":"Quebec"},{"Area_Code":419,"State":"Ohio"},{"Area_Code":423,"State":"Tennessee"},{"Area_Code":424,"State":"California"},{"Area_Code":425,"State":"Washington"},{"Area_Code":430,"State":"Texas"},{"Area_Code":431,"State":"Manitoba"},{"Area_Code":432,"State":"Texas"},{"Area_Code":434,"State":"Virginia"},{"Area_Code":435,"State":"Utah"},{"Area_Code":437,"State":"Ontario"},{"Area_Code":438,"State":"Quebec"},{"Area_Code":440,"State":"Ohio"},{"Area_Code":442,"State":"California"},{"Area_Code":443,"State":"Maryland"},{"Area_Code":445,"State":"Pennsylvania"},{"Area_Code":450,"State":"Quebec"},{"Area_Code":458,"State":"Oregon"},{"Area_Code":463,"State":"Indiana"},{"Area_Code":469,"State":"Texas"},{"Area_Code":470,"State":"Georgia"},{"Area_Code":475,"State":"Connecticut"},{"Area_Code":478,"State":"Georgia"},{"Area_Code":479,"State":"Arkansas"},{"Area_Code":480,"State":"Arizona"},{"Area_Code":484,"State":"Pennsylvania"},{"Area_Code":501,"State":"Arkansas"},{"Area_Code":502,"State":"Kentucky"},{"Area_Code":503,"State":"Oregon"},{"Area_Code":504,"State":"Louisiana"},{"Area_Code":505,"State":"NewMexico"},{"Area_Code":506,"State":"New Brunswick"},{"Area_Code":507,"State":"Minnesota"},{"Area_Code":508,"State":"Massachusetts"},{"Area_Code":509,"State":"Washington"},{"Area_Code":510,"State":"California"},{"Area_Code":512,"State":"Texas"},{"Area_Code":513,"State":"Ohio"},{"Area_Code":514,"State":"Quebec"},{"Area_Code":515,"State":"Iowa"},{"Area_Code":516,"State":"NewYork"},{"Area_Code":517,"State":"Michigan"},{"Area_Code":518,"State":"NewYork"},{"Area_Code":519,"State":"Ontario"},{"Area_Code":520,"State":"Arizona"},{"Area_Code":530,"State":"California"},{"Area_Code":531,"State":"Nebraska"},{"Area_Code":534,"State":"Wisconsin"},{"Area_Code":539,"State":"Oklahoma"},{"Area_Code":540,"State":"Virginia"},{"Area_Code":541,"State":"Oregon"},{"Area_Code":548,"State":"Ontario"},{"Area_Code":551,"State":"NewJersey"},{"Area_Code":559,"State":"California"},{"Area_Code":561,"State":"Florida"},{"Area_Code":562,"State":"California"},{"Area_Code":563,"State":"Iowa"},{"Area_Code":564,"State":"Washington"},{"Area_Code":567,"State":"Ohio"},{"Area_Code":570,"State":"Pennsylvania"},{"Area_Code":571,"State":"Virginia"},{"Area_Code":573,"State":"Missouri"},{"Area_Code":574,"State":"Indiana"},{"Area_Code":575,"State":"NewMexico"},{"Area_Code":579,"State":"Quebec"},{"Area_Code":580,"State":"Oklahoma"},{"Area_Code":581,"State":"Quebec"},{"Area_Code":585,"State":"NewYork"},{"Area_Code":586,"State":"Michigan"},{"Area_Code":587,"State":"Alberta"},{"Area_Code":601,"State":"Mississippi"},{"Area_Code":602,"State":"Arizona"},{"Area_Code":603,"State":"NewHampshire"},{"Area_Code":604,"State":"British Columbia"},{"Area_Code":605,"State":"SouthDakota"},{"Area_Code":606,"State":"Kentucky"},{"Area_Code":607,"State":"NewYork"},{"Area_Code":608,"State":"Wisconsin"},{"Area_Code":609,"State":"NewJersey"},{"Area_Code":610,"State":"Pennsylvania"},{"Area_Code":612,"State":"Minnesota"},{"Area_Code":613,"State":"Ontario"},{"Area_Code":614,"State":"Ohio"},{"Area_Code":615,"State":"Tennessee"},{"Area_Code":616,"State":"Michigan"},{"Area_Code":617,"State":"Massachusetts"},{"Area_Code":618,"State":"Illinois"},{"Area_Code":619,"State":"California"},{"Area_Code":620,"State":"Kansas"},{"Area_Code":623,"State":"Arizona"},{"Area_Code":626,"State":"California"},{"Area_Code":628,"State":"California"},{"Area_Code":629,"State":"Tennessee"},{"Area_Code":630,"State":"Illinois"},{"Area_Code":631,"State":"NewYork"},{"Area_Code":636,"State":"Missouri"},{"Area_Code":639,"State":"Saskatchewan"},{"Area_Code":640,"State":"NewJersey"},{"Area_Code":641,"State":"Iowa"},{"Area_Code":646,"State":"NewYork"},{"Area_Code":647,"State":"Ontario"},{"Area_Code":650,"State":"California"},{"Area_Code":651,"State":"Minnesota"},{"Area_Code":657,"State":"California"},{"Area_Code":660,"State":"Missouri"},{"Area_Code":661,"State":"California"},{"Area_Code":662,"State":"Mississippi"},{"Area_Code":667,"State":"Maryland"},{"Area_Code":669,"State":"California"},{"Area_Code":670,"State":"Northern Mariana Islands"},{"Area_Code":671,"State":"Guam"},{"Area_Code":678,"State":"Georgia"},{"Area_Code":680,"State":"NewYork"},{"Area_Code":681,"State":"WestVirginia"},{"Area_Code":682,"State":"Texas"},{"Area_Code":684,"State":"American Samoa"},{"Area_Code":701,"State":"NorthDakota"},{"Area_Code":702,"State":"Nevada"},{"Area_Code":703,"State":"Virginia"},{"Area_Code":704,"State":"NorthCarolina"},{"Area_Code":705,"State":"Ontario"},{"Area_Code":706,"State":"Georgia"},{"Area_Code":707,"State":"California"},{"Area_Code":708,"State":"Illinois"},{"Area_Code":709,"State":"Newfoundland"},{"Area_Code":712,"State":"Iowa"},{"Area_Code":713,"State":"Texas"},{"Area_Code":714,"State":"California"},{"Area_Code":715,"State":"Wisconsin"},{"Area_Code":716,"State":"NewYork"},{"Area_Code":717,"State":"Pennsylvania"},{"Area_Code":718,"State":"NewYork"},{"Area_Code":719,"State":"Colorado"},{"Area_Code":720,"State":"Colorado"},{"Area_Code":724,"State":"Pennsylvania"},{"Area_Code":725,"State":"Nevada"},{"Area_Code":726,"State":"Texas"},{"Area_Code":727,"State":"Florida"},{"Area_Code":731,"State":"Tennessee"},{"Area_Code":732,"State":"NewJersey"},{"Area_Code":734,"State":"Michigan"},{"Area_Code":737,"State":"Texas"},{"Area_Code":740,"State":"Ohio"},{"Area_Code":743,"State":"NorthCarolina"},{"Area_Code":747,"State":"California"},{"Area_Code":754,"State":"Florida"},{"Area_Code":757,"State":"Virginia"},{"Area_Code":760,"State":"California"},{"Area_Code":762,"State":"Georgia"},{"Area_Code":763,"State":"Minnesota"},{"Area_Code":765,"State":"Indiana"},{"Area_Code":769,"State":"Mississippi"},{"Area_Code":770,"State":"Georgia"},{"Area_Code":772,"State":"Florida"},{"Area_Code":773,"State":"Illinois"},{"Area_Code":774,"State":"Massachusetts"},{"Area_Code":775,"State":"Nevada"},{"Area_Code":778,"State":"British Columbia"},{"Area_Code":779,"State":"Illinois"},{"Area_Code":780,"State":"Alberta"},{"Area_Code":781,"State":"Massachusetts"},{"Area_Code":782,"State":"Nova Scotia / Prince Edward Island"},{"Area_Code":785,"State":"Kansas"},{"Area_Code":786,"State":"Florida"},{"Area_Code":787,"State":"Puerto Rico"},{"Area_Code":801,"State":"Utah"},{"Area_Code":802,"State":"Vermont"},{"Area_Code":803,"State":"SouthCarolina"},{"Area_Code":804,"State":"Virginia"},{"Area_Code":805,"State":"California"},{"Area_Code":806,"State":"Texas"},{"Area_Code":807,"State":"Ontario"},{"Area_Code":808,"State":"Hawaii"},{"Area_Code":810,"State":"Michigan"},{"Area_Code":812,"State":"Indiana"},{"Area_Code":813,"State":"Florida"},{"Area_Code":814,"State":"Pennsylvania"},{"Area_Code":815,"State":"Illinois"},{"Area_Code":816,"State":"Missouri"},{"Area_Code":817,"State":"Texas"},{"Area_Code":818,"State":"California"},{"Area_Code":819,"State":"Quebec"},{"Area_Code":820,"State":"California"},{"Area_Code":825,"State":"Alberta"},{"Area_Code":828,"State":"NorthCarolina"},{"Area_Code":830,"State":"Texas"},{"Area_Code":831,"State":"California"},{"Area_Code":832,"State":"Texas"},{"Area_Code":838,"State":"NewYork"},{"Area_Code":843,"State":"SouthCarolina"},{"Area_Code":845,"State":"NewYork"},{"Area_Code":847,"State":"Illinois"},{"Area_Code":848,"State":"NewJersey"},{"Area_Code":850,"State":"Florida"},{"Area_Code":854,"State":"SouthCarolina"},{"Area_Code":856,"State":"NewJersey"},{"Area_Code":857,"State":"Massachusetts"},{"Area_Code":858,"State":"California"},{"Area_Code":859,"State":"Kentucky"},{"Area_Code":860,"State":"Connecticut"},{"Area_Code":862,"State":"NewJersey"},{"Area_Code":863,"State":"Florida"},{"Area_Code":864,"State":"SouthCarolina"},{"Area_Code":865,"State":"Tennessee"},{"Area_Code":867,"State":"Yukon / Nunavut / NW Territories"},{"Area_Code":870,"State":"Arkansas"},{"Area_Code":872,"State":"Illinois"},{"Area_Code":873,"State":"Quebec"},{"Area_Code":878,"State":"Pennsylvania"},{"Area_Code":901,"State":"Tennessee"},{"Area_Code":902,"State":"Nova Scotia / Prince Edward Island"},{"Area_Code":903,"State":"Texas"},{"Area_Code":904,"State":"Florida"},{"Area_Code":905,"State":"Ontario"},{"Area_Code":906,"State":"Michigan"},{"Area_Code":907,"State":"Alaska"},{"Area_Code":908,"State":"NewJersey"},{"Area_Code":909,"State":"California"},{"Area_Code":910,"State":"NorthCarolina"},{"Area_Code":912,"State":"Georgia"},{"Area_Code":913,"State":"Kansas"},{"Area_Code":914,"State":"NewYork"},{"Area_Code":915,"State":"Texas"},{"Area_Code":916,"State":"California"},{"Area_Code":917,"State":"NewYork"},{"Area_Code":918,"State":"Oklahoma"},{"Area_Code":919,"State":"NorthCarolina"},{"Area_Code":920,"State":"Wisconsin"},{"Area_Code":925,"State":"California"},{"Area_Code":928,"State":"Arizona"},{"Area_Code":929,"State":"NewYork"},{"Area_Code":930,"State":"Indiana"},{"Area_Code":931,"State":"Tennessee"},{"Area_Code":934,"State":"NewYork"},{"Area_Code":936,"State":"Texas"},{"Area_Code":937,"State":"Ohio"},{"Area_Code":938,"State":"Alabama"},{"Area_Code":939,"State":"Puerto Rico"},{"Area_Code":940,"State":"Texas"},{"Area_Code":941,"State":"Florida"},{"Area_Code":947,"State":"Michigan"},{"Area_Code":949,"State":"California"},{"Area_Code":951,"State":"California"},{"Area_Code":952,"State":"Minnesota"},{"Area_Code":954,"State":"Florida"},{"Area_Code":956,"State":"Texas"},{"Area_Code":959,"State":"Connecticut"},{"Area_Code":970,"State":"Colorado"},{"Area_Code":971,"State":"Oregon"},{"Area_Code":972,"State":"Texas"},{"Area_Code":973,"State":"NewJersey"},{"Area_Code":978,"State":"Massachusetts"},{"Area_Code":979,"State":"Texas"},{"Area_Code":980,"State":"NorthCarolina"},{"Area_Code":984,"State":"NorthCarolina"},{"Area_Code":985,"State":"Louisiana"},{"Area_Code":986,"State":"Idaho"},{"Area_Code":989,"State":"Michigan"}];
var StateTimezone = [{"State":"Alabama","TimeZone":"America/Chicago"},{"State":"Alaska","TimeZone":"America/Anchorage"},{"State":"Arizona","TimeZone":"America/Phoenix"},{"State":"Arkansas","TimeZone":"America/Chicago"},{"State":"California","TimeZone":"America/Los_Angeles"},{"State":"Colorado","TimeZone":"America/Denver"},{"State":"Connecticut","TimeZone":"America/New_York"},{"State":"Delaware","TimeZone":"America/New_York"},{"State":"Florida","TimeZone":"America/New_York"},{"State":"Georgia","TimeZone":"America/New_York"},{"State":"Hawaii","TimeZone":"Pacific/Honolulu"},{"State":"Idaho","TimeZone":"America/Denver"},{"State":"Illinois","TimeZone":"America/Chicago"},{"State":"Indiana","TimeZone":"America/New_York"},{"State":"Iowa","TimeZone":"America/Chicago"},{"State":"Kansas","TimeZone":"America/Chicago"},{"State":"Kentucky","TimeZone":"America/New_York"},{"State":"Louisiana","TimeZone":"America/Chicago"},{"State":"Maine","TimeZone":"America/New_York"},{"State":"Maryland","TimeZone":"America/New_York"},{"State":"Massachusetts","TimeZone":"America/New_York"},{"State":"Michigan","TimeZone":"America/New_York"},{"State":"Minnesota","TimeZone":"America/Chicago"},{"State":"Mississippi","TimeZone":"America/Chicago"},{"State":"Missouri","TimeZone":"America/Chicago"},{"State":"Montana","TimeZone":"America/Denver"},{"State":"Nebraska","TimeZone":"America/Chicago"},{"State":"Nevada","TimeZone":"America/Los_Angeles"},{"State":"NewHampshire","TimeZone":"America/New_York"},{"State":"NewJersey","TimeZone":"America/New_York"},{"State":"NewMexico","TimeZone":"America/Denver"},{"State":"NewYork","TimeZone":"America/New_York"},{"State":"NorthCarolina","TimeZone":"America/New_York"},{"State":"NorthDakota","TimeZone":"America/Chicago"},{"State":"Ohio","TimeZone":"America/New_York"},{"State":"Oklahoma","TimeZone":"America/Chicago"},{"State":"Oregon","TimeZone":"America/Los_Angeles"},{"State":"Pennsylvania","TimeZone":"America/New_York"},{"State":"RhodeIsland","TimeZone":"America/New_York"},{"State":"SouthCarolina","TimeZone":"America/New_York"},{"State":"SouthDakota","TimeZone":"America/Chicago"},{"State":"Tennessee","TimeZone":"America/Chicago"},{"State":"Texas","TimeZone":"America/Chicago"},{"State":"Utah","TimeZone":"America/Denver"},{"State":"Vermont","TimeZone":"America/New_York"},{"State":"Virginia","TimeZone":"America/New_York"},{"State":"Washington","TimeZone":"America/Los_Angeles"},{"State":"WestVirginia","TimeZone":"America/New_York"},{"State":"Wisconsin","TimeZone":"America/Chicago"},{"State":"Wyoming","TimeZone":"America/Denver"},{"State":"Washington","TimeZone":"America/New_York"}];
//=================================================================================================================
const form = document.getElementById('adding_alarm_form');
form.addEventListener('submit', (event) => {
  event.preventDefault()
})

var alarm_list = [];
var phone_number = document.getElementById('phone_number');
var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var zone = document.getElementById('zone');
var note = document.getElementById('note');
var resSpan = document.getElementById('resSpan');
var resDiv = document.getElementById('resDiv');

function add_alarm(){
var alarmString = getTimeString({
    hours: hour.value,
    seconds: sec.value,
    minutes: min.value,
    zone: zone.value
  });
  var num =  phone_number.value; //===
  var area_code = num.charAt(0)+num.charAt(1)+num.charAt(2); //===
  var AC = area_code;  //===
  var stetearray = filter(AreaCodeState, Number(AC), 'Area_Code');  //===
  var stete = stetearray[0].State; //===
  var timezoneArray = filter(StateTimezone, stete, 'State'); //===
  var timezone = timezoneArray[0].TimeZone; //===
  var alarm_itme = [{"phone_number":phone_number.value,"time":alarmString,"note":note.value,"stete":stete,"Timezone":timezone,"wentoff":"no",}];
  alarm_list.push(alarm_itme);
  drawTable(alarm_list.flat(),'table_body');
  document.forms[0].reset();
  AddDeleteBt();
  localStorage.setItem('list', JSON.stringify(alarm_list));
  //const SavedList = JSON.parse(localStorage.getItem('list'));
}

function current_time(){
  var currentTime = document.getElementById("current_time");
         const currentDate = new Date();
		 currentTime.innerHTML = currentDate.toLocaleTimeString("en-US");
}
setInterval(current_time, 1000);


function AddTimeToAllAlarm(){
	var list = alarm_list.flat();
	const timeTD = document.getElementsByClassName('time');
	for (let i = 0; i < timeTD.length; i++) {
        let time = new Date();
        time = time.toLocaleTimeString("en-US", {
        timeZone: list[i].Timezone
        });
		timeTD[i].innerHTML = time;
    }
}
setInterval(AddTimeToAllAlarm, 1000);

function AlarmGoOn(){
	alarm_list = alarm_list.flat();
	const Mytr = document.getElementsByClassName('Mytr');
	const AlarmTime = document.getElementsByClassName('AlarmTime');
	const RnTime = document.getElementsByClassName('time');
	for (let i = 0; i < AlarmTime.length; i++){
		if (AlarmTime[i].innerText === RnTime[i].innerText){
			var audio = document.getElementById('alarm_audio');
			AlarmTime[i].style.background = '#c33002';
			RnTime[i].style.background = '#c33002';
			Mytr[i].style.background = '#c33002';
			audio.play();
			alarm_list[i].wentoff = 'yes';
			localStorage.setItem('list', JSON.stringify(alarm_list));
		}
	}
}
setInterval(AlarmGoOn, 1000);

function GetList(){
	const SavedList = JSON.parse(localStorage.getItem('list'));
	alarm_list = SavedList;
	drawTable(alarm_list.flat(),'table_body');
}


function AddDeleteBt(){
	const DeleteBt = document.getElementsByClassName('deleteBt');
	const PhoneNumber = document.getElementsByClassName('phone_number');
	for (let i = 0; i < DeleteBt.length; i++){
		DeleteBt[i].innerHTML = `<button id="DeleteBt${[i]}" class="DeleteBt" onclick="DeleteBtFun('${PhoneNumber[i].innerText}')"><span>Delete</span></button>`;
	}	
}

function DeleteBtFun(PhoneNumber){
	alarm_list = alarm_list.flat().filter(object => {
    return object.phone_number !== PhoneNumber;
     });
    drawTable(alarm_list.flat(),'table_body');
	AddDeleteBt();
	localStorage.setItem('list', JSON.stringify(alarm_list));
	const SavedList = JSON.parse(localStorage.getItem('list'));
}
function Redbackground(){
	alarm_list = alarm_list.flat()
	const AlarmTime = document.getElementsByClassName('AlarmTime');
	const RnTime = document.getElementsByClassName('time');
	const Mytr = document.getElementsByClassName('Mytr');
	for (let i = 0; i < alarm_list.length; i++){
		if(alarm_list[i].wentoff === 'yes'){
			AlarmTime[i].style.background = '#c33002';
			RnTime[i].style.background = '#c33002';
			Mytr[i].style.background = '#c33002';
		}
	}
}
setInterval(Redbackground, 1000);

/*
var alarm_list = [];
var phone_number = document.getElementById('phone_number');
var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var zone = document.getElementById('zone');
var note = document.getElementById('note');
*/

function main(){
	if(phone_number.value.length == 10 && hour.value > 0 && zone.value != 'none'){
		resDiv.style.display ='none';
		resSpan.innerHTML = '';	
		resSpan.style.display = 'none';
		add_alarm();
		closeForm();
	}
	else{
		resDiv.style.display ='block';
		resSpan.style.display = 'block';
		resSpan.innerHTML = 'invalid input';
	}
}


      function openForm() {
        document.getElementById("popupForm").style.display = "block";
		document.getElementById("h1andcurrent_timeDiv").style.display = "none";
		document.getElementById("openBtn").style.display = "none";
		document.getElementById("alarm_list_div").style.display = "none";
		document.getElementById("body").style.background = "black";
			
		
      }
      function closeForm() {
        document.getElementById("popupForm").style.display = "none";
		document.getElementById("h1andcurrent_timeDiv").style.display = "";
		document.getElementById("openBtn").style.display = "";
		document.getElementById("alarm_list_div").style.display = "";
		document.getElementById("body").style.background = "#707070";
		resSpan.innerHTML = '';	
		resSpan.style.display = 'none';
		resDiv.style.display = 'none';
        document.forms[0].reset();		
      }

function ShowTimeAtEntery(){
var num =  phone_number.value; //=== 
var span = document.getElementById('showtimeatenteryspan');
  if(num.length > 2){
	  
      var area_code = num.charAt(0)+num.charAt(1)+num.charAt(2); //===
      var AC = area_code;  //===
      var stetearray = filter(AreaCodeState, Number(AC), 'Area_Code');  //===
      var stete = stetearray[0].State; //===
      var timezoneArray = filter(StateTimezone, stete, 'State'); //===
      var timezone = timezoneArray[0].TimeZone; //===
	  
      let time = new Date();
        time = time.toLocaleTimeString("en-US", {timeZone: timezone});
		span.innerHTML = time;
  }else if(num.length == 0){
	    span.innerHTML = '';
       }
}
setInterval(ShowTimeAtEntery, 1000);