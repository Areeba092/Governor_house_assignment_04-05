
import Footer from "../responsive/footer"
import Header from "../responsive/header"
export default function About(){
    return(
        <div>
            <Header/>
            <div className="about-container">
                <div className="about-left"><h1 className="main-heading">Founder of Ayree Fast Food</h1>
                <p><span className="sheikh">Areeba Sheikh</span> is the founder of Ayree Fast Food.
                    Areeba  is also a Web Developer an intermediate-level student at GIAIC,
                     actively developing my skills in HTML, CSS, Artificial Intelligence, Web3, 
                     and the Metaverse. I am passionate about learning emerin technologies and exploring
                     innovative opportunities in the teach field</p>
                </div>
            
            <img className="profile" src="https://womenlovetech.com/wp-content/uploads/2021/04/Female-Programmer-Resized.jpg" alt="image" />
            </div>
            <div className="down">
        <h1 className="about-heading">About Ayree Fast Food</h1>
        <p className="about-description">At Ayree Fast Food, we are passionate about delivering fast, fresh, and delicious meals to satisfy your cravings. Whether you're in the mood for juicy burgers, crispy fries, or a refreshing beverage, we’ve got something for everyone.

Founded in 2022, Ayree started with a simple mission: to provide quick and convenient meals without compromising on taste or quality. We take pride in using the freshest ingredients to craft a variety of mouth-watering dishes that are both affordable and satisfying.

Our Promise:
Quality Ingredients: We source only the best ingredients to ensure every bite is bursting with flavor.
Fast Service: No matter how busy your day is, our efficient service ensures you get your meal fast.
Customer Satisfaction: Your happiness is our priority. We’re committed to making sure you leave with a smile.
Visit Ayree Fast Food today and experience fast food done right!</p>
</div>
<Footer/>
        </div>
    )
}
