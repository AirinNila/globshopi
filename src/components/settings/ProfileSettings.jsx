"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaEdit } from "react-icons/fa"
import { CiLock, CiUser } from "react-icons/ci"
import { IoIosCall } from "react-icons/io"
import { AiOutlineMail } from "react-icons/ai"

export default function ProfileSettings() {
  const [twoFactor, setTwoFactor] = useState(true)

  return (
    <div className=" p-3 lg:p-7 mx-3 my-3  lg:mx-10 lg:my-10 border border-[#D1D1D6] rounded-2xl ">
      <h2 className="text-lg  font-semibold mb-4">Profile/Settings</h2>

      <Card className="rounded-2xl border-[#D1D1D6] shadow-sm">
        <CardContent className="p-6">
          {/* Profile Header */}
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center gap-4">
              <Avatar className="h-30 w-30 rounded-xl">
                <AvatarImage src="/avater.png" />
                <AvatarFallback>RI</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">Roky Islam</h3>
                <p className="text-sm text-gray-500">michelle.rivera@example.com</p>
                <p className="text-sm text-gray-500">+880123456789</p>
              </div>
            </div>
            <Button variant="outline" className="rounded-full normal bg-[#007AFF] text-white  items-center flex gap-2">
           Edit Profile <FaEdit/>
            </Button>
          </div>

          {/* Form */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className=" relative lg:col-span-2">
              <Label>Full Name</Label>
              <Input placeholder="Enter Your Name"  className=' border border-[#D1D1D6] rounded-full pl-8 bg-[#D1D1D6] mt-2'/>
              <span className=" absolute top-9 left-3 "><CiUser /></span>
            </div>
            <div className="relative">
              <Label>Email</Label>
              <Input placeholder="Enter Your Email" className=' border border-[#D1D1D6] rounded-full pl-8 bg-[#D1D1D6] mt-2'/>
               <span className=" absolute top-9 left-3 "><AiOutlineMail /></span>
            </div>
            <div className="relative">
              <Label>Mobile</Label>
              <Input placeholder="Enter Your Mobile Number" className=' border border-[#D1D1D6] pl-8 rounded-full bg-[#D1D1D6] mt-2'/>
               <span className=" absolute top-9 left-3 "><IoIosCall/></span>
            </div>
           
            <div className="relative">
              <Label>Password</Label>
              <Input type="password" placeholder="******" className=' border border-[#D1D1D6]  pl-8 rounded-full bg-[#D1D1D6] mt-2 ' />
               <span className=" absolute top-9 left-3 "><CiLock /></span>
            </div>
             <div className="relative">
              <Label>Confirm Password</Label>
              <Input type="password" placeholder="******"  className=' border border-[#D1D1D6] pl-8 rounded-full bg-[#D1D1D6] mt-2'/>
               <span className=" absolute top-9 left-3 "><CiLock /></span>
            </div>
          </div>

          {/* Two Factor Auth */}
          <div className="mt-6 flex items-center justify-between bg-pink-100 p-4 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="bg-pink-200 p-2 rounded-full">
                <CiLock />
              </span>
              <span className="font-medium">Two Factor Auth</span>
            </div>
          <Switch
  checked={twoFactor}
  onCheckedChange={setTwoFactor}
  className={`
    relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full 
    border-2 border-transparent transition-colors duration-200 ease-in-out
    data-[state=checked]:bg-green-500
    data-[state=unchecked]:bg-gray-300
  `}
>
  <span
    className={`
      pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
      data-[state=checked]:translate-x-6
      data-[state=unchecked]:translate-x-0
    `}
  />
</Switch>
          </div>

          {/* Save Button */}
          <Button className="w-full mt-6 text-white rounded-full bg-blue-600 hover:bg-blue-700">
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
