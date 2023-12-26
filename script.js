"use strict"
//uyge tapsirma

//1-numberOfSeries nomli o’zgaruvchi yarating va unga “Nechta serial ko’rdingiz?” degan javobini qo’ying. 
const numberOfSeries = prompt("Nechta serial kordingiz", "1")


//2-seriesDB nomli object yasang va unga quydagi xususiyatlarni yozib chiqing: 

const seriesDB = {cound : numberOfSeries, series : {}, actors : {}, genres : [], private : false}

//3-Foydalanuvchiga ushbu savolni ikki marotaba bering:

for(let i=0; i<2 ; i++) {
    const endSeries = prompt("Eng oxirgi korgan serialingiz")
    const levelSeries = prompt("Nechchi baho berasiz")
    seriesDB.series[endSeries] = levelSeries
}

console.log(seriesDB)

