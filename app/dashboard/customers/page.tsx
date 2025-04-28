async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function Page() {
  await delay(2000) // Simulate a delay of 2 seconds
  return <p>Customers Page</p>
}
