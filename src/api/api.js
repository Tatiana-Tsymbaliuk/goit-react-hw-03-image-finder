const fetchFoto = async (nameSearch, currentPage)=>{
   const data = await fetch(`https://pixabay.com/api/?q=${nameSearch}&page=${currentPage}&key=35097057-211b94425911255e7a1c05e6d&image_type=photo&orientation=horizontal&per_page=12`)
        return data.json();
}

export default fetchFoto;