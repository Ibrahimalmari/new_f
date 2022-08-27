
import Header from "./part_home/Header";
import'./Home.css';
import Data from "./Date";
import Form from 'react-bootstrap/Form';
import CountUp from "react-countup";
import { Component } from "react";




class Home extends Component{

render(){


   

    const blogitem = Data.map((item) =>{return(
           <div className="col-lg-4 change_main">
            <img src={item.img }/>
             <h5> {item.title} </h5>
             <span>{item.time}</span> 
             <h6> {item.price} </h6>
             <button>Order Now</button>
           </div>
    )})


    


return(

<div>

    <Header/>
     <section className="number">
       <div className="container">
           <div className="row">
              <div className="col-lg-3">
                <h2 className="num" data-goal="1542">{ <CountUp start={0} end={1542} duration={2} delay={0} />}</h2> 
                <h6>LINK</h6>
              </div>
              <div className="col-lg-3">
                <h2 className="num" data-goal="2142"><CountUp start={0} end={2142} duration={2} delay={0} /></h2>
                <h6>PHOTOS</h6>
              </div>  <div className="col-lg-3">
                <h2 className="num" data-goal="1042"><CountUp start={0} end={1042} duration={2} delay={0} /></h2>
                <h6>visitors</h6>
              </div> <div className="col-lg-3">
                <h2 className="num" data-goal="1942"><CountUp start={0} end={1942} duration={2} delay={0} /></h2>
                <h6>EATS</h6>
              </div>
           </div>
       </div>
     </section>
     
     

       <section className="mid" >
              
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6   img " >
                       
                      </div>
                      <div className="col-lg-6">
                        <h2>We pride ourselves on making real food from the best ingredient.</h2>
                        <p>Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component.collapsing navbar into an offcanvas drawer with the offcanvas component</p>
                         <button className="">learn more</button>
                        </div>
                  </div>
              </div>
       </section>
        
           
           <section className="main_1" id="about" >
           <div className="container">
                  <div className="row">
                  <div className="col-lg-6">
                        <h2>We pride ourselves on making real food from the best ingredient.</h2>
                        <p>Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component.collapsing navbar into an offcanvas drawer with the offcanvas component</p>
                            
                            <ul>
                                <li>As you familiarize yourself with Bootstrap, continue exploring this section</li>
                                <li>global options, making use of and changing our color system</li>
                                <li>growing list of CSS custom properties</li>
                            </ul>

                         <button className="">learn more</button>
                        </div>
                      <div className="col-lg-6   img2 " >
                       
                      </div>
                      
                  </div>
              </div>
           </section>
              
              <section className="main_2" >
                <div className="container">
                    <div className="col-lg-12">
                        <h2>When a man’s stomach is full it makes no difference Whether he is rich or poor</h2>
                          <p>Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component.collapsing navbar into an offcanvas drawer with the offcanvas component</p>
                             <p>Watch Our Story</p> 
                    </div>
                </div>


              </section>

              <section className="main_3" id="food">
                <div className="container">
                     <div className="row">
                    <div className="col-lg-12">
                        <h2>Explore Our Foods </h2>
                          <p>Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component.collapsing navbar into an offcanvas drawer with the offcanvas component</p>
  
                    </div>
                    </div>
                        
                        <div className="row">
                             {blogitem}
                        </div>
                </div>
              </section>
                    
              <section className="main_4" id="questions">
                     
              <div className="container">
                     <div className="row">
                    <div className="col-lg-12">
                            
                            <h2>Frequently Asked Questions</h2>  

                         </div>
                               </div>
                                     
                                     <div className="row">
                    <div className="col-lg-6">
                           
                           <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>

                    </div>
                    <div className="col-lg-6">
                          <h4>~ Do you bake breads containing animal fats or products?</h4>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>

                            </div>        
                    </div>

                    <div className="row">
                    <div className="col-lg-6">
                           
                           <h4>~ Can I order your products online?</h4>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>

                    </div>
                    <div className="col-lg-6">
                          <h4>~ When are you opening a shop near me?</h4>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>

                            </div>        
                    </div>
                    </div>
                
                  </section>
                 
                
                  <section className="sab" >
                     
              <div className="container">
                    <div className="row">
                   <div className="col-lg-6">
                <h2>Baked fresh daily by bakers with passion.</h2>
                </div>
                <div className="col-lg-6">
                 <button> Learn more</button>
                </div>
                </div>
                 </div>
                 </section>
                         
                           
                 <section className="scribe">
                     
                     <div className="container">
                     <div className="col-lg-12">
                           <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
                     </div>
                     <div className="col-lg-12">
                          <p>Limited time offer for this month. No credit card required.</p>
                     </div>
                     <div className="row">
                     <div className="col-lg-6 container">
                     <Form>
                     <Form.Control type="email" placeholder="Enter email" />    
                     </Form>   
                          </div>
                          <div className="col-lg-6">
                            <button >Subscribe</button>
                           
                           </div>
                           </div>
                     </div>
                     </section>


                     <section className="footer">
                        
                        <div className="container">
                        <div className="row">
                                  
                              <div className="col-lg-12">
                          
                                       
                                           
                                            <div className="f ">
                                         
                                            <a href="#home">Home</a>
                                              <a href="#about">About us</a>  
                                                <a href="#food">explore food</a>
                                                <a href="#questions">Review</a>
                                              </div>
                                              </div>
                                             
                            
                            
                              <div className="col-lg-12 m" >
                              <i class="fa-brands fa-facebook fa-2x"></i>
                              <i class="fa-brands fa-instagram fa-2x"></i>
                              <i class="fa-brands fa-youtube  fa-2x "></i>
                              </div>
                              </div>
                          
                              <div className="col-lg-12 done" >
                                      <h6>© 2022. FoodAlmasri. All rights reserved.</h6>
                              </div>
                                
                             
                           
                        </div>
                     

                     
                     </section>




     </div>

            )


    
}


}


export default Home;