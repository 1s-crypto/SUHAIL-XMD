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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_35_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0LFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNixcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzNadGRFanN5MW01NVhWdWU3UVVWaXFadzFQT25jRXNTaUJzUlQzVEZnYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOUlJNFhTVnpTdXV3VWhnY3NFMi00UVwiLFxuICBcInBob25lSWRcIjogXCJhMTRiNDQxMS0yYzY4LTRmYmUtOTIzMS02ZjAyZjVjYWI0NThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgMTQ3LFxuICAgICAgMTYyLFxuICAgICAgMTI1LFxuICAgICAgNjEsXG4gICAgICAxMDgsXG4gICAgICAxMixcbiAgICAgIDE5LFxuICAgICAgMjA5LFxuICAgICAgMjIzLFxuICAgICAgMTczLFxuICAgICAgOTgsXG4gICAgICAxNTIsXG4gICAgICAxNzUsXG4gICAgICA1MCxcbiAgICAgIDkzLFxuICAgICAgMjUsXG4gICAgICAxNjQsXG4gICAgICA5MSxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAyMDAsXG4gICAgICAxMDcsXG4gICAgICAxOSxcbiAgICAgIDE1NCxcbiAgICAgIDEzNSxcbiAgICAgIDAsXG4gICAgICAzMSxcbiAgICAgIDU0LFxuICAgICAgODEsXG4gICAgICAxODMsXG4gICAgICAyNTUsXG4gICAgICAxOTgsXG4gICAgICAxMzIsXG4gICAgICAyMDAsXG4gICAgICA0LFxuICAgICAgMTM4LFxuICAgICAgODAsXG4gICAgICA5NyxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWjlTQzY0WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2ODM2NTgzNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1ODAxNjg1NDQ4MzA2NzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043KzV2c0hFTEdJbTdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiamV6QkczdHIxeEpvYnhwTXNnaG1SenhjYlhMTlVjbVpZU24wM3UzM2lqTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzZE1UampabUwwR2NsQXpEL25WUE9xSHBDYWNjQWdtUDNIVUViQ3hSbTZMZjgxNmc4eWh6WkdxckYzRndFbFc2OWxJZEt2ZkNSTkQwSGtCY2FOUlZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvck9FakJMdkUxbFdYRDV5ZWN5NCt3UFpmbTA5TGF4NmVjMHppN1ZsSzF6KzVjdGZGMkd5MlpPVVJkNG1HM2I1c043c1NWZkluclI0NHc3Z3U3VlNpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY4MzY1ODM0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDc4ODE0OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
