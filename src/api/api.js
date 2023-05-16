const fetchFoto = async (text)=>{
   const data = await fetch(`https://pixabay.com/api/?q=${text}&page=1&key=35097057-211b94425911255e7a1c05e6d&image_type=photo&orientation=horizontal&per_page=12`)
        // .then(res=> res.json())
        return await data.json();
}

export default fetchFoto;