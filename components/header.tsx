"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, User, Menu, Heart, MapPin, Phone } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export function Header() {
  const { items } = useCart()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Entregamos em todo o Brasil</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-semibold">Frete Grátis acima de R$ 199!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-full flex items-center justify-center">
                <span className="text-white font-black text-xl">M</span>
              </div>
              <div>
                <span className="font-black text-2xl bg-gradient-to-r from-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">
                  Mamão com Açúcar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="font-semibold text-white hover:text-[#FF6B35] transition-colors">
                  Masculino
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-white/10">
                  <DropdownMenuItem asChild>
                    <Link href="/masculino/tenis" className="text-white hover:text-[#FF6B35]">
                      Tênis
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/masculino/sapatos-sociais" className="text-white hover:text-[#FF6B35]">
                      Sapatos Sociais
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/masculino/botas" className="text-white hover:text-[#FF6B35]">
                      Botas
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/masculino/chinelos" className="text-white hover:text-[#FF6B35]">
                      Chinelos
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="font-semibold text-white hover:text-[#C71585] transition-colors">
                  Feminino
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-white/10">
                  <DropdownMenuItem asChild>
                    <Link href="/feminino/tenis" className="text-white hover:text-[#C71585]">
                      Tênis
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/feminino/sandalias" className="text-white hover:text-[#C71585]">
                      Sandálias
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/feminino/botas" className="text-white hover:text-[#C71585]">
                      Botas
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/feminino/sapatilhas" className="text-white hover:text-[#C71585]">
                      Sapatilhas
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/ofertas" className="font-semibold text-[#FFD700] hover:text-[#FF6B35] transition-colors">
                Ofertas
              </Link>

              <Link href="/lancamentos" className="font-semibold text-white hover:text-[#32CD32] transition-colors">
                Lançamentos
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar produtos..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent rounded-full"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:text-[#C71585] hover:bg-white/10">
                <Heart className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:text-[#FF6B35] hover:bg-white/10">
                <User className="h-5 w-5" />
              </Button>

              <Link href="/carrinho">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-white hover:text-[#32CD32] hover:bg-white/10"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-[#FF6B35] hover:bg-[#FF6B35]">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-900 border-white/10">
                  <nav className="flex flex-col space-y-6 mt-8">
                    <Link href="/masculino" className="text-lg font-semibold text-white hover:text-[#FF6B35]">
                      Masculino
                    </Link>
                    <Link href="/feminino" className="text-lg font-semibold text-white hover:text-[#C71585]">
                      Feminino
                    </Link>
                    <Link href="/ofertas" className="text-lg font-semibold text-[#FFD700] hover:text-[#FF6B35]">
                      Ofertas
                    </Link>
                    <Link href="/lancamentos" className="text-lg font-semibold text-white hover:text-[#32CD32]">
                      Lançamentos
                    </Link>
                    <Link href="/conta" className="text-lg font-semibold text-white hover:text-[#FF6B35]">
                      Minha Conta
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
