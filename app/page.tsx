import Background from "@/components/background";
import Container from "@/components/container";
import Header from "@/components/header";
import ServiceCard from "@/components/svc-card";
import Image from "next/image";

export default function Home() {
  return (
    <div id="vdolita">
      <Background />
      <div className="relative flex flex-col md:space-y-44">
        <Header />
        <div className="w-full">
          <Container className="mx-auto">
            <div className="flex flex-col space-y-4">
              <div>
                <span className="text-white text-xl">Services</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
                <ServiceCard
                  img={
                    <Image
                      src="/shopify-svc.webp"
                      alt="test"
                      width={344}
                      height={229}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  }
                  link=""
                  desc="Shopify Theme customization"
                />
                <ServiceCard
                  img={
                    <Image
                      src="/shopify-svc.webp"
                      alt="test"
                      width={344}
                      height={229}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  }
                  link=""
                  desc=" Wordpress WooCommerce customization"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
