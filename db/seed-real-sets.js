/*
STEPS TO SCRAPE DATA FROM COACHELLA WEBSITE

1. Visit https://www.coachella.com/lineup
2. Scroll to the bottom of the page so all the artists are loaded
3. Run `document.querySelectorAll("[routerlinkactive='active']")` to grab all artists
4. Use `Array.from` to turn `NodeList` object into an Array.
5. Map over this extracting the text property from each element in the array
  a. to get the string below you can run `copy()` on the array generated and paste it in
*/

const axios = require('axios');
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTJmOTExNWRjYjgxNjBhMTdjMzQyOSIsIm5hbWUiOiJSb25pbCBCaGF0aWEiLCJlbWFpbCI6InJvbmlsYmhhdGlhQGdtYWlsLmNvbSIsImlhdCI6MTU3ODg2OTM5MSwiZXhwIjoxNTc5NDc0MTkxfQ.CWwpit2j7duMUVr7BcPbyqCv3yQFb8m5K3nv6ukJk-g';

let artists = [
  "070 Shake Gobi Sun, April 14, 7:15 pm - 7:50 pm Gobi Sun, April 21, 7:15 pm - 7:55 pm Add to favorites ",
  "29 Palms DoLab Sun, April 21, 6:00 pm - 7:30 pm Add to favorites ",
  "88Glam Outdoor Theatre Fri, April 19, 4:00 pm - 4:40 pm Outdoor Theatre Fri, April 12, 4:00 pm - 4:40 pm Add to favorites ",
  "A Hundred Drums DoLab Sat, April 20, 12:30 pm - 1:45 pm Add to favorites ",
  "A R I Z O N A Coachella Stage Sat, April 13, 2:45 pm - 3:25 pm Coachella Stage Sat, April 20, 2:45 pm - 3:25 pm Add to favorites ",
  "Adriatique Yuma Sat, April 20, 3:15 pm - 4:30 pm Yuma Sat, April 13, 3:15 pm - 4:30 pm Add to favorites ",
  "Agoria Yuma Sat, April 13, 12:45 pm - 2:00 pm Yuma Sat, April 20, 12:45 pm - 2:00 pm Add to favorites ",
  "Alf Alpha Coachella Stage Sun, April 14, 2:15 pm - 2:55 pm Add to favorites ",
  "Alice Merton Gobi Sun, April 14, 4:50 pm - 5:35 pm Gobi Sun, April 21, 4:50 pm - 5:35 pm Add to favorites ",
  "Âme Yuma Sat, April 20, 4:30 pm - 6:00 pm Yuma Sat, April 13, 4:30 pm - 6:00 pm Add to favorites ",
  "Amelie Lens Yuma Fri, April 12, 5:30 pm - 6:45 pm Yuma Fri, April 19, 5:30 pm - 6:45 pm Add to favorites ",
  "Anderson .Paak & The Free Nationals Coachella Stage Fri, April 19, 7:05 pm - 7:55 pm Coachella Stage Fri, April 12, 7:05 pm - 7:55 pm Add to favorites ",
  "Anna Lunoe Sahara Fri, April 19, 2:40 pm - 3:30 pm Sahara Fri, April 12, 2:40 pm - 3:30 pm Add to favorites ",
  "Aphex Twin Mojave Sat, April 20, 9:05 pm - 10:35 pm Mojave Sat, April 13, 9:05 pm - 10:35 pm Add to favorites ",
  "Ariana Grande Coachella Stage Sun, April 14, 10:30 pm Coachella Stage Sun, April 21, 10:25 pm Add to favorites ",
  "Bad Bunny Coachella Stage Sun, April 14, 5:40 pm - 6:30 pm Coachella Stage Sun, April 21, 5:35 pm - 6:25 pm Add to favorites ",
  "BASSNECTAR Outdoor Theatre Sun, April 14, 12:05 am Outdoor Theatre Sun, April 21, 12:05 am Add to favorites ",
  "BAYNK DoLab Fri, April 19, 1:15 pm - 2:15 pm Add to favorites ",
  "Bazzi Coachella Stage Sat, April 13, 6:05 pm - 6:45 pm Coachella Stage Sat, April 20, 6:05 pm - 6:45 pm Add to favorites ",
  "Beach Fossils Gobi Fri, April 19, 4:10 pm - 4:55 pm Gobi Fri, April 12, 4:10 pm - 4:55 pm Add to favorites ",
  // "BearTraxx b2b Special Guest Sahara Saturday, April 13, 1:35 pm - 2:20 pm Add to favorites ",
  "Billie Eilish Outdoor Theatre Sat, April 20, 9:35 pm - 10:40 pm Outdoor Theatre Sat, April 13, 9:35 pm - 10:40 pm Add to favorites ",
  "BLACKPINK Sahara Fri, April 12, 8:00 pm - 9:00 pm Sahara Fri, April 19, 8:00 pm - 9:00 pm Add to favorites ",
  "Bleep Bloop DoLab Fri, April 12, 7:15 pm - 8:30 pm Add to favorites ",
  "Blond:ish Yuma Fri, April 12, 12:45 pm - 1:45 pm Yuma Fri, April 19, 12:45 pm - 1:45 pm Add to favorites ",
  "Blood Orange Outdoor Theatre Sun, April 14, 6:10 pm - 7:00 pm Outdoor Theatre Sun, April 21, 6:00 pm - 6:50 pm Add to favorites ",
  "Bob Moses Outdoor Theatre Sat, April 13, 6:25 pm - 7:15 pm Outdoor Theatre Sat, April 20, 7:15 pm - 8:05 pm Add to favorites ",
  "boy pablo Gobi Sun, April 14, 3:40 pm - 4:25 pm Gobi Sun, April 21, 3:40 pm - 4:25 pm Add to favorites ",
  "Burna Boy Coachella Stage Sun, April 14, 3:05 pm - 3:50 pm Coachella Stage Sun, April 21, 3:05 pm - 3:50 pm Add to favorites ",
  "Calypso Rose Gobi Fri, April 19, 5:25 pm - 6:15 pm Gobi Fri, April 12, 5:25 pm - 6:15 pm Add to favorites ",
  "CamelPhat Yuma Fri, April 12, 4:15 pm - 5:30 pm Yuma Fri, April 19, 4:15 pm - 5:30 pm Add to favorites ",
  "Cassian DoLab Sat, April 20, 4:00 pm - 5:15 pm Add to favorites ",
  "Charlotte de Witte Yuma Sun, April 14, 5:30 pm - 7:00 pm Yuma Sun, April 21, 7:00 pm - 8:30 pm Add to favorites ",
  "Charlotte Gainsbourg Gobi Fri, April 12, 10:45 pm - 11:30 pm Gobi Fri, April 19, 10:45 pm - 11:30 pm Add to favorites ",
  "Childish Gambino Coachella Stage Fri, April 12, 11:25 pm Coachella Stage Fri, April 19, 11:25 pm Add to favorites ",
  "CHON Mojave Sat, April 13, 12:40 pm - 1:10 pm Mojave Sat, April 20, 12:40 pm - 1:10 pm Add to favorites ",
  "Chris Lake Yuma Fri, April 12, 8:15 pm - 9:30 pm Yuma Fri, April 19, 8:15 pm - 9:30 pm Add to favorites ",
  "CHVRCHES Mojave Sun, April 14, 9:30 pm - 10:20 pm Mojave Sun, April 21, 9:30 pm - 10:20 pm Add to favorites ",
  "Cirez D Yuma Sun, April 14, 10:00 pm Yuma Sun, April 21, 10:00 pm Add to favorites ",
  "Clairo Mojave Sun, April 14, 6:55 pm - 7:40 pm Mojave Sun, April 21, 6:55 pm - 7:40 pm Add to favorites ",
  "CloZee Sahara Sat, April 20, 5:50 pm - 6:55 pm Sahara Sat, April 13, 5:50 pm - 6:55 pm Add to favorites ",
  "Cola Boyy Sonora Sun, April 21, 2:50 pm - 3:20 pm Sonora Sun, April 14, 2:50 pm - 3:20 pm Add to favorites ",
  "COOL ERA Sonora Fri, April 12, 12:00 pm - 2:05 pm Add to favorites ",
  "Cptn Kirk Gobi Sat, April 13, 12:45 pm - 1:25 pm Add to favorites ",
  "d1bbs DoLab Fri, April 12, 12:30 pm - 1:45 pm Add to favorites ",
  "Dance Spirit",
  "Dave P. Yuma Fri, April 12, 12:00 pm - 12:45 pm Yuma Fri, April 19, 12:00 pm - 12:45 pm Add to favorites ",
  "Deep Dish Yuma Sat, April 13, 6:00 pm - 7:30 pm Yuma Sat, April 20, 6:00 pm - 7:30 pm Add to favorites ",
  "Dennis Lloyd Mojave Sun, April 21, 4:30 pm - 5:15 pm Mojave Sun, April 14, 4:35 pm - 5:20 pm Add to favorites ",
  "Dermot Kennedy Gobi Sun, April 14, 6:00 pm - 6:50 pm Gobi Sun, April 21, 6:00 pm - 6:50 pm Add to favorites ",
  "Dillon Francis Sahara Sun, April 21, 9:35 pm - 10:35 pm Sahara Sun, April 14, 9:35 pm - 10:35 pm Add to favorites ",
  "Diplo Sahara Fri, April 19, 9:30 pm - 10:30 pm Sahara Fri, April 12, 9:30 pm - 10:30 pm Add to favorites ",
  "Dirtwire DoLab Sat, April 13, 8:30 pm - 9:30 pm Add to favorites ",
  "Dj Nu-Mark DoLab Fri, April 12, 4:45 pm - 6:00 pm Add to favorites ",
  "DJ Seinfeld DoLab Sat, April 13, 4:45 pm - 6:00 pm Add to favorites ",
  "DJ Snake Outdoor Theatre Fri, April 12, 10:35 pm Outdoor Theatre Fri, April 19, 10:35 pm Add to favorites ",
  "Dom Dolla DoLab Sun, April 14, 3:30 pm - 4:45 pm Add to favorites ",
  "Dombresky DoLab Sun, April 14, 2:15 pm - 3:30 pm Add to favorites ",
  "Dorfex Bos DoLab Sat, April 13, 12:00 pm - 1:00 pm Add to favorites ",
  "Dusky Yuma Sun, April 21, 4:15 pm - 5:30 pm Yuma Sun, April 14, 4:15 pm - 5:30 pm Add to favorites ",
  "dvsn Gobi Fri, April 12, 6:40 pm - 7:25 pm Gobi Fri, April 19, 6:40 pm - 7:25 pm Add to favorites ",
  "Easy Life Sonora Sun, April 14, 1:10 pm - 1:40 pm Sonora Sun, April 21, 1:10 pm - 1:40 pm Add to favorites ",
  "Elderbrook DoLab Fri, April 12, 4:00 pm - 4:45 pm Add to favorites ",
  "Ella Mai Outdoor Theatre Fri, April 12, 7:40 pm - 8:20 pm Outdoor Theatre Fri, April 19, 7:45 pm - 8:20 pm Add to favorites ",
  "Emily King Gobi Sun, April 21, 2:35 pm - 3:15 pm Gobi Sun, April 14, 2:35 pm - 3:15 pm Add to favorites ",
  "Emmit Fenn DoLab Fri, April 12, 3:00 pm - 4:00 pm Add to favorites ",
  "Ericalandia Mojave Sun, April 14, 1:40 pm - 2:20 pm Add to favorites ",
  "Escapade DoLab Sat, April 20, 6:30 pm - 8:00 pm Add to favorites ",
  "EVAN GIIA DoLab Sat, April 13, 2:00 pm - 2:55 pm Add to favorites ",
  "FISHER Sahara Fri, April 12, 5:00 pm - 6:00 pm Sahara Fri, April 19, 5:00 pm - 6:00 pm Add to favorites ",
  "FKJ Mojave Sat, April 20, 3:50 pm - 4:40 pm Mojave Sat, April 13, 3:50 pm - 4:40 pm Add to favorites ",
  "ford. DoLab Sat, April 13, 1:00 pm - 2:00 pm Add to favorites ",
  "Four Tet Mojave Sat, April 20, 7:35 pm - 8:35 pm Mojave Sat, April 13, 7:35 pm - 8:35 pm Add to favorites ",
  "Gabe Real Coachella Stage Sat, April 13, 1:50 pm - 2:30 pm Add to favorites ",
  "Gesaffelstein Outdoor Theatre Sun, April 21, 7:40 pm - 8:40 pm Outdoor Theatre Sun, April 14, 7:45 pm - 8:45 pm Add to favorites ",
  "Golden Features DoLab Sat, April 13, 7:30 pm - 8:30 pm Add to favorites ",
  "Gorgon City Outdoor Theatre Fri, April 12, 6:10 pm - 7:10 pm Outdoor Theatre Fri, April 19, 6:10 pm - 7:10 pm Add to favorites ",
  "Gryffin Sahara Sat, April 20, 7:20 pm - 8:20 pm Sahara Sat, April 13, 7:20 pm - 8:20 pm Add to favorites ",
  "Gucci Gang Sahara Sun, April 14, 8:15 pm - 9:05 pm Sahara Sun, April 21, 8:15 pm - 9:05 pm Add to favorites ",
  "Guy Gerber Yuma Sun, April 21, 8:30 pm - 10:00 pm Yuma Sun, April 14, 8:30 pm - 10:00 pm Add to favorites ",
  "Heidi Lawden Yuma Sat, April 20, 12:00 pm - 12:45 pm Yuma Sat, April 13, 12:00 pm - 12:45 pm Add to favorites ",
  "Henry Pope DoLab Sat, April 20, 1:45 pm - 3:00 pm Add to favorites ",
  "H.E.R. Outdoor Theatre Sun, April 21, 9:30 pm - 10:25 pm Outdoor Theatre Sun, April 14, 9:30 pm - 10:20 pm Add to favorites ",
  "Holly DoLab Fri, April 19, 5:30 pm - 6:30 pm Add to favorites ",
  "Hop Along Sonora Sat, April 20, 4:35 pm - 5:10 pm Sonora Sat, April 13, 4:35 pm - 5:10 pm Add to favorites ",
  "Hot Since 82/Lauren Lane/Nic Fanciulli Yuma Fri, April 19, 11:00 pm Yuma Fri, April 12, 11:00 pm Add to favorites ",
  "Hurray for the Riff Raff Gobi Fri, April 19, 3:05 pm - 3:45 pm Gobi Fri, April 12, 3:05 pm - 3:45 pm Add to favorites ",
  "HYUKOH Sonora Sun, April 14, 6:35 pm - 7:20 pm Sonora Sun, April 21, 6:35 pm - 7:20 pm Add to favorites ",
  "Iceage Sonora Sun, April 14, 3:45 pm - 4:20 pm Sonora Sun, April 21, 3:45 pm - 4:20 pm Add to favorites ",
  "Idris Elba Yuma Sat, April 20, 9:00 pm - 11:00 pm Yuma Sat, April 13, 9:00 pm - 11:00 pm Add to favorites ",
  "J Balvin Coachella Stage Sat, April 13, 7:10 pm - 8:05 pm Coachella Stage Sat, April 20, 7:15 pm - 8:05 pm Add to favorites ",
  "Jaden Smith Sahara Fri, April 19, 6:25 pm - 7:15 pm Sahara Fri, April 12, 6:25 pm - 7:15 pm Add to favorites ",
  "Jain Gobi Sat, April 13, 5:00 pm - 5:45 pm Gobi Sat, April 20, 5:00 pm - 5:45 pm Add to favorites ",
  "Jambinai Gobi Sat, April 13, 1:35 pm - 2:20 pm Gobi Sat, April 20, 1:35 pm - 2:20 pm Add to favorites ",
  "Jan Blomqvist Yuma Sun, April 21, 1:00 pm - 2:00 pm Yuma Sun, April 14, 1:00 pm - 2:00 pm Add to favorites ",
  "Janelle Monáe Coachella Stage Fri, April 19, 9:50 pm - 10:40 pm Coachella Stage Fri, April 12, 9:50 pm - 10:40 pm Add to favorites ",
  "Jauz Sahara Fri, April 19, 3:50 pm - 4:45 pm Sahara Fri, April 12, 3:50 pm - 4:45 pm Add to favorites ",
  "Javiera Mena Sonora Sat, April 13, 2:45 pm - 3:20 pm Sonora Sat, April 20, 2:45 pm - 3:20 pm Add to favorites ",
  "Jim Smith Sonora Sat, April 13, 12:00 pm - 1:00 pm Sonora Sat, April 20, 12:00 pm - 1:00 pm Add to favorites ",
  "Jimbo Jenkins Outdoor Theatre Fri, April 12, 3:00 pm - 3:40 pm Add to favorites ",
  "John Beaver + DJ Durty Sahara Sat, April 13, 12:25 pm - 1:25 pm Add to favorites ",
  "Jon Hopkins Gobi Sun, April 21, 9:40 pm - 10:40 pm Gobi Sun, April 14, 9:35 pm - 10:35 pm Add to favorites ",
  "JPEGMAFIA Outdoor Theatre Fri, April 12, 5:00 pm - 5:40 pm Outdoor Theatre Fri, April 19, 5:00 pm - 5:40 pm Add to favorites ",
  "Juice WRLD Sahara Sat, April 20, 8:45 pm - 9:35 pm Sahara Sat, April 13, 8:45 pm - 9:35 pm Add to favorites ",
  "Justin Jay DoLab Sat, April 20, 5:15 pm - 6:30 pm Add to favorites ",
  "Kacey Musgraves Coachella Stage Fri, April 12, 5:50 pm - 6:40 pm Coachella Stage Fri, April 19, 5:50 pm - 6:40 pm Add to favorites ",
  "Kaytranada Mojave Sun, April 21, 10:55 pm Mojave Sun, April 14, 10:55 pm Add to favorites ",
  "Kayzo Sahara Sat, April 20, 12:05 am Sahara Sat, April 13, 12:05 am Add to favorites ",
  "Kero Kero Bonito Sonora Fri, April 19, 5:35 pm - 6:10 pm Sonora Fri, April 12, 5:35 pm - 6:10 pm Add to favorites ",
  "Khalid Coachella Stage Sun, April 21, 8:30 pm - 9:25 pm Coachella Stage Sun, April 14, 8:35 pm - 9:30 pm Add to favorites ",
  "Khruangbin Gobi Fri, April 12, 9:20 pm - 10:10 pm Gobi Fri, April 19, 9:20 pm - 10:10 pm Add to favorites ",
  "Kid Cudi Sahara Sat, April 20, 11:55 pm Sahara Sat, April 13, 11:55 pm Add to favorites ",
  "King Princess Mojave Fri, April 19, 4:10 pm - 4:55 pm Mojave Fri, April 12, 4:15 pm - 5:00 pm Add to favorites ",
  "KMLN DoLab Sun, April 21, 3:30 pm - 4:45 pm Add to favorites ",
  "Kölsch Yuma Fri, April 19, 6:45 pm - 8:15 pm Yuma Fri, April 12, 6:45 pm - 8:15 pm Add to favorites ",
  "Las Robertas Sonora Fri, April 19, 2:55 pm - 3:25 pm Sonora Fri, April 12, 2:55 pm - 3:25 pm Add to favorites ",
  "Lastlings DoLab Sat, April 20, 3:00 pm - 4:00 pm Add to favorites ",
  "Latmun DoLab Sun, April 14, 4:45 pm - 6:00 pm Add to favorites ",
  "Lauren Lane",
  "Lee Burridge Yuma Sat, April 13, 2:00 pm - 3:15 pm Yuma Sat, April 20, 2:00 pm - 3:00 pm Add to favorites ",
  "Let's Eat Grandma Gobi Fri, April 19, 2:00 pm - 2:40 pm Gobi Fri, April 12, 2:00 pm - 2:40 pm Add to favorites ",
  "Little People DoLab Fri, April 12, 1:45 pm - 3:00 pm Add to favorites ",
  "Little Simz Gobi Sat, April 13, 11:00 pm - 11:55 pm Gobi Sat, April 20, 11:00 pm - 11:55 pm Add to favorites ",
  "Lizzo Mojave Sun, April 21, 5:45 pm - 6:30 pm Mojave Sun, April 14, 5:45 pm - 6:30 pm Add to favorites ",
  "Loboman Sahara Fri, April 12, 12:25 pm - 1:25 pm Add to favorites ",
  "Loboman",
  "Los Tucanes De Tijuana Coachella Stage Fri, April 19, 3:20 pm - 4:05 pm Coachella Stage Fri, April 12, 3:20 pm - 4:05 pm Add to favorites ",
  "Lost Desert",
  "Lou Phelps DoLab Fri, April 19, 2:15 pm - 3:15 pm Add to favorites ",
  "LSDREAM DoLab Fri, April 19, 4:30 pm - 5:30 pm Add to favorites ",
  "Mac DeMarco Outdoor Theatre Sat, April 20, 5:55 pm - 6:45 pm Outdoor Theatre Sat, April 13, 5:10 pm - 6:00 pm Add to favorites ",
  "Madam X DoLab Fri, April 19, 3:15 pm - 4:30 pm Add to favorites ",
  "Maggie Rogers Gobi Sat, April 20, 7:20 pm - 8:10 pm Gobi Sat, April 13, 7:20 pm - 8:10 pm Add to favorites ",
  "Mansionair Mojave Sun, April 21, 2:25 pm - 3:05 pm Mojave Sun, April 14, 2:30 pm - 3:10 pm Add to favorites ",
  "MEMBA DoLab Sat, April 13, 2:55 pm - 3:50 pm Add to favorites ",
  "Men I Trust Sonora Sun, April 21, 4:40 pm - 5:15 pm Sonora Sun, April 14, 4:40 pm - 5:15 pm Add to favorites ",
  "Mersiv DoLab Fri, April 19, 12:15 pm - 1:15 pm Add to favorites ",
  "MODD DoLab Sun, April 21, 2:15 pm - 3:30 pm Add to favorites ",
  "Mon Laferte Coachella Stage Fri, April 19, 4:35 pm - 5:20 pm Coachella Stage Fri, April 12, 4:35 pm - 5:20 pm Add to favorites ",
  "Mr. 5y10 Sonora Sun, April 14, 12:00 pm - 1:10 pm Sonora Sun, April 21, 12:00 pm - 1:00 pm Add to favorites ",
  "Mr. Carmack DoLab Sat, April 13, 9:30 pm - 10:30 pm Add to favorites ",
  "Mr Eazi Coachella Stage Sat, April 20, 3:50 pm - 4:30 pm Coachella Stage Sat, April 13, 3:50 pm - 4:30 pm Add to favorites ",
  "Murda Beatz Sahara Sat, April 20, 3:50 pm - 4:35 pm Sahara Sat, April 13, 3:50 pm - 4:35 pm Add to favorites ",
  "Murda Child Sahara Fri, April 12, 1:30 pm - 2:15 pm Sahara Fri, April 19, 1:05 pm - 2:15 pm Add to favorites ",
  "NGHTMRE Sahara Sun, April 21, 11:00 pm Sahara Sun, April 14, 11:00 pm Add to favorites ",
  "Nic Fanciulli",
  "Nicole Moudaber Yuma Fri, April 12, 9:30 pm - 11:00 pm Yuma Fri, April 19, 9:30 pm - 11:00 pm Add to favorites ",
  "Nina Kraviz Mojave Fri, April 12, 10:30 pm - 11:30 pm Mojave Fri, April 19, 10:15 pm - 11:15 pm Add to favorites ",
  "Nocturnal Sunshine Yuma Sun, April 14, 7:00 pm - 8:30 pm Yuma Sun, April 21, 5:30 pm - 7:00 pm Add to favorites ",
  "Nora En Pure Sahara Fri, April 12, 10:55 pm - 11:45 pm Sahara Fri, April 19, 10:55 pm - 11:45 pm Add to favorites ",
  "Nostradahm Outdoor Theatre Sat, April 13, 2:50 pm - 3:20 pm Outdoor Theatre Sat, April 20, 2:05 pm - 2:35 pm Add to favorites ",
  "Ocho Ojos Sonora Sun, April 14, 7:40 pm - 8:15 pm Sonora Sun, April 21, 7:40 pm - 8:15 pm Add to favorites ",
  "Ookay Sahara Sat, April 13, 2:45 pm - 3:30 pm Sahara Sat, April 20, 2:45 pm - 3:30 pm Add to favorites ",
  "Parcels Gobi Sat, April 20, 9:45 pm - 10:30 pm Gobi Sat, April 13, 9:45 pm - 10:30 pm Add to favorites ",
  "Patrice Bäumel Yuma Sun, April 21, 2:00 pm - 3:00 pm Yuma Sun, April 14, 2:00 pm - 3:00 pm DoLab Sun, April 14, 7:30 pm - 9:00 pm Add to favorites ",
  "Patricio DoLab Sun, April 21, 1:00 pm - 2:15 pm Add to favorites ",
  "Perfume Gobi Sun, April 21, 8:25 pm - 9:15 pm Gobi Sun, April 14, 8:20 pm - 9:10 pm Add to favorites ",
  "Pete Tong DoLab Sat, April 13, 6:00 pm - 7:30 pm Add to favorites ",
  "Playboi Carti Sahara Sun, April 21, 5:45 pm - 6:35 pm Sahara Sun, April 14, 5:45 pm - 6:35 pm Add to favorites ",
  "Polo & Pan Gobi Fri, April 12, 8:00 pm - 8:50 pm Gobi Fri, April 19, 8:00 pm - 8:50 pm Add to favorites ",
  "Pusha T Coachella Stage Sun, April 21, 4:10 pm - 4:55 pm Coachella Stage Sun, April 14, 4:15 pm - 5:05 pm Add to favorites ",
  "R3LL Sahara Sun, April 14, 1:50 pm - 2:50 pm Sahara Sun, April 21, 1:50 pm - 2:50 pm Add to favorites ",
  "R3LL",
  "RAT BOY Sonora Fri, April 12, 4:35 pm - 5:10 pm Sonora Fri, April 19, 4:35 pm - 5:10 pm Add to favorites ",
  "Razorbumps Sonora Sun, April 21, 2:00 pm - 2:30 pm Sonora Sun, April 14, 2:00 pm - 2:30 pm Add to favorites ",
  "Record Safari Gobi Sun, April 14, 1:45 pm - 2:25 pm Add to favorites ",
  "Rico Nasty Mojave Sun, April 14, 3:30 pm - 4:10 pm Mojave Sun, April 21, 3:25 pm - 4:05 pm Add to favorites ",
  "Rosalía Mojave Fri, April 19, 7:45 pm - 8:35 pm Mojave Fri, April 12, 7:50 pm - 8:40 pm Add to favorites ",
  "Ross From Friends Yuma Fri, April 12, 1:45 pm - 3:00 pm Yuma Fri, April 19, 1:45 pm - 3:00 pm Add to favorites ",
  "RÜFÜS DU SOL Outdoor Theatre Fri, April 19, 8:50 pm - 9:55 pm Outdoor Theatre Fri, April 12, 8:50 pm - 9:55 pm Add to favorites ",
  "Ry X",
  "Ry X (Dj Set) b2b Eagles & Butterflies DoLab Sun, April 21, 7:30 pm - 9:00 pm Add to favorites ",
  "Sabrina Claudio Coachella Stage Sat, April 13, 4:55 pm - 5:40 pm Coachella Stage Sat, April 20, 4:55 pm - 5:40 pm Add to favorites ",
  "SALES Gobi Sat, April 20, 3:50 pm - 4:35 pm Gobi Sat, April 13, 3:50 pm - 4:35 pm Add to favorites ",
  "serpentwithfeet Mojave Sat, April 13, 2:40 pm - 3:25 pm Mojave Sat, April 20, 2:40 pm - 3:25 pm Add to favorites ",
  "SG Lewis Mojave Fri, April 12, 5:25 pm - 6:10 pm Mojave Fri, April 19, 5:20 pm - 6:05 pm Add to favorites ",
  "Shallou Sahara Sun, April 21, 3:10 pm - 4:00 pm Sahara Sun, April 14, 3:10 pm - 4:00 pm Add to favorites ",
  "Shame Sonora Sat, April 13, 3:40 pm - 4:15 pm Sonora Sat, April 20, 3:40 pm - 4:15 pm Add to favorites ",
  "Shawni DoLab Sun, April 21, 12:00 pm - 1:00 pm Add to favorites ",
  "Sheck Wes Sahara Sat, April 13, 4:45 pm - 5:40 pm Sahara Sat, April 20, 4:45 pm - 5:40 pm Add to favorites ",
  "Shlump",
  "SiR Gobi Sat, April 13, 6:10 pm - 6:55 pm Gobi Sat, April 20, 6:10 pm - 6:55 pm Add to favorites ",
  "Smino Gobi Sat, April 13, 8:35 pm - 9:20 pm Gobi Sat, April 20, 8:40 pm - 9:25 pm Add to favorites ",
  "SOB X RBE Sahara Sun, April 21, 4:20 pm - 5:20 pm Sahara Sun, April 14, 4:20 pm - 5:20 pm Add to favorites ",
  "Soccer Mommy Sonora Sun, April 21, 5:35 pm - 6:15 pm Sonora Sun, April 14, 5:35 pm - 6:15 pm Add to favorites ",
  "Social House Outdoor Theatre Sun, April 21, 3:40 pm - 4:20 pm Outdoor Theatre Sun, April 14, 3:45 pm - 4:30 pm Add to favorites ",
  "SOFI TUKKER Mojave Sun, April 14, 8:05 pm - 8:55 pm Mojave Sun, April 21, 8:05 pm - 8:55 pm Add to favorites ",
  "Sonny Fodera DoLab Sat, April 20, 8:00 pm - 9:15 pm Add to favorites ",
  "SOPHIE Mojave Fri, April 19, 9:00 pm - 9:50 pm Mojave Fri, April 12, 9:10 pm - 10:00 pm Add to favorites ",
  "Soulection Mojave Sat, April 20, 5:05 pm - 5:55 pm Mojave Sat, April 13, 5:05 pm - 5:55 pm Add to favorites ",
  "Stavroz DoLab Sun, April 14, 6:00 pm - 7:30 pm Add to favorites ",
  "Steady Holiday Gobi Sat, April 20, 2:45 pm - 3:25 pm Gobi Sat, April 13, 2:45 pm - 3:25 pm Add to favorites ",
  "Stephan Bodzin Yuma Sat, April 13, 11:00 pm Yuma Sat, April 20, 11:00 pm Add to favorites ",
  "Still Woozy Sonora Fri, April 12, 6:30 pm - 7:10 pm Sonora Fri, April 19, 6:30 pm - 7:10 pm Add to favorites ",
  "Sunday Service on Easter",
  "Superorganism Sonora Sat, April 20, 7:40 pm - 8:25 pm Sonora Sat, April 13, 7:40 pm - 8:25 pm Add to favorites ",
  "Tale Of Us Yuma Sat, April 13, 7:30 pm - 9:00 pm Yuma Sat, April 20, 7:30 pm - 9:00 pm Add to favorites ",
  "Tame Impala Coachella Stage Sat, April 13, 10:35 pm Coachella Stage Sat, April 20, 10:35 pm Add to favorites ",
  "Tara Brooks Yuma Sun, April 14, 12:00 pm - 1:00 pm Yuma Sun, April 21, 12:00 pm - 1:00 pm Add to favorites ",
  "The 1975 Coachella Stage Fri, April 19, 8:25 pm - 9:20 pm Coachella Stage Fri, April 12, 8:25 pm - 9:20 pm Add to favorites ",
  "The Floozies DoLab Fri, April 19, 7:45 pm - 9:00 pm Add to favorites ",
  "The Frights Sonora Fri, April 19, 7:30 pm - 8:10 pm Sonora Fri, April 12, 7:30 pm - 8:10 pm Add to favorites ",
  "The Funk Hunters DoLab Fri, April 12, 6:00 pm - 7:15 pm Add to favorites ",
  "The Garden Sonora Sat, April 20, 6:45 pm - 7:20 pm Sonora Sat, April 13, 6:45 pm - 7:20 pm Add to favorites ",
  "The Interrupters Outdoor Theatre Sat, April 13, 4:00 pm - 4:45 pm Outdoor Theatre Sat, April 20, 4:45 pm - 5:30 pm Add to favorites ",
  "The Messthetics Sonora Sat, April 20, 1:50 pm - 2:25 pm Sonora Sat, April 13, 1:50 pm - 2:25 pm Add to favorites ",
  "The Red Pears Sonora Sat, April 13, 1:00 pm - 1:30 pm Sonora Sat, April 20, 1:00 pm - 1:30 pm Add to favorites ",
  "Tierra Whack Mojave Fri, April 19, 6:30 pm - 7:15 pm Mojave Fri, April 12, 6:35 pm - 7:20 pm Add to favorites ",
  "Tiffany Tyson Outdoor Theatre Sun, April 14, 2:55 pm - 3:35 pm Add to favorites ",
  "Tomasa del Real Sonora Fri, April 12, 2:05 pm - 2:35 pm Sonora Fri, April 19, 2:05 pm - 2:35 pm Add to favorites ",
  "Turnover Sonora Sat, April 13, 5:50 pm - 6:25 pm Sonora Sat, April 20, 5:50 pm - 6:25 pm Add to favorites ",
  "Turnstile Sonora Fri, April 19, 3:45 pm - 4:15 pm Sonora Fri, April 12, 3:45 pm - 4:15 pm Add to favorites ",
  "Ty Segall & White Fence Outdoor Theatre Sat, April 20, 3:30 pm - 4:20 pm Outdoor Theatre Sat, April 13, 2:45 pm - 3:35 pm Add to favorites ",
  "Unknown Mortal Orchestra Outdoor Theatre Sun, April 14, 4:55 pm - 5:45 pm Outdoor Theatre Sun, April 21, 4:55 pm - 5:35 pm Add to favorites ",
  "U.S. Girls Sonora Fri, April 12, 8:35 pm - 9:10 pm Sonora Fri, April 19, 8:35 pm - 9:10 pm Add to favorites ",
  "Vickki Acuna Mojave Fri, April 12, 2:00 pm - 2:40 pm Add to favorites ",
  "Virgil Abloh Mojave Sat, April 20, 6:20 pm - 7:10 pm Mojave Sat, April 13, 6:20 pm - 7:10 pm Add to favorites ",
  "VNSSA DoLab Sun, April 14, 1:00 pm - 2:15 pm Add to favorites ",
  "Walker & Royce Yuma Fri, April 12, 3:00 pm - 4:15 pm Yuma Fri, April 19, 3:00 pm - 4:15 pm Add to favorites ",
  "Wallows Mojave Sat, April 13, 1:30 pm - 2:15 pm Mojave Sat, April 20, 1:30 pm - 2:15 pm Add to favorites ",
  "Weezer Coachella Stage Sat, April 13, 8:35 pm - 9:35 pm Coachella Stage Sat, April 20, 8:35 pm - 9:35 pm Add to favorites ",
  "Wiz Khalifa Sahara Sat, April 13, 10:05 pm - 10:55 pm Sahara Sat, April 20, 10:05 pm - 10:55 pm Add to favorites ",
  "Yellow Days Mojave Fri, April 12, 3:05 pm - 3:50 pm Mojave Fri, April 19, 3:00 pm - 3:45 pm Add to favorites ",
  "Yeti Out Mojave Sat, April 13, 12:00 pm - 12:30 pm Add to favorites ",
  "YG Sahara Sun, April 21, 7:00 pm - 7:50 pm Sahara Sun, April 14, 7:00 pm - 7:50 pm Add to favorites ",
  "Yotto Yuma Sun, April 14, 3:00 pm - 4:15 pm Yuma Sun, April 21, 3:00 pm - 4:15 pm Add to favorites ",
  "Yung Bae DoLab Sat, April 13, 4:00 pm - 5:00 pm Add to favorites ",
  "Yves Tumor Gobi Sat, April 20, 12:00 am - 12:50 am Gobi Sat, April 13, 12:00 am - 12:50 am Add to favorites ",
  "Z Coachella",
  "Zedd Coachella Stage Sun, April 14, 7:10 pm - 8:05 pm Coachella Stage Sun, April 21, 7:05 pm - 8:00 pm Add to favorites "
]

