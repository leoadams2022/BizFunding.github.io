document.querySelector("head").insertAdjacentHTML(
  "afterbegin",
  `
  <style>
    span#CloserSelectBox,span#DispoSelectBox{background:rgb(75 85 99)}span#AgenTDisablEBoX,span#AlertBox,span#DispoSelectBox,span#LogouTBox,span#NoneInSessionBox{width:100vw;height:100vh}html{font-size:16px}img{max-width:min-content!important;display:initial!important;height:initial!important;vertical-align:initial!important}span#AgentViewStatus{color:#000}span#AgentViewStatus>font{color:#fff}span#DispoSelectBox table{background:0 0;margin:10px auto;color:#fff}span#DispoSelectContent table td{background:#999;padding:10px 20px;color:#000}span#CloserSelectBox{width:100vw;display:block}span#CloserSelectBox table{background:0 0;color:#fff!important;margin:16px auto 0}span#CloserSelectContent table td{background:#00000080;color:#fff;padding:10px 15px}span#LogouTBox{background:#fff}span#LogouTBox table{margin:0 auto}span#NoneInSessionBox{background:#4b5563;top:0!important}span#NoneInSessionBox table{margin:10px auto;background:#9ff8ff90}span#AlertBox{top:0!important;left:0!important;display:flex;background:#80808030;flex-direction:row;justify-content:center;align-items:center}span#AlertBox table td{padding:5px;background:#0f172a;color:#fff;border:1px solid #fff;border-radius:5px}span#AgenTDisablEBoX table{width:100%;height:100%}span#CalLLoGDisplaYBox{width:100vw;height:100vh}span#CalLLoGDisplaYBox table{width:100%;height:100%;background:#b9cbfd}div#CallLogSpan{width:90%}
  </style>
  <link rel="stylesheet" href="https://leoadams2022.github.io/BizFunding.github.io/assets/css/test.css">
  `
); document.querySelector("#comments").insertAdjacentHTML(
  "afterend",
  `
  <button onclick="toggleMyInterface()" class="tw-text-sm tw-font-bold tw-py-1 tw-px-3 tw-rounded-sm tw-bg-slate-800 tw-text-slate-100 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-slate-950 tw-m-2">Show My interface</button>
  `
); document.querySelector("body").insertAdjacentHTML(
  "afterbegin",
  `

<div id=My_modal class="tw-fixed tw-bottom-8 tw-left-1/2 -tw-translate-x-1/2 tw-bg-black tw-text-white tw-border tw-border-white tw-w-fit tw-max-w-[100vw] tw-px-4 tw-py-2 tw-flex tw-justify-between tw-items-center tw-gap-2 tw-rounded-sm tw-translate-y-[180%] tw-transition tw-duration-300 tw-z-[29]">
<span id=My_modalTimer class="tw-text-red-500 tw-font-bold">0</span>
<p id=My_modalText class=tw-capitalize>Modal Message</p>
<div class="tw-flex tw-justify-evenly tw-items-center tw-gap-2">
<buttom id=My_modal_okayBtn class="tw-px-2 tw-py-1 tw-bg-green-500 tw-border tw-border-white tw-rounded-sm tw-text-sm tw-font-bold tw-transition tw-duration-300 hover:tw-bg-green-800 tw-cursor-pointer">Okay</buttom>
<buttom id=My_modal_cancelBtn class="tw-px-2 tw-py-1 tw-bg-red-500 tw-border tw-border-white tw-rounded-sm tw-text-sm tw-font-bold tw-transition tw-duration-300 hover:tw-bg-red-800 tw-cursor-pointer">Cancel</buttom>
</div>
</div>
`
); document.querySelector("body").insertAdjacentHTML(
  "beforeend",
`
<div class="tw-fixed tw-z-[27] tw-w-screen tw-h-screen tw-bg-slate-900 tw-text-slate-100" id=My_interfaceDiv>
<div class="tw-box-border tw-h-[60px] tw-w-full tw-flex tw-items-center tw-gap-8">
<div class=tw-px-3>
<span class="tw-inline-block tw-text-2xl sm:tw-text-3xl tw-font-bold tw-uppercase tw-tracking-widest tw-cursor-pointer" onclick=toggleMyInterface()>
vicidial
</span>
<p class="tw-hidden sm:tw-block tw-text-sm tw-text-gray-400 tw-italic">
interface by walid ali
</p>
</div>
<div class="tw-flex-1 tw-flex tw-flex-col">
<div class="tw-flex tw-justify-evenly tw-text-sm">
<span class="tw-line-clamp-2 tw-capitalize tw-hidden sm:tw-inline" id=My_status>
</span>
<span class="tw-line-clamp-2 tw-capitalize tw-hidden sm:tw-inline">session: <span id=My_sessionIDspan></span></span>
<span class="tw-line-clamp-2 tw-capitalize" id=My_AgentStatusCalls>queue: <span></span></span>
<span class="tw-line-clamp-2 tw-capitalize">seconds: <span id=My_SecondSDISP></span></span>
</div>
<span class="tw-text-sm tw-text-gray-400 tw-line-clamp-1 tw-text-center" id=My_MainStatuSSpan>
</span>
</div>
<span class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center tw-items-center sm:tw-gap-3 sm:tw-px-2">
<div class="tw-hidden sm:tw-inline-block tw-w-6 tw-h-6 sm:tw-w-8 sm:tw-h-8">
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=gray class="tw-w-full tw-h-full tw-object-cover" id=My_liveCallSvg_indocater>
<path stroke-linecap=round stroke-linejoin=round d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
</svg>
</div>
<div class="tw-inline-block tw-w-6 tw-h-6 sm:tw-w-8 sm:tw-h-8">
<button class=tw-group onclick="return OpeNGrouPSelectioN(),!1">
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover tw-transition-colors tw-duration-300 tw-ease-in-out group-hover:tw-stroke-sky-500">
<path stroke-linecap=round stroke-linejoin=round d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
</svg>
</button>
</div>
<div class="tw-inline-block tw-w-6 tw-h-6 sm:tw-w-8 sm:tw-h-8">
<button class=tw-group title="log out" onclick="return NormalLogout(),!1">
<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover tw-transition-colors tw-duration-300 tw-ease-in-out group-hover:tw-stroke-red-500" alt="log out">
<path stroke-linecap=round stroke-linejoin=round d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
</svg>
</button>
</div>
</span>
</div>
<div class="tw-flex tw-justify-between tw-box-border" style="height:calc(100vh - 225px);width:calc(100vw - 190px)">
<div class="tw-h-full tw-flex tw-justify-evenly tw-items-start tw-box-border tw-ml-2" style="width:calc(100% - 242px)">
<div class="tw-overflow-x-hidden tw-relative tw-w-[260px] tw-h-full tw-flex tw-justify-evenly">
<input type=radio name=control id=control_1 class="tw-sr-only tw-peer/control_1" checked>
<label for=control_1 class="tw-flex-1 tw-cursor-pointer tw-text-lg tw-text-slate-900 tw-h-[25px] tw-border-b tw-border-black tw-bg-gray-300 tw-rounded-t-lg tw-flex tw-justify-center tw-items-center tw-transition-colors tw-duration-300 tw-ease-in-out tw-capitalize hover:tw-animate-pulse peer-checked/control_1:hover:tw-animate-none peer-checked/control_1:tw-font-bold peer-checked/control_1:tw-bg-gray-600 peer-checked/control_1:tw-border-b-0 peer-checked/control_1:tw-border peer-checked/control_1:tw-text-slate-100 tw-select-none"><span>control 1</span></label>
<input type=radio name=control id=control_2 class="tw-sr-only tw-peer/control_2">
<label for=control_2 class="tw-flex-1 tw-cursor-pointer tw-text-lg tw-text-slate-900 tw-h-[25px] tw-border-b tw-border-black tw-bg-gray-300 tw-rounded-t-lg tw-flex tw-justify-center tw-items-center tw-transition-colors tw-duration-300 tw-ease-in-out tw-capitalize hover:tw-animate-pulse peer-checked/control_2:hover:tw-animate-none peer-checked/control_2:tw-font-bold peer-checked/control_2:tw-bg-gray-600 peer-checked/control_2:tw-text-slate-100 peer-checked/control_2:tw-border-b-0 peer-checked/control_2:tw-border tw-select-none"><span>control 2</span></label>
<div class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-bg-gray-600 tw-transition-transform tw-duration-300 tw-ease-in-out -tw-translate-x-full tw-border-t-0 tw-border tw-border-black tw-rounded-b-lg peer-checked/control_1:tw-translate-x-0" style="height:calc(100% - 25px)">
<div class="tw-box-border tw-p-3 tw-flex tw-flex-col tw-gap-3">
<div class="tw-flex tw-gap-2 tw-items-center">
<button class="tw-text-lg tw-line-clamp-1 tw-bg-green-500 tw-text-slate-900 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-green-300" onclick='AutoDial_ReSume_PauSe("VDADready","","","","","","","YES")' id=My_goReadyBtn>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-6 tw-h-6 tw-inline-block tw-rounded-full tw-bg-green-900 tw-text-white tw-p-1">
<path stroke-linecap=round stroke-linejoin=round d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
</svg>
<span> Satrt </span>
</button>
<button class="tw-text-lg tw-line-clamp-1 tw-bg-yellow-500 tw-text-slate-900 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-yellow-300 tw-hidden" onclick='AutoDial_ReSume_PauSe("VDADpause","","","","","","","YES")' id=My_pauseBtn>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-6 tw-h-6 tw-inline-block tw-rounded-full tw-bg-yellow-900 tw-text-white tw-p-1">
<path stroke-linecap=round stroke-linejoin=round d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
</svg>
<span> Pause </span>
</button>
<span class="tw-text-sm tw-text-gray-300 tw-line-clamp-1 tw-uppercase" id=My_readyOrPauseSpan_indocater>you are
<span class="tw-text-yellow-500 tw-inline-block tw-animate-bounce">
paused
</span>
</span>
</div>
<button class="tw-text-lg tw-line-clamp-1 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-green-400 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" id=My_openTransferPanelBtn onclick='ShoWTransferMain("ON","","YES")' disabled>
open transfer panel
</button>
<button class="tw-text-lg tw-line-clamp-1 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-green-700 tw-text-slate-100 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out tw-hidden" id=My_closeTransferPanelBtn onclick='ShoWTransferMain("OFF","YES","YES")' disabled>
close transfer panel
</button>
<button class="tw-text-lg tw-line-clamp-1 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-red-400 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" onclick='hangup_customer_button_click("","","","","YES")' id=My_hungupBtn disabled>
hung up
</button>
<hr>
<div class="tw-flex tw-items-center tw-gap-2">
<button class="tw-text-sm tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-slate-300 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" onclick=webForm1_click() id=My_webform1 disabled>
web form 1
</button>
<button class="tw-text-sm tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-slate-300 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" onclick=webForm2_click() id=My_webform2 disabled>
web form 2
</button>
</div>
<div class="tw-flex tw-items-center tw-gap-2">
<button class="tw-text-sm tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-slate-300 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" onclick=parkcallBtn_click() id=My_parkcallBtn disabled>
park call
</button>
<span class="tw-text-sm tw-text-gray-300 tw-line-clamp-1 tw-uppercase" id=My_parkcallSpan>Time On Park:</span>
</div>
<hr>
<div class="tw-flex tw-items-center tw-gap-2 tw-justify-evenly">
<button class="tw-text-sm tw-font-bold tw-py-1 tw-px-3 tw-rounded-sm tw-bg-slate-800 tw-text-slate-100 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" onclick='return NeWManuaLDiaLCalL("NO","","","","","YES","YES"),!1' id=My_manualDialBtn>
Manual Dial
</button>
<button class="tw-text-sm tw-font-bold tw-py-1 tw-px-3 tw-rounded-sm tw-bg-slate-800 tw-text-slate-100 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" onclick="return VieWCalLLoG(),!1" id=My_callLogBtn>
Call Log
</button>
</div>
<hr>
<div class="tw-flex tw-items-center tw-gap-2 tw-justify-evenly">
<button class="tw-text-sm tw-font-bold tw-py-0 tw-px-2 tw-rounded-sm tw-bg-sky-500 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-sky-300" id=My_webPhoneBtn onclick=webPhoneBtn_click()>
<span class="tw-w-4 tw-h-full tw-inline-block tw-mr-1 tw-bg-sky-900 tw-text-white" id=My_webPhoneBtnSpan>-</span>WebPhone
</button>
<button class="tw-text-sm tw-font-bold tw-py-0 tw-px-2 tw-rounded-sm tw-bg-sky-500 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-sky-300" id=My_agentsViewBtn onclick=agentsViewBtn_click()>
<span class="tw-w-4 tw-h-full tw-inline-block tw-mr-1 tw-bg-sky-900 tw-text-white" id=My_agentsViewBtnSpan>+</span>Agents
</button>
</div>
</div>
</div>
<div class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-p-1 tw-bg-gray-600 tw-text-slate-100 tw-transition-transform tw-duration-300 tw-ease-in-out tw-translate-x-full tw-border-t-0 tw-border tw-border-black tw-rounded-b-lg peer-checked/control_2:tw-translate-x-0" style="height:calc(100% - 25px)">
<div class=tw-p-1>
<div>
<p class="tw-text-sm tw-text-gray-300 tw-line-clamp-1 tw-capitalize">
Buttons disposition values:
</p>
<div class="tw-mx-auto tw-w-fit tw-my-2">
<button class="tw-text-sm tw-font-bold tw-p-1 tw-rounded-sm tw-bg-red-500 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" id=My_f1_hungupBtn disabled>
F1:
</button>
<select class="tw-text-black/70 tw-bg-white tw-px-1 tw-py-0 tw-transition-all tw-cursor-pointer tw-hover:border-blue-600/30 tw-border tw-border-gray-200 tw-rounded-sm tw-outline-blue-600/50 tw-appearance-none tw-invalid:text-black/30 tw-w-20" id=F1select></select>
<button class="tw-text-sm tw-font-bold tw-p-1 tw-rounded-sm tw-bg-red-500 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" id=My_f2_hungupBtn disabled>
F2:
</button>
<select class="tw-text-black/70 tw-bg-white tw-px-1 tw-py-0 tw-transition-all tw-cursor-pointer tw-hover:border-blue-600/30 tw-border tw-border-gray-200 tw-rounded-sm tw-outline-blue-600/50 tw-appearance-none tw-invalid:text-black/30 tw-w-20" id=F2select></select>
</div>
<div class="tw-mx-auto tw-w-fit">
<button class="tw-text-sm tw-font-bold tw-p-1 tw-rounded-sm tw-bg-red-500 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" id=My_f3_hungupBtn disabled>
F3:
</button>
<select class="tw-text-black/70 tw-bg-white tw-px-1 tw-py-0 tw-transition-all tw-cursor-pointer tw-hover:border-blue-600/30 tw-border tw-border-gray-200 tw-rounded-sm tw-outline-blue-600/50 tw-appearance-none tw-invalid:text-black/30 tw-w-20" id=F3select></select>
<button class="tw-text-sm tw-font-bold tw-p-1 tw-rounded-sm tw-bg-red-500 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out" id=My_f4_hungupBtn disabled>
F4:
</button>
<select class="tw-text-black/70 tw-bg-white tw-px-1 tw-py-0 tw-transition-all tw-cursor-pointer tw-hover:border-blue-600/30 tw-border tw-border-gray-200 tw-rounded-sm tw-outline-blue-600/50 tw-appearance-none tw-invalid:text-black/30 tw-w-20" id=F4select></select>
</div>
</div>
<hr class="tw-w-[90%] tw-mx-auto tw-my-3">
<div class="tw-flex tw-flex-col tw-shadow-md">
<textarea id=dupListInput class="tw-w-full tw-transition-all tw-duration-300 tw-h-8 focus:tw-h-32 tw-resize-none tw-text-black tw-border-[3px] tw-border-b-0 tw-border-transparent focus:tw-outline-none focus:tw-border-blue-400 tw-peer tw-rounded-t-sm tw-px-1" placeholder="Enter Duplicates array"></textarea>
<button class="tw-w-full tw-h-8 tw-line-clamp-1 tw-font-bold tw-py-1 tw-px-2 tw-rounded-b-sm tw-bg-green-400 tw-text-slate-900 tw-capitalize hover:tw-bg-green-500 tw-border-[3px] tw-border-t-0 tw-border-transparent peer-focus:tw-outline-none peer-focus:tw-border-blue-400" onclick=setDupListTolocalStorge()>
set Duplicates array
</button>
</div>
<hr class="tw-w-[90%] tw-mx-auto tw-my-3">
<div>
<p class="tw-text-sm tw-text-gray-300 tw-capitalize">
hang up dead calls after:
<input type=number name=autoHungupWaitTimeInput id=autoHungupWaitTimeInput max=20 min=4 value=5 class="tw-w-10 tw-h-5 tw-box-border tw-inline-block tw-text-black tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 tw-rounded-sm tw-text-center">
Disposition as
<select class="tw-inline-block tw-mt-1 tw-text-black/70 tw-bg-white tw-px-1 tw-py-0 tw-transition-all tw-cursor-pointer tw-hover:border-blue-600/30 tw-border tw-border-gray-200 tw-rounded-sm tw-outline-blue-600/50 tw-appearance-none tw-invalid:text-black/30 tw-w-20" id=custHungupDispoSelect></select>
</p>
</div>
</div>
</div>
</div>
<div class="tw-box-border tw-p-3" style="width:calc(100% - 260px)">
<div class="tw-w-full tw-flex tw-flex-col tw-gap-3">
<div class="tw-w-full tw-flex tw-justify-between tw-items-center tw-gap-2 tw-box-border">
<div class="tw-w-[252px] tw-h-8 tw-relative tw-rounded-sm">
<input name=My_PhoneNumber id=My_PhoneNumber class="tw-w-full tw-h-full tw-box-border tw-inline-block tw-text-black tw-pl-[85px] tw-pr-[70px] tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 peer tw-rounded-sm" readonly>
<label for=My_PhoneNumber id=My_PhoneNumber_label class="tw-w-[80px] tw-h-full tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-capitalize tw-px-2 rounded-s-sm tw-font-bold tw-flex tw-justify-center tw-items-center">
number
</label>
<button class="tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-right-0 tw-w-8 tw-h-full tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-rounded-e-sm" title=Copy onclick='Copy(document.getElementById("My_PhoneNumber").value)'>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover tw-rounded-e-sm">
<path stroke-linecap=round stroke-linejoin=round d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/>
</svg>
</button>
<button class="tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-right-8 tw-w-8 tw-h-full tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-border-r" title="Tahts Them" onclick=openTahtsThem()>
<svg viewBox="0 0 60.000000 60.000000" preserveAspectRatio="xMidYMid meet" class="tw-bg-white tw-rounded-full tw-border tw-border-white">
<g transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)" fill=#8321b1 stroke=none>
<path d="M205 583 c-211 -76 -272 -336 -115 -493 61 -61 119 -85 210 -85 91 0
                            149 24 210 85 61 61 85 119 85 210 0 91 -24 149 -85 210 -80 80 -203 109 -305
                            73z m225 -163 c0 -39 -1 -40 -35 -40 l-35 0 0 -125 0 -125 -60 0 -60 0 0 125
                            0 125 -35 0 c-34 0 -35 1 -35 40 l0 40 130 0 130 0 0 -40z"/>
</g>
</svg>
</button>
</div>
<span class="tw-text-sm tw-text-gray-400 tw-line-clamp-1 tw-capitalize">auto Pronunciation:</span>
<label for=autoPronunciation class="tw-inline-block tw-w-10 tw-h-5 tw-rounded-full tw-cursor-pointer tw-relative tw-bg-gray-300">
<input type=checkbox name=autoPronunciation id=autoPronunciation class="tw-absolute tw-top-0 tw-left-0 tw-invisible tw-peer">
<span class="tw-w-2/5 tw-h-4/5 tw-bg-rose-300 tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-1 tw-rounded-full tw-transition-all tw-duration-300 peer-checked:tw-left-5 peer-checked:tw-bg-red-500"></span>
</label>
<span class="tw-text-sm tw-text-gray-400 tw-line-clamp-1 tw-capitalize">auto mute:</span>
<label for=autoMuteToggle class="tw-inline-block tw-w-10 tw-h-5 tw-rounded-full tw-cursor-pointer tw-relative tw-bg-gray-300">
<input type=checkbox name=autoMuteToggle id=autoMuteToggle class="tw-absolute tw-top-0 tw-left-0 tw-invisible tw-peer">
<span class="tw-w-2/5 tw-h-4/5 tw-bg-rose-300 tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-1 tw-rounded-full tw-transition-all tw-duration-300 peer-checked:tw-left-5 peer-checked:tw-bg-red-500"></span>
</label>
</div>
<div class="tw-w-full tw-h-8 tw-relative tw-rounded-sm">
<input name=My_FullName id=My_FullName class="tw-w-full tw-h-full tw-box-border tw-inline-block tw-text-black tw-pl-[85px] tw-pr-[69px] tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 tw-peer tw-rounded-sm">
<label for=My_FullName class="tw-w-[80px] tw-h-full tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-capitalize tw-px-2 tw-rounded-s-sm tw-font-bold tw-flex tw-justify-center tw-items-center">name</label>
<div class="tw-h-full tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-right-0 tw-flex">
<button class="tw-w-8 tw-h-full tw-bg-slate-300 tw-p-1 tw-text-slate-900 hover:tw-bg-slate-500 tw-transition-colors tw-duration-200 tw-border-r tw-border-white" title="Pronounce the name" onclick='textToAudio(document.getElementById("My_FullName").value)'>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover">
<path stroke-linecap=round stroke-linejoin=round d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
</svg>
</button>
<button class="tw-w-8 tw-h-full tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-rounded-e-sm" title=Copy onclick='Copy(document.getElementById("My_FullName").value)'>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover tw-rounded-e-sm">
<path stroke-linecap=round stroke-linejoin=round d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/>
</svg>
</button>
</div>
</div>
<div class="tw-w-full tw-h-[50px] tw-relative tw-rounded-sm">
<textarea type=text name=My_FullAddress id=My_FullAddress class="tw-w-full tw-h-full tw-max-h-full tw-min-h-full tw-box-border tw-inline-block tw-text-black tw-pl-[85px] tw-pr-9 tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 tw-peer tw-rounded-sm tw-resize-none"></textarea>
<label for=My_FullAddress class="tw-w-[80px] tw-h-full tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-capitalize tw-px-2 tw-rounded-s-sm tw-font-bold tw-flex tw-justify-center tw-items-start">address</label>
<button class="tw-absolute tw-top-0 tw-right-8 tw-w-8 tw-h-8 tw-bg-slate-300 tw-p-1 tw-text-slate-900 hover:tw-bg-slate-500 tw-transition-colors tw-duration-200 tw-border-r tw-border-white" title="Pronounce the name" onclick='textToAudio(document.getElementById("My_FullAddress").value)'>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover">
<path stroke-linecap=round stroke-linejoin=round d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
</svg>
</button>
<button class="tw-absolute tw-top-0 tw-right-0 tw-w-8 tw-h-8 tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-rounded-e-sm" title=Copy onclick='Copy(document.getElementById("My_FullAddress").value)'>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover tw-rounded-e-sm">
<path stroke-linecap=round stroke-linejoin=round d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/>
</svg>
</button>
</div>
<div class="tw-w-full tw-h-8 tw-relative tw-rounded-sm">
<input name=My_Email id=My_Email class="tw-w-full tw-h-full tw-box-border tw-inline-block tw-text-black tw-pl-[85px] tw-pr-9 tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 tw-peer tw-rounded-sm">
<label for=My_Email class="tw-w-[80px] tw-h-full tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-capitalize tw-px-2 tw-rounded-s-sm tw-font-bold tw-flex tw-justify-center tw-items-center">email</label>
<button class="tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-right-0 tw-w-8 tw-h-full tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-rounded-e-sm" title=Copy onclick='Copy(document.getElementById("My_Email").value)'>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover tw-rounded-e-sm">
<path stroke-linecap=round stroke-linejoin=round d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/>
</svg>
</button>
</div>
<div class="tw-w-full tw-relative tw-flex">
<label for=My_Comments class="tw-w-[80px] tw-font-bold tw-capitalize">comments</label>
<div class="tw-flex-1 tw-h-8 tw-ml-2 tw-relative">
<textarea type=text name=My_Comments id=My_Comments class="tw-w-full tw-h-[150px] tw-max-h-[150px] tw-min-h-[50px] tw-text-black tw-pl-2 tw-pr-9 tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400"></textarea>
<button class="tw-absolute tw-top-0 tw-right-0 tw-w-8 tw-h-8 tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800" title=Copy onclick='Copy(document.getElementById("My_Comments").value)'>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover">
<path stroke-linecap=round stroke-linejoin=round d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
<div class=tw-w-[242px]>
<div class="tw-w-[95%] tw-mx-auto tw-rounded-sm" style="height:calc(100% - 110px)">
<div class="tw-overflow-hidden tw-box-border tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-between tw-items-center">
<input type=radio name=subContant id=subContant_1 class="subContantRadio tw-absolute tw-top-0 tw-left-0 tw-w-0 tw-h-0 -tw-translate-x-full tw-peer/subContant_1" checked>
<label for=subContant_1 class="tw-flex tw-justify-center tw-items-center tw-cursor-pointer tw-select-none tw-h-[20px] tw-transition tw-duration-1000 tw-ease-in-out peer-checked/subContant_1:-tw-translate-y-[125%] tw-text-white tw-animate-pulse">
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-6 tw-h-6 tw-animate-bounce">
<path stroke-linecap=round stroke-linejoin=round d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
</svg>
</label>
<input type=radio name=subContant id=subContant_2 class="subContantRadio tw-absolute tw-top-0 tw-left-0 tw-w-0 tw-h-0 -tw-translate-x-full tw-peer/subContant_2">
<label for=subContant_2 class="tw-flex tw-justify-center tw-items-center tw-cursor-pointer tw-select-none tw-h-[20px] tw-transition tw-duration-1000 tw-ease-in-out peer-checked/subContant_2:tw-translate-y-[125%] tw-text-white tw-animate-pulse">
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-6 tw-h-6 tw-animate-bounce">
<path stroke-linecap=round stroke-linejoin=round d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
</svg>
</label>
<div class="tw-absolute tw-left-0 tw-top-0 -tw-translate-y-[125%] peer-checked/subContant_1:tw-top-1/2 peer-checked/subContant_1:-tw-translate-y-1/2 tw-w-full tw-box-border tw-transition tw-duration-500 tw-ease-in-out tw-rounded-sm" style="height:calc(100% - 40px)">
<div class="tw-w-full tw-h-full tw-p-2 tw-overflow-hidden tw-box-border tw-flex tw-flex-col tw-justify-evenly">
<div class="tw-flex tw-justify-around tw-items-center tw-gap-2">
<span class="tw-text-sm tw-text-gray-400 tw-line-clamp-1 tw-capitalize">AHWCH:</span>
<label for=AHWCH_Toggle class="tw-inline-block tw-w-10 tw-h-5 tw-rounded-full tw-cursor-pointer tw-relative tw-bg-gray-300">
<input type=checkbox name=AHWCH_Toggle id=AHWCH_Toggle class="tw-absolute tw-top-0 tw-left-0 tw-invisible tw-peer" checked>
<span class="tw-w-2/5 tw-h-4/5 tw-bg-rose-300 tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-1 tw-rounded-full tw-transition-all tw-duration-300 peer-checked:tw-left-5 peer-checked:tw-bg-red-500"></span>
</label>
</div>
<div class="tw-w-full tw-relative tw-mt-2">
<label for=My_callBackInput class="tw-h-full tw-w-[70px] tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-text-xs tw-capitalize tw-px-2 rounded-s-sm tw-flex tw-justify-center tw-items-center">
Call Back:
</label>
<input id=My_callBackInput class="tw-w-full tw-h-8 tw-box-border tw-text-black tw-pl-[74px] tw-pr-11 tw-py-1 tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 tw-rounded-sm">
<button class="tw-absolute tw-top-0 tw-right-0 tw-w-10 tw-h-8 tw-py-1 tw-bg-sky-500 tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-sky-300 rounded-e-sm" onclick='CallThisNumber(document.getElementById("My_callBackInput").value)'>
<svg xmlns=http://www.w3.org/2000/svg fill=#1e293b viewBox="0 0 24 24" stroke-width=1.5 stroke=block class="tw-w-full tw-h-full tw-object-cover rounded-e-sm" id=My_liveCallSvg_indocater>
<path stroke-linecap=round stroke-linejoin=round d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
</svg>
</button>
</div>
<div class=tw-mt-3>
<div class="tw-w-full tw-h-fit tw-box-border tw-shadow-md tw-flex tw-flex-col">
<textarea class="tw-order-2 tw-block tw-w-full tw-transition-all tw-duration-300 tw-h-8 focus:tw-h-24 tw-resize-none tw-text-black tw-px-2 tw-pt-0 tw-peer tw-box-border tw-border-[3px] tw-border-t-0 focus:tw-outline-none tw-border-transparent focus:tw-border-blue-400 tw-rounded-b-sm" name=My_callbacksTextarea id=My_callbacksTextarea placeholder="Enter Call backs list"></textarea>
<div class="tw-order-1 tw-w-full tw-h-8 tw-bg-slate-800 tw-text-white tw-flex tw-justify-between tw-px-2 tw-border-[3px] tw-border-b-0 tw-border-transparent peer-focus:tw-border-blue-400 tw-rounded-t-sm">
<button class="tw-w-8 tw-h-8 tw-px-1 tw-text-sm tw-group" title="Set Call backs list" onclick='setCallBacksArray(document.getElementById("My_callbacksTextarea").value)'>
<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" fill=currentColor class="tw-h-full tw-w-full tw-object-cover tw-transition-colors tw-duration-300 group-hover:tw-fill-green-500">
<path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"/>
<path fill-rule=evenodd d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z" clip-rule=evenodd />
</svg>
</button>
<button class="tw-w-8 tw-h-8 tw-px-1 tw-text-sm tw-group" title="Reset Call backs list" onclick=resetCBArrayAndIndex()>
<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" fill=currentColor class="tw-h-full tw-w-full tw-object-cover tw-transition-colors tw-duration-300 group-hover:tw-fill-red-500">
<path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"/>
<path fill-rule=evenodd d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clip-rule=evenodd />
</svg>
</button>
</div>
</div>
<div class="tw-flex tw-justify-between tw-mt-2">
<button class="tw-w-6 tw-h-6 hover:tw-animate-pointLeft" title="Call Previous Number" onclick=CallPrevious()>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover tw-rotate-[180deg]">
<path stroke-linecap=round stroke-linejoin=round d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
</svg>
</button>
<span class="tw-text-sm tw-text-gray-400 tw-line-clamp-1">
<span id=My_cbIndex>0</span>
/
<span id=My_cbArrayLength>0</span>
</span>
<button class="tw-w-6 tw-h-6 hover:tw-animate-pointRight" title="Call Next Number" onclick=CallNext()>
<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24" stroke-width=1.5 stroke=currentColor class="tw-w-full tw-h-full tw-object-cover">
<path stroke-linecap=round stroke-linejoin=round d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
</svg>
</button>
</div>
</div>
</div>
</div>
<div class="tw-absolute tw-left-0 tw-top-0 tw-translate-y-[125%] peer-checked/subContant_2:tw-top-1/2 peer-checked/subContant_2:-tw-translate-y-1/2 tw-w-full tw-box-border tw-transition tw-duration-500 tw-ease-in-outtw-rounded-sm" style="height:calc(100% - 40px)">
<div class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
<span class=tw-text-slate-100>sub contant 2</span>
</div>
</div>
</div>
</div>
</div>
</div>
<span id=My_Notification class="tw-fixed tw-top-8 -tw-translate-y-[200%] tw-left-1/2 -tw-translate-x-1/2 tw-px-2 tw-py-1 tw-rounded-sm tw-transition tw-duration-300 tw-line-clamp-1">Notification</span>
</div>
` 
); 
const the_TransferMain_span=document.getElementById("TransferMain");function setStyles(){let e=document.querySelector("body");e?e.style.overflow="hidden":console.log("setStyles bad body tag"),the_TransferMain_span?(the_TransferMain_span.style.position="fixed",the_TransferMain_span.style.bottom="0",the_TransferMain_span.style.left="0",the_TransferMain_span.style.top="auto",the_TransferMain_span.style.right="auto"):console.log("setStyles bad TransferMain");let t=document.getElementById("webphoneSpan");t?(t.style.position="absolute",t.style.bottom="auto",t.style.left="auto",t.style.top="auto",t.style.right="auto",t.style.height="auto",t.style.overflow="auto",t.style.zIndex="auto",t.style.backgroundColor="unset"):console.log("setStyles bad webphoneSpan");let n=document.getElementById("webphone");n?(n.style.position="fixed",n.style.bottom="0px",n.style.left="auto",n.style.top="auto",n.style.right="0px",n.style.zIndex="28",n.style.width="432px",n.style.height="261px"):console.log("setStyles bad webphone");let a=document.getElementById("AgentViewSpan");a?(a.style.position="fixed",a.style.bottom="0px",a.style.left="auto",a.style.top="60px",a.style.right="0px",a.style.zIndex="28",a.style.width="190px",a.style.height="300px",a.style.overflowX="auto",a.style.overflowY="auto",a.style.backgroundColor="unset",a.style.color="white"):console.log("setStyles bad AgentViewSpan")}function checkActiveCall(){return!!(1==VD_live_customer_call||1==MD_channel_look||lastcustchannel.length>0||manual_call_live>0)}function checkCustHungUp(e){if(!e)return"no active call";{let t=document.getElementById("Tabs").getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[3].getElementsByTagName("img")[0].getAttribute("src").split("/");return"agc_live_call_DEAD.gif"==t[t.length-1]&&1===CheckDEADcallON}}setStyles();const phone_numberDISP=document.getElementById("phone_numberDISP");let temp_phoneNumber="";function gotANewCall(){return new Promise((e,t)=>{try{let n=phone_numberDISP.innerText,a=temp_phoneNumber!==n;a?(temp_phoneNumber=n,e(!0)):e(!1)}catch(l){t(l)}})}const DispoSelectBox=document.querySelector("#DispoSelectBox");function checkDispoPanlVisibalty(){return"visible"===DispoSelectBox.style.visibility}function checkIfReady(){return"PAUSED"!==VDRP_stage}function hungupAndDispo(e="NI",t="both",n=()=>{console.log("hungupAndDispo callBackFunc this the default msg")},a=0,l=1e3){return new Promise((s,i)=>{checkActiveCall()?"both"===t?(setTimeout(()=>{dialedcall_send_hangup("","","","","YES"),n()},a),setTimeout(()=>{checkDispoPanlVisibalty()?(DispoSelectContent_create(e,"ADD","YES"),DispoSelect_submit("","","YES"),s(!0)):i({case:!1,reason:"Dispo Panl not Visible"})},l)):"hungup"===t?setTimeout(()=>{dialedcall_send_hangup("","","","","YES"),s(!0)},a):"dispo"===t&&setTimeout(()=>{checkDispoPanlVisibalty()?(DispoSelectContent_create(e),DispoSelect_submit("","","YES"),s(!0)):i({case:!1,reason:"Dispo Panl not Visible"})},l):i({case:!1,reason:"no active call"})})}const sessionIDspan=document.getElementById("sessionIDspan"),My_sessionIDspan=document.getElementById("My_sessionIDspan"),AgentStatusCalls=document.getElementById("AgentStatusCalls"),My_AgentStatusCalls=document.getElementById("My_AgentStatusCalls"),SecondSDISP=document.getElementById("SecondSDISP"),My_SecondSDISP=document.getElementById("My_SecondSDISP"),MainStatuSSpan=document.getElementById("MainStatuSSpan"),My_MainStatuSSpan=document.getElementById("My_MainStatuSSpan");function getHeaderInfo(e){e&&(My_MainStatuSSpan.innerText!==MainStatuSSpan.innerText&&(My_MainStatuSSpan.innerText=MainStatuSSpan.innerText),My_SecondSDISP.innerText!==SecondSDISP.innerText&&(My_SecondSDISP.innerText=SecondSDISP.innerText),My_AgentStatusCalls.innerHTML!==AgentStatusCalls.innerHTML&&(My_AgentStatusCalls.innerHTML=AgentStatusCalls.innerHTML),My_sessionIDspan.innerText!==sessionIDspan.innerText&&(My_sessionIDspan.innerText=sessionIDspan.innerText))}const status=document.getElementById("status"),My_status=document.getElementById("My_status");function CallIndocater(e){let t=document.getElementById("My_liveCallSvg_indocater");!0===e?"red"!==t.getAttribute("stroke")&&(t.setAttribute("stroke","red"),t.classList.add("sm:tw-animate-bounce")):!1===e?"#00ff00"!==t.getAttribute("stroke")&&(t.setAttribute("stroke","#00ff00"),t.classList.add("sm:tw-animate-bounce")):"no active call"===e&&"gray"!==t.getAttribute("stroke")&&(t.setAttribute("stroke","gray"),t.classList.remove("sm:tw-animate-bounce"))}setInterval(()=>{My_status.innerText!==status.innerText&&(My_status.innerText=status.innerText)},1e3);const My_goReadyBtn=document.getElementById("My_goReadyBtn"),My_pauseBtn=document.getElementById("My_pauseBtn"),My_readyOrPauseSpan_indocater=document.getElementById("My_readyOrPauseSpan_indocater");function showAndHide_StartPauseBtns(e){!1===checkIfReady()&&My_goReadyBtn.classList.contains("tw-hidden")?(My_pauseBtn.classList.add("tw-hidden"),My_goReadyBtn.classList.remove("tw-hidden"),My_readyOrPauseSpan_indocater.innerHTML='you are <span class="tw-text-yellow-500 tw-inline-block tw-animate-bounce">paused</span>'):!0===checkIfReady()&&My_pauseBtn.classList.contains("tw-hidden")&&(My_goReadyBtn.classList.add("tw-hidden"),My_pauseBtn.classList.remove("tw-hidden"),My_readyOrPauseSpan_indocater.innerHTML='you are <span class="tw-text-green-500 tw-inline-block tw-animate-bounce">ready</span>'),e?My_goReadyBtn.disabled&&My_pauseBtn.disabled||(My_goReadyBtn.disabled=!0,My_pauseBtn.disabled=!0):(My_goReadyBtn.disabled||My_pauseBtn.disabled)&&(My_goReadyBtn.disabled=!1,My_pauseBtn.disabled=!1)}My_goReadyBtn.addEventListener("click",()=>{My_goReadyBtn.classList.add("tw-hidden"),My_pauseBtn.classList.remove("tw-hidden"),My_readyOrPauseSpan_indocater.innerHTML='you are <span class="tw-text-green-500 tw-inline-block tw-animate-bounce">ready</span>'}),My_pauseBtn.addEventListener("click",()=>{My_pauseBtn.classList.add("tw-hidden"),My_goReadyBtn.classList.remove("tw-hidden"),My_readyOrPauseSpan_indocater.innerHTML='you are <span class="tw-text-yellow-500 tw-inline-block tw-animate-bounce">paused</span>'});const My_openTransferPanelBtn=document.getElementById("My_openTransferPanelBtn"),My_closeTransferPanelBtn=document.getElementById("My_closeTransferPanelBtn");function disableAndEnable_OpenCloseTransferBtns(e){e?(My_openTransferPanelBtn.disabled||My_closeTransferPanelBtn.disabled)&&(My_openTransferPanelBtn.disabled=!1,My_closeTransferPanelBtn.disabled=!1,My_openTransferPanelBtn.classList.add("hover:tw-bg-green-500"),My_closeTransferPanelBtn.classList.add("hover:tw-bg-green-600")):(My_openTransferPanelBtn.disabled&&My_closeTransferPanelBtn.disabled||(My_openTransferPanelBtn.disabled=!0,My_closeTransferPanelBtn.disabled=!0),My_closeTransferPanelBtn.classList.contains("tw-hidden")||(My_closeTransferPanelBtn.classList.add("tw-hidden"),My_openTransferPanelBtn.classList.remove("tw-hidden"),My_openTransferPanelBtn.classList.remove("hover:tw-bg-green-500"),My_closeTransferPanelBtn.classList.remove("hover:tw-bg-green-600")))}My_openTransferPanelBtn.addEventListener("click",()=>{the_TransferMain_span.style.top="auto",My_openTransferPanelBtn.classList.add("tw-hidden"),My_closeTransferPanelBtn.classList.remove("tw-hidden")}),My_closeTransferPanelBtn.addEventListener("click",()=>{My_closeTransferPanelBtn.classList.add("tw-hidden"),My_openTransferPanelBtn.classList.remove("tw-hidden")});const My_hungupBtn=document.getElementById("My_hungupBtn"),My_f1_hungupBtn=document.getElementById("My_f1_hungupBtn"),My_f2_hungupBtn=document.getElementById("My_f2_hungupBtn"),My_f3_hungupBtn=document.getElementById("My_f3_hungupBtn"),My_f4_hungupBtn=document.getElementById("My_f4_hungupBtn");function disableAndEnable_hungupBtn(e){e?My_hungupBtn.disabled&&(My_hungupBtn.disabled=!1,My_hungupBtn.classList.remove("tw-bg-red-400"),My_hungupBtn.classList.add("tw-bg-red-500","hover:tw-bg-red-800","hover:tw-text-slate-100"),My_f1_hungupBtn.disabled=!1,My_f2_hungupBtn.disabled=!1,My_f3_hungupBtn.disabled=!1,My_f1_hungupBtn.disabled=!1,My_f1_hungupBtn.classList.add("hover:tw-bg-red-800","hover:tw-text-slate-100"),My_f2_hungupBtn.classList.add("hover:tw-bg-red-800","hover:tw-text-slate-100"),My_f3_hungupBtn.classList.add("hover:tw-bg-red-800","hover:tw-text-slate-100"),My_f4_hungupBtn.classList.add("hover:tw-bg-red-800","hover:tw-text-slate-100")):My_hungupBtn.disabled||(My_hungupBtn.disabled=!0,My_hungupBtn.classList.remove("tw-bg-red-500","hover:tw-bg-red-800","hover:tw-text-slate-100"),My_hungupBtn.classList.add("tw-bg-red-400"),My_f1_hungupBtn.disabled=!0,My_f2_hungupBtn.disabled=!0,My_f3_hungupBtn.disabled=!0,My_f4_hungupBtn.disabled=!0,My_f1_hungupBtn.classList.remove("hover:tw-bg-red-800","hover:tw-text-slate-100"),My_f2_hungupBtn.classList.remove("hover:tw-bg-red-800","hover:tw-text-slate-100"),My_f3_hungupBtn.classList.remove("hover:tw-bg-red-800","hover:tw-text-slate-100"),My_f4_hungupBtn.classList.remove("hover:tw-bg-red-800","hover:tw-text-slate-100"))}function webForm1_click(){if(checkActiveCall()){let e=document.getElementById("WebFormSpan").querySelector("a");e&&(console.log(),window.open(e.getAttribute("href"),"_blank"))}}function webForm2_click(){if(checkActiveCall()){let e=document.getElementById("WebFormSpanTwo").querySelector("a");e&&(console.log(),window.open(e.getAttribute("href"),"_blank"))}}const My_webform1=document.getElementById("My_webform1"),My_webform2=document.getElementById("My_webform2");function disableAndEnable_wbefromBtns(e){e?(My_webform1.disabled||My_webform2.disabled)&&(My_webform1.disabled=!1,My_webform2.disabled=!1,My_webform1.classList.add("hover:tw-bg-slate-400"),My_webform2.classList.add("hover:tw-bg-slate-400")):My_webform1.disabled&&My_webform2.disabled||(My_webform1.disabled=!0,My_webform2.disabled=!0,My_webform1.classList.remove("hover:tw-bg-slate-400"),My_webform2.classList.remove("hover:tw-bg-slate-400"))}const My_parkcallBtn=document.getElementById("My_parkcallBtn"),My_parkcallSpan=document.getElementById("My_parkcallSpan"),ParkCounterSpan=document.getElementById("ParkCounterSpan");let ParkCounterSpanInterval,update_My_parkcallSpan=!1;function parkcallBtn_click(){let e=document.getElementById("ParkControl").querySelector("a");if(!e)return!1;e.click(),My_parkcallSpan.classList.remove("tw-hidden"),update_My_parkcallSpan=!update_My_parkcallSpan;let t=()=>{My_parkcallSpan.innerText!==ParkCounterSpan.innerText&&update_My_parkcallSpan&&(My_parkcallSpan.innerText=ParkCounterSpan.innerText)};ParkCounterSpanInterval=setInterval(t,1e3)}function disableAndEnable_parkcallBtn(e){e?My_parkcallBtn.disabled&&(My_parkcallBtn.disabled=!1,My_parkcallBtn.classList.add("hover:tw-bg-slate-400")):My_parkcallBtn.disabled||(My_parkcallBtn.disabled=!0,My_parkcallBtn.classList.remove("hover:tw-bg-slate-400"),My_parkcallSpan.classList.add("tw-hidden"),clearInterval(ParkCounterSpanInterval))}const My_manualDialBtn=document.getElementById("My_manualDialBtn");function disableAndEnable_manualDialBtn(e){e?My_manualDialBtn.disabled&&(My_manualDialBtn.disabled=!0,My_manualDialBtn.classList.remove("hover:tw-bg-slate-950")):My_manualDialBtn.disabled||(My_manualDialBtn.disabled=!1,My_manualDialBtn.classList.add("hover:tw-bg-slate-950"))}const My_callLogBtn=document.getElementById("My_callLogBtn");function disableAndEnable_callLogBtn(e){e?My_callLogBtn.disabled&&(My_callLogBtn.disabled=!0,My_callLogBtn.classList.remove("hover:tw-bg-slate-950")):My_callLogBtn.disabled||(My_callLogBtn.disabled=!1,My_callLogBtn.classList.add("hover:tw-bg-slate-950"))}const My_webPhoneBtn=document.getElementById("My_webPhoneBtn"),My_webPhoneBtnSpan=document.getElementById("My_webPhoneBtnSpan");let webPhone_isOpen=!0;function webPhoneBtn_click(){let e=document.getElementById("webphoneLink").querySelector("a");e&&(e.click(),webPhone_isOpen=!webPhone_isOpen),My_webPhoneBtnSpan.innerText=webPhone_isOpen?"-":"+"}const My_agentsViewBtn=document.getElementById("My_agentsViewBtn"),My_agentsViewBtnSpan=document.getElementById("My_agentsViewBtnSpan");let agentsViewBtn_isOpen=!1;function agentsViewBtn_click(){let e=document.getElementById("AgentViewLink").querySelector("a");e&&(e.click(),agentsViewBtn_isOpen=!agentsViewBtn_isOpen),My_agentsViewBtnSpan.innerText=agentsViewBtn_isOpen?"-":"+"}const My_PhoneNumber=document.getElementById("My_PhoneNumber"),title=document.getElementById("title"),first_name=document.getElementById("first_name"),middle_initial=document.getElementById("middle_initial"),last_name=document.getElementById("last_name"),My_FullName=document.getElementById("My_FullName"),address1=document.getElementById("address1"),address2=document.getElementById("address2"),address3=document.getElementById("address3"),city=document.getElementById("city"),state=document.getElementById("state"),postal_code=document.getElementById("postal_code"),province=document.getElementById("province"),My_FullAddress=document.getElementById("My_FullAddress"),email=document.getElementById("email"),My_Email=document.getElementById("My_Email"),comments=document.getElementById("comments"),My_Comments=document.getElementById("My_Comments");function getCustInfo(e,t){t&&e?(My_PhoneNumber.value=phone_numberDISP.innerText.trim(),My_FullName.value=`${title.value} ${first_name.value} ${middle_initial.value} ${last_name.value}`.trim(),My_FullAddress.value=`${address1.value} ${address2.value} ${address3.value} ${city.value} ${state.value} ${postal_code.value} ${province.value}`.trim(),My_Email.value=email.value.trim(),My_Comments.value=comments.value.trim()):t&&!e&&(My_PhoneNumber.value="",My_FullName.value="",My_FullAddress.value="",My_Email.value="",My_Comments.value="")}const My_Notification=document.getElementById("My_Notification");let is_Notification_open=!1;function show_Notification(e,t="sky",n=4e3){is_Notification_open?setTimeout(()=>{show_Notification(e,t,n)},500):(is_Notification_open=!0,My_Notification.innerText=e,My_Notification.classList.remove("-tw-translate-y-[200%]"),My_Notification.classList.add(`tw-bg-${t}-500`),setTimeout(()=>{My_Notification.classList.add("-tw-translate-y-[200%]"),setTimeout(()=>{My_Notification.classList.remove(`tw-bg-${t}-500`),My_Notification.innerText="",is_Notification_open=!1},400)},n))}let modelIsOpen=!1;const modal=document.getElementById("My_modal"),modalText=document.getElementById("My_modalText"),My_modalTimer=document.getElementById("My_modalTimer"),modalOkayBtn=document.getElementById("My_modal_okayBtn"),modalCancelBtn=document.getElementById("My_modal_cancelBtn");function openModal(e,t,n,a=()=>{},l=5e3){modelIsOpen&&console.log(`${e}
"modal is open"`),modelIsOpen=!0,modalText.innerText=e;let s=l/1e3;My_modalTimer.innerText=s.toString();let i=setInterval(()=>{s--,My_modalTimer.innerText=s.toString()},1e3),o=()=>{t(),clearTimeout(d),u()},r=()=>{n(),clearTimeout(d),u()};modalOkayBtn.removeEventListener("click",o),modalCancelBtn.removeEventListener("click",r),modalOkayBtn.addEventListener("click",o),modalCancelBtn.addEventListener("click",r),modal.classList.remove("tw-translate-y-[180%]"),modal.classList.add("tw-translate-y-0");let d=setTimeout(()=>{modelIsOpen&&(a(),u())},l);function u(){clearInterval(i),modal.classList.remove("tw-translate-y-0"),modal.classList.add("tw-translate-y-[180%]"),modelIsOpen=!1,modalOkayBtn.removeEventListener("click",o),modalCancelBtn.removeEventListener("click",r)}}function toggleMyInterface(){document.getElementById("My_interfaceDiv").classList.toggle("tw-invisible")}let isItMuted=!1;const autoMuteToggle=document.getElementById("autoMuteToggle");function AutoMuteFunc(e){if(!autoMuteToggle.checked)return!1;e?!0==isItMuted&&(volume_control("UNMUTE",agentchannel,"AgenT"),sendMessageToIframe("muteButton"),isItMuted=!1):isItMuted||(volume_control("MUTING",agentchannel,"AgenT"),sendMessageToIframe("muteButton"),isItMuted=!0)}let DupList=[];function getDupListFromlocalStorge(){let e=JSON.parse(localStorage.getItem("DupList"));null==e?alert("Did Not find a duplicate list in the lucalstorge"):null!=e&&(DupList=e)}getDupListFromlocalStorge();const My_PhoneNumber_label=document.getElementById("My_PhoneNumber_label");function AutoCheckDupFun(e,t){t&&e?0===DupList.length?(My_PhoneNumber_label.classList.contains("tw-bg-green-500")||My_PhoneNumber_label.classList.contains("tw-bg-red-500"))&&(My_PhoneNumber_label.classList.remove("tw-bg-green-500"),My_PhoneNumber_label.classList.remove("tw-bg-red-500")):DupList.includes(phone_numberDISP.innerText)?(My_PhoneNumber_label.classList.remove("tw-bg-green-500"),My_PhoneNumber_label.classList.add("tw-bg-red-500")):(My_PhoneNumber_label.classList.remove("tw-bg-red-500"),My_PhoneNumber_label.classList.add("tw-bg-green-500")):!e&&(My_PhoneNumber_label.classList.contains("tw-bg-green-500")||My_PhoneNumber_label.classList.contains("tw-bg-red-500"))&&(My_PhoneNumber_label.classList.remove("tw-bg-green-500"),My_PhoneNumber_label.classList.remove("tw-bg-red-500"))}const My_dupListInput=document.getElementById("dupListInput");function setDupListTolocalStorge(){try{let e=JSON.parse(My_dupListInput.value);if(Array.isArray(e)){let t=!1;if(e.forEach(e=>{(10!==e.length||isNaN(Number(e)))&&(t=!0)}),t)return show_Notification("One or more entries are not valid phone numbers.","red"),!1;localStorage.setItem("DupList",JSON.stringify(e)),getDupListFromlocalStorge(),My_dupListInput.value="",show_Notification("Duplicates List has been set.","green")}else show_Notification("Textarea value is not a valid array.","red")}catch(n){show_Notification("Error parsing the textarea value as JSON.","red")}}function Copy(...e){let t=e.join(" ");navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{console.error("Unable to copy text to clipboard",e)})}function openTahtsThem(){let e=phone_numberDISP.innerText;if(10===e.length){let t=`https://thatsthem.com/phone/${e.slice(0,3)}-${e.slice(3,6)}-${e.slice(6,10)}`;window.open(t,"_blank")}else show_Notification("phone number is not valid ","red")}const autoPronunciationToggle=document.getElementById("autoPronunciation");function autoPronunciationFunc(e,t){if(!autoPronunciationToggle.checked)return!1;t&&e&&textToAudio(`${My_FullName.value}`)}function textToAudio(e){let t=new SpeechSynthesisUtterance;t.voiceURI="Google US English",t.lang="en-US",t.name="Google US English",t.text=e;let n=window.speechSynthesis;n.speak(t)}function stopTextToAudio(){window.speechSynthesis.cancel()}let manualHungUp=!1;const TransferMain=document.querySelector("#TransferMain"),AHWCH_Toggle=document.getElementById("AHWCH_Toggle");let custHungupModelIsOpen=!1;const autoHungupWaitTimeInput=document.getElementById("autoHungupWaitTimeInput");autoHungupWaitTimeInput.addEventListener("keydown",function(e){e.preventDefault()});let autoHungupWaitingTime=5e3;function autoHungupIfCustHungup(e){if(!0!==e||!AHWCH_Toggle.checked||custHungupModelIsOpen)return;custHungupModelIsOpen=!0;let t=async()=>{if("visible"!==TransferMain.style.visibility)try{await hungupAndDispo(custHungupDispo,"both"),show_Notification(`Customer has hung up. Dispositioned as not ${custHungupDispo}`,"sky")}catch(e){console.log("autoHungupIfCustHungup catch block","case: ",e.case,"reason: ",e.reason,"error: ",e)}};openModal(`Customer Hung up will end to call in ${autoHungupWaitingTime/1e3} seconds?`,()=>{t()},()=>{console.log("hungup was canceld")},()=>{console.log("modal on close func runing"),t()},autoHungupWaitingTime)}autoHungupWaitTimeInput.addEventListener("change",function(){autoHungupWaitingTime=1e3*Number(autoHungupWaitTimeInput.value),console.log(autoHungupWaitingTime)});let allDispoOptions=[];function GetAllDispoArr(){let e=processDispoSelect("DispoSelectA");if(e){let t=processDispoSelect("DispoSelectB"),n=processDispoSelect("DispoSelectC");if(t&&n)return!0}return!1}function processDispoSelect(e){let t=document.getElementById(e);if(null===t)return!1;let n=t.querySelectorAll('[size="2"]'),a=[];return n.forEach(e=>{a.push(e.firstElementChild)}),a.forEach(e=>{let t=("'"+e.attributes.onclick.value.split(",")[0].match(/'([^']+)'/)[1]+"'").replace(/'/g,"\\'");allDispoOptions.push(t)}),!0}function addOptinos(e,t,n=0){let a=document.getElementById(t);e.forEach((e,t)=>{let l=document.createElement("option");l.value=e,l.textContent=e,t===n&&(l.selected=!0),a.appendChild(l)}),a.addEventListener("change",function(){let e=a.value,t=a.id;switch(t){case"F1select":F1=e;break;case"F2select":F2=e;break;case"F3select":F3=e;break;case"F4select":F4=e;break;case"custHungupDispoSelect":custHungupDispo=e}console.log("F1: ",F1," F2: ",F2," F3: ",F3," F4: ",F4)})}let autoCustHungup=!1,GotTheGetAllDispoArr=!1;function addAllOptionsToSelect(){GetAllDispoArr()?(addOptinos(allDispoOptions,"F1select",0),addOptinos(allDispoOptions,"F2select",1),addOptinos(allDispoOptions,"F3select",2),addOptinos(allDispoOptions,"F4select",3),addOptinos(allDispoOptions,"custHungupDispoSelect",0),autoCustHungup=!0,GotTheGetAllDispoArr=!0,F1=allDispoOptions[0],F2=allDispoOptions[1],F3=allDispoOptions[2],F4=allDispoOptions[3],custHungupDispo=allDispoOptions[0]):console.log("addAllOptionsToSelect still cant find the #DispoSelectA or #DispoSelectB or #DispoSelectC")}let F1=!1,F2=!1,F3=!1,F4=!1,custHungupDispo=!1;async function hungup_withButton(e){try{manualHungUp=!0,await hungupAndDispo(e,"both",()=>{setTimeout(()=>{manualHungUp=!1},1100)}),show_Notification("Call hanged up and dispositioned as "+e.toString(),"sky")}catch(t){console.log(`keydown  dispo: ${e}`,"case: ",t.case,"reason: ",t.reason,"error: ",t),show_Notification(t.reason,"red")}}function validatePhoneNumber(e){if(!e)return!1;let t=e.toString().trim(),n=t.replace(/\D/g,""),a=/^(\d{10}|\d{11})$/.test(n);return!!a&&10===t.length||(console.log(t),!1)}function CallThisNumber(e){if(checkActiveCall())return show_Notification("There's already an active call","red"),!1;if(!validatePhoneNumber(e))return show_Notification("Unvalid phone number","red"),!1;if(checkIfReady()&&AutoDial_ReSume_PauSe("VDADpause","","","","","","","YES"),!checkIfReady()){NeWManuaLDiaLCalL("NO","","","","","YES","YES");let t=document.getElementById("NeWManuaLDiaLBox");if("visible"===t.style.visibility)return document.getElementById("MDPhonENumbeR").value=e,NeWManuaLDiaLCalLSubmiT("NOW","YES"),!0}return!1}My_f1_hungupBtn.addEventListener("click",async()=>{!1!=F1?hungup_withButton(F1):show_Notification("F1 is Still not assigned","red")}),My_f2_hungupBtn.addEventListener("click",async()=>{!1!=F2?hungup_withButton(F2):show_Notification("F3 is Still not assigned","red")}),My_f3_hungupBtn.addEventListener("click",async()=>{!1!=F3?hungup_withButton(F3):show_Notification("F3 is Still not assigned","red")}),My_f4_hungupBtn.addEventListener("click",async()=>{!1!=F4?hungup_withButton(F4):show_Notification("F4 is Still not assigned","red")}),document.addEventListener("keydown",async function(e){switch(e.which){case 112:e.preventDefault(),!1!=F1?hungup_withButton(F1):show_Notification("F1 is Still not assigned","red");break;case 113:e.preventDefault(),!1!=F2?hungup_withButton(F2):show_Notification("F2 is Still not assigned","red");break;case 114:e.preventDefault(),!1!=F3?hungup_withButton(F3):show_Notification("F3 is Still not assigned","red");break;case 115:e.preventDefault(),!1!=F4?hungup_withButton(F4):show_Notification("F4 is Still not assigned","red")}});let cbIndex=-1,CallBacksArray=[];function setCallBacksArray(e){if(0===e.length){show_Notification("Unveiled input","red");return}let t=e.split("\n");if(0===t.length){show_Notification("Unveiled input","red");return}CallBacksArray=[],cbIndex=-1;let n=[],a=[],l=[];for(var s=0;s<t.length;s++){let i=t[s].trim();validatePhoneNumber(i)?DupList.includes(i.toString())?l.push(i):n.push(i):a.push(i)}a.length>0&&show_Notification(`There was ${a.length} unvalid numbers in the input`,"red"),l.length>0&&show_Notification(`There was ${l.length} numbers From the duplicated list in the input`,"red"),CallBacksArray=Array.from(new Set(n)),document.getElementById("My_callbacksTextarea").value="",document.getElementById("My_cbIndex").innerText="-",document.getElementById("My_cbArrayLength").innerText=CallBacksArray.length.toString()}function CallNext(){if(CallBacksArray.length<1){show_Notification("Unveiled call back Array","red");return}if(CallBacksArray[cbIndex+1])cbIndex++;else{show_Notification("There is no more numbers on the list","red");return}let e=CallThisNumber(CallBacksArray[cbIndex]);e?updateIndexIndicator():cbIndex--}function CallPrevious(){if(CallBacksArray.length<1){show_Notification("Unveiled call back Array","red");return}if(CallBacksArray[cbIndex-1])cbIndex--;else{show_Notification("There is no previous number on the list","red");return}let e=CallThisNumber(CallBacksArray[cbIndex]);e?updateIndexIndicator():cbIndex++}function updateIndexIndicator(){let e=document.getElementById("My_cbIndex");e.innerText=(cbIndex+1).toString()}function resetCBArrayAndIndex(){CallBacksArray=[],cbIndex=-1,document.getElementById("My_cbIndex").innerText="-",document.getElementById("My_callbacksTextarea").value="",document.getElementById("My_cbArrayLength").innerText="0"}function sendMessageToIframe(e=null){document.getElementById("webphone").contentWindow.postMessage(e,"https://phone.vici.cx/viciphone.php")}let is_fillInterFace_Running=!1;async function fillInterFace(){if(is_fillInterFace_Running){console.log("%c fillInterFace is still running. Skipping this iteration.","background: red; color: white");return}is_fillInterFace_Running=!0;let e=checkActiveCall(),t=checkCustHungUp(e);getHeaderInfo(e),CallIndocater(t),showAndHide_StartPauseBtns(e),disableAndEnable_OpenCloseTransferBtns(e),disableAndEnable_hungupBtn(e),disableAndEnable_wbefromBtns(e),disableAndEnable_parkcallBtn(e),disableAndEnable_manualDialBtn(e),disableAndEnable_callLogBtn(e),AutoMuteFunc(e),GotTheGetAllDispoArr||addAllOptionsToSelect();try{let n=await gotANewCall();getCustInfo(e,n),AutoCheckDupFun(e,n),autoPronunciationFunc(e,n),!manualHungUp&&autoCustHungup&&(n&&(custHungupModelIsOpen=!1),autoHungupIfCustHungup(t))}catch(a){console.error("fillInterFace catch block",a)}finally{is_fillInterFace_Running=!1}}setInterval(fillInterFace,100);
