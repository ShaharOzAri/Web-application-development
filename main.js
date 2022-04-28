$(document).ready(function () {
  class ad {
    constructor(name, texts, images, template, timeDuration, days, dates) {
      this.name = name;
      this.texts = texts;
      this.images = images;
      this.template = template;
      this.timeDuration = timeDuration;
      this.days = days;
      this.dates = dates;
    }
  }

  const adList = [
    new ad(
      "ad1",
      [
        "Introducing the new addition to our collection of stunning Name Necklaces:",
        "oriya",
        "oriya",
        "oriya",
      ],
      [
        "https://scene7.samsclub.com/is/image/samsclub/20220107-jewely-affinity?wid=570",
        "https://www.byrdie.com/thmb/IGCYxFzJ3iA3B5qshVGSzaQNgt0=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/jewelry-1de4f055d00c45dbb7d6d3b1542d165b.jpg",
      ],
      "templateB",
      10,
      { 2: { fromHour: 6, toHour: 12 }, 5: { fromHour: 6, toHour: 22 } },
      {
        fromDate: { day: 1, month: 1, year: 2022 },
        toDate: { day: 31, month: 12, year: 2022 },
      }
    ),
    new ad(
      "ad2",
      ["shahar", "oriya", "oriya", "oriya"],
      [
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ed8c79d4-8529-4bbe-bf91-9d5a5e97e7c1-3-1626364671.jpeg?crop=1.00xw:0.788xh;0,0.113xh&resize=640:*",
        "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1628705724/homepage/Categories%20/Homepage_Categories_BestSellers_Fall2021",
        "https://scene7.samsclub.com/is/image/samsclub/20220107-jewely-affinity?wid=570",
      ],
      "templateA",
      4,
      { 2: { fromHour: 6, toHour: 12 }, 5: { fromHour: 6, toHour: 22 } },
      {
        fromDate: { day: 1, month: 1, year: 2022 },
        toDate: { day: 31, month: 12, year: 2022 },
      }
    ),
  ];

  for (let i = 0; i < adList.length; i++) {
    if (!checkDate(adList[i].days, adList[i].dates)) {
      continue;
    }
    setInterval(executeAd, 3000, adList[i]);
  }
});

//function that execute ad
function executeAd(ad) {
  console.log(ad);
  $("#ads").load(`${ad.template}.html`, function (response, status, xhr) {
    if (status == "error") {
      alert(
        "Sorry but there was an error: " + xhr.status + " " + xhr.statusText
      );
    }
  });

  $(document).ready(function () {
    ad.texts.forEach((text, index) => {
      console.log(text);
      $(`#text${index + 1}`).html(text);
    });
    for (var j = ad.texts.length + 1; j <= 10; j++) {
      $(`#text${j}`).hide();
    }
    ad.images.forEach((image, index) => {
      $(`#img${index + 1}`).attr("src", image);
    });
    for (var j = ad.images.length + 1; j <= 10; j++) {
      $(`#col${j}`).hide();
    }
  });
}

//function that check if we need to show this ad now
function checkDate(days, dates) {
  const now = new Date();
  const validDates = JSON.parse(JSON.stringify(dates));
  const startDate = JSON.parse(JSON.stringify(validDates.fromDate));
  const endDate = JSON.parse(JSON.stringify(validDates.toDate));
  var fromDate = new Date();
  var toDate = new Date();
  fromDate.setFullYear(startDate.year, startDate.month, startDate.day);
  toDate.setFullYear(endDate.year, endDate.month, endDate.day);
  if (fromDate.getTime() > now.getTime() || toDate.getTime() < now.getTime()) {
    return false;
  }
  const validDays = JSON.parse(JSON.stringify(days));
  for (var day in validDays) {
    if (now.getDay() + 1 == day) {
      const hours = JSON.parse(JSON.stringify(validDays[day]));
      if (
        now.getHours() + 1 <= hours.toHour &&
        now.getHours() + 1 >= hours.fromHour
      ) {
        return true;
      }
    }
  }
  return false;
}
