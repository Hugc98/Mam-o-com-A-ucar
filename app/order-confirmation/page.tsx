import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"

export default function OrderConfirmationPage() {
  const orderNumber = "SS-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Order Number:</span>
              <span className="font-mono font-bold">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Delivery:</span>
              <span>5-7 business days</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Mail className="w-8 h-8 text-blue-500 mb-2" />
            <h3 className="font-semibold mb-1">Confirmation Email</h3>
            <p className="text-sm text-muted-foreground text-center">Check your email for order details</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Package className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="font-semibold mb-1">Processing</h3>
            <p className="text-sm text-muted-foreground text-center">Your order is being prepared</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Truck className="w-8 h-8 text-green-500 mb-2" />
            <h3 className="font-semibold mb-1">Shipping</h3>
            <p className="text-sm text-muted-foreground text-center">Track your package when shipped</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Continue Shopping</Button>
          </Link>
          <Link href="/account/orders">
            <Button variant="outline" size="lg">
              View Order Status
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