artists = artists.filter(artist => artist.split(',').length > 1);

const stages = [
  'Coachella',
  'Outdoor',
  'Gobi',
  'Mojave',
  'Sahara',
  'Sonora',
  'Yuma',
  'DoLab'
];

axios
  .get('http://localhost:5000/api/festivals/search?name=Coachella&year=2020')
  .then(coachella => {
    const coachellaId = coachella.data._id;

    artists.forEach(artist => {
      const artistArr = artist.split(', ');
      let artistNameArr = artistArr[0].split(' ')
      let splitIdx;

      for (let i = 0; i < stages.length; i++) {
        const stageIdx = artistNameArr.indexOf(stages[i])
        if (stageIdx !== -1) {
          splitIdx = stageIdx;
          break;
        }
      }

      const name = artistNameArr.slice(0, splitIdx).join(' ')
      console.log(`Adding ${name}`);

      const day = parseInt(artistArr[1].split(' ')[1]);
      const [start, end] = calcTimes(day, artistArr[2]);

      let stage = artistNameArr[artistNameArr.length - 2];
      if (stage === 'Theatre') {
        stage = 'Outdoor Theatre'
      } else if (stage === 'Stage') {
        stage = 'Coachella Stage'
      } else if (stage === 'DoLab') {
        return;
      }

      const params = {
        start,
        end,
        stage,
        artist: name
      }

      console.log("Here's the params \n", params);
      // axios
      //   .post(`http://localhost:5000/api/festivals/${coachellaId}/sets`, params)
      //   .catch(err => console.log(err))
      Promise.resolve(
        axios.post(`http://localhost:5000/api/artists`, { name }).then(artist => {
          params.artist = artist.data._id
          console.log("Here's the params \n", params);
          axios.post(`http://localhost:5000/api/festivals/${coachellaId}/sets`, params)
            .catch(err => console.log(err))
        }).catch(err => console.log(err))
      );
    })
  })
  .catch(err => console.log(err));

