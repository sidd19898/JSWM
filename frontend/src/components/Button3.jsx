import "./allinone.css"

export function Button3({children1,onclick}){
    
    return(
        <div>
            <button className="button3" onClick={onclick}>{children1}</button>
        </div>
    )
}

