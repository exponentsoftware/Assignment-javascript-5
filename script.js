fetch('https://restcountries.com/v3/all').then((data)=>{
  return data.json();
}).then((ObjectData)=>{
  console.log(ObjectData)
})