var mymisakura=1;
if(localStorage.mymisakura){
mymisakura=JSON.parse(localStorage.mymisakura)
}else{
localStorage.mymisakura=JSON.stringify(mymisakura)}
var opmymisakura=localStorage.getItem("mymisakura");
if(opmymisakura==1){
misakura_filterOff()}
if(opmymisakura==2){misakura_filterOn()}
if(opmymisakura==3){misakura_filterOff()}
if(opmymisakura==4){misakura_filterOn()}
var mymisa=1;if(localStorage.mymisa){
mymisa=JSON.parse(localStorage.mymisa)
}else{localStorage.mymisa=JSON.stringify(mymisa)}
var opm=localStorage.getItem("mymisa");
function misacon(){if(on){misakura_filterOff();
if(opm==2){localStorage.setItem("mymisakura","3")}
}else{misakura_filterOn();
if(opm==2){localStorage.setItem("mymisakura","4")}
}
}
chrome.browserAction.onClicked.addListener(
function(tab){misacon()});
chrome.contextMenus.create({title:"みさくら誤変換on⇔off",onclick:misacon});
function misakura_filterOff(){
chrome.browserAction.setBadgeText({text:'rame'});
chrome.browserAction.setBadgeBackgroundColor({color:[20,50,200,100 ]});
chrome.tabs.getAllInWindow(null,function(tabs){
for(i=0;i<tabs.length;i++){
chrome.tabs.sendRequest(tabs[i].id,{misakura_filter:"off"})
}
});
on=false
}
function misakura_filterOn(){
chrome.browserAction.setBadgeText({text:'ahe'});
chrome.browserAction.setBadgeBackgroundColor({color:[255, 50, 0,200]});
chrome.tabs.getAllInWindow(null,function(tabs){
for(i=0;i<tabs.length;i++){
chrome.tabs.sendRequest(tabs[i].id,{misakura_filter:"on"})
}
});
on=true
}
chrome.extension.onRequest.addListener(
function(request,sender,sendResponse){
if(request.misakura_filter=='now')sendResponse({misakura_filter:on});
else sendResponse({})});
