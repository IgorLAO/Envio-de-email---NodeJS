import nodemailer from 'nodemailer'

let enviar = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'testefishing69@gmail.com',
        pass: 'teste123teste'
    }
});

let detalhesEmail = {
    from: 'testefishing69@gmail.com',
    to: 'igooli670@gmail.com',
    subject: 'AAAAAA',
    text: 'AAAAAAAAAAAAAAAAA SOCORRO'
}

enviar.sendMail(detalhesEmail, function(err, data){
    if(err){
        console.log('erro')
    } else{
        console.log('Email enviado')
    }
})