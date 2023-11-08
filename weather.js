//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
days = {
1:'MONDAY',
2:'TUESDAY',
3:'WEDNESDAY',
4:'THURSDAY',
5:'FRIDAY',
6:'SATURDAY',
7:'SUNDAY'
}
months = {
  1:'JANUARY',
  2:'FEBRUARY',
  3:'MARCH',
  4:'APRIL',
  5:'MAY',
  6:'JUNE',
  7:'JULY',
  8:'AUGUST',
  9:'SEPTEMBER',
  10:'OCTOBER',
  11:'NOVEMBER',
  12:'DECEMBER'

}


fetch('https://api.openweathermap.org/data/2.5/weather?q=florida,us&APPID=1342f8dd595eda677ca40143519800de')
.then(data => data.json())
.then(parsedData => {

  console.log(parsedData);


  const entercity = parsedData.name;
  document.getElementsByClassName('city')[0].textContent= entercity;

  const enterdate = new Date(parsedData.dt*1000);
  document.getElementsByClassName('date')[0].textContent = days[enterdate.getDay()]+", "+enterdate.getDate()+' '+ months[enterdate.getMonth()]+', '+enterdate.getFullYear();
  // enterdate.getDay() + '' +
  // enterdate.getDate() + ''
  // enterdate.getMonth() + '' +
  // enterdate.getFullyear(); 

  const temp1 = parsedData.main.temp;
  document.getElementsByClassName('t1')[0].textContent = `${Math.round(temp1-273)}\xba C`;

  const weath = parsedData.weather;
  document.getElementsByClassName('weather')[0].textContent = weath[0].description

  const mn = parsedData.main.temp_min;
  document.getElementsByClassName('min')[0].textContent = Math.round(mn-273)+'\xba C';

  const mx = parsedData.main.temp_max;
  document.getElementsByClassName('max')[0].textContent = Math.round(mx-273)+'\xba C';



})


