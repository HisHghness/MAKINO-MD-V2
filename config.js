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
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
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

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"KGEKI2kpY9JVMaI/U/rDVJASkzQKFwaJTsjSlJEZdlE="},"public":{"type":"Buffer","data":"cekhsZ3Y0hmycpH+mq08jDhWoksiMmUk+/feD+9fe04="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EDaZchi/+Nvbl/lS8xLG2LQcwu1e8ndLAxtrgLTbL1o="},"public":{"type":"Buffer","data":"eD1MdYfa+PTxerDVIqu9TToN+cd0EaMfd+djBa4k0w8="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"IFwUKgfKNsbwojw5RRvjP1qcPMggyc1FDiqil+1UvX0="},"public":{"type":"Buffer","data":"Srnb5YEGMFyXOvFFj+iwXcr2VKBkFYNDnNuvg7h0dUk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qPkEpERyqo+mYkhX1Fm/h1ukDifotJrIO99vDaFcG20="},"public":{"type":"Buffer","data":"6FjejrA5vE/UwvLAxH6gMXwIdO/c3mOL0E/6suBv5AY="}},"signature":{"type":"Buffer","data":"z+9tUK9pNrt25L6xrCR3Lam/r7LvNB241WVcQpX1mU/5chzCz/KcTMzuFPnsX+ovyH/JKnAlUXLLucoMrWoCCg=="},"keyId":1},"registrationId":75,"advSecretKey":"BhozcXDpMujr+ruwx+JZv/AbHTgAkD9Fla8HRePysys=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"VDoKItmWQsyWrAdQG3q_vA","phoneId":"279f45a5-d9de-4734-a6dd-d0c1cdaf5bb4","identityId":{"type":"Buffer","data":"YkYn7XqAud+r+2ZZkZnupVgH64A="},"registered":true,"backupToken":{"type":"Buffer","data":"ROgynvoJzYx0MhcnE9+Er3d5gVI="},"registration":{},"pairingCode":"TPA41E81","me":{"id":"2348126484665:57@s.whatsapp.net"},"account":{"details":"CL2KyGIQnvuTtAYYBSAAKAA=","accountSignatureKey":"74LjMB26DxVawA5ho1HO/Ig6Qp4jmfy8GEK5in2KbQg=","accountSignature":"jSqs0LJC2sELwLu6Okoq1fHzUyJVDKQMN8ZbW02eMLjXzPBfk+wyQSQR9802b+uEa6GpFpLxwiu0eDMGCE3cAg==","deviceSignature":"5z260w+PybWeHL9+y38At8Vry+O6Ps3eicAfpsL3f7uG3aQbbN8dNjWoDuUn9YmOL5C6fJMN5QVied9F4mcnAg=="},"signalIdentities":[{"identifier":{"name":"2348126484665:57@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Be+C4zAdug8VWsAOYaNRzvyIOkKeI5n8vBhCuYp9im0I"}}],"platform":"android","lastAccountSyncTimestamp":1719991723,"myAppStateKeyId":"AAAAAA/T"}`
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
