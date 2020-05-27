const topText = document.querySelector('#topText')
const bottomText = document.querySelector('#bottomText')  
const memeStorage = document.querySelector('.memeStorage')
const form = document.querySelector('#memeGenerator');



form.addEventListener('submit', function(e){
    e.preventDefault(); 
  
    // The following selects the url input, adds a .png file name to be readable, then sets it as the source for our image that we create. 
    const val = document.getElementById('url').value,
         src = val +'.png',
         img = document.createElement('img');
        img.src = src;
    //creating the elements in which all of this fits
    let memeDiv = document.createElement('div');
    let top = document.createElement('h3');
    let bottom = document.createElement('h3');
 
    //below  is the text, and how I manipulated the inputs into something readable on the picture
    top.innerText = topText.value;
    bottom.innerText = bottomText.value;
    // setting the classes allows for the manipulation of positioning. 
    top.className = 'top';
    bottom.className = 'bottom';
    img.className = 'image'
    memeDiv.className = 'memeDiv';
    memeDiv.width = img.width;
    memeDiv.height= img.height;
    // after setting the div to the image size, then further manipulation based on picture.





    memeDiv.append(top);
    memeDiv.append(bottom);
    memeDiv.append(img); //image to created div
  
    memeStorage.appendChild(memeDiv);// created div is finally attached to the overall meme storage div
    
})