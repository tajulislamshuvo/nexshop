"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#063c28]">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions about your order or need help? Our team is here to assist you.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <Card className="shadow-md border border-gray-100">
            <CardContent className="p-6 space-y-5">
              <h2 className="text-2xl font-semibold text-darkColor">
                Send a Message
              </h2>

              <Input placeholder="Your Name" />

              <Input type="email" placeholder="Your Email" />

              <Textarea placeholder="Your Message" rows={5} />

              <Button className="w-full bg-shop_light_green hover:bg-[#2f7d30] text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            
            <Card className="bg-[#f1f3f8] border-none">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-shop_dark_green">
                  📍 Address
                </h3>
                <p className="text-gray-700">
                  Dhaka, Bangladesh
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#f1f3f8] border-none">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-shop_dark_green">
                  📧 Email
                </h3>
                <p className="text-gray-700">
                  support@nexshop.com
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#f1f3f8] border-none">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-shop_dark_green">
                  📞 Phone
                </h3>
                <p className="text-gray-700">
                  +880 1234-567890
                </p>
              </CardContent>
            </Card>

            {/* Extra trust note */}
            <div className="p-5 rounded-xl bg-shop_dark_green text-white">
              <p className="text-sm">
                Our support team usually responds within 24 hours.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}