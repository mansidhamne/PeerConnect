import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select the year and branch" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>First Year</SelectLabel>
          <SelectItem value="est">Computer Engineering (CE)</SelectItem>
          <SelectItem value="cst">Computer Science and Engineering (CSE)</SelectItem>
          <SelectItem value="mst">Electronics and Telecommunication Engineering (EXTC)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Second Year</SelectLabel>
          <SelectItem value="est">Computer Engineering (CE)</SelectItem>
          <SelectItem value="cst">Computer Science and Engineering (CSE)</SelectItem>
          <SelectItem value="mst">Electronics and Telecommunication Engineering (EXTC)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Third Year</SelectLabel>
          <SelectItem value="est">Computer Engineering (CE)</SelectItem>
          <SelectItem value="cst">Computer Science and Engineering (CSE)</SelectItem>
          <SelectItem value="mst">Electronics and Telecommunication Engineering (EXTC)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Fourth Year</SelectLabel>
          <SelectItem value="est">Computer Engineering (CE)</SelectItem>
          <SelectItem value="cst">Computer Science and Engineering (CSE)</SelectItem>
          <SelectItem value="mst">Electronics and Telecommunication Engineering (EXTC)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
