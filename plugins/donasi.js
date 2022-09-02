let handler = async m => m.reply(`
     *Silahkan kak*

╭─「 Donasi • Pulsa 」
│ •  [0896-1872-8196]
│ •  [0878-9287-0587]
│ • Dan bisa melalui E-wallet di bawah
╰────

╭─「 Donasi • E-wallet 」
│ • Dana : [0896-1872-8196]
│ • Gopay : [0878-9287-0587]
│ • Ovo : [0896-8172-1876]
│ • Qris : *Hubungi Onwer kami*
│
│ • Terima kasih kak♡
╰────\n\n© NR-Rfky28
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
