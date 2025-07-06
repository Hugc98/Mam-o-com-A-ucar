"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const { addItem } = useCart()
  const { toast } = useToast()

  // Mock product data - in real app, fetch based on params.id
  const product = {
    id: Number.parseInt(params.id),
    name: "Air Max Pro",
    brand: "Nike",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 124,
    description:
      "The Air Max Pro combines classic style with modern comfort. Featuring Nike's signature Air Max cushioning technology, these sneakers provide all-day comfort and support.",
    features: [
      "Air Max cushioning technology",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Lightweight design",
      "Classic silhouette",
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Red", value: "#DC2626" },
      { name: "Blue", value: "#2563EB" },
    ],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    inStock: true,
    category: "men",
    type: "sneakers",
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      })
      return
    }

    if (!selectedColor) {
      toast({
        title: "Please select a color",
        variant: "destructive",
      })
      return
    }

    const colorName = product.colors.find((c) => c.value === selectedColor)?.name || selectedColor

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: colorName,
      image: product.images[0],
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (Size ${selectedSize}, ${colorName}) has been added to your cart.`,
    })
  }

  const reviews = [
    {
      id: 1,
      name: "John D.",
      rating: 5,
      date: "2024-01-15",
      comment: "Amazing comfort and style. Perfect for daily wear and light workouts.",
    },
    {
      id: 2,
      name: "Mike S.",
      rating: 4,
      date: "2024-01-10",
      comment: "Great quality sneakers. The Air Max cushioning is really noticeable.",
    },
    {
      id: 3,
      name: "David L.",
      rating: 5,
      date: "2024-01-05",
      comment: "Love these shoes! They're comfortable and look great with everything.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/">Home</Link> / <Link href="/men">Men</Link> / <Link href="/men/sneakers">Sneakers</Link> /{" "}
        {product.name}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div>
          <div className="aspect-square mb-4">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-slate-900" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <p className="text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                  <Badge className="bg-red-500">Save ${(product.originalPrice - product.price).toFixed(2)}</Badge>
                </>
              )}
            </div>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color.value ? "border-slate-900" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 border rounded-lg text-center ${
                    selectedSize === size
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-gray-300 hover:border-slate-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <Link href="/size-guide" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
              Size Guide
            </Link>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Quantity</h3>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4 mb-8">
            <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={!product.inStock}>
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="lg" className="flex-1">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-green-600" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-blue-600" />
              <span className="text-sm">30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm">2-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="details" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="shipping" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Shipping Information</h3>
                  <p className="text-muted-foreground">
                    Free standard shipping on orders over $75. Express shipping available for $9.99. Orders placed
                    before 2 PM EST ship the same day.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Returns & Exchanges</h3>
                  <p className="text-muted-foreground">
                    30-day return policy. Items must be in original condition with tags attached. Free returns for
                    defective items.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
