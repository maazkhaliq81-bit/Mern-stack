import ImageKit from 'imagekit';


var imagekit = ImageKit({
    publicKey : process.env.KIT_PRUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpiont : process.env.IMAGEKIT_URL_ENDPIONT
});

export default imagekit; 


