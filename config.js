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

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"4JNnTNBadfkZm4BISBmHFnBMkAy0GsUeTDU8+rRp4Fc="},"public":{"type":"Buffer","data":"uaK3Dw2aUsfdAT08FWFQ8JnqPxgRhfMd7C17V+ASfyQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"8FOJylA28eQpA8vPRn+kGzildPhPHXUxBGsYGQzkOXo="},"public":{"type":"Buffer","data":"RBqn0iWuW4vOyiCiEwallq5D1/wYj2F+8NH6vSP3VwY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"CFgRybsWJJ8dINkBlM3qEeryK90S2I4P7G0uFezna3w="},"public":{"type":"Buffer","data":"gfD5R2vYGbYomSRDJavMqA9SfGuexr6nUBxjWCcknCA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UGkImlQOn7qZ7HEkSWY8LbSC272fRwMeZD9IJt6bqks="},"public":{"type":"Buffer","data":"FjWz/A96DAvi+pvJN26GSUgo/y10yOkpOXXB+3me9mM="}},"signature":{"type":"Buffer","data":"zAzaNFMGOsyERTaUGW35GmH8Q4GLeEU07RFdSYiFrQfTgLbiuIuJoo1TTrPWZUaNYcxEuIcQ9uLbBo1e6wVbjg=="},"keyId":1},"registrationId":99,"advSecretKey":"yLeZi+yyJLWU0kaZgxBYLrfbOfJcRrt7AVvKPtIw0Ko=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Dzbz22vzRxC93w4uUCJZ4w","phoneId":"582943b7-f3da-4f07-a70b-4ca79007ebcf","identityId":{"type":"Buffer","data":"i59kQNmN7ngZsHWhVYFqbcVyZ0A="},"registered":true,"backupToken":{"type":"Buffer","data":"IrW/7ysY7nLmRGiQhIznVFGdf8E="},"registration":{},"pairingCode":"T5XZSPXA","me":{"id":"2348126484665:56@s.whatsapp.net"},"account":{"details":"CL2KyGIQrO2TtAYYBCAAKAA=","accountSignatureKey":"74LjMB26DxVawA5ho1HO/Ig6Qp4jmfy8GEK5in2KbQg=","accountSignature":"RVxXEBqgU8Y5HE8nP4E8Q6gQfuGvgz6ytHTUutBV44BDlVIpdOAOXpIR5YE/OfGV2IOCTaAs06szDZ+G4JuEDw==","deviceSignature":"BdFt2HsY0xJPr2jiSeCk6uQzecDfKzJNn+QTq6oiEaV2Da0o/urRRQz4JMXlm4fa7EDcVEAr7ZuqDtrfJIl8ig=="},"signalIdentities":[{"identifier":{"name":"2348126484665:56@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Be+C4zAdug8VWsAOYaNRzvyIOkKeI5n8vBhCuYp9im0I"}}],"platform":"android","lastAccountSyncTimestamp":1719989945,"myAppStateKeyId":"AAAAAA/S"}`
global.prefa = ["/" ]

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
