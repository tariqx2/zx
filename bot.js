const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("تم التشغيل,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("511595760345939968");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Ꮃelcome Ꭲo Ꮪerver Power**`), 6000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "495002982593855489" && ch.type === 'voice').join();

});










 const devs = ['283355378811666435' , '' , ''];

const adminprefix = "!";

client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

      if (!devs.includes(message.author.id)) return;

      

  if (message.content.startsWith(adminprefix + 'ply')) {

    client.user.setGame(argresult);

      message.channel.sendMessage(`**  ${argresult} ply .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'wt')) {

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.sendMessage(`**  ${argresult} wt .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'ls')) {

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.sendMessage(`**  ${argresult} ls .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'st')) {

    client.user.setGame(argresult, "https://www.twitch.tv/muuuuuute");

      message.channel.sendMessage(`**  ${argresult} st .. ✅**`)

    }

  if (message.content.startsWith(adminprefix + 'us')) {

  client.user.setUsername(argresult).then

      message.channel.send(`**us ..**${argresult}** `)

  } else

  if (message.content.startsWith(adminprefix + 'av')) {

  client.user.setAvatar(argresult);

    message.channel.send(`**avatar ... :** `);

  }

  });




var prefix = "2";




client.on('ready', async() => {

var server = "520716763407712256"; // ايدي السررفر

var channel = "520717124378034176";//ايدي الروم

    setInterval(()=>{

    client.guilds.get(server).channels.get(channel).send('ehejejdhdhdhdhdjdhdhddhdhdhrjrjrhdjfjfjfjffjfjfjfjf')
        
    },10);

})

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "d") {

if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('?|`MANAGE_ROLES`ليس لديك صلاحيات`');

   message.channel.sendMessage(args.join("  "))

   message.delete()

  }

 });







client.login(process.env.BOT_TOKEN);
