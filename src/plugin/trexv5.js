import config from '../../config.cjs';
const img = document.createElement("img");
    img.src = "https://files.catbox.moe/19dogf.jpg"; // Set the image source
    img.alt = "Example Image"; // Set the alt text

    // Add the image to a container div
    const container = document.getElementById("imageContainer");
    container.appendChild(img);
const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('✴️');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `╭────────────────❒━┈⊷
│🛹 ʙᴏᴛ ɴᴀᴍᴇ: *TREX-MD*
│🕹️ ᴠᴇʀꜱɪᴏɴ: 2.0.0
│🪀 ᴏᴡɴᴇʀ : *BERA TECH*      
│🧾 ɴᴜᴍʙᴇʀ: 2547439822⁰6
│🏮 ᴘʟᴀᴛғᴏʀᴍ: *linux*
│🛡 ᴍᴏᴅᴇ: *public*
│🧮 ᴘʀᴇғɪx: [.]
╰────────────────❒
POWERED BY TREX-MD 
┏❐ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁
┃✰ .𝙰𝚃𝚃𝙿
┃✰ .𝙰𝚃𝚃𝙿2
┃✰ .𝙰𝚃𝚃𝙿3
┃✰ .𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ .𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ .𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃✰ .𝙼𝙿3
┗❑
┏❐ 𝙰𝙸 
┃✰ .𝙰𝚒
┃✰ .𝙱𝚞𝚐
┃✰ .𝚁𝚎𝚙𝚘𝚛𝚝
┃✰ .𝙶𝚙𝚝
┃✰ .𝙳𝚊𝚕𝚕𝚎
┃✰ .𝚁𝚎𝚖𝚒𝚗𝚒
┃✰ .𝙶𝚎𝚖𝚒𝚗𝚒
┗❑
┏❐ 𝚃𝙾𝙾𝙻 
┃✰ .𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃✰ .𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃✰ .𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃✰ .𝚃𝚛𝚝
┃✰ .𝚃𝚝𝚜
┗❑
┏❐ 𝙶𝚁𝙾𝚄𝙿 
┃✰ .𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃✰ .𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃✰ .𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃✰ .𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃✰ .𝙶𝚛𝚘𝚞𝚙
┃✰ .𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃✰ .𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃✰ .𝙰𝚍𝚍
┃✰ .𝙺𝚒𝚌𝚔
┃✰ .𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃✰ .𝚃𝚊𝚐𝚊𝚕𝚕
┃✰ .𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃✰ .𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃✰ .𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃✰ .𝙳𝚎𝚖𝚘𝚝𝚎
┃✰ .𝙶𝚎𝚝𝚋𝚒𝚘
┗❑
╭❐ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳
┃✰ .𝙰𝚙𝚔
┃✰ .𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃✰ .𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃✰ .𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃✰ .𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃✰ .𝙶𝚍𝚛𝚒𝚟𝚎
┃✰ .𝙸𝚗𝚜𝚝𝚊
┃✰ .𝚈𝚝𝚖𝚙3
┃✰ .𝚈𝚝𝚖𝚙4
┃✰ .𝙿𝚕𝚊𝚢
┃✰ .𝚂𝚘𝚗𝚐
┃✰ .𝚅𝚒𝚍𝚎𝚘
┃✰ .𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃✰ .𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃✰ .𝚃𝚒𝚔𝚝𝚘𝚔
╰❑
╭❐ 𝚂𝙴𝙰𝚁𝙲𝙷
┃✰ .𝙿𝚕𝚊𝚢
┃✰ .𝚈𝚝𝚜
┃✰ .𝙸𝚖𝚍𝚋
┃✰ .𝙶𝚘𝚘𝚐𝚕𝚎
┃✰ .𝙶𝚒𝚖𝚊𝚐𝚎
┃✰ .𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃✰ .𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃✰ .𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃✰ .𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃✰ .𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃✰ .𝙻𝚢𝚛𝚒𝚌𝚜
╰❑
╭❐ 𝙼𝙰𝙸𝙽
┃✰ .𝙿𝚒𝚗𝚐
┃✰ .𝙰𝚕𝚒𝚟𝚎
┃✰ .𝙾𝚠𝚗𝚎𝚛
┃✰ .𝙼𝚎𝚗𝚞
┃✰ .𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰❑
╭❐ 𝙾𝚆𝙽𝙴𝚁
┃✰ .𝙹𝚘𝚒𝚗
┃✰ .𝙻𝚎𝚊𝚟𝚎
┃✰ .𝙱𝚕𝚘𝚌𝚔
┃✰ .𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃✰ .𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃✰ .𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃✰ .𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃✰ .𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃✰ .𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃✰ .𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃✰ .𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃✰ .𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰❑
╭❐ 𝚂𝚃𝙰𝙻𝙺
┃✰ .𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃✰ .𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃✰ .𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰❐

╭───────────────────❒
│❒⁠⁠⁠⁠ *DEV* : *BRUCE BERA*
│❒⁠⁠⁠⁠ *GITHUB* : *BeraTech*
⁠⁠⁠⁠╰───────────────────❒
  
❒────────────────────❒
POWERED BY BERA TECH 
❒────────────────────❒`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;

