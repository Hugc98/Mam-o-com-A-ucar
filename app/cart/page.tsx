"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart()

  const shipping = total > 75 ? 0 : 9.99
  const tax = total * 0.08
  const finalTotal = total + shipping + tax

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some shoes to get started!</p>
          <Link href="/">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.size}-${item.color}`}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <p className="font-bold text-lg">${item.price}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => removeItem(item.id, item.size, item.color)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <Separator />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              {total < 75 && (
                <p className="text-sm text-muted-foreground">Add ${(75 - total).toFixed(2)} more for free shipping!</p>
              )}

              <div className="space-y-2">
                <Input placeholder="Promo code" />
                <Button variant="outline" className="w-full">
                  Apply Code
                </Button>
              </div>

              <Link href="/checkout">
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link href="/">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
