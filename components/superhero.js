import React from 'react'

const Character = () => {

    const handleClick = (e) => {
        e.currentTarget.classList.toggle('active__super');
    }
  return (
    <>
        <div className="container__mod5">
            <div className="box">
                <div className="img__box" onClick={handleClick}>
                    <img src="https://wallpaperaccess.com/full/13871.jpg" />
                </div>
            </div>
            <div className="box">
                <div className="img__box" onClick={handleClick}>
                    <img src="https://wallpaperaccess.com/full/323472.jpg" />
                </div>
            </div>
            <div className="box">
                <div className="img__box" onClick={handleClick}>
                    <img src="https://wallpaperaccess.com/full/1307302.jpg" />
                </div>
            </div>
            <div className="box">
                <div className="img__box" onClick={handleClick}>
                    <img src="https://wallpaperaccess.com/full/408920.png" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Character