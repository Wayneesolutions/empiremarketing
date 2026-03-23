import HeroSection from "@/components/HeroSection";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useState } from "react";


const productsData = [
    {
        id: "kitchen-modern",
        title: "Modern Modular Kitchen",
        description:
            "A sleek modular kitchen design with smart storage solutions and premium finishes.",
        image: "/kitchen/images/modernKitchen/modern-kitchen1.png",
        category: "kitchen",
        price: "₹1,50,000",
        features: [
            "Soft-close drawers",
            "Granite countertop",
            "Built-in appliances",
            "LED lighting",
        ],
        materials: ["Plywood", "Laminate", "Granite"],
        dimensions: "10x8 ft",
    },
    {
        id: "kitchen-luxury",
        title: "Luxury Kitchen Interior",
        description:
            "Premium kitchen with high-end materials and elegant finishes for a luxurious feel.",
        image: "/kitchen/images/modernKitchen/modern-kitchen2.png",
        category: "kitchen",
        price: "₹3,00,000",
        features: [
            "Italian marble finish",
            "Smart storage system",
            "Designer cabinets",
            "Premium fittings",
        ],
        materials: ["Marble", "High-gloss laminate", "Steel"],
        dimensions: "12x10 ft",
    },
    {
        id: "kitchen-compact",
        title: "Compact Kitchen Setup",
        description:
            "Space-saving kitchen design ideal for small apartments and modern homes.",
        image: "/kitchen/images/modernKitchen/modern-kitchen3.png",
        category: "kitchen",
        price: "₹90,000",
        features: [
            "Space-efficient layout",
            "Wall-mounted cabinets",
            "Minimalist design",
            "Easy maintenance",
        ],
        materials: ["MDF", "Laminate"],
        dimensions: "8x6 ft",
    },
    {
        id: "staircase-wooden",
        title: "Wooden Staircase",
        description:
            "Classic wooden staircase crafted with durability and elegance.",
        image: "/staircase/images/staircase-01.jpeg",
        category: "staircase",
        price: "₹1,20,000",
        features: [
            "Solid wood finish",
            "Anti-slip steps",
            "Durable structure",
            "Classic design",
        ],
        materials: ["Teak Wood", "Oak"],
        dimensions: "Floor to floor 10 ft",
    },
    {
        id: "staircase-spiral",
        title: "Spiral Staircase",
        description:
            "Modern spiral staircase design that saves space and adds style.",
        image: "/staircase/images/staircase-03.jpeg",
        category: "staircase",
        price: "₹80,000",
        features: [
            "Space-saving design",
            "Modern look",
            "Metal structure",
            "Easy installation",
        ],
        materials: ["Steel", "Glass"],
        dimensions: "Diameter 5 ft",
    },
    {
        id: "staircase-glass",
        title: "Glass Staircase",
        description:
            "Contemporary glass staircase with a sleek and premium appearance.",
        image: "/staircase/images/stairs4.webp",
        category: "staircase",
        price: "₹2,20,000",
        features: [
            "Tempered glass panels",
            "Modern aesthetic",
            "Strong support structure",
            "Premium finish",
        ],
        materials: ["Glass", "Steel"],
        dimensions: "Floor height 11 ft",
    },
];

const ProductsDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();


    const item = productsData.find((d) => d.id === id);
    const message = `Hi, I'm interested in "${item?.title}". Can you share more details? 
      Link: ${window.location.origin}/products/${item?.id}'
    `;


    if (!item) {
        return <h1 className="text-center mt-10">Product not found</h1>;
    }

    console.log("message.................................", message)


    return (
        <>
            <Header />
            <HeroSection title={item.title} description={item.description} image={item.image} />
            <div className="min-h-screen bg-gray-50 p-10">



                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-4">

                    {/* Image */}
                    <div className=" overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[450px] rounded-2xl object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {item.title}
                        </h1>

                        {/* Price */}
                        <p className="mt-3 text-xl font-semibold text-[#C9A646]">
                            {item.price}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Divider */}
                        <div className="w-16 h-[2px] bg-[#C9A646] mt-4"></div>

                        {/* Features */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                Features
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                {item.features.map((feature, index) => (
                                    <li key={index}>✔ {feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Materials */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                Materials Used
                            </h2>
                            <p className="text-gray-600">
                                {item.materials.join(", ")}
                            </p>
                        </div>

                        {/* Dimensions */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                Dimensions
                            </h2>
                            <p className="text-gray-600">
                                {item.dimensions}
                            </p>
                        </div>

                        {/* Info Note */}
                        <p className="mt-6 text-sm text-gray-500">
                            💬 For more details, click the WhatsApp icon below to connect with us instantly.
                        </p>

                    </div>
                </div>
            </div>
            <Footer />

            {message && <WhatsAppWidget message={message} />}
        </>

    );
};

export default ProductsDetail;