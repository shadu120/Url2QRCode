// powered by shadu{at}foxmail.com  2013-12-02
// http://i.isclab.org
$(document).ready(function(){
    chrome.tabs.query({'active': true}, function(tabs) {
        CreateQRC(tabs[0].url);
    });
});

function CreateQRC(strUrl){
    if(strUrl == "")
        strUrl = "http://i.isclab.org";
    $('#qrcode').qrcode(strUrl);
}