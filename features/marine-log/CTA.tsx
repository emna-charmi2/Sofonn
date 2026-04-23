import Button from "@/components/ui/Button";

export default function CTA(){
    return(
      <>

       <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glows */}

        <div className="w-[80%] max-w-480 mx-auto relative z-10">

 

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* CTA blob */}
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-2xl md:rounded-3xl p-12 lg:p-20 text-center border shadow-2xl shadow-black/30"
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.07)",
                borderColor: "rgba(255,255,255,0.15)",
              }}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div>
                <h2 className="mb-6" data-aos="fade-up" data-aos-delay="100">
Join the Maritime Revolution
                </h2>
                <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
                  <p>
                  Streamline your operations, ensure total compliance, and lead with data-driven precision. The future of the sea is digital.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                
                      <Button 
        text="            Get Started with Marine Log
" 
  href="request-demo"
  target="_self"
        backgroundColor="#FFC700"
        showArrow={true}
      />
        


              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      </>
    )
}
