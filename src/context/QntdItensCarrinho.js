import { createContext, useState } from "react";

export const QntdItensCarrinho = createContext();

export const QntdItensContextProvider = (({children}) => {
  const [qntdItens, setQntdItens] = useState(0);
  const [meuCarrinho, setMeuCarrinho] = useState([]);

  return (
    <QntdItensCarrinho.Provider value={{qntdItens, setQntdItens, meuCarrinho, setMeuCarrinho}}>
      {children}
    </QntdItensCarrinho.Provider>
  );
})