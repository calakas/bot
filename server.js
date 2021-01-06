const http = require("http");
const express = require("express");
const app = express();

//
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

////////////////////BOT/////////////

const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
  console.log(`Dale pá todo piola`);
  client.user.setActivity(" Viendo 67 servidores");
});

client.on("message", message => {
  var Mensajes = ["Yo elijo piedra","Yo elijo papel","Yo elijo tijera"];
  var Aleatorio = Math.floor(Math.random()*(Mensajes.length));
  
  if (message.content === prefix + "play piedra") {
    const embed = new MessageEmbed()
    .setTitle("PIEDRA PAPEL O TIJERA")
    .setColor("RED")
    .setDescription(Mensajes[Aleatorio])
    message.channel.send(embed);
    }
  if (message.content === prefix + "play tijera") {
    const embed = new MessageEmbed()
    .setTitle("PIEDRA PAPEL O TIJERA")
    .setColor("RED")
    .setDescription(Mensajes[Aleatorio])
    message.channel.send(embed);
    }
  if (message.content === prefix + "play papel") {
    const embed = new MessageEmbed()
    .setTitle("PIEDRA PAPEL O TIJERA")
    .setColor("RED")
    .setDescription(Mensajes[Aleatorio])
    message.channel.send(embed);
    }
  if (message.content.startsWith("hola")) {
    message.channel.send(`hola crack 😉`);
  }

  if (message.content.startsWith("ping")) {
    message.channel.send("pong🏓");
  }

  if (message.content.startsWith(prefix + "calavera")) {
    message.channel.send(`*ES UN PAPUCHO 😏* https://tenor.com/view/maverick-top-gun-handsome-sunglasses-gif-13305750`);
  }

  if (message.content.startsWith(prefix + "desco")) {
    message.channel.send(`el pvtito que no me quiere en su server😔`);
  }
  if (message.content === "Asalto") {
    message.channel.send(`tranqui tu roba yo te aviso si viene alguien :)`);
    }
  if (message.content === "asalto") {
    message.channel.send(":man_police_officer:");
    }
  if (message.content === "a") {
    message.channel.send(`:regional_indicator_a:`);
    }
  if (message.content === "A") {
    message.channel.send(`:regional_indicator_a:`);
    }
  if (message.content === "aa") {
    message.channel.send(`:regional_indicator_a:`);
    }
  if (message.content === "aaa") {
    message.channel.send(`:regional_indicator_a:`);
    }
  if (message.contebt === "Aa") {
    message.channel.send(`:regional_indicator_a:`);
    }
  
  if (message.content === "c!clear ") {
    message.channel.bulkDelete(1000);
      
    }
   
      
        
  })




client.on("message", message => {
  if (message.content === prefix + "server") {
    const embed = new MessageEmbed()
      .setTitle(":iphone: SERVER INFO :iphone:")
      .setAuthor(message.member.displayName, message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setDescription(" Bot created by INF Jeremy")
      .addField("Nombre del servidor: ", message.guild.name)
      .addField("ID:", message.guild.id)
      .addField("REGION: ", message.guild.region)
      .addField("MIEMBROS: ", message.guild.memberCount)
      .setImage(message.guild.iconURL({dynamic: true, size : 1024 }))
      .setFooter(
        "Consulta por: " + message.member.displayName,
        message.author.displayAvatarURL()
      )
      .setTimestamp();
    message.channel.send(embed);
  }
if(message.content === prefix + "llorar") {
const embed = new MessageEmbed()
   .setTitle(message.member.displayName, "esta llorando")
   .setDescription(`[URL](https://media.tenor.com/images/6abfd1c8889e0c5a2db0e1039d499c9f/tenor.gif())`)
   .setImage(https://media.tenor.com/images/6abfd1c8889e0c5a2db0e1039d499c9f/tenor.gif)

   .setColor("RANDOM")
   .setFooter(message.member.displayName,message.author.displayAvatarURL()
   )
   .setTimestamp();
    message.channel.send(embed);
}

  if (message.content === prefix + "avatar") {
     const avatar = new MessageEmbed()
    .setTitle("Avatar")
.setDescription(`[Descargar Avatar](${message.author.displayAvatarURL({
        format: 'png',
        dynamic: true
    })})`)
.setImage(message.author.displayAvatarURL({dynamic: true, size : 1024 }))
.setColor("RANDOM")
.setFooter(`Avatar de solicitado por: ${message.member.displayName}`);
message.channel.send(avatar)
  }      


  if (message.content === prefix + "help") {
    const embed = new MessageEmbed()
      .setTitle("💀LISTA DE COMANDOS💀")
      .setColor("RANDOM")
      .setDescription("Lista de comandos del bot V1.0")
      .addField(
        "1.ping",
        "al escribir ping en el chat el bot respondera con un pong"
      )
      .addField(
        "2.hola",
        "al escribir hola en el chat el bot respondera con un hola crack"
      )
      .addField(
        "3.c!calavera",
        "al escribir esto saldra una descripcion y foto de mi creador😌"
      )
      
      .addField(
        "4.c!server",
        "es una pequeña información del servidor en el que estas"
      )
      .addField("5.c!avatar", "aqui saldrá la foto de tu avatar de discord")
      .addField("6.c!say", "aqui podran hacerme decir lo que quieran :)")
      .addField("7.c!icono", "este comando muestra el icono del servidor")
      .addField("8.c!play", "aqui deben elegir piedra papel o tijera asi: c!play piedra")
      .setFooter(message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send(embed);
  }
  if (message.content.startsWith("say")) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "say") {
    //////pepe/////
    let texto = args.join(" ");
    if (!texto)
      return message.channel
        .send("**Ingresa un texto.**")
        .then(msg => msg.delete({ timeout: 5000 }));
    message.delete().catch();
    message.channel.send(texto);
  }
  
    if (message.content === prefix + "icono") {
      const embed = new MessageEmbed()
        .setTitle("ICONO DEL SERVIDOR")
        .setDescription(`[Descargar imagen](${message.guild.iconURL({
        format: 'png', 
        dynamic: true
    })})`)
.setImage(message.guild.iconURL({dynamic: true, size : 1024 }))
        .setColor("RANDOM")
        .setFooter(message.member.displayName,message.author.displayAvatarURL())
        .setTimestamp()
      message.channel.send(embed);
      
      }

   
  
  }); client.login(config.token);
  
