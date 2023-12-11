const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require ('qrcode-terminal');
const whatsapp = new Client({
 authStrategy: new LocalAuth(),
});

whatsapp.on('qr', (qr) => {
    qrcode.generate(qr,{
        small:true
    })
    console.log(qr)
    })

whatsapp.on('ready', () => {
    console.log('Client is ready!');
});
//proses dimana ketika pesan masuk ke bot
 whatsapp.on('message', async m => {
  //mengecek pesan yang masuk sama dengan pernyataan, jika pernyataan benar maka akan membalas secara otomatis !
 if(m.body ==='test' || m.body === 'Test'|| m.body === 'TEST'){
     // membalas pesan
     m.reply('')
 }
 });

 whatsapp.on('message', m => {
     if (m.body == 'ping') {
         m.reply('ping pong');
     }
 });

whatsapp.on('disconnected', (reason) => {
    console.log('disconnect whastapp-bot', reason);
});

whatsapp.initialize();
