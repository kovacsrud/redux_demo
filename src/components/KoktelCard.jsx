

function KoktelCard({koktel}) {
    const koktelKep = koktel.strDrinkThumb + "/small";
  return (
    <div>
<ul className="list bg-base-100 rounded-box shadow-md">
  <li className="list-row">
    <div>
        <img className="size-10 rounded-box" src={koktelKep}/>
    </div>
    <div>
      <div>{koktel.strDrink}</div>
    </div>
  </li>
  
  <li className="list-row"></li>
</ul>
    </div>
  )
}

export default KoktelCard