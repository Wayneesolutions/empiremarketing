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
        images: [
            "/kitchen/images/modernKitchen/modern-kitchen1.png",
            "/kitchen/images/modernKitchen/modern-kitchen2.png",
            "/kitchen/images/modernKitchen/modern-kitchen3.png",
            "/kitchen/images/modernKitchen/modern-kitchen4.png",
        ],
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
        images: [
            "/kitchen/images/modernKitchen/modern-kitchen1.png",
            "/kitchen/images/modernKitchen/modern-kitchen2.png",
            "/kitchen/images/modernKitchen/modern-kitchen3.png",
            "/kitchen/images/modernKitchen/modern-kitchen4.png",
        ],
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
        images: [
            "/kitchen/images/modernKitchen/modern-kitchen1.png",
            "/kitchen/images/modernKitchen/modern-kitchen2.png",
            "/kitchen/images/modernKitchen/modern-kitchen3.png",
            "/kitchen/images/modernKitchen/modern-kitchen4.png",
        ],
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
        images: [
            "/staircase/images/staircase-01.jpeg",
            "/staircase/images/stairs4.webp",
            "/staircase/images/stairs5.webp",
            "/staircase/images/stairs6.webp",
        ],
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
        images: [
            "/staircase/images/staircase-01.jpeg",
            "/staircase/images/stairs4.webp",
            "/staircase/images/stairs5.webp",
            "/staircase/images/stairs6.webp",
        ],
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
        images: [
            "/staircase/images/staircase-01.jpeg",
            "/staircase/images/stairs4.webp",
            "/staircase/images/stairs5.webp",
            "/staircase/images/stairs6.webp",
        ],
    },
];



const ProductsDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();


    const item = productsData.find((d) => d.id === id);
    const message = `Hi, I'm interested in "${item?.title}". Can you share more details? 
      Link: ${window.location.origin}/products/${item?.id}
    `;


    if (!item) {
        return <h1 className="text-center mt-10">Product not found</h1>;
    }
    const [selectedImage, setSelectedImage] = useState(item?.image)






    const images = item?.images?.length ? item.images : [item.image];


    return (
        <>
            <Header />
            <HeroSection title={item.title} description={item.description} image={item.image} />
            <div className="min-h-screen bg-gray-50 p-10">



                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-4  ">

                    <div className="">
                        {/* Main Image */}
                        <div className="overflow-hidden">
                            <img
                                src={selectedImage}
                                alt={item.title}
                                className="w-full h-[450px] rounded-2xl object-cover transition duration-300"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3 mt-9 justify-center ">
                            {images.slice(0, 4).map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`thumb-${index}`}
                                    onClick={() => setSelectedImage(img)}
                                    className={`w-[24%] h-20 object-cover rounded-lg cursor-pointer border-2 
                ${selectedImage === img ? "border-[#C9A646]" : "border-transparent"}
                hover:scale-105 transition`}
                                />
                            ))}
                        </div>
                    </div>



                    {/* Content */}
                    <div className="flex flex-col justify-center ">

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
                        <div className="mt-4">
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
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                Materials Used
                            </h2>
                            <p className="text-gray-600">
                                {item.materials.join(", ")}
                            </p>
                        </div>

                        {/* Dimensions */}
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                Dimensions
                            </h2>
                            <p className="text-gray-600">
                                {item.dimensions}
                            </p>
                        </div>

                        {/* Info Note */}
                        <p className="mt-4 text-sm text-gray-500">
                            💬 For more details, click the WhatsApp icon below to connect with us instantly.
                        </p>

                        <button
                            onClick={() => {
                                const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
                                window.open(url, "_blank");
                            }}
                            className="mt-4 bg-[#C9A646] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#b8953c] transition"
                        >
                            Enquire Now
                        </button>

                    </div>
                </div >
            </div >
            <Footer />

            {message && <WhatsAppWidget message={message} />}
        </>

    );
};

export default ProductsDetail;