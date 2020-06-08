import csvtojson from 'csvtojson';
import data from '../data/data.csv';

const getJSONData =  async () => {
  console.log('Getting csv data and converting to JSON');
  try{
    console.log(data);
    return data;
  }
  catch(error) {
    console.error(error);
    return error;
  }
}

export {getJSONData};