import "../components/allinone.css"

export function Reminder({children1,children2}) {
  return (
    <div className="dosj">
<div className="remindar">
      {children1}
      </div>
      <div className="numbers">
      {children2}
      </div>
    </div>
    
  )
}
