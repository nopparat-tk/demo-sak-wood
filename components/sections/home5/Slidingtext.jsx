import Link from "next/link";
export default function Slidingtext() {
   return (
      <>
         {/* Sliding Text Two Start */}
         <section className="sliding-text-two">
            <div
               className="section-shape-1"
               style={{
                  backgroundImage:
                     " url(assets/images/shapes/section-shape-1.png)",
               }}
            ></div>
            <div className="sliding-text-two__wrap">
               <ul className="sliding-text-two__list list-unstyled marquee_mode">
                  <li>
                     <h2
                        data-hover="Tropical Hardwoods"
                        className="sliding-text-two__title"
                     >
                        Tropical Hardwoods
                     </h2>
                  </li>
                  <li>
                     <h2
                        data-hover="Superior Durability"
                        className="sliding-text-two__title"
                     >
                        Superior Durability
                     </h2>
                  </li>
                  <li>
                     <h2
                        data-hover="Exquisite Aesthetic Appeal"
                        className="sliding-text-two__title"
                     >
                        Exquisite Aesthetic Appeal
                     </h2>
                  </li>
               </ul>
            </div>
         </section>
         {/* Sliding Text Two End */}
      </>
   );
}
