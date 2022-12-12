let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;
    
   
   
    function nextImage(){
        if(images!=null){
        images[currentImageIndex].classList.remove("selected");

        currentImageIndex++;

        if(currentImageIndex >= max)
        currentImageIndex = 0;

        images[currentImageIndex].classList.add("selected");
        
        }
    }


    function start(){
        setInterval(() => {
         nextImage() 
        }, time)
    }

    window.addEventListener("load", start);


   