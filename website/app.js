/* Global Variables */
// Setup empty JS object
const data = {};

// Elements of the API Key
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'ee3675cc91d9e09ba9abc819e6ea6d97';
const apiBridge = '&units=metric&APPID=';
let zip = document.getElementById('zip');

// HTML form ids
 let feelings = document.getElementById('feelings');
 let content = document.getElementById('content');

// Date convert
let d = new Date();
let theDate = d.getMonth()+1+'/'+ d.getDate()+'/'+ d.getFullYear();

// Event handling
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  const newZip =  document.getElementById('zip').value;
  getWeather(baseURL, newZip, apiBridge, apiKey);
  updateUI();
}

// Async GET request function, API call, returning an json-object
const getWeather = async (baseURL, newZip, apiBridge, apiKey)=>{
  const endpoint = baseURL + newZip + apiBridge + apiKey;
  const res = await fetch(endpoint);
  try {
    const data = await res.json();
    return data;
  }  catch(error) {
      console.log('error', error);
  }
}

// Read temperature from API json file
const getTemp = async () => {
  const zip = document.getElementById('zip').value;
  const endpoint = baseURL + zip + apiBridge + apiKey;
  try {
    const res = await fetch(endpoint);
    if(res.ok) {
      const jsonResponse = await res.json();
      return jsonResponse.main.temp;
    }
  } catch(error) {
    console.log('error', error);
  }
}

//Async POST function to store data in the app
const postData = async function ( url = '',data = {}) {
  const res = await fetch (url, {
      method:'POST',
      credentials:'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });
  try {
      const newData = res.json();
      return newData;
  }catch (error){
      console.log('error', error);
  };
};

/* Async function to update UI entry holder*/
const updateUI = async () => {
  const request = await fetch ('/all');
  try{
      data.date = theDate;
      data.feelings = feelings.value;
      data.temp = await getTemp();
      date.innerHTML = 'Today is ' + data.date;
      temp.innerHTML = 'The temperature is '+ data.temp + '&deg;C';
      content.innerHTML = 'and I feel ' + data.feelings;
    
      document.getElementById('zip').value = "";
      document.getElementById('feelings').value = "";
  } catch (error){
      console.log('error', error);
  }
}