const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61V246jRhD9lVW/jrXDHWNppDQ33zDG9mBjR3looIEeczM0tvHK7/mEvOUX8wkRnnF2pd1MJtIitdT0peqcqjrVX0BekBpPcQsGX0BZkSOiuJvStsRgANQminAFeiBEFIEB2BgWu9BWdqCnZLjhq2V9dvouOuj7MFMgZvPz5uyuW9dj4ydw7YGy8VMSvGNQ5t3WlEl8Kl6YQxoYZ3+jEu1hYzvqbAtLB7YCHDojOlXdJ3DtLCJSkTw2ygRnuELpFLcOItXH4C9mGku8veaPDsJ4HVTbSyoEM1R6zo669mWSjKx5w+wLeR18DP7l2HfMvIVYVJMFZZbmKZ+0zTz2WU3mj/x+Ns30VX839tL+K/yaxDkOxyHOKaHth+NezI7YPifbiFaHNrZsx9D7/sm1Fq7NiUt75AaJnkRDy/eYjwGHq3mmNuossE7p40jNuO30tG2UURSKQfD8UixzTxAPLnO5LL4F7lT3Wtn/n7hzcG2Lm/PZt5L+NHVXk7US6FUs7Py1zpz9jZiGD9lJlmf5B+HLz+tc9rN29Jhe4DMrOjK33doHzR66/mnOP5sS48qcXJ0X7lf4iDbVeyhDq42MIJdCZf68VFgSeqIr0YnntxPPlqMGa5P1Wj3WsxlMFc0p3BeFbCopEt0dkqaaN1eHtMR6wxQbt9jZEqMzShw/3RjtcTsOwYC99kCFY1LTClFS5Lc1SeoBFB5XOKgwvYUX6HaFjl4l7YVtPXzEsZhjdiycypF2UZpcCa2J0m8PGfsydZ9AD5RVEeC6xuGI1LSo2hmuaxTjGgx+vWWqI13hrKB4QsIuH6IoiRyv9CVW+KX+fEoQrVFZfs4xBT0QVUU2w2BAqwb3wO2CaMp9VutzuiwbOsMLKq9IvG7IEEJegoLUUcxenT6TDNcUZSUYsLKgiAyjcMq193NwqDIrMX3IsZohad2APKfqEsPImsEomvE+Dp79WTgMxRRMtQ9VUzAlaCiMxmmCIZuGyBtKXxHexyGx1996IMdn+qqnrgp4tgciUtXUzZsyLVB4F9t9EwVB0eR01eaB1k1wBQbfLGNKSR7XHbMmR1WQkCPWOh5gEKG0xv8UHq5weOfy1ky1Iuz04HkzzmEtG3TYO0PfxWbAK9+HJ70dYxmRE3mmr/A8z8lid7Lb6IEcdcaATYIiRU39SUc5wekn7tNff/7x+3108Xpj0jkOMUUkrcEAaFbrpYe9bsylUR6Mh0MYxFCLIfjK/K7sV+WEL2zy4M5OEpL7WFrw60s+dAVtfzQvzs6YrnGsiFOzJWFcPP3ACBiAh/g83h2gPk4pQXiXrNZUT/BhWJirVJuj3aKSqS/Os+lFFrn50fKHR1mX++zlkezTcW7rmSjvC3fK0sYctohtuLBQuzbQAyE+kgB/6yz3Jen5NJUji1oPK2zsLcaGW4ipsN2U4vCSMFjeyObBWvpY0pW8hqJJwl3jWHN4gAv4yMZ0wyhlVLa78TLF5gqe7z3n1vPSt7eGvHUDcvuNCL617rfk/GeOX4F3pchce9/YeHsM/qWhqt5W2UapPptnzeOo2dtsIJ7TOSytc3DhllrqFQ5eJUGRb6fg2mmiTBGNiioDA4DysCpuFVQVTVfb4zwq3nGmwXisL16Zp6im8KtefiBBVnk95VRFOUJ10gXBYbdJ1BV/C8tyRRG9yw/A7pvIDbj+DTryWmMxCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Nicolaus Daniel ❤️",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255652398614",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
