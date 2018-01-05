var flag = true;
setInterval(function(){
    cc("dads");
    if(flag=!flag){
        chrome.browserAction.setIcon({path: 'demo/background/img/1.png'});
    }
    else{
        chrome.browserAction.setIcon({path: 'demo/background/img/2.png'});
    }
},1000);