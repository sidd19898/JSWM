import "../components/NavLan.css"

export function Nav({children1,children2,children3,children4,children5}){
    return(
        <div className="Nav">
            <div className="title">{children1}</div>
            <div className="feat">
            <div>{children2}</div>
            <div>{children3}</div>
            <div>{children4}</div>
            <div><button className="polo">{children5}</button></div>
            </div>
            <div className="hamburgur">
                <button className="bu">hi</button>
            </div>
        </div>

    )
}