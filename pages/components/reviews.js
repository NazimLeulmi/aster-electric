import styles from "../styles/reviews.module.css"
import Slider from "react-slick"

const ross = `My wife and I recently moved in to our new home in Sidney.
There were a number of changes and upgrades to the electrical system that we 
wanted.I'm not sure  how I learned about Aster Electric, but I sure am glad that
I did.  Mazin did an outstanding job - his work was excellent, he was always on 
time, his prices are very competitive, and he was very good at explaining what he
was doing.  He is very polite and engaging, and a pleasure to have in our home.
Part of moving in to a new community is finding people you can trust, and Mazin
is our go-to electrician now.  I wouldn't hesitate to recommend Mazin and Aster Electric.
`
const lisa = `
Wow! This electrician is awesome! I had a two fold issue: I needed a ceiling 
light to be installed as well as a baseboard heater. All in all I am very 
satisfied with the work that he completed. We are also very grateful that he 
was willing to travel out to our home located in the Gulf Islands. This company 
has a customer for life.
`
const chris = `
Mazin came within a couple hours of calling him. Great work and fairly priced.
Graciously walked me through how things worked when I asked. Will be the first 
place I call when we have more work to do.
`
class Reviews extends React.Component {
  state = {
    reviews: [
      { from: "Chris Benninger", img: "/ChrisBenninger.png", text: chris },
      { from: "Lisa Joe", img: "/LisaJoe.png", text: lisa },
      { from: "Ross Johnson", img: "/RossJohnson.png", text: ross },
    ]
    ,
    counter: 0,
    sliderSettings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      fade: true
    }
  }
  render() {
    const { reviews, counter, sliderSettings } = this.state;
    return (
      <div className={styles.container} >
        <h2 className={styles.header} style={{ textAlign: "center" }}>
          Customer Reviews
         </h2>
        <Slider {...sliderSettings} >
          {reviews.map((review) => {
            return (
              <div className={styles.slide} key={review.text}>
                <img src={review.img} className={styles.avatar} />
                <h3 className={styles.from}>{review.from}</h3>
                <h4 className={styles.rating}>5/5</h4>
                <div className={styles.stars}>
                  <img src="/star.png" width="20" style={{ margin: 3 }} />
                  <img src="/star.png" width="20" style={{ margin: 3 }} />
                  <img src="/star.png" width="20" style={{ margin: 3 }} />
                  <img src="/star.png" width="20" style={{ margin: 3 }} />
                  <img src="/star.png" width="20" style={{ margin: 3 }} />
                </div>
                <p className={styles.text}>{review.text}</p>
              </div>
            )
          })}
        </Slider>
        <a className={styles.link} href="google.com">
          Write a review
        </a>
      </ div>
    );
  }
}

export default Reviews


