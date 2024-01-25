import { createContext, useState } from "react";

export const QntdItensCarrinho = createContext();

export const QntdItensContextProvider = (({children}) => {
  const [qntdItens, setQntdItens] = useState(0);

  return (
    <QntdItensCarrinho.Provider value={{qntdItens, setQntdItens}}>
      {children}
    </QntdItensCarrinho.Provider>
  );
})