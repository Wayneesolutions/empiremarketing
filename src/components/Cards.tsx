import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
    title: string;
    description: string;
    image: string;
    id: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, id }) => {
    const navigate = useNavigate();

    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl">

            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-4 text-white w-full">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm opacity-90">{description}</p>

                <button
                    onClick={() => navigate(`/products/${id}`)}
                    className="mt-3 px-4 py-2 bg-white text-black rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-500"
                >
                    Explore →
                </button>
            </div>
        </div>
    );
};

export default Card;