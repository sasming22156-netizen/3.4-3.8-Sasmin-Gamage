/* Javascript and the code for the modal */
document.querySelectorAll('.card img').forEach(image =>{
	image.onclick = () =>{
	    document.querySelector('.pop_up_image').style.display = 'block';
	    document.querySelector('.pop_up_image img').src = image.getAttribute('src');
        document.querySelector('.pop_up_image img').alt = image.getAttribute('alt');
		document.querySelector('.pop_up_image img').title = image.getAttribute('title');
	}
})               
document.querySelector('.pop_up_image span').onclick = () =>{
document.querySelector('.pop_up_image').style.display = 'none';
}