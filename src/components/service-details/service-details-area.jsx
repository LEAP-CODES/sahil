import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
// import VideoPopup from '@/src/modals/video-popup';
// import ServiceContactForm from '@/src/forms/service-contact-form';
// import service_details_thumb from "@assets/img/services/service-details/img-1.jpg";
// import service_video_thumb from "@assets/img/services/service-details/img-2.jpg";
// import RightSymbol from '@/src/svg/right-symbol';
// import accordion from '@/src/data/accordion';
import test from '@assets/img/services/test.jpg';
import enzyme_1 from '@assets/img/services/enzyme/1.png';
import enzyme_2 from '@assets/img/services/enzyme/2.png';
import enzyme_3 from '@assets/img/services/enzyme/3.png';
import enzyme_4 from '@assets/img/services/enzyme/4.png';
import enzyme_5 from '@assets/img/services/enzyme/5.png';
import enzyme_6 from '@assets/img/services/enzyme/6.png';
import enzyme_7 from '@assets/img/services/enzyme/7.png';
import enzyme_8 from '@assets/img/services/enzyme/8.png';
import enzyme_9 from '@assets/img/services/enzyme/9.png';
import enzyme_10 from '@assets/img/services/enzyme/10.png';
import enzyme_11 from '@assets/img/services/enzyme/11.png';

const service_details_content = {
   service_details_tab: [
      { id: 1, title: "Enzyme Based Green chemicals", active: "active" },
      { id: 2, title: "Performance coating solutions", active: "" },
      { id: 3, title: "Stone care and Floor Restoration", active: "" },
      { id: 4, title: "Food Industry Cleaning Tools", active: "" },
      { id: 5, title: "Janitorials", active: "" },
      { id: 6, title: "Machines", active: "" },
      { id: 7, title: "Microfibers", active: "" },
      { id: 8, title: "Professional Hygeine and Health solution", active: "" },
   ],
//    title: <>Digital Marketing</>,
//    description: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?  perspiciatis
//       accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to
//       consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut perspiciatis?
//       Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</>,
//    title_2: <>Why Marketing Important ?</>,
//    description_2: <>Lorem ipsum dolor sit amet, consectetur adipisici sed do eiusmod tempor incididunt ut labore et </>,
 
  
//    feture_list: [
//       <>Research beyond the business plan</>,
//       <>Marketing options and rates</>,
//       <>The ability to turnaround consulting</>,
//    ],
//    title_3: <>Why Marketing  ?</>,
//    description_3: <>Need something changed or is there something not quite working the way you envisaged? Is your van a
//       little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
//       unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
//       only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</>,


}
const { service_details_tab} = service_details_content

