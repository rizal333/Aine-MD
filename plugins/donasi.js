let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0896-1872-8196]
│ •  [0878-9287-0587]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler