let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`*💌 Nama:* ${name}\n*💾 Your Exp:*${global.db.data.users[who].exp}\n*⚒️ Role:* ${Role}`)
}
handler.help = ['exp [@user]']
handler.tags = ['xp']
handler.command = /^(exp)$/i
module.exports = handler
