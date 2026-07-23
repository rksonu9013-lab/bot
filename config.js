const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "917001340709" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917001340701";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "",  // SUHAIL_14_28_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDExLFxuICAgICAgICA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDg1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmeE1BdXFtSkpIYXY2TFlMNzNuMzhmU0s0dnlBVzhJQkRGMlJGc1RLUVVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzAwMTM0MDcwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUNEOTAxRkM4RkUxMkJFMzlBNjIzOEUyNzFBRTMzMzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzg0ODE2OTExXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3MDAxMzQwNzA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQzcwOTc2RTE0OEY0OUQ2QzYzQTlCNDlDMTFENzJFM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3ODQ4MTY5MTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMTNIYXA4VnVUcTZrOXE0S0JYd2RWUVwiLFxuICBcInBob25lSWRcIjogXCI4YzA3ZGM0NS1iYjU3LTRhMmItOTIwYy04YzI4NmY2Zjc3NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMjA1LFxuICAgICAgMTM2LFxuICAgICAgMTI0LFxuICAgICAgMzMsXG4gICAgICAxNzcsXG4gICAgICAxNjAsXG4gICAgICAxMjUsXG4gICAgICAxMTEsXG4gICAgICA5OCxcbiAgICAgIDE5MCxcbiAgICAgIDIyLFxuICAgICAgNzYsXG4gICAgICAyMzAsXG4gICAgICAyMTQsXG4gICAgICAwLFxuICAgICAgMTI3LFxuICAgICAgMTgxLFxuICAgICAgMjAwLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDQwLFxuICAgICAgOCxcbiAgICAgIDM4LFxuICAgICAgMjUzLFxuICAgICAgNTEsXG4gICAgICAyMDYsXG4gICAgICA3MixcbiAgICAgIDEzMSxcbiAgICAgIDc4LFxuICAgICAgNjksXG4gICAgICA3NixcbiAgICAgIDIwMCxcbiAgICAgIDE4OCxcbiAgICAgIDI5LFxuICAgICAgMTg1LFxuICAgICAgMTEwLFxuICAgICAgODEsXG4gICAgICA5MSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3l4M2FJRkVJYktpTk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZa0hLQ2QyN0tOVHBITTcwTEd5eUVHaWpTbHcyK2hJanBGVlkzNU9FYlVZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImwrYWZLdHZmYWZpbmU0cmR0K0hoYkk4SXdCYTRmKzRhSVZ0Z3lLWkhkVWFoQjVTZVhGaCtjWjQzSVBteDVSejk1S3N2N0x2ajlqM2I1UDRIOEtXTkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRwSzRsQTJGMlBkUktRRDNMOFVzZmtqMExrbEdacDRrQmwwOVpVQXRFT1FZUTQ1MW5jWjlDdWhWWVl3U21vVFVEcjlMTFRjMHYzUTFXZEdZVjdIaGlRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3MDAxMzQwNzA5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5MjIwMDEwMDA4Njg1OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4riZwrPwnZCX8JCPk/CdkJLwnZCo8J2Qp/CdkK7ipLnin63qr63qr60g8J+ltfCflKVcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzAwMTM0MDcwOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3ODQ4MTY5MDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMOEtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw4Sy5qc29uIjogIntcImtleURhdGFcIjpcIjB4Y2hueTVKWlhBbzJ3Z0ZGSGNLaU1sZHRBTHF0ek9mYXFCOE4vRndIOTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNTAxMDU0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzg0ODE2OTA3Nzg1XCJ9Igp9 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
