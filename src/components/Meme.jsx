import React from "react"


export default function Meme() {





    



    const [meme, setMeme] = React.useState({topText: '', bottomText:'',randomImage:'', color:''})
    const [data,setData] = React.useState([])
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setData(data.data.memes))
    }, [])
    function handleChange(e) {
        setMeme(prevMeme => ({...prevMeme, [e.target.name]: e.target.value}))
    }

    function getMemeImage() {
           
            const memesArray = data
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            setMeme( prevMeme => ({...prevMeme, randomImage:memesArray[randomNumber]}))
            
    }
    
   return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    id="top-text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bot text"
                    className="form--input"
                    id="bottom-text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <input 
                type="color"
                className="form-input color-input"
                name="color"
                value={meme.color}
                onChange={handleChange}/>
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                
                    {meme.randomImage && 
                    <div className="meme">
                         <img className="meme-img"  src={meme.randomImage.url} />
                         <h3 className="top-text" style={{color:`${meme.color}`}}>{meme.topText}</h3>
                         <h3 className="bottom-text" style={{color:`${meme.color}`}}>{meme.bottomText}</h3>
                    </div>}
               
            </div>
        </main>
    )
}
