import React,{useState} from 'react'

export default function About() {

  const [darkMode, setMode] = useState({
    color : 'black',
    backgroundColor: 'white'
})
  const [btnText, changeBtnText] = useState("Enable Dark Mode")

const changeStyle = () =>{
  if(darkMode.color==='white'){
    setMode({
      color:'black',
      backgroundColor:'white'
    })
    changeBtnText("Enable dark mode")
  }
  else{
    setMode({
      color:'white',
      backgroundColor:'black'
    })
    changeBtnText("Enable light mode")
  }
}
  return (
    <>
    <div className='container' style={darkMode}>
        <h1 className='my3'>About Us</h1> 
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={darkMode} >
                <h2 className="accordion-header" style={darkMode} id="headingOne">
                <button className="accordion-button" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" style={darkMode} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={darkMode} >
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
  <div className="accordion-item"style={darkMode} >
    <h2 className="accordion-header" style={darkMode} id="headingTwo">
      <button className="accordion-button collapsed" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={darkMode} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={darkMode} >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={darkMode} >
    <h2 className="accordion-header" style={darkMode} id="headingThree">
      <button className="accordion-button collapsed" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" style={darkMode} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={darkMode} >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
   

    </div>
    </>
  )
}
