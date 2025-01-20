// src/componentes/Contacto/Contacto.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importar emailjs
import "./Contacto.css";

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_8f06ccg", // Reemplaza con tu Service ID de Email.js
                "template_aajg3dv", // Reemplaza con tu Template ID de Email.js
                {
                    from_name: formData.nombre,
                    reply_to: formData.email,
                    message: `
                        Nombre: ${formData.nombre}
                        Correo Electrónico: ${formData.email}
                        Mensaje: ${formData.mensaje}
                    `,
                },
                "JFMDhJLQD4qyxHFM0" // Reemplaza con tu Public Key de Email.js
            )
            .then(
                (response) => {
                    console.log("Correo enviado exitosamente:", response);
                    setStatus("success");

                    // Limpiar los campos del formulario
                    setFormData({
                        nombre: "",
                        email: "",
                        mensaje: "",
                    });
                },
                (error) => {
                    console.error("Error al enviar el correo:", error);
                    setStatus("error");
                }
            );
    };

    return (
        <div className="contacto-container">
            <h2>Contáctanos</h2>
            <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn-enviar">
                    Enviar
                </button>
            </form>

            {status === "success" && (
                <p className="success-message">¡Mensaje enviado exitosamente!</p>
            )}
            {status === "error" && (
                <p className="error-message">Hubo un error al enviar el mensaje. Inténtalo nuevamente.</p>
            )}

            <div className="whatsapp-container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
                    alt="WhatsApp"
                    className="whatsapp-logo"
                />
                <span className="whatsapp-number">+54 3482 308748</span>
            </div>
            <footer className="footer">
                <p>© 2025 FM Popular. Desarrollado por <a href="https://www.instagram.com/ulisessacuna/">Ulises Acuña</a></p>
            </footer>
        </div>
    );
};

export default Contacto;
