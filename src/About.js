import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='body'>
      <div className="hero text-center p-4 m-4 intro">
        <h2 style={{color:"black"}}>About Us</h2>
        DishTopTen is your ultimate destination to discover and indulge in top-notch recipes. Our platform curates the finest culinary delights, providing you with a delightful cooking experience. Explore, cook, and relish your favorite dishes with DishTopTen.
      </div>
      <div className="blocks">

        <div class="col" width="50%">
          <div class="card shadow-sm me-4" width="45%" style={{backgroundImage:`url("https://t4.ftcdn.net/jpg/05/93/43/71/360_F_593437102_utezkjVgHO0wA4TJ9DgGiPpt0C3kWh25.jpg")`}}>
            <h2 style={{color:"#8f8f8f"}}>Why it is ?</h2>
            <div class="card-body">
              <p class="card-text">DishTopTen was born out of a passion for food and a desire to simplify the recipe search process. We understand the joy of cooking and believe that everyone should have access to easy-to-find, high-quality recipes that inspire creativity in the kitchen.The key feature is that it gives you the top 10 results found across the globe.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-body-secondary">Updated a week ago</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm me-4" width="45%" style={{backgroundImage:`url("https://t4.ftcdn.net/jpg/05/93/43/71/360_F_593437102_utezkjVgHO0wA4TJ9DgGiPpt0C3kWh25.jpg")`}}>
          <h2 style={{color:"#8f8f8f"}}>Technologies Used</h2>
            <div class="card-body">
              <p class="card-text">It blends HTML, CSS, & JavaScript with React for dynamic interfaces, complemented by Bootstrap. Express, Node.js and APIs Integration provide robust backend functionality, while React Router DOM ensures seamless navigation. With a commitment to quality, we monitor performance using Web Vitals and maintain code standards with ESLint.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                {/* <small class="text-body-secondary">Updated 2 days ago</small> */}
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="blocks">
        <div class="col ">
          <div class="card shadow-sm me-4" width="45%" style={{backgroundImage:`url("https://t4.ftcdn.net/jpg/05/93/43/71/360_F_593437102_utezkjVgHO0wA4TJ9DgGiPpt0C3kWh25.jpg")`}}>
          <h2 style={{color:"#8f8f8f"}}>Further Roadmap </h2>
            <div class="card-body">
              <p class="card-text">In our future roadmap, we envision expanding DishTopTen to cater to diverse preferences. Expect dedicated sections like Indian, Mexican, Arabian cuisines & more, offering curated recipe collections tailored to each category. Explore a rich tapestry of flavors and traditions as we continue to evolve, providing users with an immersive culinary journey. Stay tuned for updates as we enrich our platform with new categories & delightful experiences</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm me-4" width="45%" style={{backgroundImage:`url("https://t4.ftcdn.net/jpg/05/93/43/71/360_F_593437102_utezkjVgHO0wA4TJ9DgGiPpt0C3kWh25.jpg")`}}>
          <h2 style={{color:"#8f8f8f"}}>Get in Touch</h2>
            <div class="card-body">
              <p class="card-text">Got something to share? We're all ears! Whether it's questions, feedback, or ideas, your input drives DishTopTen forward. Drop us a line at <a href="mailto:thenameiskunal007@gmail.com"  >E-Mail</a> or connect with us through <a href="https://in.linkedin.com/in/kunal-rajput-616178275"  >LinkedIn</a> or <a href="https://github.com/Kunal-Rajp00t">GitHub</a>. Let's work together to make DishTopTen even better. Your engagement fuels our passion for innovation!</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About
