chrome.runtime.onMessage.addListener(gotMessage);

let displayBar = true;

function gotMessage(message, sender, sendresponse)
{
    const magicActionsBelt = document.querySelector('.watch-main-col');
    if(displayBar)
        magicActionsBelt.style.display = "none";
    else
        magicActionsBelt.style.display = "block";

    displayBar = !displayBar;
}