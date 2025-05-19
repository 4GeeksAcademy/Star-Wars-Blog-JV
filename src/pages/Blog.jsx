import React, { useEffect, useState } from "react";
import CardPersonajes from "../components/Card-personajes";


const Blog = () => {


// Metodo para personajes 
  const [personajes, setPersonajes] = useState([]);

 const fetchPersonajes = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/people");
        const data = await res.json();

        const results = data.results;

        const detalles = await Promise.all(
          results.map(async (item) => {
            const resDetalle = await fetch(item.url);
            const dataDetalle = await resDetalle.json();
            return dataDetalle.result.properties;
          })
        );

        setPersonajes(detalles);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
      }
    };

    // Metodo para Planetas

    // Metodo para Vdehiculos


  useEffect(() => {


   //Aquí se llaman el fetch planetas
   //Aquí se llaman el fetch Vehiculos

    fetchPersonajes();
  }, []);








  return (

// Aquí el return de personajes

<div className="container py-4">
      <h1 className="mb-4">Personajes de Star Wars</h1>

      <div
        className="d-flex overflow-auto"
        style={{
          gap: "1rem",
          paddingBottom: "1rem",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {personajes.map((personaje, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              scrollSnapAlign: "start",
            }}
          >
            <CardPersonajes
              personaje={personaje}
              onLearnMore={() => console.log("Ver más de:", personaje.name)}
              onToggleFavorite={() => console.log("Favorito:", personaje.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );

};

// Aquí el return de planetas

export default Blog;

