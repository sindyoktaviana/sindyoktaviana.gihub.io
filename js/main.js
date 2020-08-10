var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'imge/about.JPG'){
		myImage.setAttribute ('src','imge/gambar4.JPG');
	}else{
		myImage.setAttribute ('src','imge/about.JPG');
	}
}

