import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/being-visionary.jpg'
import pic02 from '../images/book-call.jpg'
import pic03 from '../images/visionary-coach.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'creativity' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Being Visionary</h2>
          <span className="image main">

            <img src={pic01} alt="Being Visionary" />

          </span>
          <p> <button type="button" data-webinarHash="n7438f7" >
            Register now</button></p>
          <p>
            Creativity is code for freedom; emancipation to move without restraint or authority. Creativity 
            as a word has become bastardized, misunderstood. It's a key component to standing out rather than 
            fitting in. It's not just for artists as most might say. Real creativity produces something new
            which contributes to people, culture, and our economy. It requires a kind of courage that is rare 
            these days because people are hungry for validation in order to survive; however, this path guarantees 
            frustration and fatigue for any leader.
            
            Our technological landscape today 
            infects us, blurs our sense of value in what we offer to the world leaving us confronted, stopped by the fear 
            of failure, rejection; and ultimately being ignored after all our efforts.
          </p>
          <p>
            We've put together a Creativity Masterclass to address these common issues. It's a 2 hour experience, diving 
            into the true nature of creativity, freedom, and rebellion. The art of inspiration is taught so that 
            you may tap into your inner genius at any time, every day. The important topic of culture and economy is addressed to 
            set you up with clarity and confidence; there's real power in understanding these topics. It's the difference 
            between being the product of your environment or not. Being visionary is the difference that creates your environment.
          </p>
          <p>We will work on your vision statements, develop community structures to attract the right help and clients, plus there's
            an opportunity to contribute or collaborate with other people of different backgrounds taking the course. 1:1 coaching 
            will be available to support you in further developing the skills offered during the masterclass.
          </p>
          
         
          {close}
        </article>

        <article
          id="learn-more"
          className={`${this.props.article === 'learn-more' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Learn More</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          
          <h3>Does this sound like you?</h3>
          <p>
          You have a great idea but you're afraid someone will steal it before you can launch it yourself? Or, maybe there
          are many others ideas out there like yours which leaves you in a vicious cycle of doubt and pessimism.
          
          <br/>
          <br/>
          Are you starting a business or project and struggling to make it all happen on your own? Leaving you exhausted,
          frustrated about your results.

          
          <br/>
          <br/>
          Have you already spent a considerable amount of money and time on your project without any sales or new customers?
          
          <br/>
          <br/>
          Does the fear of failure stop you in your tracks? What would it be like to have scientific research to 
          prove your anxiety wrong? And an amazing coach who has your back!?
          <br/>
          <br/>
          </p>

          <p>
          Starting a business or transforming one is a lot of work. It's often risky. 
          The path is filled with challenges and questions without clear answers. 
          </p>

          <h3>Hand of Gravity Coaching specializes in providing world class support around these issues and more.</h3>
          <p>We are not your run of the mill coaching company. We utilize state of the art product development
            strategies coupled with powerful mindset coaching for leaders who are committed to shake up their industries.
            We are not interested in simply partnering with a bunch of people in starting companies. Anyone can start a 
            business with the resources available today.
          </p>

          <p>What makes Hand Of Gravity different is that we develop people to be visionaries in their field!</p>
          <p>Because we want people like you to change the world we are offering a taste of our program and sharing how we do it.</p>
          <p>Discover how we deliver on our promise by booking a free 45 min envisioning call:</p>
          <a className="calendly" href="https://calendly.com/handofgravity/" target="_blank" type="button">Learn More</a>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
           Hi, I'm Jason Faulkner. Visionary coach, entrepreneur, and artist.
           <br/>
           <br/>
           My background is in web design and development, I worked as digital art director in advertising here in New York City for over 5 years.
           The world of coaching called to me as I embarked on pursuing my own startup projects. My success is in my many 
           failures to get things off the ground. You might say, I tested every poison as a doctor of business, which means
           I can easily diagnose issues that others grapple with. I also studied product development which I apply in my practice today.
           You can expect more than peak feelings by working with me, I'm results driven and have the structures ready to help you fulfill
           on what's important to your work.
           <br/>
           <br/>
           For the past 4 years, I've coached entrepreneurs, writers, musicians, artists, to start their own 
           businesses or breakthgouh in their existing projects.
           <br />
           <br />
           My commitment is being an extraordinary contribution to others, leaving YOU present to YOUR own greatness.
           
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Please describe your project</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <div className="field">
              <label htmlFor="project">What do you want to accomplish?</label>
              <textarea name="project" id="project" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/handofgravity" target="_blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/handofgravity" target="_blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCcTLuqDZEWvmWsnivvzOnfw" target="_blank"
                className="icon fa-youtube"
              >
                <span className="label">Youtube</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
