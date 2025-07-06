"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  size: string
  color: string
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: { id: number; size: string; color: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; size: string; color: string; quantity: number } }
  | { type: "CLEAR_CART" }

const CartContext = createContext<
  | {
      state: CartState
      dispatch: React.Dispatch<CartAction>
      addItem: (item: Omit<CartItem, "quantity">) => void
      removeItem: (id: number, size: string, color: string) => void
      updateQuantity: (id: number, size: string, color: string, quantity: number) => void
      clearCart: () => void
      items: CartItem[]
      total: number
    }
  | undefined
>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color,
      )

      if (existingItemIndex > -1) {
        const newItems = [...state.items]
        newItems[existingItemIndex].quantity += 1
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }
      } else {
        const newItems = [...state.items, { ...action.payload, quantity: 1 }]
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }
      }
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color),
      )
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }
    }
    case "UPDATE_QUANTITY": {
      const newItems = state.items.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color
          ? { ...item, quantity: action.payload.quantity }
          : item,
      )
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }
    }
    case "CLEAR_CART":
      return { items: [], total: 0 }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  const addItem = (item: Omit<CartItem, "quantity">) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: number, size: string, color: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id, size, color } })
  }

  const updateQuantity = (id: number, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size, color)
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, size, color, quantity } })
    }
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        items: state.items,
        total: state.total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
