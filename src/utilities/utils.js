const dataPath =  '../data/data.csv';
const data = [];
const getJSONdata =  async () => {
  console.log('Getting csv data and converting to JSON', data);
  try{
    console.log(data);
    return data;
  }
  catch(error) {
    console.error(error);
    return error;
  }
}

export {getJSONdata};