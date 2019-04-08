import { storage } from './firebase';

let i = 1;
let str = storage.ref();
let vall = 'https://firebasestorage.googleapis.com/v0/b/'+ str.bucket + '/o/songs%2F'+ i + '.mp3?alt=media&uuid=' + str.authWrapper.requestMap_.id_ ;
console.log(str.authWrapper.requestMap_.id_);
console.log(str);	
export const GetSongs = () =>
	console.log(str.bucket)

export {
	str
    }
