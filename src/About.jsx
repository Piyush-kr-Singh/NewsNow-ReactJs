import React, { Component } from 'react';


export class About extends Component {

    myStyle = (backgroundColor, textColor) => {
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = textColor;
      };
  render() {
    return (
      <div className='container' style={this.myStyle('#042743', 'white')}>
        <h1 className='my-2 text-light'>About Us</h1>
        <div className="accordion my-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong className='bg-dark text-light'>Grid-based design</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-dark text-light">
              When it comes to design, the overall content layout and structure comes first on our list. Newspaper websites and online news portals are content-rich websites. So, you must arrange your content in a perfectly organized system. 

              When it comes to design, the overall content layout and structure comes first on our list. Newspaper websites and online news portals are content-rich websites. So, you must arrange your content in a perfectly organized system. 

            Grid or columns are the most useful types of content arrangement. It is not only the most effective way to manage content online but also the most popular design.

            A grid-based layout allows you to break the content into comprehensive blocks. Thus, columns the separate gives a neatly organized, impressive look. This makes the content easy to read through, and the readers can choose the topic of their choice.

            You can choose different sized columns for your contents. Remember that the wider the columns, the easier it is to read the text. You must also ensure to keep enough column gaps as it looks ugly if the columns are too crowded.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong className='bg-dark text-light'>Headlines</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-dark text-light">
              The importance of headlines in news articles is known to everyone. Headlines help readers to differentiate and choose articles for their interest. Of course, the headlines should be catchy and compelling enough to grab the spotlight. 

                Moreover, since each content is separated in a grid format, headlines entitle each column. Whether it is a small section on a grid or a full-height column, it should have a headline.

                Just as headlines, you must never miss giving excerpts for each article. Excerpts are short descriptions of your articles. Excerpts give a little glance into your writing, and a good one is enough to raise readers’ interest.

                Whether you have a blog, magazine, online journal or news website; headlines and excerpts are the most critical factors for your website.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong className='bg-dark text-light'>Categorization</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-dark text-light">
              You may post articles and news on diverse topics and from several niches. It may be world news, or information from politics, entertainment, lifestyle or maybe any latest news on COVID 19.

                The best way to organize is to create categories for each. Most of the news WordPress themes offer different categories available in the layout itself. You can simply customize it accordingly.

                You can use different categories to divide your content, and you can showcase them on the navigation menu bar, sidebar or anywhere you wish to on your website.
              </div>
            </div>
          </div>


          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed bg-dark text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
    
                <strong className='bg-dark text-light'>Easy to navigate Design</strong>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-dark text-light">
              Speaking of the navigation menu, the manner and position of navigation menu also play an essential role for your online news website. A news portal must have a simple navigation menu. It should be placed on the apt position where readers can easily navigate through the website.

                The most ideal and safe position is placing below the header and above the content. The visitors will not have to figure out where the navigation menu is, and they can quickly scroll through your website.

                You can also use the left sidebar for the navigation menu. Both these positions are favourable and eye-catching for the visitors.
              </div>
            </div> 
          </div>



          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <strong className='bg-dark text-light'>Social Media Integration</strong>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-dark text-light">
              In today’s world, online news websites cannot even exist without social media integration. If you want to get shared to a broader audience, platforms like Facebook, Instagram, and Twitter are perfect. 

                Your website layout must integrate social media in such a manner that readers can easily share your articles or even share tweetable quotes from your content. Everything is a promotion, and your news spread more on social media platforms. 
              </div>
            </div>
          </div>    




          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <strong className='bg-dark text-light'>Responsive design</strong>
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-dark text-light">
              Readers today grasp information from different electronic devices like laptops, tablets, and mobile phone. A responsive design helps viewers to access the content on all devices.

                A responsive website looks pixel –perfect on all devices irrespective of the size of the screen. A responsive design is something that depends mainly on the WordPress theme you choose. There are several block-based WordPress themes in the market to choose from.

                News-Times WordPress news theme is a perfect responsive news theme that allows you to build an excellent online portal. The theme has a standard layout that contains all the must-have features in an online news website. You can check out the demo here.
              </div>
            </div>
          </div>


        </div>

        

          
        




    </div>
      
    );
  }
}

export default About;
