import { user } from "./data"
import Link from "./Link"

function Card() {
    const {img , name, job , location , links} = user;
  return (
    <div className="card">
    <div className="card-content">
    <img src={img} alt={name} />
    <h1>{name}</h1>
    <h2>{location}</h2>
    <p>{job}</p>
    <ul className="list-items" >

    {links.map((link) => {
            const {id, name, url} = link;
            return<Link key={link.id} name={name} url={url} />;
        })}
    </ul>
    
    </div>    
    </div>
  )
}
export default Card;