const ServiceDetailsArea = () => {
 
   const [activeTab, setActiveTab] = useState(1);
   const handleTabClick = (tabId) => {
      setActiveTab(tabId);

   };
   return (
      <>
         <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-service-widget">
                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-widget-tab">
                              <ul>
                                 {service_details_tab.map((item) => (
                                    <li key={item.id}>
                                       <Link
                                          className={item.id === activeTab ? 'active' : ''}
                                          href="/service-details"
                                          onClick={() => handleTabClick(item.id)}
                                       >
                                          {item.title}{' '}
                                          <i className="fa-regular fa-arrow-right-long"></i>
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        {activeTab === 1 && (
                           <>
                              <h3 style={{textAlign:'center'}}>Enzyme Based Green chemicals</h3>
                              <p>Enzyme-based cleaners are derived from natural sources, making them a
                                 sustainable choice for eco-conscious individuals. Unlike harsh chemical
                                 cleaners, enzyme-based alternatives are biodegradable and non-toxic,
                                 reducing the environmental impact.</p>
                                 <div class="container_1">
                                 <div class="row" style={{gap:'1px', justifyContent:'space-between'}}>
                                    {/* <!--Services Two Single Start--> */}
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                       <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                   <Image src={enzyme_1}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                {/* <p class="services-two__sub-title">Austry</p> */}
                                                <h3 class="services-two__title" style={{width:'120%', fontSize:'25px'}}>MULTI-PURPOSE ECO CLEANER</h3>
                                                <p class="services-two__text">DISINFECTANT & ANTISEPTIC</p>
                                             </div>
                                       </div>
                                    </div>
                                    {/* <!--Services Two Single Start-->
                                    <!--Services Two Single Start--> */}
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_2}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                
                                                <h3 class="services-two__title" style={{width:'120%',fontSize:'25px'}}>TOILET & BATHROOM CLEANER</h3>
                                                <p class="services-two__text">CLEAN, SANITISE & DEODORISE.</p>
                                                
                                             </div>
                                          </div>
                                    </div>
                                    {/* <!--Services Two Single Start-->
                                    <!--Services Two Single Start--> */}
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_3}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                <h3 class="services-two__title"style={{width:'120%',fontSize:'25px'}}>GUM REMOVER</h3>
                                                <p class="services-two__text">GUM & ADHESIVE STAIN REMOVER.</p>
                                             </div>
                                          </div>
                                    </div>
                                    {/* <!--Services Two Single Start-->
                                    
                                    <!--Services Two Single Start--> */}
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_4}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                <h3 class="services-two__title"style={{width:'120%',fontSize:'25px'}}>LAUNDRY LIQUID</h3>
                                                <p class="services-two__text">BIO-DEGRADABLE LAUNDRY DETERGENT.</p>
                                             </div>
                                          </div>
                                    </div>
                                    {/* <!--Services Two Single Start-->
                                    <!--Services Two Single Start--> */}
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_5}/>
                                                </div>
                                                <div class="services-two__content">
                                                   <h3 class="services-two__title" style={{width:'120%',fontSize:'25px'}}>DISH WASH LIQUID</h3>
                                                   <p class="services-two__text">BIO-DEGRADABLE • PHOSPHATE FREE.</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    {/* <!--Services Two Single Start-->
                                    <!--Services Two Single Start--> */}
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_6}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                <h3 class="services-two__title" style={{width:'120%',fontSize:'25px'}}>CARPET STAIN REMOVER</h3>
                                                <p class="services-two__text">BIO-DEGRADABLE STAIN REMOVER.</p>
                                             </div>
                                          </div>
                                    </div>
                                    {/* <!--Services Two Single Start-->
                                    <!--Services Two Single Start--> */}
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_7}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                <h3 class="services-two__title"style={{width:'120%',fontSize:'25px'}}>ECO GLASS CLEANER</h3>
                                                <p class="services-two__text">SPARKLING SHINE.</p>
                                             </div>
                                          </div>
                                    </div>
                                    {/* <!--Services Two Single Start--> */}
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_8}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                <h3 class="services-two__title"style={{width:'120%',fontSize:'25px'}}>HARD SURFACE CLEANER</h3>
                                                <p class="services-two__text">CONCENTRATE • ALL ROUND CLEANER.</p>
                                             </div>
                                          </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_9}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                <h3 class="services-two__title"style={{width:'120%',fontSize:'25px'}}>BIO HANDWASH</h3>
                                                <p class="services-two__text">NATURAL GERM PROTECTION.</p>
                                             </div>
                                          </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_10}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                <h3 class="services-two__title"style={{width:'120%',fontSize:'25px'}}>CARPET SHAMPOO</h3>
                                                <p class="services-two__text">EASY STAIN RELEASE.</p>
                                             </div>
                                          </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-md-6">
                                          <div class="services-two__single">
                                             <div class="services-two__img-box">
                                                <div class="services-two__img">
                                                <Image src={enzyme_11}/>
                                                </div>
                                             </div>
                                             <div class="services-two__content">
                                                <h3 class="services-two__title"style={{width:'120%',fontSize:'25px'}}>ODOUR NEUTRALIZER</h3>
                                                <p class="services-two__text">DISINFECTANT & ANTISEPTIC.</p>
                                             </div>
                                          </div>
                                    </div>
                                 </div>
                              </div>
                           </>
                        )}
                        {activeTab === 2 && (
                           <>
                              <h3>Performance coating solutions</h3>
                              {/* <p>{description_2}</p> */}
                           </>
                        )}
                        {activeTab === 3 && (
                           <>
                              <h3>Stone care and Floor Restoration</h3>
                              {/* <p>{description_3}</p> */}
                           </>
                        )}
                        {activeTab === 4 && (
                           <>
                              <h3>Food Industry Cleaning Toolsy</h3>
                              {/* <p>{description_3}</p> */}
                           </>
                        )}
                        {activeTab === 5 && (
                           <>
                              <h3>Janitorials</h3>
                              {/* <p>{description_3}</p> */}
                           </>
                        )}
                        {activeTab === 6 && (
                           <>
                              <h3>Machines</h3>
                              {/* <p>{description_3}</p> */}
                           </>
                        )}
                        {activeTab === 7 && (
                           <>
                              <h3>Microfibers</h3>
                              {/* <p>{description_3}</p> */}
                           </>
                        )}
                        {activeTab === 6 && (
                           <>
                              <h3>Professional Hygeine and Health solution</h3>
                              {/* <p>{description_3}</p> */}
                           </>
                        )}
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServiceDetailsArea;