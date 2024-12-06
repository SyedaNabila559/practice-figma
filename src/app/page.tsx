import Hero from "@/components/hero";
import FreshSales from "@/components/freshsell";
import Category from "@/components/category";
import Products from "@/components/products";
import Music from "@/components/music";
import Explore from "@/components/explore";
import Futured from "@/components/feature";
import Freedelvry from "@/components/free";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {
    return(
      <div >
        
        <Header/>
         <Hero/>
         <FreshSales/>
         <Category/>
         <Products/>
         <Music/>
         <Explore/>
         <Futured/>
         <Freedelvry/>
         <Footer/>
      </div>
    )
}