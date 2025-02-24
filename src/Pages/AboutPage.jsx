import AboutCartComponent from "../components/about/aboutCartComponent";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import { aboutData } from "../components/constant";

export default function AboutPage() {
  return (
    <div>
      <AboutBanner/>
      <div className="about-container">
        <h1>Welcome to Africa Wizzy Safari</h1>
        <div className="line"></div>
        {
          aboutData.map(item=>{
            return(<AboutCartComponent key={item.src} item={item}/>)
          })
        }
      </div>
    </div>
  )
}