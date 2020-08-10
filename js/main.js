var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'imge/about.jpg'){
		myImage.setAttribute ('src','imge/gambar4.jpg');
	}else{
		myImage.setAttribute ('src','imge/about.jpg');
	}
}