function calcTimes(day, timeStr) {
  let [startTime, endTime] = timeStr
    .split(' - ')
    .map(str => str.split(' ').slice(0, 2));

  let endDay = day;
  let startHour = parseInt(startTime[0].split(':')[0]);
  let endHour = endTime ? parseInt(endTime[0].split(':')[0]) : 0;

  let startMinutes = startTime[0].split(':')[1];
  let endMinutes = endTime ? endTime[0].split(':')[1] : 0;

  if (startTime[1] === 'pm' && startHour !== 12) startHour += 12;
  if (endTime && (endTime[1] === 'pm' && endHour !== 12)) endHour += 12;
  startHour -= 1;
  endHour -= 1;

  if (startHour > 23) {
    startHour %= 24;
    day += 1;
  }

  if (endHour > 23) {
    endHour %= 24;
    endDay += 1;
  }

  // Accounting for sets that start or end between 12am and 1am
  if (startTime[1] === 'am' && startHour === 11) startHour = 23;
  if (endTime && (endTime[1] === 'am' && endHour === 11)) endHour = 23;

  // Sets that start before 12am but end between 12am and 1am
  if (endHour === 23 && startHour !== 23) endDay += 1;

  let startTimeStr = startHour + ':' + startMinutes;
  let endTimeStr = endHour + ':' + endMinutes;
  if (startHour < 10) startTimeStr = '0' + startTimeStr;
  if (endHour < 10) endTimeStr = '0' + endTimeStr;
  // there is no end time if `times` is of length 2
  if (!endTime) endTimeStr = '00:00';

  const start = `2019-04-${day} ${startTimeStr}-08:00`;
  const end = `2019-04-${endDay} ${endTimeStr}-08:00`;
  return [start, end];
}