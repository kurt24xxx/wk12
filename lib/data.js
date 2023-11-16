/*import fs from 'fs';
import path from 'path'; */
import got from 'got';

const dataURL = "https://dev-kurtcs55x.pantheonsite.io/wp-json/twentytwentytwo-child/v1/latest-posts/1";

export async function getAllIds() {

  let jsonString; 
  try { 
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) { 
    jsonString.body = [];
    console.log(error);
  } }
  
  
  
  
  
  /*const filePath = path.join(dataDir, 'persons.json');

  const jasonString = fs.readFileSync( filePath, 'utf8');*/

  const jsonObj = JSON.parse(jsonString.body);

  return jsonObj.map(item => { 
  return { 
    params: { 
      id: item.ID.toString() } } } );

  /* jsonObj.sort(
    function(a,b) {
      return a.name.localeCompare(b.name);
      
    }
  );

  return jsonObj.map(
    function(item) {
return {
  id: item.id.toString(),
  name: item.name
};
      
    }
  );
} */

export async function gotSortedList() { 
  let jsonString; 
  try {
  jsonString = await got(dataURL); }
  catch(error) { jsonString.body = []; }

  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.sort( function ( a, b) {
      return a.post_title.localeCompare(b.post_title); 
    } );

  return jsonObj.map(item => {
   
return {
  id: item.ID.toString(),
  name: item.post_title
 } 
} );
 }



  /*const filePath = path.join(dataDir, 'persons.json');

  const jasonString = fs.readFileSync( filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString.body);

  return jsonObj.map(
    function(item) {
return {
  params: {
    id: item.id.toString()
  }
};
    }
    );
} */

export async function getData(idRequested) {
  let jsonString; 
  try {
    jsonString = await got(dataURL); }
     catch(error) { jsonString.body = []; }
    
    

  /*const filePath = path.join(dataDir, 'persons.json');

  const jasonString = fs.readFileSync( filePath, 'utf8'); */

  const jsonObj = JSON.parse(jsonString.body);

  const objMatch = jsonObj.filter(obj =>  { return obj.ID.toString() === idRequested; } );

  let objReturned;
  if (objMatch.length > 0) { objReturned = objMatch[0]; } 
  
  else { objReturned = {}; }

  return objReturned; }
  