const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"wLN45R70xAmqngT3hKk5W1EOs1tEK+wB68Rr/H2px3o="},"public":{"type":"Buffer","data":"c3u5lwFNtL0X6cHKYthEFq93T4lZQRSPr+/ZZhzOhU4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"WIa5RwaC7BpTlusFPU7ZsUX6eAJVnalHwWfEE505Ok4="},"public":{"type":"Buffer","data":"vnEk5wiQH6RQXL8enC2ZetsIaOG1SRZoZY3deIINkHk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YLELM9gaLWxjG00PIrmrmAJFIUOy4bSm/B/QgV7cE1Q="},"public":{"type":"Buffer","data":"N7ZdzON8ZJ+32gKQ6DEJDw4TGfWF6kLugOhd8RtyBnI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2CAQiSJwrp515Z+JNwhjOHDEd0djtk7mLHM4dAwLInw="},"public":{"type":"Buffer","data":"tMgWh2WhawtywsyCWvt/pQWXqe0dTUF2sTW9bH82DgA="}},"signature":{"type":"Buffer","data":"eMrIdL930fw1GqivQCn1uDEMvGjn3BowWRcv5VGilC0NOgFWF5hWvmKkmcvV8jTyC0ctUgMX+r9PuupBykHXBg=="},"keyId":1},"registrationId":170,"advSecretKey":"mVSRrF2V5HrjSR+mPn78CxNEfJhTcD3DZUGxdjrEboQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Icfl2K8CQIW3dxboLe4hVg","phoneId":"decb6925-68ea-44a0-a037-cc7e644004cc","identityId":{"type":"Buffer","data":"4/FGS/6NEqkcO3mTgwLybpaMrvQ="},"registered":true,"backupToken":{"type":"Buffer","data":"XhpHXuBMNHZMtcEDRuNGgHmkyhI="},"registration":{},"pairingCode":"E3VLJNGS","me":{"id":"2348126484665:58@s.whatsapp.net"},"account":{"details":"CL2KyGIQm4eUtAYYBiAAKAA=","accountSignatureKey":"74LjMB26DxVawA5ho1HO/Ig6Qp4jmfy8GEK5in2KbQg=","accountSignature":"+vXWfqJtpHGc9YX00FQVk7CeV9e8FNeXFKga5PCHF4DKCwpAmj+GeMI3xJV1RywxsjOUjeafk1GMWxxjvvkvDA==","deviceSignature":"LNigoMDjy7g/S9E8v8fMyCMn+pYow0kp3fYcGWsiimwLBTwHEkknAC9gcwd0TzTatiRkfmQCdvU3kNFI35KAAA=="},"signalIdentities":[{"identifier":{"name":"2348126484665:58@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Be+C4zAdug8VWsAOYaNRzvyIOkKeI5n8vBhCuYp9im0I"}}],"platform":"android","lastAccountSyncTimestamp":1719993256,"myAppStateKeyId":"AAAAAA/W"}`
global.prefa = ["." ]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
