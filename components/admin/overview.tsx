"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", members: 400, events: 24 },
  { name: "Feb", members: 300, events: 13 },
  { name: "Mar", members: 200, events: 18 },
  { name: "Apr", members: 278, events: 39 },
  { name: "May", members: 189, events: 48 },
  { name: "Jun", members: 239, events: 38 },
  { name: "Jul", members: 349, events: 43 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="members" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="events" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

