import React, {useContext} from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

function Main() {

  const {onSent, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>CatBot</p>
            <img src="https://placecats.com/300/300" alt="" />
        </div>
        <div className="main-container">

            { !showResult
            ? <>
            <div className="greet">
                <p><span>Hello Cat</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Make a plan for a cat to dominate the world</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Do android cats dream electric mouses?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>How to steal the meat from the shelf? </p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>Plz</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
            </div>
            </>
            : <div className="result">
                <div className="result-title">
                    <img src="https://placecats.com/300/300" alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <p >{resultData}</p>
                    <img src={assets.gemini_icon} alt="" />
                </div>
            </div>
            }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input}  type="text" placeholder="Enter a prompt here"/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main