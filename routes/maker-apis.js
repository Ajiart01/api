const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');
const { maker, ttp } = require('./func/functions');
const { welCard } = require("@delirius/welcard");
const { drawCard, LinearGradient } = require('discord-welcome-card');
const knights = require("@clayzaaubert/canvix");
const Canvas = require("discord-canvas-spanish-1ly4s0");

/* ------------{ canvas }------------ */

router.get('/canvas/welcome', async (req, res) => {
  const titulo = req.query.titulo;
  const username = req.query.username;
  const groupname = req.query.groupname;
  const profile = req.query.profile;
  if (!username || !groupname || !profile || !titulo || !isUrl(profile)) {
    const errorResponse = {
      status: false,
      message: 'Debes proporcionar los parámetros necesarios y validos: titulo, username, groupname y profile.',
      example: 'api/maker/canvas/welcome?titulo=Bienvenido/a&username=Nombre%20del%20user&groupname=Nombre%20del%20grupo&profile=https://telegra.ph/file/24fa902ead26340f3df2c.png'  
    };
    const formattedResults_e = JSON.stringify(errorResponse, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(formattedResults_e);
    return;
  }
  try {
    const card = await new welCard()
        .setName(titulo)
        .setAuthor(username)
        .setServer(groupname)
        .setColor("auto")
        .setBrightness(50)
        .setThumbnail(profile)
    const cardBuffer = await card.build();
    res.contentType('image/png');
    res.send(cardBuffer);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

async function isUrl(text) {
  return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
}

router.get('/canvas/welcome2', async (req, res) => {
  const username = req.query.username;
  const groupname = req.query.groupname;
  const membercount = req.query.membercount;
  const profile = req.query.profile;
  const background = req.query.background || 'https://telegra.ph/file/82d079999da723cc80899.png';
  const description = req.query.description;
  if (!username || !groupname || !profile || !membercount || !description) {
    const errorResponse = {
      status: false,
      message: 'Debes proporcionar los parámetros necesarios: username, groupname, membercoun, descriptiont y profile.',
      example: 'api/maker/canvas/welcome?username=Bruno%20Sobrino&groupname=API%20Empire%20-%20Comunidad&membercount=12&description=Bienvenido(a),%20lee%20las%20reglas%20del%20grupo&profile=https://github.com/BrunoSobrino.png'
    };
    const formattedResults_e = JSON.stringify(errorResponse, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(formattedResults_e);
    return;
  }
  try {
  const image = await drawCard({
    theme: 'code', 
    text: {
      title: groupname,
      text: username + ' #' + membercount,
      subtitle: description,
      color: `#88ff88`,
    },
    avatar: {
      image: profile,
      outlineWidth: 5,
      outlineColor: new LinearGradient([0, '#33f'], [1, '#f33']),
    },
      background: background,
      blur: 1,
      border: true,
      rounded: true,
    });
    res.contentType('image/png');
    res.send(image);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

router.get('/canvas/welcome3', async (req, res) => {
  const username = req.query.username;
  const groupname = req.query.groupname;
  const membercount = req.query.membercount;
  const profile = req.query.profile;
  const background = req.query.background || 'https://telegra.ph/file/82d079999da723cc80899.png';
  const description = req.query.description;
  if (!username || !groupname || !profile || !membercount || !description) {
    const errorResponse = {
      status: false,
      message: 'Debes proporcionar los parámetros necesarios: username, groupname, membercoun, descriptiont y profile.',
      example: 'api/maker/canvas/welcome?username=Bruno%20Sobrino&groupname=API%20Empire%20-%20Comunidad&membercount=12&description=Bienvenido(a),%20lee%20las%20reglas%20del%20grupo&profile=https://github.com/BrunoSobrino.png'
    };
    const formattedResults_e = JSON.stringify(errorResponse, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(formattedResults_e);
    return;
  }
  try {
  const image = await drawCard({
    theme: 'dark',
    text: {
      title: groupname,
      text: username + ' #' + membercount,
      subtitle: description,
      color: `#88ff88`,
    },
    avatar: {
      image: profile,
      outlineWidth: 5,
      outlineColor: new LinearGradient([0, '#33f'], [1, '#f33']),
    },
      background: background,
      blur: 1,
      border: true,
      rounded: true,
    });
    res.contentType('image/png');
    res.send(image);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

router.get('/canvas/welcome4', async (req, res) => {
  const username = req.query.username;
  const groupname = req.query.groupname;
  const membercount = req.query.membercount;
  const profile = req.query.profile;
  const background = req.query.background || 'https://telegra.ph/file/82d079999da723cc80899.png';
  const description = req.query.description;
  if (!username || !groupname || !profile || !membercount || !description) {
    const errorResponse = {
      status: false,
      message: 'Debes proporcionar los parámetros necesarios: username, groupname, membercoun, descriptiont y profile.',
      example: 'api/maker/canvas/welcome?username=Bruno%20Sobrino&groupname=API%20Empire%20-%20Comunidad&membercount=12&description=Bienvenido(a),%20lee%20las%20reglas%20del%20grupo&profile=https://github.com/BrunoSobrino.png'
    };
    const formattedResults_e = JSON.stringify(errorResponse, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(formattedResults_e);
    return;
  }
  try {
  const image = await drawCard({
    theme: 'circuit',
    text: {
      title: groupname,
      text: username + ' #' + membercount,
      subtitle: description,
      color: `#88ff88`,
    },
    avatar: {
      image: profile,
      outlineWidth: 5,
      outlineColor: new LinearGradient([0, '#33f'], [1, '#f33']),
    },
      background: background,
      blur: 1,
      border: true,
      rounded: true,
    });
    res.contentType('image/png');
    res.send(image);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

router.get('/canvas/welcome5', async (req, res) => {
  const username = req.query.username;
  const groupname = req.query.groupname;
  const membercount = req.query.membercount;
  const profile = req.query.profile;
  const groupicon = req.query.groupicon
  const background = req.query.background;
  if (!username || !groupname || !profile || !membercount || !background || !groupicon) {
    const errorResponse = {
      status: false,
      message: 'Debes proporcionar los parámetros necesarios: username, groupname, groupicon, membercount, profile y background.',
      example: 'api/maker/canvas/welcome5?username=bruno&groupname=api%20empire&membercount=12&groupicon=https://telegra.ph/file/4cc51944c9130560fb4a9.jpg&profile=https://github.com/BrunoSobrino.png&background=https://telegra.ph/file/82d079999da723cc80899.png'
    };
    const formattedResults_e = JSON.stringify(errorResponse, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(formattedResults_e);
    return;
  }
  try {
  const image = await new knights.Welcome()
      .setUsername(username)
      .setGuildName(groupname)
      .setGuildIcon(groupicon)
      .setMemberCount(membercount)
      .setAvatar(profile)
      .setBackground(background)
      .toAttachment();
    const data = image.toBuffer();
    res.contentType('image/png');
    res.send(data);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

router.get('/canvas/goodbye', async (req, res) => {
  const username = req.query.username;
  const groupname = req.query.groupname;
  const membercount = req.query.membercount;
  const memberdiscriminator = req.query.memberdiscriminator;
  const profile = req.query.profile;
  const background = req.query.background;
  if (!username || !groupname || !profile || !membercount || !background || !memberdiscriminator) {
    const errorResponse = {
      status: false,
      message: 'Debes proporcionar los parámetros necesarios: username, groupname, groupicon, membercount, profile y background.',
      example: 'api/maker/canvas/goodbye?username=bruno&groupname=api%20empire&membercount=12&memberdiscriminator=13&profile=https://github.com/BrunoSobrino.png&background=https://telegra.ph/file/82d079999da723cc80899.png'
    };
    const formattedResults_e = JSON.stringify(errorResponse, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(formattedResults_e);
    return;
  }
  try {
const image = await new Canvas.Goodbye()
  .setUsername(username)
  .setDiscriminator(memberdiscriminator)
  .setMemberCount(membercount)
  .setGuildName(groupname)
  .setAvatar(profile)
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground(background)
  .toAttachment();
    const data = image.toBuffer();
    res.contentType('image/png');
    res.send(data);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

/* ------------{ stickers }------------ */

router.get('/attp', async (req, res) => {
  const texto = req.query.text; 
  try {
    if (!texto) {
      const errorResponse = {
        status: false,
        message: 'Debes especificar un texto de búsqueda.'
      };
      const formattedResults_e = JSON.stringify(errorResponse, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(formattedResults_e);
      return;
    }        
    const ttpst = await ttp(texto);
    const imageResponse = await axios.get(ttpst.resultado, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

/* ------------{ textpro }------------ */

router.get('/textpro/deep-sea-metal', async (req, res) => {
  const texto = req.query.text; 
  try {
    if (!texto) {
      const errorResponse = {
        status: false,
        message: 'Debes especificar un texto para el logo.',
        example: 'api/maker/textpro/deep-sea-metal?text=api%20empire'
      };
      const formattedResults_e = JSON.stringify(errorResponse, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(formattedResults_e);
      return;
    }        
    const resss = await maker('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', [texto])
    const imageResponse = await axios.get(resss.image, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

router.get('/textpro/wolf-logo-galaxy', async (req, res) => {
  const texto1 = req.query.text1; 
  const texto2 = req.query.text2; 
  try {
    if (!texto1 || !texto2) {
      const errorResponse = {
        status: false,
        message: 'Debes especificar un texto para el logo.',
        example: 'api/maker/textpro/wolf-logo-galaxy?text1=api%20empire&text2=by%20brunosobrino'
      };
      const formattedResults_e = JSON.stringify(errorResponse, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(formattedResults_e);
      return;
    }        
    const resss = await maker('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [texto1, texto2])
    const imageResponse = await axios.get(resss.image, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

/* ------------{ photooxy }------------ */

router.get('/photooxy/flaming', async (req, res) => {
  const texto = req.query.text; 
  try {
    if (!texto) {
      const errorResponse = {
        status: false,
        message: 'Debes especificar un texto para el logo.',
        example: 'api/maker/photooxy/flaming?text=api%20empire'
      };
      const formattedResults_e = JSON.stringify(errorResponse, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(formattedResults_e);
      return;
    }        
    const resss = await maker('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', [texto])
    const imageResponse = await axios.get(resss.image, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

/* ------------{ ephoto360 }------------ */

router.get('/ephoto360/eraser-deleting-text', async (req, res) => {
  const texto = req.query.text; 
  try {
    if (!texto) {
      const errorResponse = {
        status: false,
        message: 'Debes especificar un texto para el logo.',
        example: 'api/maker/ephoto360/eraser-deleting-text?text=api%20empire'
      };
      const formattedResults_e = JSON.stringify(errorResponse, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(formattedResults_e);
      return;
    }        
    const resss = await maker('https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html', [texto])
    const imageResponse = await axios.get(resss.image, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.log(error)
    res.sendFile(path.join(__dirname, '../public/500.html'));
  }
});

module.exports = router;
