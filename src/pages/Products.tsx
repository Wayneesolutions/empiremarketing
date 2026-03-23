import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Card from "../components/Cards";
import Header from "@/components/Header";
// public\kitchen\images\modernKitchen\modern-kitchen1.png
// public\staircase\images\staircase-01.jpeg
// public\staircase\images\stairs4.webp
const data = [
    {
        id: "kitchen-modern",
        title: "Modern Kitchen Design",
        description: "Elegant modular kitchens with smart storage solutions",
        image: "/kitchen/images/modernKitchen/modern-kitchen1.png",
    },
    {
        id: "kitchen-luxury",
        title: "Luxury Kitchen Interiors",
        description: "Premium finishes and high-end kitchen layouts",
        image: "/kitchen/images/modernKitchen/modern-kitchen2.png",
    },
    {
        id: "kitchen-compact",
        title: "Compact Kitchen Setup",
        description: "Space-saving designs perfect for small homes",
        image: "/kitchen/images/modernKitchen/modern-kitchen3.png",
    },
    {
        id: "staircase-wooden",
        title: "Wooden Staircase Design",
        description: "Classic wooden stairs with durable craftsmanship",
        image: "/staircase/images/staircase-01.jpeg",
    },
    {
        id: "staircase-spiral",
        title: "Spiral Staircase",
        description: "Stylish spiral stairs for modern interiors",
        image: "/staircase/images/staircase-03.jpeg",
    },
    {
        id: "staircase-glass",
        title: "Glass Staircase Design",
        description: "Contemporary glass stairs with sleek finish",
        image: "/staircase/images/stairs4.webp",
    },
];




const Products = () => {
    return (
        <div>
            <Header />
            <HeroSection title="Products" description="Explore stylish and functional designs for modern kitchens and staircases.
We focus on quality, detail, and smart space utilization.
Creating interiors that are both beautiful and practical." image="/kitchen/images/kitchen-04.jpeg" />
            {/* heading */}
            <div className="flex flex-col items-center justify-center mt-10">

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-[6px]">
                    PRODUCTS
                </h1>

                {/* Subtitle */}
                <p className="mt-3 text-sm tracking-[6px] text-[#C9A646]">
                    Explore Premium Products
                </p>

                {/* Divider */}
                <div className="w-20 h-[2px] bg-[#C9A646] mt-4"></div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
                {data.map((item, index) => (
                    <Card key={item.title} description={item.description} title={item.title} image={item.image} id={item.id} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Products;