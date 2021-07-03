const Discord = require("discord.js");
const fetch = require("node-fetch")
require('dotenv').config()
const client = new Discord.Client(); //instanciar clase

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if ( msg.content === "Hola") {
    msg.channel.send(`Bienvenido a Supremacy la guild de cansados ${msg.author}!!`);
  } else if (msg.content === "hola"){
      msg.channel.send(`Bienvenido a Supremacy la guild de cansados ${msg.author}!!`)
  } else if (msg.content === "hi"){
    msg.channel.send(`Welcome to Supremacy the guild full of tired old mans!!!!  ${msg.author}!!`)
  } else if (msg.content === "hello"){
    msg.channel.send(`Welcome to Supremacy the guild full of tired old mans!!!! ${msg.author}!!`)
  } else if (msg.content === "oi"){
    msg.channel.send(`Saludos boludo BR ${msg.author}!!`)
} else if (msg.content === "victoria"){
    msg.channel.send(`holis nene`)
}
})

client.login(process.env.TOKEN);
