import React from "react";
import "./Candidatos.css";

const candidatos = [
    { id: 1, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUa1EQQ1JkKsjD6jOe66R_f_bzhGFy_Wpjg&s", nombre: "Roberto Carlos" },
    { id: 2, nombre: "María González", imagen: "oscar.jpg" },
    { id: 3, nombre: "María González", imagen: "oscar.jpg" },
    { id: 4, nombre: "María González", imagen: "oscar.jpg" },

    { id: 3, nombre: "Luis Pérez", imagen: "ruta_imagen3.jpg" },
];

const Candidatos = () => {
    return (
        <div className="candidatos-container">
            {candidatos.map((candidato) => (
                <div key={candidato.id} className="card">
                    <div
                        className="card-image"
                        style={{ backgroundImage: `url(${candidato.imagen})` }}
                    ></div>
                    <h2 className="card-title">{candidato.nombre}</h2>
                    <button className="info-button">Más información</button>
                </div>
            ))}
        </div>
    );
};

export default Candidatos;
