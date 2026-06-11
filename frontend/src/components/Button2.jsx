import "./allinone.css"

export function Button2({children1,onclick}){
    
    return(
        <div>
            <button className="button2" onClick={onclick}>{children1}</button>
        </div>
    )
}