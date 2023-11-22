// Adding the Styles
const head = document.querySelector("head");
head.insertAdjacentHTML(
  "afterbegin",
  `
  <style>
  html{
    font-size: 16px
  }
      img {
          max-width: min-content !important;
          display: initial !important;
          height: initial !important;
          vertical-align: initial !important;
      }
  </style>
  <link rel="stylesheet" href="https://leoadams2022.github.io/BizFunding.github.io/assets/css/test.css">
  `
);

//adding  html elements
const body = document.querySelector("body");
body.insertAdjacentHTML(
  "beforeend",
  `
<div
      class="tw-fixed tw-z-[27] tw-w-screen tw-h-screen tw-bg-slate-900 tw-text-slate-100"
      id="My_interfaceDiv"
    >
      <!-- header  -->
      <div
        class="tw-box-border tw-h-[60px] tw-w-full tw-flex tw-items-center tw-gap-8"
      >
        <!-- title header  -->
        <div class="tw-px-3">
          <span
            class="tw-inline-block tw-text-2xl sm:tw-text-3xl tw-font-bold tw-uppercase tw-tracking-widest"
          >
            vicidial
          </span>
          <p
            class="tw-hidden sm:tw-block tw-text-sm tw-text-gray-400 tw-italic"
          >
            interface by walid ali
          </p>
        </div>

        <div class="tw-flex-1 tw-flex tw-flex-col">
          <!-- calls in queue  span #AgentStatusCalls > font-->
          <div class="tw-flex tw-justify-evenly tw-text-sm">
            <!-- date and time span #status -->
            <span
              class="tw-line-clamp-2 tw-capitalize tw-hidden sm:tw-inline"
              id="My_status"
            >
            </span>
            <!-- session id span #sessionIDspan -->
            <span class="tw-line-clamp-2 tw-capitalize tw-hidden sm:tw-inline"
              >session: <span id="My_sessionIDspan"></span
            ></span>
            <!-- calls in queue  span #AgentStatusCalls > font-->
            <span class="tw-line-clamp-2 tw-capitalize" id="My_AgentStatusCalls"
              >queue: <span></span
            ></span>
            <!-- call seconds  span #SecondSDISP-->
            <span class="tw-line-clamp-2 tw-capitalize"
              >seconds: <span id="My_SecondSDISP"></span
            ></span>
          </div>

          <!-- status span #MainStatuSSpan-->
          <span
            class="tw-text-sm tw-text-gray-400 tw-line-clamp-1 tw-text-center"
            id="My_MainStatuSSpan"
          >
          </span>
        </div>

        <!-- live call indocater and log out btn -->
        <span
          class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center tw-items-center sm:tw-gap-3 sm:tw-px-2"
        >
          <!-- live call svg  -->
          <div
            class="tw-hidden sm:tw-inline-block tw-w-6 tw-h-6 sm:tw-w-8 sm:tw-h-8"
          >
            <!-- will ba added on a call sm:tw-animate-bounce  -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              class="tw-w-full tw-h-full tw-object-cover"
              id="My_liveCallSvg_indocater"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <!-- group svg  -->
          <div class="tw-inline-block tw-w-6 tw-h-6 sm:tw-w-8 sm:tw-h-8">
            <button
              class="tw-group"
              onclick="OpeNGrouPSelectioN();return false;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="tw-w-full tw-h-full tw-object-cover tw-transition-colors tw-duration-300 tw-ease-in-out group-hover:tw-stroke-sky-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </button>
          </div>
          <!-- log out svg  -->
          <div class="tw-inline-block tw-w-6 tw-h-6 sm:tw-w-8 sm:tw-h-8">
            <button
              class="tw-group"
              title="log out"
              onclick="NormalLogout();return false;needToConfirmExit = false;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="tw-w-full tw-h-full tw-object-cover tw-transition-colors tw-duration-300 tw-ease-in-out group-hover:tw-stroke-red-500"
                alt="log out"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
        </span>
      </div>
      <!-- ------//header -->
      <!-- contant tw-mr-[432px] tw-mb-[155px] -->
      <div
        class="tw-flex tw-justify-between tw-box-border"
        style="height: calc(100vh - 225px); width: calc(100vw - 190px)"
      >
        <!-- main contant -->
        <div
          class="tw-h-full tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between tw-items-start tw-box-border"
          style="width: calc(100% - 242px)"
        >
          <!-- call controle panel  -->
          <div
            class="tw-overflow-x-hidden tw-relative tw-w-[260px] tw-h-full tw-flex tw-justify-evenly"
          >
            <input
              type="radio"
              name="control"
              id="control_1"
              class="tw-sr-only tw-peer/control_1"
              checked
            />
            <label
              for="control_1"
              class="tw-flex-1 tw-cursor-pointer tw-text-lg tw-text-slate-900 tw-h-[25px] tw-border-b tw-border-black tw-bg-gray-300 tw-rounded-t-lg tw-flex tw-justify-center tw-items-center tw-transition-colors tw-duration-300 tw-ease-in-out tw-capitalize hover:tw-animate-pulse peer-checked/control_1:hover:tw-animate-none peer-checked/control_1:tw-font-bold peer-checked/control_1:tw-bg-gray-600 peer-checked/control_1:tw-border-b-0 peer-checked/control_1:tw-border peer-checked/control_1:tw-text-slate-100 tw-select-none"
              ><span class="">control 1</span></label
            >
            <input
              type="radio"
              name="control"
              id="control_2"
              class="tw-sr-only tw-peer/control_2"
            />
            <label
              for="control_2"
              class="tw-flex-1 tw-cursor-pointer tw-text-lg tw-text-slate-900 tw-h-[25px] tw-border-b tw-border-black tw-bg-gray-300 tw-rounded-t-lg tw-flex tw-justify-center tw-items-center tw-transition-colors tw-duration-300 tw-ease-in-out tw-capitalize hover:tw-animate-pulse peer-checked/control_2:hover:tw-animate-none peer-checked/control_2:tw-font-bold peer-checked/control_2:tw-bg-blue-400 peer-checked/control_2:tw-border-b-0 peer-checked/control_2:tw-border tw-select-none"
              ><span class="">control 2</span></label
            >
            <!-- tab1 control 1 -->
            <div
              class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-bg-gray-600 tw-transition-transform tw-duration-300 tw-ease-in-out -tw-translate-x-full tw-border-t-0 tw-border tw-border-black tw-rounded-b-lg peer-checked/control_1:tw-translate-x-0"
              style="height: calc(100% - 25px)"
            >
              <div class="tw-box-border tw-p-3 tw-flex tw-flex-col tw-gap-3">
                <!-- toggle live and pause  -->
                <div class="tw-flex tw-gap-2 tw-items-center">
                  <!-- Satrt btn  -->
                  <button
                    class="tw-text-lg tw-line-clamp-1 tw-bg-green-500 tw-text-slate-900 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-green-300"
                    onclick="AutoDial_ReSume_PauSe('VDADready','','','','','','','YES');"
                    id="My_goReadyBtn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="tw-w-6 tw-h-6 tw-inline-block tw-rounded-full tw-bg-green-900 tw-text-white tw-p-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                    <span> Satrt </span>
                  </button>
                  <!-- Pause btn  -->
                  <button
                    class="tw-text-lg tw-line-clamp-1 tw-bg-yellow-500 tw-text-slate-900 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-yellow-300 tw-hidden"
                    onclick="AutoDial_ReSume_PauSe('VDADpause','','','','','','','YES');"
                    id="My_pauseBtn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="tw-w-6 tw-h-6 tw-inline-block tw-rounded-full tw-bg-yellow-900 tw-text-white tw-p-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                      />
                    </svg>
                    <span> Pause </span>
                  </button>
                  <span
                    class="tw-text-sm tw-text-gray-300 tw-line-clamp-1 tw-uppercase"
                    id="My_readyOrPauseSpan_indocater"
                    >you are
                    <span
                      class="tw-text-yellow-500 tw-inline-block tw-animate-bounce"
                    >
                      paused
                    </span>
                  </span>
                </div>
                <!-- open transfer panel  -->
                <button
                  class="tw-text-lg tw-line-clamp-1 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-green-400 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out"
                  id="My_openTransferPanelBtn"
                  onclick="ShoWTransferMain('ON','','YES');"
                  disabled
                >
                  open transfer panel
                </button>
                <!-- close transfer panel  -->
                <button
                  class="tw-text-lg tw-line-clamp-1 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-green-700 tw-text-slate-100 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out tw-hidden"
                  id="My_closeTransferPanelBtn"
                  onclick="ShoWTransferMain('OFF','YES','YES');"
                  disabled
                >
                  close transfer panel
                </button>
                <!-- end call btn  -->
                <button
                  class="tw-text-lg tw-line-clamp-1 tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-red-400 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out"
                  onclick="hangup_customer_button_click('','','','','YES');"
                  id="My_hungupBtn"
                  disabled
                >
                  hung up
                </button>
                <hr />
                <!-- web froms btns -->
                <div class="tw-flex tw-items-center tw-gap-2">
                  <!-- webform1  -->
                  <button
                    class="tw-text-sm tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-slate-300 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out"
                    onclick="webForm1_click()"
                    id="My_webform1"
                    disabled
                  >
                    web form 1
                  </button>
                  <!-- webform2 -->
                  <button
                    class="tw-text-sm tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-slate-300 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out"
                    onclick="webForm2_click()"
                    id="My_webform2"
                    disabled
                  >
                    web form 2
                  </button>
                </div>
                <!-- park call btn  -->
                <div class="tw-flex tw-items-center tw-gap-2">
                  <!-- park call  -->
                  <button
                    class="tw-text-sm tw-font-bold tw-py-1 tw-px-2 tw-rounded-sm tw-bg-slate-300 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out"
                    onclick="parkcallBtn_click()"
                    id="My_parkcallBtn"
                    disabled
                  >
                    park call
                  </button>
                  <span
                    class="tw-text-sm tw-text-gray-300 tw-line-clamp-1 tw-uppercase"
                    id="My_parkcallSpan"
                    >Time On Park:</span
                  >
                </div>
                <hr />
                <!-- MANUAL DIAL VIEW CALL LOG btns  -->
                <div class="tw-flex tw-items-center tw-gap-2 tw-justify-evenly">
                  <!-- MANUAL DIAL btn  -->
                  <button
                    class="tw-text-sm tw-font-bold tw-py-1 tw-px-3 tw-rounded-sm tw-bg-slate-800 tw-text-slate-100 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out"
                    onclick="NeWManuaLDiaLCalL('NO','','','','','YES','YES');return false;"
                    id="My_manualDialBtn"
                  >
                    Manual Dial
                  </button>
                  <!-- Agents btn  -->
                  <button
                    class="tw-text-sm tw-font-bold tw-py-1 tw-px-3 tw-rounded-sm tw-bg-slate-800 tw-text-slate-100 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out"
                    onclick="VieWCalLLoG();return false;"
                    id="My_callLogBtn"
                  >
                    Call Log
                  </button>
                </div>
                <hr />
                <!-- View WebPhone  Agents View btns  -->
                <div class="tw-flex tw-items-center tw-gap-2 tw-justify-evenly">
                  <!-- got here  -->
                  <!-- WebPhone btn  -->
                  <button
                    class="tw-text-sm tw-font-bold tw-py-0 tw-px-2 tw-rounded-sm tw-bg-sky-500 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-sky-300"
                    id="My_webPhoneBtn"
                    onclick="webPhoneBtn_click()"
                  >
                    <span
                      class="tw-w-4 tw-h-full tw-inline-block tw-mr-1 tw-bg-sky-900 tw-text-white"
                      id="My_webPhoneBtnSpan"
                      >-</span
                    >WebPhone
                  </button>
                  <!-- Agents btn  -->
                  <button
                    class="tw-text-sm tw-font-bold tw-py-0 tw-px-2 tw-rounded-sm tw-bg-sky-500 tw-text-slate-900 tw-capitalize tw-transition-colors tw-duration-200 tw-ease-out hover:tw-bg-sky-300"
                    id="My_agentsViewBtn"
                    onclick="agentsViewBtn_click()"
                  >
                    <span
                      class="tw-w-4 tw-h-full tw-inline-block tw-mr-1 tw-bg-sky-900 tw-text-white"
                      id="My_agentsViewBtnSpan"
                      >+</span
                    >Agents
                  </button>
                </div>
              </div>
            </div>
            <!-- tab2 control 2-->
            <div
              class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-p-1 tw-bg-blue-400 tw-transition-transform tw-duration-300 tw-ease-in-out tw-translate-x-full tw-border-t-0 tw-border tw-border-black tw-rounded-b-lg peer-checked/control_2:tw-translate-x-0"
              style="height: calc(100% - 25px)"
            >
              <!-- tab2 control 2-->
              control 2
              <span>Dispospan</span>
              <span id="Dispospan"></span>
              <span>F1</span>
              <select class="select" id="F1select"></select>

              <span>F2</span>
              <select class="select" id="F2select"></select>

              <span>F3</span>
              <select class="select" id="F3select"></select>

              <span>F4</span>
              <select class="select" id="F4select"></select>
            </div>
          </div>
          <!-- cust Information  -->
          <div class="tw-box-border tw-p-3" style="width: calc(100% - 260px)">
            <!-- basic cust info  -->
            <div class="tw-w-full tw-flex tw-flex-col tw-gap-3">
              <!-- number input  -->
              <div
                class="tw-w-full tw-flex tw-justify-between tw-items-center tw-gap-2 tw-box-border"
              >
                <div class="tw-w-[220px] tw-h-8 tw-relative tw-rounded-sm">
                  <input
                    type="text"
                    name="My_PhoneNumber"
                    id="My_PhoneNumber"
                    class="tw-w-full tw-h-full tw-box-border tw-inline-block tw-text-black tw-pl-[85px] tw-pr-9 tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 peer tw-rounded-sm"
                    value=""
                  />
                  <label
                    for="My_PhoneNumber"
                    id="My_PhoneNumber_label"
                    class="tw-w-[80px] tw-h-full tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-capitalize tw-px-2 rounded-s-sm tw-font-bold tw-flex tw-justify-center tw-items-center"
                    >number</label
                  >
                  <button
                    class="tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-right-0 tw-w-8 tw-h-full tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-rounded-e-sm"
                    title="Copy"
                    onclick="Copy(document.getElementById('My_PhoneNumber').value);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="tw-w-full tw-h-full tw-object-cover tw-rounded-e-sm"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </button>
                </div>
                <!-- auto Pronunciation toggle  -->
                <span
                  class="tw-text-sm tw-text-gray-400 tw-line-clamp-1 tw-capitalize"
                  >auto Pronunciation:</span
                >
                <label
                  for="autoPronunciation"
                  class="tw-inline-block tw-w-10 tw-h-5 tw-rounded-full tw-cursor-pointer tw-relative tw-bg-gray-300"
                >
                  <input
                    type="checkbox"
                    name="autoPronunciation"
                    id="autoPronunciation"
                    class="tw-absolute tw-top-0 tw-left-0 tw-invisible tw-peer"
                  />
                  <span
                    class="tw-w-2/5 tw-h-4/5 tw-bg-rose-300 tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-1 tw-rounded-full tw-transition-all tw-duration-300 peer-checked:tw-left-5 peer-checked:tw-bg-red-500"
                  ></span>
                </label>
                <!-- auto mute toggle  -->
                <span
                  class="tw-text-sm tw-text-gray-400 tw-line-clamp-1 tw-capitalize"
                  >auto mute:</span
                >
                <label
                  for="autoMuteToggle"
                  class="tw-inline-block tw-w-10 tw-h-5 tw-rounded-full tw-cursor-pointer tw-relative tw-bg-gray-300"
                >
                  <input
                    type="checkbox"
                    name="autoMuteToggle"
                    id="autoMuteToggle"
                    class="tw-absolute tw-top-0 tw-left-0 tw-invisible tw-peer"
                  />
                  <span
                    class="tw-w-2/5 tw-h-4/5 tw-bg-rose-300 tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-1 tw-rounded-full tw-transition-all tw-duration-300 peer-checked:tw-left-5 peer-checked:tw-bg-red-500"
                  ></span>
                </label>
              </div>
              <!-- name input  -->
              <div class="tw-w-full tw-h-8 tw-relative tw-rounded-sm">
                <input
                  type="text"
                  name="My_FullName"
                  id="My_FullName"
                  class="tw-w-full tw-h-full tw-box-border tw-inline-block tw-text-black tw-pl-[85px] tw-pr-[69px] tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 tw-peer tw-rounded-sm"
                />
                <label
                  for="My_FullName"
                  class="tw-w-[80px] tw-h-full tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-capitalize tw-px-2 tw-rounded-s-sm tw-font-bold tw-flex tw-justify-center tw-items-center"
                  >name</label
                >
                <!-- Pronunciation and copy btns  -->
                <div
                  class="tw-h-full tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-right-0 tw-flex"
                >
                  <!-- Pronunciation btn  -->
                  <button
                    class="tw-w-8 tw-h-full tw-bg-slate-300 tw-p-1 tw-text-slate-900 hover:tw-bg-slate-500 tw-transition-colors tw-duration-200 tw-border-r tw-border-white"
                    title="Pronounce the name"
                    onclick="textToAudio(document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="tw-w-full tw-h-full tw-object-cover"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                      />
                    </svg>
                  </button>
                  <!-- copy btn  -->
                  <button
                    class="tw-w-8 tw-h-full tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-rounded-e-sm"
                    title="Copy"
                    onclick="Copy(document.getElementById('My_FullName').value);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="tw-w-full tw-h-full tw-object-cover tw-rounded-e-sm"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <!-- address input  -->
              <div class="tw-w-full tw-h-[50px] tw-relative tw-rounded-sm">
                <textarea
                  type="text"
                  name="My_FullAddress"
                  id="My_FullAddress"
                  class="tw-w-full tw-h-full tw-max-h-full tw-min-h-full tw-box-border tw-inline-block tw-text-black tw-pl-[85px] tw-pr-9 tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 tw-peer tw-rounded-sm"
                ></textarea>
                <label
                  for="My_FullAddress"
                  class="tw-w-[80px] tw-h-full tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-capitalize tw-px-2 tw-rounded-s-sm tw-font-bold tw-flex tw-justify-center tw-items-start"
                  >address</label
                >
                <button
                  class="tw-absolute tw-top-0 tw-right-0 tw-w-8 tw-h-8 tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-rounded-e-sm"
                  title="Copy"
                  onclick="Copy(document.getElementById('My_FullAddress').value);"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="tw-w-full tw-h-full tw-object-cover tw-rounded-e-sm"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>
                </button>
              </div>
              <!-- email input  -->
              <div class="tw-w-full tw-h-8 tw-relative tw-rounded-sm">
                <input
                  type="text"
                  name="My_Email"
                  id="My_Email"
                  class="tw-w-full tw-h-full tw-box-border tw-inline-block tw-text-black tw-pl-[85px] tw-pr-9 tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400 tw-peer tw-rounded-sm"
                />
                <label
                  for="My_Email"
                  class="tw-w-[80px] tw-h-full tw-box-border tw-absolute tw-top-0 tw-left-0 tw-bg-gray-600 tw-text-gray-100 tw-capitalize tw-px-2 tw-rounded-s-sm tw-font-bold tw-flex tw-justify-center tw-items-center"
                  >email</label
                >
                <button
                  class="tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-right-0 tw-w-8 tw-h-full tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800 tw-transition-colors tw-duration-200 tw-rounded-e-sm"
                  title="Copy"
                  onclick="Copy(document.getElementById('My_Email').value);"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="tw-w-full tw-h-full tw-object-cover tw-rounded-e-sm"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>
                </button>
              </div>
              <!-- comments input  -->
              <div class="tw-w-full tw-relative tw-flex">
                <label
                  for="My_Comments"
                  class="tw-w-[80px] tw-font-bold tw-capitalize"
                  >comments</label
                >
                <div class="tw-flex-1 tw-h-8 tw-ml-2 tw-relative">
                  <textarea
                    type="text"
                    name="My_Comments"
                    id="My_Comments"
                    class="tw-w-full tw-h-[150px] tw-max-h-[150px] tw-min-h-[50px] tw-text-black tw-pl-2 tw-pr-9 tw-border focus:tw-outline-none focus:tw-ring focus:tw-border-blue-400"
                  ></textarea>
                  <button
                    class="tw-absolute tw-top-0 tw-right-0 tw-w-8 tw-h-8 tw-bg-slate-600 tw-p-1 tw-text-white hover:tw-bg-gray-800"
                    title="Copy"
                    onclick="Copy(document.getElementById('My_Comments').value);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="tw-w-full tw-h-full tw-object-cover"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ------//main contant  -->
        <!-- sub contant  -->
        <div class="tw-w-[242px]">
          <div
            class="tw-w-[95%] tw-mx-auto tw-rounded-sm"
            style="height: calc(100% - 110px)"
          >
            <div
              class="tw-overflow-hidden tw-box-border tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-between tw-items-center"
            >
              <input
                type="radio"
                name="subContant"
                id="subContant_1"
                class="subContantRadio tw-absolute tw-top-0 tw-left-0 tw-w-0 tw-h-0 -tw-translate-x-full tw-peer/subContant_1"
                checked
              />
              <label
                for="subContant_1"
                class="tw-flex tw-justify-center tw-items-center tw-cursor-pointer tw-select-none tw-h-[20px] tw-transition tw-duration-1000 tw-ease-in-out peer-checked/subContant_1:-tw-translate-y-[125%] tw-text-white tw-animate-pulse"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="tw-w-6 tw-h-6 tw-animate-bounce"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </label>
              <input
                type="radio"
                name="subContant"
                id="subContant_2"
                class="subContantRadio tw-absolute tw-top-0 tw-left-0 tw-w-0 tw-h-0 -tw-translate-x-full tw-peer/subContant_2"
              />
              <label
                for="subContant_2"
                class="tw-flex tw-justify-center tw-items-center tw-cursor-pointer tw-select-none tw-h-[20px] tw-transition tw-duration-1000 tw-ease-in-out peer-checked/subContant_2:tw-translate-y-[125%] tw-text-white tw-animate-pulse"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="tw-w-6 tw-h-6 tw-animate-bounce"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </label>
              <div
                class="tw-absolute tw-left-0 tw-top-0 -tw-translate-y-[125%] peer-checked/subContant_1:tw-top-1/2 peer-checked/subContant_1:-tw-translate-y-1/2 tw-w-full tw-box-border tw-transition tw-duration-500 tw-ease-in-out tw-rounded-sm"
                style="height: calc(100% - 40px)"
              >
                <!-- tab1 -->
                <div
                  class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center"
                >
                  <span class="tw-text-slate-100">sub contant 1</span>
                </div>
              </div>
              <div
                class="tw-absolute tw-left-0 tw-top-0 tw-translate-y-[125%] peer-checked/subContant_2:tw-top-1/2 peer-checked/subContant_2:-tw-translate-y-1/2 tw-w-full tw-box-border tw-transition tw-duration-500 tw-ease-in-outtw-rounded-sm"
                style="height: calc(100% - 40px)"
              >
                <!-- tab2 -->
                <div
                  class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center"
                >
                  <span class="tw-text-slate-100">sub contant 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ------//sub contant  -->
      </div>
      <!-- ------//contant -->
    </div>
`
);
//seting styles for the body
const the_Body_tag = document.querySelector("body");
the_Body_tag.style.overflow = "hidden";
//seting the styles for #TransferMain span
const the_TransferMain_span = document.getElementById("TransferMain");
the_TransferMain_span.style.position = "fixed";
the_TransferMain_span.style.bottom = "0";
the_TransferMain_span.style.left = "0";
the_TransferMain_span.style.top = "auto";
the_TransferMain_span.style.right = "auto";
//seting the styles for #webphoneSpan span
const the_webphoneSpan_span = document.getElementById("webphoneSpan");
the_webphoneSpan_span.style.position = "absolute";
the_webphoneSpan_span.style.bottom = "auto";
the_webphoneSpan_span.style.left = "auto";
the_webphoneSpan_span.style.top = "auto";
the_webphoneSpan_span.style.right = "auto";
the_webphoneSpan_span.style.height = "auto";
the_webphoneSpan_span.style.overflow = "auto";
the_webphoneSpan_span.style.zIndex = "auto";
the_webphoneSpan_span.style.backgroundColor = "unset";
//seting the styles for #webphone span
const the_webphone_span = document.getElementById("webphone");
the_webphone_span.style.position = "fixed";
the_webphone_span.style.bottom = "0px";
the_webphone_span.style.left = "auto";
the_webphone_span.style.top = "auto";
the_webphone_span.style.right = "0px";
the_webphone_span.style.zIndex = "28";
the_webphone_span.style.width = "432px";
the_webphone_span.style.height = "261px";
//seting the styles for #AgentViewSpan span
const the_AgentViewSpan_span = document.getElementById("AgentViewSpan");
the_AgentViewSpan_span.style.position = "fixed";
the_AgentViewSpan_span.style.bottom = "0px";
the_AgentViewSpan_span.style.left = "auto";
the_AgentViewSpan_span.style.top = "60px";
the_AgentViewSpan_span.style.right = "0px";
the_AgentViewSpan_span.style.zIndex = "28";
the_AgentViewSpan_span.style.width = "190px";
the_AgentViewSpan_span.style.height = "auto";
the_AgentViewSpan_span.style.overflowX = "auto";
the_AgentViewSpan_span.style.overflowY = "auto";

