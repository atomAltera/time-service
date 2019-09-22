from node:10

workdir /opt/app

add package-lock.json package.json ./

run npm i

add index.js ./

cmd npm start