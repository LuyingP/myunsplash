import {createApi} from "unsplash-js";
import {MY_ACCESS_KEY} from "../config"
import fetch from 'node-fetch';
if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}
const unsplash = createApi({ accessKey: MY_ACCESS_KEY});


const searchPh=unsplash.photos.getRandom({
    count:20 
})
.then(data => {
    if (data.errors) {
      // handle error here
      console.log('error occurred: ', data.errors[0]);
    } else {
      // handle success here
      const result = data.response;
      let images:string[]=[];
      for(let image of result){
          images.push(image.urls);
         
      }
    
      // according to the photos' data structure
      return images;
    }
  });




export{searchPh} ;

