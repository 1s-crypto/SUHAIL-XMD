const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168365834";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_16_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA3NixcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg3LFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRG9VZ1JmeElRZmhjS3hvRjhHdi9uNElBdnBpUUhzekFmREpQdm5HVy9uWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczFFbEFjLUFUeTZxWDNIbzgxenBJQVwiLFxuICBcInBob25lSWRcIjogXCIwODI5OWRiNS1lYjY2LTQwNTctYjE0OS1mMDJmMGMxYjdlNTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgNzQsXG4gICAgICAxMTIsXG4gICAgICAyNDMsXG4gICAgICAxODgsXG4gICAgICAxNyxcbiAgICAgIDIwMSxcbiAgICAgIDE2OSxcbiAgICAgIDQyLFxuICAgICAgMTA0LFxuICAgICAgMTcsXG4gICAgICAxMDcsXG4gICAgICA1NyxcbiAgICAgIDg1LFxuICAgICAgNSxcbiAgICAgIDIwNCxcbiAgICAgIDEyMCxcbiAgICAgIDExOSxcbiAgICAgIDE0LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDYwLFxuICAgICAgMTA5LFxuICAgICAgMTM1LFxuICAgICAgMjA2LFxuICAgICAgMjQ1LFxuICAgICAgMjA4LFxuICAgICAgMTU1LFxuICAgICAgMTUxLFxuICAgICAgMjI4LFxuICAgICAgMjUzLFxuICAgICAgMjMwLFxuICAgICAgMTAyLFxuICAgICAgMTI1LFxuICAgICAgMjQ0LFxuICAgICAgMTUxLFxuICAgICAgMTM3LFxuICAgICAgMTk3LFxuICAgICAgMTQxLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEI0UUhaODlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjgzNjU4MzQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTgwMTY4NTQ0ODMwNjc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOLys1dnNIRUt1Ym03c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImplekJHM3RyMXhKb2J4cE1zZ2htUnp4Y2JYTE5VY21aWVNuMDN1MzNpak09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMWQzR2ZKbCsrMUxvdXQvWnJWNFU4TlU3Yk5pMzcrbDkxK3JDMGJqSWh5ek9mS3IzV1dhS2VtNzhzckNidXlHVjdwVkwxcERGOU1qc0lacCtZOW9OQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSHJMVTNhdGNtNDV6dG1NTy9nZzAvMmVLVHdTVGJnN2VqcVRvTFZrNUpzQ1JoWWdRL2greVJRRURYam1VanFTcXcxQlREWXhpWGQ2aCtmSERkUVZaQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODM2NTgzNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ3OTA1NzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
