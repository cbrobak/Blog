// "use client"

export default function BlogPage({ params }) {
  console.log("params: ", params)
  return (
    <div className="">Hello {params.slug}</div>
  )
}