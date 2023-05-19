import Applayout from '<prefix>/layout/applayout';
import Image from 'next/image';
function TransitionPage({partners}:any) {
return (
    <Applayout className='transitionMain w-100 mt-0 pt-0'>
      <div className="dealer-enquiry-progress-section">
         <div className="container">
            <div className="row mb-4">
               <div className="col-xs-12">
                  <div className="animation">
                     <img src="/assets/transition-img/face.gif" alt="Animation"/>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                  <div className="dealer-enquiry-navigation-tagline">
                     <h3>Hang tight! We’re fetching you the best offers.</h3>
                     <p>We're checking all of our dealers</p>
                  </div>
               </div>
            </div>
         </div>
         <section className
         ="image-marquee">
         <div className
         ="wrap1">
            <div className
            ="wrap2">
               <div className
               ="wrap3">
                  <div className
                  ="scrolling-carousel-wrap">
                     <div className
                     ="scrolling-carousel">
                        {
                            Object.values(partners)?.map((items:any,key:number)=><div className
                            ="ScrollingCard logo" key={key}>
                               <Image src={items} width={190} height={150} alt="partners"/>
                            </div>)
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </div>
    </Applayout>
);
}

export default TransitionPage;