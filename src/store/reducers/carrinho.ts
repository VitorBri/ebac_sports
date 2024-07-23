import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  itensFavoritos: number[]
}

const initialState: CarrinhoState = {
  itens: [],
  itensFavoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload

      if (state.itensFavoritos.includes(produtoId)) {
        state.itensFavoritos = state.itensFavoritos.filter(
          (id) => id !== produtoId
        )
      } else {
        state.itensFavoritos.push(produtoId)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