//   --------------------------- Help Functions  ---------------------------
// cheack if there is an active call
function checkActiveCall(type = "a") {
  // false : no active call
  // true: active call
  if (type === "a") {
    var HungUpSpan = document.getElementById("HangupControl"),
      HungUpA = HungUpSpan.getElementsByTagName("a")[0];
    if (typeof HungUpA === "undefined") {
      // there is no call
      return false;
    } else {
      // there is an active call
      return true;
    }
  } else if (type === "img") {
    var HungUpSpan = document.getElementById("HangupControl"),
      HungUpA = HungUpSpan.getElementsByTagName("a")[0],
      HungUpImg = HungUpA.getElementsByTagName("img")[0];
    var ImgSrc = HungUpImg.getAttribute("src");
    if (ImgSrc == "./images/vdc_LB_hangupcustomer.gif") {
      // there is an active call
      return true;
    } else {
      // there is no call
      return false;
    }
  }
}
//                ---------------------------
// check if cust hungup
//cust did hung up return true;
//cust did NOT hung up return false;
//NO call return "no active call";
function checkCustHungUp(OnACall) {
  if (OnACall) {
    var TabsSpan = document.getElementById("Tabs"),
      table = TabsSpan.getElementsByTagName("table")[0],
      tbody = table.getElementsByTagName("tbody")[0],
      tr = tbody.getElementsByTagName("tr")[0],
      td = tr.getElementsByTagName("td")[3],
      img = td.getElementsByTagName("img")[0];
    var ImgSrc = img.getAttribute("src");
    let ImgSrcArr = ImgSrc.split("/");
    let ImgName = ImgSrcArr[ImgSrcArr.length - 1];
    if (ImgName == "agc_live_call_DEAD.gif") {
      //cust did hung up
      return true;
    } else {
      return false;
    }
  } else {
    return "no active call";
  }
}
//                ---------------------------
// check if got a new call
let temp_phoneNumber = "";
function gotANewCall() {
  return new Promise((resolve, reject) => {
    try {
      let phone_numberDISP =
        document.getElementById("phone_numberDISP").innerText;
      let isItANewPN = temp_phoneNumber !== phone_numberDISP;
      temp_phoneNumber = isItANewPN ? phone_numberDISP : temp_phoneNumber;

      if (isItANewPN) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
}
//                ---------------------------
// cheack dispo panl visiblty
function cheackDispoPanlVisibalty() {
  //makeing sure that the Dispo page is visibleq
  const DispoSelectBox = document.querySelector("#DispoSelectBox");
  const visibility = DispoSelectBox.style.visibility;
  if (visibility === "visible") {
    return true;
  } else {
    return false;
  }
}
//                ---------------------------
// hungup and dispo function
function hungupAndDispo(
  fullDispo = "NI",
  action = "both",
  callBackFunc = () => {
    console.log("hungupAndDispo callBackFunc");
  },
  hungupDelay = 0,
  dispoDelay = 1000
) {
  return new Promise((resolve, reject) => {
    if (checkActiveCall()) {
      if (action === "both") {
        setTimeout(() => {
          dialedcall_send_hangup("", "", "", "", "YES");
          callBackFunc();
        }, hungupDelay);
        setTimeout(() => {
          if (cheackDispoPanlVisibalty()) {
            DispoSelectContent_create(fullDispo, "ADD", "YES");
            DispoSelect_submit("", "", "YES");
            resolve(true);
          } else {
            reject({ case: false, reason: "Dispo Panl not Visible" });
          }
        }, dispoDelay);
      } else if (action === "hungup") {
        setTimeout(() => {
          dialedcall_send_hangup("", "", "", "", "YES");
          resolve(true);
        }, hungupDelay);
      } else if (action === "dispo") {
        setTimeout(() => {
          if (cheackDispoPanlVisibalty()) {
            DispoSelectContent_create(fullDispo);
            DispoSelect_submit("", "", "YES");
            resolve(true);
          } else {
            reject({ case: false, reason: "Dispo Panl not Visible" });
          }
        }, dispoDelay);
      }
    } else {
      reject({ case: false, reason: "no active call" });
    }
  });
}
//                ---------------------------

//geting header info
let sessionIDspan = document.getElementById("sessionIDspan");
let My_sessionIDspan = document.getElementById("My_sessionIDspan");

let AgentStatusCalls = document.getElementById("AgentStatusCalls");
let My_AgentStatusCalls = document.getElementById("My_AgentStatusCalls");

let SecondSDISP = document.getElementById("SecondSDISP");
let My_SecondSDISP = document.getElementById("My_SecondSDISP");

let MainStatuSSpan = document.getElementById("MainStatuSSpan");
let My_MainStatuSSpan = document.getElementById("My_MainStatuSSpan");
function getHeaderInfo(OnACall) {
  if (OnACall) {
    if (My_MainStatuSSpan.innerText !== MainStatuSSpan.innerText) {
      My_MainStatuSSpan.innerText = MainStatuSSpan.innerText;
    }
    if (My_SecondSDISP.innerText !== SecondSDISP.innerText) {
      My_SecondSDISP.innerText = SecondSDISP.innerText;
    }
    if (My_AgentStatusCalls.innerHTML !== AgentStatusCalls.innerHTML) {
      My_AgentStatusCalls.innerHTML = AgentStatusCalls.innerHTML;
    }
    if (My_sessionIDspan.innerText !== sessionIDspan.innerText) {
      My_sessionIDspan.innerText = sessionIDspan.innerText;
    }
  }
}
//   -------------
// updateing the date and tiem every sec #My_status
let status = document.getElementById("status");
let My_status = document.getElementById("My_status");
setInterval(() => {
  if (My_status.innerText !== status.innerText) {
    My_status.innerText = status.innerText;
  }
}, 1000);
//   -------------
// call indocater
// run it every sec
function CallIndocater(custHungUp) {
  let My_liveCallSvg_indocater = document.getElementById(
    "My_liveCallSvg_indocater"
  );
  if (custHungUp === true) {
    if (My_liveCallSvg_indocater.getAttribute("stroke") !== "red") {
      My_liveCallSvg_indocater.setAttribute("stroke", "red");
      My_liveCallSvg_indocater.classList.add("sm:tw-animate-bounce");
    }
  } else if (custHungUp === false) {
    if (My_liveCallSvg_indocater.getAttribute("stroke") !== "#00ff00") {
      My_liveCallSvg_indocater.setAttribute("stroke", "#00ff00");
      My_liveCallSvg_indocater.classList.add("sm:tw-animate-bounce");
    }
  } else if (custHungUp === "no active call") {
    if (My_liveCallSvg_indocater.getAttribute("stroke") !== "gray") {
      My_liveCallSvg_indocater.setAttribute("stroke", "gray");
      My_liveCallSvg_indocater.classList.remove("sm:tw-animate-bounce");
    }
  }
}
//   -------------
// control 1 functions
// ready and pause buttons
let My_goReadyBtn = document.getElementById("My_goReadyBtn");
let My_pauseBtn = document.getElementById("My_pauseBtn");
let My_readyOrPauseSpan_indocater = document.getElementById(
  "My_readyOrPauseSpan_indocater"
);
My_goReadyBtn.addEventListener("click", () => {
  My_goReadyBtn.classList.add("tw-hidden");
  My_pauseBtn.classList.remove("tw-hidden");
  My_readyOrPauseSpan_indocater.innerHTML = `you are <span class="tw-text-green-500 tw-inline-block tw-animate-bounce">ready</span>`;
});
My_pauseBtn.addEventListener("click", () => {
  My_pauseBtn.classList.add("tw-hidden");
  My_goReadyBtn.classList.remove("tw-hidden");
  My_readyOrPauseSpan_indocater.innerHTML = `you are <span class="tw-text-yellow-500 tw-inline-block tw-animate-bounce">paused</span>`;
});
// run it every sec
function showAndHide_StartPauseBtns() {
  const DiaLControl = document.getElementById("DiaLControl");
  if (DiaLControl) {
    const DiaLControl_A = DiaLControl.getElementsByTagName("a")[0];
    if (!DiaLControl_A) {
      // console.error("bad DiaLControl_A", DiaLControl_A);
      return false;
    }
    const DiaLControl_Img = DiaLControl_A.getElementsByTagName("img")[0];
    if (!DiaLControl_Img) {
      // console.error("bad DiaLControl_Img", DiaLControl_Img);
      return false;
    }
    const DiaLControl_ImgSrcArr = DiaLControl_Img.src.split("/");

    const imgName = DiaLControl_ImgSrcArr[DiaLControl_ImgSrcArr.length - 1]; // 'vdc_LB_paused.gif'  'vdc_LB_active.gif'
    if (
      imgName === "vdc_LB_paused.gif" &&
      !My_pauseBtn.classList.contains("tw-hidden")
    ) {
      My_pauseBtn.classList.add("tw-hidden");
      My_goReadyBtn.classList.remove("tw-hidden");
      My_readyOrPauseSpan_indocater.innerHTML = `you are <span class="tw-text-yellow-500 tw-inline-block tw-animate-bounce">paused</span>`;
    } else if (
      imgName === "vdc_LB_active.gif" &&
      !My_goReadyBtn.classList.contains("tw-hidden")
    ) {
      My_goReadyBtn.classList.add("tw-hidden");
      My_pauseBtn.classList.remove("tw-hidden");
      My_readyOrPauseSpan_indocater.innerHTML = `you are <span class="tw-text-green-500 tw-inline-block tw-animate-bounce">ready</span>`;
    }
  }
}
//   -------------
// open and close transger panel buttons
let My_openTransferPanelBtn = document.getElementById(
  "My_openTransferPanelBtn"
);
let My_closeTransferPanelBtn = document.getElementById(
  "My_closeTransferPanelBtn"
);
My_openTransferPanelBtn.addEventListener("click", () => {
  the_TransferMain_span.style.top = "auto";
  My_openTransferPanelBtn.classList.add("tw-hidden");
  My_closeTransferPanelBtn.classList.remove("tw-hidden");
});
My_closeTransferPanelBtn.addEventListener("click", () => {
  My_closeTransferPanelBtn.classList.add("tw-hidden");
  My_openTransferPanelBtn.classList.remove("tw-hidden");
});
// run it every sec
function disableAndEnable_OpenCloseTransferBtns(OnACall) {
  if (OnACall) {
    if (My_openTransferPanelBtn.disabled || My_closeTransferPanelBtn.disabled) {
      My_openTransferPanelBtn.disabled = false;
      My_closeTransferPanelBtn.disabled = false;
      My_openTransferPanelBtn.classList.add("hover:tw-bg-green-500");
      My_closeTransferPanelBtn.classList.add("hover:tw-bg-green-600");
    }
  } else {
    if (
      !My_openTransferPanelBtn.disabled ||
      !My_closeTransferPanelBtn.disabled
    ) {
      My_openTransferPanelBtn.disabled = true;
      My_closeTransferPanelBtn.disabled = true;
    }
    My_closeTransferPanelBtn.classList.add("tw-hidden");
    My_openTransferPanelBtn.classList.remove("tw-hidden");
    My_openTransferPanelBtn.classList.remove("hover:tw-bg-green-500");
    My_closeTransferPanelBtn.classList.remove("hover:tw-bg-green-600");
  }
}
//   -------------
// hung up button
let My_hungupBtn = document.getElementById("My_hungupBtn");
// run it every sec
function disableAndEnable_hungupBtn(OnACall) {
  if (OnACall) {
    if (My_hungupBtn.disabled) {
      My_hungupBtn.disabled = false;
      My_hungupBtn.classList.remove("tw-bg-red-400");
      My_hungupBtn.classList.add("tw-bg-red-500", "hover:tw-bg-red-800");
    }
  } else {
    if (!My_hungupBtn.disabled) {
      My_hungupBtn.disabled = true;
      My_hungupBtn.classList.remove("tw-bg-red-500", "hover:tw-bg-red-800");
      My_hungupBtn.classList.add("tw-bg-red-400");
    }
  }
}
//   -------------
// web form 1 & 2 btn
function webForm1_click() {
  if (checkActiveCall()) {
    let WebFormSpan = document.getElementById("WebFormSpan");
    let WebFormA = WebFormSpan.querySelector("a");
    if (WebFormA) {
      console.log();
      window.open(WebFormA.getAttribute("href"), "_blank");
    }
  }
}
function webForm2_click() {
  if (checkActiveCall()) {
    let WebFormSpanTwo = document.getElementById("WebFormSpanTwo");
    let WebFormATwo = WebFormSpanTwo.querySelector("a");
    if (WebFormATwo) {
      console.log();
      window.open(WebFormATwo.getAttribute("href"), "_blank");
    }
  }
}
let My_webform1 = document.getElementById("My_webform1");
let My_webform2 = document.getElementById("My_webform2");
// run it every sec
function disableAndEnable_wbefromBtns(OnACall) {
  if (OnACall) {
    if (My_webform1.disabled || My_webform2.disabled) {
      My_webform1.disabled = false;
      My_webform2.disabled = false;
      My_webform1.classList.add("hover:tw-bg-slate-400");
      My_webform2.classList.add("hover:tw-bg-slate-400");
    }
  } else {
    if (!My_webform1.disabled || !My_webform2.disabled) {
      My_webform1.disabled = true;
      My_webform2.disabled = true;
      My_webform1.classList.remove("hover:tw-bg-slate-400");
      My_webform2.classList.remove("hover:tw-bg-slate-400");
    }
  }
}
//   -------------
// park call btn
let My_parkcallBtn = document.getElementById("My_parkcallBtn");
let My_parkcallSpan = document.getElementById("My_parkcallSpan");
let ParkCounterSpan = document.getElementById("ParkCounterSpan");
let ParkCounterSpanInterval;
let update_My_parkcallSpan = false;
function parkcallBtn_click() {
  let ParkControlA = document.getElementById("ParkControl").querySelector("a");
  if (!ParkControlA) return false;
  ParkControlA.click();
  My_parkcallSpan.classList.remove("tw-hidden");
  update_My_parkcallSpan = !update_My_parkcallSpan;
  const update_My_parkcallSpan_func = () => {
    if (
      My_parkcallSpan.innerText !== ParkCounterSpan.innerText &&
      update_My_parkcallSpan
    ) {
      My_parkcallSpan.innerText = ParkCounterSpan.innerText;
    }
  };
  ParkCounterSpanInterval = setInterval(update_My_parkcallSpan_func, 1000);
}
// run it every sec
function disableAndEnable_parkcallBtn(OnACall) {
  if (OnACall) {
    if (My_parkcallBtn.disabled) {
      My_parkcallBtn.disabled = false;
      My_parkcallBtn.classList.add("hover:tw-bg-slate-400");
    }
  } else {
    if (!My_parkcallBtn.disabled) {
      My_parkcallBtn.disabled = true;
      My_parkcallBtn.classList.remove("hover:tw-bg-slate-400");
      My_parkcallSpan.classList.add("tw-hidden");
      clearInterval(ParkCounterSpanInterval);
    }
  }
}
//   -------------
// manual Dial Btn
let My_manualDialBtn = document.getElementById("My_manualDialBtn");
// run it every sec
function disableAndEnable_manualDialBtn(OnACall) {
  if (OnACall) {
    if (My_manualDialBtn.disabled) {
      My_manualDialBtn.disabled = true;
      My_manualDialBtn.classList.remove("hover:tw-bg-slate-950");
    }
  } else {
    if (!My_manualDialBtn.disabled) {
      My_manualDialBtn.disabled = false;
      My_manualDialBtn.classList.add("hover:tw-bg-slate-950");
    }
  }
}
//   -------------
// call log  Btn
let My_callLogBtn = document.getElementById("My_callLogBtn");
// run it every sec
function disableAndEnable_callLogBtn(OnACall) {
  if (OnACall) {
    if (My_callLogBtn.disabled) {
      My_callLogBtn.disabled = true;
      My_callLogBtn.classList.remove("hover:tw-bg-slate-950");
    }
  } else {
    if (!My_callLogBtn.disabled) {
      My_callLogBtn.disabled = false;
      My_callLogBtn.classList.add("hover:tw-bg-slate-950");
    }
  }
}
//   -------------
// toggle webphone
let My_webPhoneBtn = document.getElementById("My_webPhoneBtn");
let My_webPhoneBtnSpan = document.getElementById("My_webPhoneBtnSpan");
let webPhone_isOpen = true;
function webPhoneBtn_click() {
  let webphoneLinkSpan = document.getElementById("webphoneLink");
  let webphoneLinkA = webphoneLinkSpan.querySelector("a");
  if (webphoneLinkA) {
    webphoneLinkA.click();
    webPhone_isOpen = !webPhone_isOpen;
  }
  My_webPhoneBtnSpan.innerText = webPhone_isOpen ? "-" : "+";
}
//   -------------
// toggle Agent View
let My_agentsViewBtn = document.getElementById("My_agentsViewBtn");
let My_agentsViewBtnSpan = document.getElementById("My_agentsViewBtnSpan");
let agentsViewBtn_isOpen = false;
function agentsViewBtn_click() {
  let AgentViewLinkSpan = document.getElementById("AgentViewLink");
  let AgentViewLinkSpanA = AgentViewLinkSpan.querySelector("a");
  if (AgentViewLinkSpanA) {
    AgentViewLinkSpanA.click();
    agentsViewBtn_isOpen = !agentsViewBtn_isOpen;
  }
  My_agentsViewBtnSpan.innerText = agentsViewBtn_isOpen ? "-" : "+";
}
//   -------------
// get the cust info
// let temp_pn;
// run it every sec
// phone number
let phone_numberDISP = document.getElementById("phone_numberDISP");
let My_PhoneNumber = document.getElementById("My_PhoneNumber");
// full name
let title = document.getElementById("title");
let first_name = document.getElementById("first_name");
let middle_initial = document.getElementById("middle_initial");
let last_name = document.getElementById("last_name");
let My_FullName = document.getElementById("My_FullName");

//full address
let address1 = document.getElementById("address1");
let address2 = document.getElementById("address2");
let address3 = document.getElementById("address3");
let city = document.getElementById("city");
let state = document.getElementById("state");
let postal_code = document.getElementById("postal_code");
let province = document.getElementById("province");
let My_FullAddress = document.getElementById("My_FullAddress");

// email
let email = document.getElementById("email");
let My_Email = document.getElementById("My_Email");

//comments
let comments = document.getElementById("comments");
let My_Comments = document.getElementById("My_Comments");
function getCustInfo(OnACall, isNewCall) {
  if (isNewCall && OnACall) {
    My_PhoneNumber.value = phone_numberDISP.innerText.trim();
    My_FullName.value =
      `${title.value} ${first_name.value} ${middle_initial.value} ${last_name.value}`.trim();
    My_FullAddress.value =
      `${address1.value} ${address2.value} ${address3.value} ${city.value} ${state.value} ${postal_code.value} ${province.value}`.trim();
    My_Email.value = email.value.trim();
    My_Comments.value = comments.value.trim();
  } else if (isNewCall && !OnACall) {
    My_PhoneNumber.value = "";
    My_FullName.value = "";
    My_FullAddress.value = "";
    My_Email.value = "";
    My_Comments.value = "";
  }
}
// -------------------------------------------------------------------------------------------------------------
// ------------------------------------------My Functions-------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

// auto mute
let isItMuted = false;
// run every sec
const autoMuteToggle = document.getElementById("autoMuteToggle");
function AutoMuteFunc(OnACall) {
  if (OnACall) {
    if (autoMuteToggle.checked) {
      if (isItMuted == true) {
        // have UN-Muted, isItMuted set to false, Active call
        volume_control("UNMUTE", agentchannel, "AgenT");
        sendMessageToIframe("muteButton");
        isItMuted = false;
      }
    }
  } else {
    if (autoMuteToggle.checked) {
      if (isItMuted) {
        // already Muted,  NO-Active call
      } else if (!isItMuted) {
        //have Muted, isItMuted set to true, NO-Active call
        volume_control("MUTING", agentchannel, "AgenT");
        sendMessageToIframe("muteButton");
        isItMuted = true;
      }
    }
  }
}
// ---------------//auto mute

// auto check Dup
// get the dup list from the localStorage
var DupList = [];
function getDupListFromlocalStorge() {
  const SavedDupList = JSON.parse(localStorage.getItem("DupList"));
  if (null == SavedDupList) alert("no dup list in the lucalstorge");
  else null != SavedDupList && (DupList = SavedDupList);
}
getDupListFromlocalStorge();
// run every sec
const phoneNumber = document.getElementById("phone_numberDISP").innerText;
const My_PhoneNumber_label = document.getElementById("My_PhoneNumber_label");
function AutoCheckDupFun(OnACall, isNewCall) {
  if (isNewCall && OnACall) {
    // there is an active call
    if (DupList.length === 0) {
      // No Dup List Found
      My_PhoneNumber_label.classList.remove("tw-bg-green-500");
      My_PhoneNumber_label.classList.remove("tw-bg-red-500");
    } else {
      if (DupList.includes(phoneNumber)) {
        // it is dup bad
        My_PhoneNumber_label.classList.remove("tw-bg-green-500");
        My_PhoneNumber_label.classList.add("tw-bg-red-500");
      } else {
        // it is NOT dup good
        My_PhoneNumber_label.classList.remove("tw-bg-red-500");
        My_PhoneNumber_label.classList.add("tw-bg-green-500");
      }
    }
  } else if (!OnACall) {
    if (
      My_PhoneNumber_label.classList.contains("tw-bg-green-500") ||
      My_PhoneNumber_label.classList.contains("tw-bg-red-500")
    ) {
      My_PhoneNumber_label.classList.remove("tw-bg-green-500");
      My_PhoneNumber_label.classList.remove("tw-bg-red-500");
    }
  }
}
// seting the dup array function NEED TO DO
function setDupListArray() {
  // Get the textarea value
  let textareaValue = document.getElementById("dupListInput").value;
  try {
    // Try to parse the textarea value as a JSON array
    const parsedArray = JSON.parse(textareaValue);

    if (Array.isArray(parsedArray)) {
      // Save the parsed array in local storage
      localStorage.setItem("DupList", JSON.stringify(parsedArray));
      getDupListFromlocalStorge();
      alert("DupList has been set.");
    } else {
      alert("Textarea does not contain a valid array.");
    }
  } catch (error) {
    alert("Error parsing the textarea value as JSON.");
  }
}
// ---------------//auto check Dup

// Copy
function Copy(...txt) {
  // Join the text values with a space or any other separator
  const textToCopy = txt.join(" ");
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Text copied to clipboard:", textToCopy);
    })
    .catch((err) => {
      console.error("Unable to copy text to clipboard", err);
    });
}
// ---------------//Copy

// Text To Audio functions
const autoPronunciationToggle = document.getElementById("autoPronunciation");
function autoPronunciationFunc(OnACall, isNewCall) {
  if (autoPronunciationToggle.checked) {
    if (isNewCall && OnACall) {
      // both first_name and last_name are defined above the getCustInfo function
      textToAudio(`${first_name.value} ${last_name.value}`);
    }
  }
}
function textToAudio(txt) {
  let speech = new SpeechSynthesisUtterance();
  speech.voiceURI = "Google US English";
  speech.lang = "en-US";
  speech.name = "Google US English";
  speech.text = txt;
  const synth = window.speechSynthesis;
  synth.speak(speech);
}
// NEED TO DO
function stopTextToAudio() {
  window.speechSynthesis.cancel();
}
// ---------------//Text To Audio functions
// auto hung up when cust hungs up function
let manualHungUp = false;
const TransferMain = document.querySelector("#TransferMain");
async function autoHungupIfCustHungup(custHungUp) {
  if (custHungUp === true) {
    if (TransferMain.style.visibility === "visible") {
      //Transfer panl Visibility is visible dont hungup
      return false;
    }
    // cust did hung up
    try {
      await hungupAndDispo("NI", "both", () => {});
      // console.log("hungupAnddispo: ", hungupAnddispo);
      const resSpan = document.getElementById("Dispospan");
      resSpan.innerHTML = "Cust HungUp Not Interested";
      setTimeout(() => {
        resSpan.innerHTML = "";
      }, 4000);
    } catch (error) {
      console.log(
        "auto hung up",
        "case: ",
        error.case,
        "reason: ",
        error.reason,
        "error: ",
        error
      );
    }
  }
}
// ---------------//auto hung up when cust hungs up function

// hung up with btns functions

// Get All Dispo Options Arr function
let allDispoOptions = [];
function GetAllDispoArr() {
  const DispoSelectATest = document.getElementById("DispoSelectA");
  if (DispoSelectATest === null) {
    return false;
  }
  const DispoSelectA = document.getElementById("DispoSelectA"),
    DispoSelectAFonts = DispoSelectA.querySelectorAll('[size="2"]');

  let DispoSelectAAs = [];
  DispoSelectAFonts.forEach((font, i) => {
    DispoSelectAAs.push(font.firstElementChild);
  });
  DispoSelectAAs.forEach((aElement, i) => {
    let onClickAtrr = aElement.attributes.onclick.value;
    let onClickAtrrArr = onClickAtrr.split(",");
    let str = onClickAtrrArr[0];
    let argument = str.match(/'([^']+)'/)[1];
    let str1 = ("'" + argument + "'").replace(/'/g, `\'`);
    allDispoOptions.push(str1);
  });

  const DispoSelectB = document.getElementById("DispoSelectB"),
    DispoSelectBFonts = DispoSelectB.querySelectorAll('[size="2"]');
  let DDispoSelectBAs = [];
  DispoSelectBFonts.forEach((font, i) => {
    DDispoSelectBAs.push(font.firstElementChild);
  });
  DDispoSelectBAs.forEach((aElement, i) => {
    let onClickAtrr = aElement.attributes.onclick.value;
    let onClickAtrrArr = onClickAtrr.split(",");
    let str = onClickAtrrArr[0];
    let argument = str.match(/'([^']+)'/)[1];
    let str1 = ("'" + argument + "'").replace(/'/g, `\'`);
    allDispoOptions.push(str1);
  });

  const DispoSelectC = document.getElementById("DispoSelectC"),
    DispoSelectCFonts = DispoSelectC.querySelectorAll('[size="2"]');
  let DispoSelectCAs = [];
  DispoSelectCFonts.forEach((font, i) => {
    DispoSelectCAs.push(font.firstElementChild);
  });
  DispoSelectCAs.forEach((aElement, i) => {
    let onClickAtrr = aElement.attributes.onclick.value;
    let onClickAtrrArr = onClickAtrr.split(",");
    let str = onClickAtrrArr[0];
    let argument = str.match(/'([^']+)'/)[1];
    let str1 = ("'" + argument + "'").replace(/'/g, `\'`);
    allDispoOptions.push(str1);
  });
  return true;
}
// add optins to the F1 F2 F3 F3 select elements
function addOptinos(Arr, elId, selectedNum = 0) {
  const selectElement = document.getElementById(elId);
  Arr.forEach((option, i) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    if (i === selectedNum) {
      optionElement.selected = true;
    }
    selectElement.appendChild(optionElement);
  });

  selectElement.addEventListener("change", function () {
    let selectedValue = selectElement.value;
    let selectedId = selectElement.id;
    switch (selectedId) {
      case "F1select":
        F1 = selectedValue;
        break;
      case "F2select":
        F2 = selectedValue;
        break;
      case "F3select":
        F3 = selectedValue;
        break;
      case "F4select":
        F4 = selectedValue;
        break;
      default:
      // Code to be executed when expression doesn't match any case
    }
    console.log("F1: ", F1, " F2: ", F2, " F3: ", F3, " F4: ", F4);
  });
}
// add an evevnt linstner to the select elememts function
let GotTheGetAllDispoArr = false;
function addAllOptionsToSelect() {
  let GetAllDispoArrTest = GetAllDispoArr();
  if (GetAllDispoArrTest) {
    addOptinos(allDispoOptions, "F1select", 0);
    addOptinos(allDispoOptions, "F2select", 1);
    addOptinos(allDispoOptions, "F3select", 2);
    addOptinos(allDispoOptions, "F4select", 3);
    autoCustHungup = true;
    GotTheGetAllDispoArr = true;
    // document.getElementById("dispoOptionsSpan").classList.add("d-none");
    // document.getElementById("dispoOptionsdiv").classList.remove("d-none");
    F1 = allDispoOptions[0];
    F2 = allDispoOptions[1];
    F3 = allDispoOptions[2];
    F4 = allDispoOptions[3];
  } else {
    console.log("still cant find the #DispoSelectA");
  }
}
// the hungup with the keyboared function
let F1 = false,
  F2 = false,
  F3 = false,
  F4 = false;
