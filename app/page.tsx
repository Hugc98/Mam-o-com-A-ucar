"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Heart, ShoppingCart, Search, Zap, Truck, Shield, ArrowRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function HomePage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [wishlist, setWishlist] = useState<number[]>([])

  const heroSlides = [
    {
      title: "Coleção Verão 2024",
      subtitle: "Pisadas que fazem a diferença",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Descobrir Agora",
    },
    {
      title: "Tênis Exclusivos",
      subtitle: "Conforto e estilo únicos",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Ver Coleção",
    },
    {
      title: "Sandálias Premium",
      subtitle: "Para os dias mais quentes",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Comprar Agora",
    },
  ]

  const categories = [
    {
      name: "Tênis",
      image: "/placeholder.svg?height=300&width=300",
      count: "120+ modelos",
      gradient: "from-[#FF6B35] to-[#FF8E53]",
    },
    {
      name: "Sapatos Sociais",
      image: "/placeholder.svg?height=300&width=300",
      count: "85+ modelos",
      gradient: "from-[#C71585] to-[#FF8E53]",
    },
    {
      name: "Sandálias",
      image: "/placeholder.svg?height=300&width=300",
      count: "95+ modelos",
      gradient: "from-[#32CD32] to-[#FFD700]",
    },
    {
      name: "Botas",
      image: "/placeholder.svg?height=300&width=300",
      count: "60+ modelos",
      gradient: "from-[#FFD700] to-[#FF6B35]",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Air Max Tropical",
      brand: "Nike",
      price: 299.9,
      originalPrice: 399.9,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      badge: "Mais Vendido",
      colors: ["#FF6B35", "#32CD32", "#C71585"],
      inStock: true,
    },
    {
      id: 2,
      name: "Sandália Sunset",
      brand: "Havaianas Premium",
      price: 89.9,
      originalPrice: 129.9,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
      badge: "Oferta Limitada",
      colors: ["#FF8E53", "#FFD700", "#FF6B35"],
      inStock: true,
    },
    {
      id: 3,
      name: "Bota Aventura",
      brand: "Timberland",
      price: 459.9,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 67,
      badge: "Novo",
      colors: ["#8B4513", "#000000", "#654321"],
      inStock: true,
    },
    {
      id: 4,
      name: "Tênis Neon Street",
      brand: "Adidas",
      price: 349.9,
      originalPrice: 449.9,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 156,
      badge: "Desconto",
      colors: ["#32CD32", "#FF6B35", "#C71585"],
      inStock: false,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-full opacity-20 blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#32CD32] to-[#FFD700] rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-[#C71585] to-[#FF8E53] rounded-full opacity-20 blur-xl animate-pulse delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentHeroSlide].image || "/placeholder.svg"}
              alt="Hero"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 z-20 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-white text-sm font-medium">Frete Grátis acima de R$ 199</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[#FF6B35] via-[#FF8E53] to-[#FFD700] bg-clip-text text-transparent leading-tight">
              Mamão com
              <br />
              Açúcar
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">{heroSlides[currentHeroSlide].subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF8E53] hover:to-[#FFD700] text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-[#FF6B35]/25 transition-all duration-300 transform hover:scale-105"
              >
                {heroSlides[currentHeroSlide].cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-lg font-semibold"
              >
                Ver Ofertas
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide ? "bg-[#FF6B35] w-8" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar tênis, sandálias, botas..."
                className="pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 rounded-full focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF8E53] hover:to-[#FFD700] rounded-full px-6">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">
              Categorias
            </h2>
            <p className="text-xl text-white/80">Encontre o calçado perfeito para cada ocasião</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="relative aspect-square">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/70">{category.count}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#C71585] to-[#FF8E53] bg-clip-text text-transparent">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-white/80">Os mais desejados da temporada</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B35]/10">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3">
                      <Badge
                        className={`
                        ${product.badge === "Mais Vendido" ? "bg-[#FF6B35]" : ""}
                        ${product.badge === "Oferta Limitada" ? "bg-[#C71585]" : ""}
                        ${product.badge === "Novo" ? "bg-[#32CD32]" : ""}
                        ${product.badge === "Desconto" ? "bg-[#FFD700] text-black" : ""}
                        font-bold px-3 py-1
                      `}
                      >
                        {product.badge}
                      </Badge>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors duration-300 ${
                          wishlist.includes(product.id)
                            ? "text-[#C71585] fill-[#C71585]"
                            : "text-white hover:text-[#C71585]"
                        }`}
                      />
                    </button>

                    {/* Quick Actions */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF8E53] hover:to-[#FFD700] text-white font-bold rounded-full">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Adicionar ao Carrinho
                      </Button>
                    </div>

                    {/* Stock Indicator */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Esgotado</span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <p className="text-sm text-white/60 mb-1">{product.brand}</p>
                    <h3 className="font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-[#FFD700] fill-[#FFD700]" : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-white/70">({product.reviews})</span>
                    </div>

                    {/* Colors */}
                    <div className="flex gap-1 mb-3">
                      {product.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border-2 border-white/30"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#32CD32]">
                        R$ {product.price.toFixed(2).replace(".", ",")}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-white/50 line-through">
                          R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gender Sections */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Masculino */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-[#FF6B35]/20 to-[#C71585]/20 backdrop-blur-md border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300 h-96">
                <div className="relative h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Masculino"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-start p-8">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-4">Masculino</h3>
                      <p className="text-white/80 mb-6 text-lg">Estilo e conforto para ele</p>
                      <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF8E53] hover:to-[#FFD700] text-white font-bold px-6 py-3 rounded-full">
                        Ver Coleção
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Feminino */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-[#C71585]/20 to-[#FF8E53]/20 backdrop-blur-md border-white/10 hover:border-[#C71585]/50 transition-all duration-300 h-96">
                <div className="relative h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Feminino"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-end p-8">
                    <div className="text-right">
                      <h3 className="text-4xl font-bold text-white mb-4">Feminino</h3>
                      <p className="text-white/80 mb-6 text-lg">Elegância e sofisticação para ela</p>
                      <Button className="bg-gradient-to-r from-[#C71585] to-[#FF8E53] hover:from-[#FF8E53] hover:to-[#FFD700] text-white font-bold px-6 py-3 rounded-full">
                        Ver Coleção
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promotions Banner */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] via-[#C71585] to-[#32CD32] opacity-90" />
            <div className="relative p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-[#FFD700]" />
                <span className="text-white text-sm font-medium">Oferta Relâmpago</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-4">50% OFF</h2>
              <p className="text-xl text-white/90 mb-8">Em produtos selecionados • Válido até 31/12</p>

              <Button
                size="lg"
                className="bg-white text-[#C71585] hover:bg-white/90 font-bold px-8 py-4 rounded-full text-lg"
              >
                Aproveitar Oferta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#32CD32] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Frete Grátis</h3>
              <p className="text-white/70">Acima de R$ 199 para todo o Brasil</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compra Segura</h3>
              <p className="text-white/70">Pagamento 100% protegido</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#C71585] to-[#FF8E53] rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Troca Fácil</h3>
              <p className="text-white/70">30 dias para trocar ou devolver</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">
              Fique por Dentro
            </h2>
            <p className="text-xl text-white/80 mb-8">Receba ofertas exclusivas e novidades em primeira mão</p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 rounded-full px-6 py-3"
              />
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF8E53] hover:to-[#FFD700] text-white font-bold px-8 py-3 rounded-full">
                Inscrever-se
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF8E53] hover:to-[#FFD700] rounded-full shadow-2xl hover:shadow-[#FF6B35]/25 transition-all duration-300 transform hover:scale-110">
          <ShoppingCart className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  )
}
