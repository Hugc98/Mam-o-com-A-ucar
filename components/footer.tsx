import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-full flex items-center justify-center">
                <span className="text-white font-black text-lg">M</span>
              </div>
              <span className="font-black text-xl bg-gradient-to-r from-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">
                Mamão com Açúcar
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              A loja de calçados mais tropical do Brasil. Estilo, conforto e qualidade em cada passo.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C71585] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#32CD32] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#FF6B35]">Comprar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/masculino" className="text-white/70 hover:text-white transition-colors">
                  Masculino
                </Link>
              </li>
              <li>
                <Link href="/feminino" className="text-white/70 hover:text-white transition-colors">
                  Feminino
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-white/70 hover:text-white transition-colors">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/lancamentos" className="text-white/70 hover:text-white transition-colors">
                  Lançamentos
                </Link>
              </li>
              <li>
                <Link href="/mais-vendidos" className="text-white/70 hover:text-white transition-colors">
                  Mais Vendidos
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#C71585]">Atendimento</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contato" className="text-white/70 hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/entrega" className="text-white/70 hover:text-white transition-colors">
                  Entrega e Frete
                </Link>
              </li>
              <li>
                <Link href="/trocas-devolucoes" className="text-white/70 hover:text-white transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="/guia-tamanhos" className="text-white/70 hover:text-white transition-colors">
                  Guia de Tamanhos
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-white/70 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#32CD32]">Contato</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span>contato@mamaocomacucar.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>

            <h4 className="font-semibold mb-3 text-[#FFD700]">Newsletter</h4>
            <p className="text-white/70 mb-4 text-sm">Receba ofertas exclusivas</p>
            <div className="flex gap-2">
              <Input
                placeholder="Seu e-mail"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm"
              />
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF8E53] hover:to-[#FFD700] px-4">
                OK
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-[#FFD700]">Formas de Pagamento</h4>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="bg-white/10 px-3 py-1 rounded">PIX</span>
                <span className="bg-white/10 px-3 py-1 rounded">Boleto</span>
                <span className="bg-white/10 px-3 py-1 rounded">Cartão</span>
                <span className="bg-white/10 px-3 py-1 rounded">Parcelamos em até 12x</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-[#32CD32]">Segurança</h4>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="bg-white/10 px-3 py-1 rounded">SSL</span>
                <span className="bg-white/10 px-3 py-1 rounded">Site Seguro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2024 Mamão com Açúcar. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  )
}
