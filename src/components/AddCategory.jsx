import React from "react";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //Para capturar los valores ingresados en el inpu
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //Primero valida que haya mas de un caracter ingresado
  //Segundo recibe la funcion que fue en viada por props
  //la cual se encarga de actualizar la lista de categorias
  //elimina los espacios en blanco y por ultimo vacia el input
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