document.addEventListener("keydown", async function (event) {
  var resSpan = document.getElementById("Dispospan");
  switch (event.which) {
    case 112:
      event.preventDefault();
      if (F1 != false) {
        try {
          let dispo = F1;
          let hungupAnddispo = await hungupAndDispo(dispo, "both", () => {
            manualHungUp = true;
            setTimeout(() => {
              manualHungUp = false;
            }, 1000);
          });
          // console.log("hungupAnddispo: ", hungupAnddispo);
          resSpan.innerHTML = F1;
          setTimeout(() => {
            resSpan.innerHTML = "";
          }, 4000);
        } catch (error) {
          console.log(
            "case: ",
            error.case,
            "reason: ",
            error.reason,
            "error: ",
            error
          );
          alert(error.reason);
        }
      } else {
        alert("Still not assigned");
      }
      break;
    case 113:
      event.preventDefault();
      if (F2 != false) {
        try {
          let dispo = F2;
          let hungupAnddispo = await hungupAndDispo(dispo, "both", () => {
            manualHungUp = true;
            setTimeout(() => {
              manualHungUp = false;
            }, 1000);
          });
          // console.log("hungupAnddispo: ", hungupAnddispo);
          resSpan.innerHTML = F2;
          setTimeout(() => {
            resSpan.innerHTML = "";
          }, 4000);
        } catch (error) {
          console.log(
            "case: ",
            error.case,
            "reason: ",
            error.reason,
            "error: ",
            error
          );
          alert(error.reason);
        }
      } else {
        alert("Still not assigned");
      }
      break;
    case 114:
      event.preventDefault();
      if (F3 != false) {
        try {
          let dispo = F3;
          let hungupAnddispo = await hungupAndDispo(dispo, "both", () => {
            manualHungUp = true;
            setTimeout(() => {
              manualHungUp = false;
            }, 1000);
          });
          // console.log("hungupAnddispo: ", hungupAnddispo);
          resSpan.innerHTML = F3;
          setTimeout(() => {
            resSpan.innerHTML = "";
          }, 4000);
        } catch (error) {
          console.log(
            "case: ",
            error.case,
            "reason: ",
            error.reason,
            "error: ",
            error
          );
          alert(error.reason);
        }
      } else {
        alert("Still not assigned");
      }
      break;
    case 115:
      event.preventDefault();
      if (F4 != false) {
        try {
          let dispo = F4;
          let hungupAnddispo = await hungupAndDispo(dispo, "both", () => {
            manualHungUp = true;
            setTimeout(() => {
              manualHungUp = false;
            }, 1000);
          });
          // console.log("hungupAnddispo: ", hungupAnddispo);
          resSpan.innerHTML = F4;
          setTimeout(() => {
            resSpan.innerHTML = "";
          }, 4000);
        } catch (error) {
          console.log(
            "case: ",
            error.case,
            "reason: ",
            error.reason,
            "error: ",
            error
          );
          alert(error.reason);
        }
      } else {
        alert("Still not assigned");
      }
      break;
  }
});
//  --------------//hung up with btns functions

