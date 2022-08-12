import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  // Esta función se encarga de agregar las categorias buscadas
  // Con el includes chequeo que no se repita la misma busqueda
  // que ya esta cargada en la lista
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //Esta prop envia a 'AddCategory' la funcion que agrega items a la lista de busqueda
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
