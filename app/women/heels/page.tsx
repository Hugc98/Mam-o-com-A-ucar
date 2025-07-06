"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Filter } from "lucide-react"

export default function WomenHeelsPage() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedHeights, setSelectedHeights] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")

  const products = [
    {
      id: 11,
      name: "Classic Stiletto",
      brand: "Jimmy Choo",
      price: 295.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 87,
      colors: ["Black", "Red", "Nude"],
      sizes: ["6", "7", "8", "9", "10"],
      heelHeight: "4 inches",
    },
    {
      id: 12,
      name: "Block Heel Pump",
      brand: "Nine West",
      price: 89.99,
      originalPrice: 119.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 156,
      colors: ["Black", "Navy", "Burgundy"],
      sizes: ["5", "6", "7", "8", "9", "10"],
      heelHeight: "3 inches",
    },
    {
      id: 13,
      name: "Strappy Sandal Heel",
      brand: "Steve Madden",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.4,
      reviews: 203,
      colors: ["Black", "Gold", "Silver"],
      sizes: ["6", "7", "8", "9", "10", "11"],
      heelHeight: "4.5 inches",
    },
    {
      id: 14,
      name: "Pointed Toe Pump",
      brand: "Christian Louboutin",
      price: 695.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      colors: ["Black", "Red", "Nude"],
      sizes: ["6", "7", "8", "9", "10"],
      heelHeight: "4 inches",
    },
    {
      id: 15,
      name: "Wedge Heel",
      brand: "Tory Burch",
      price: 198.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 89,
      colors: ["Tan", "Black", "White"],
      sizes: ["5", "6", "7", "8", "9", "10"],
      heelHeight: "3.5 inches",
    },
    {
      id: 16,
      name: "Ankle Strap Heel",
      brand: "Sam Edelman",
      price: 120.99,
      originalPrice: 150.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 167,
      colors: ["Black", "Nude", "Red"],
      sizes: ["6", "7", "8", "9", "10"],
      heelHeight: "3.5 inches",
    },
  ]

  const brands = ["Jimmy Choo", "Nine West", "Steve Madden", "Christian Louboutin", "Tory Burch", "Sam Edelman"]
  const sizes = ["5", "6", "7", "8", "9", "10", "11"]
  const heelHeights = ["2-3 inches", "3-4 inches", "4+ inches"]

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size])
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size))
    }
  }

  const handleHeightChange = (height: string, checked: boolean) => {
    if (checked) {
      setSelectedHeights([...selectedHeights, height])
    } else {
      setSelectedHeights(selectedHeights.filter((h) => h !== height))
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesSize = selectedSizes.length === 0 || selectedSizes.some((size) => product.sizes.includes(size))

    return matchesBrand && matchesPrice && matchesSize
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/">Home</Link> / <Link href="/women">Women</Link> / Heels
        </nav>
        <h1 className="text-3xl font-bold mb-2">Women's Heels</h1>
        <p className="text-muted-foreground">Elegant heels for every occasion</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5" />
              <h2 className="font-semibold text-lg">Filters</h2>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider value={priceRange} onValueChange={setPriceRange} max={800} step={10} className="mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Brand</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                    />
                    <Label htmlFor={brand} className="text-sm">
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={size}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                    />
                    <Label htmlFor={size} className="text-sm">
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Heel Height */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Heel Height</h3>
              <div className="space-y-2">
                {heelHeights.map((height) => (
                  <div key={height} className="flex items-center space-x-2">
                    <Checkbox
                      id={height}
                      checked={selectedHeights.includes(height)}
                      onCheckedChange={(checked) => handleHeightChange(height, checked as boolean)}
                    />
                    <Label htmlFor={height} className="text-sm">
                      {height}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">Heel: {product.heelHeight}</p>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-lg">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