// Communicating with the iframe
function sendMessageToIframe(message = null) {
  var iframe = document.getElementById("webphone");
  iframe.contentWindow.postMessage(
    message,
    "https://phone.vici.cx/viciphone.php"
  );
  // console.log("message sent to iframe:", message);
}

// function receiveMessage(event) {
//   // Ensure it's from the expected domain
//   if (event.origin !== "https://dialer47.vici.cx/agc/vicidial.php") {
//     console.error("Message received from Unknown domain:", event.data);
//     return;
//   }
//   if (event.data === "muteButton") {
//     muteButton();
//     console.log("Message received from main page:", event.data);
//   }
// }
// window.addEventListener("message", receiveMessage, false);

// -------------------------------------------------------------------------------------------------------------
// ----------------------------------------//My Functions-------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

// run all every sec
let is_fillInterFace_Running = false;
async function fillInterFace() {
  // Check if the function is already running
  if (is_fillInterFace_Running) {
    console.log(
      "%c fillInterFace is still running. Skipping this iteration.",
      "background: red; color: white"
    );
    return;
  }
  // Set the flag to indicate that the function is running
  is_fillInterFace_Running = true;

  let OnACall = checkActiveCall();
  let custHungUp = checkCustHungUp(OnACall);

  getHeaderInfo(OnACall);
  CallIndocater(custHungUp);
  showAndHide_StartPauseBtns();
  disableAndEnable_OpenCloseTransferBtns(OnACall);
  disableAndEnable_hungupBtn(OnACall);
  disableAndEnable_wbefromBtns(OnACall);
  disableAndEnable_parkcallBtn(OnACall);
  disableAndEnable_manualDialBtn(OnACall);
  disableAndEnable_callLogBtn(OnACall);

  AutoMuteFunc(OnACall);
  if (!manualHungUp) autoHungupIfCustHungup(custHungUp);
  if (!GotTheGetAllDispoArr) {
    addAllOptionsToSelect();
  }
  try {
    let isNewCall = await gotANewCall();

    getCustInfo(OnACall, isNewCall);

    AutoCheckDupFun(OnACall, isNewCall);
    autoPronunciationFunc(OnACall, isNewCall);
  } catch (e) {
    console.error("AutoCheckDupFun catch block", e);
  } finally {
    // Reset the flag to indicate that the function has completed
    is_fillInterFace_Running = false;
  }
}
setInterval(fillInterFace, 100);
