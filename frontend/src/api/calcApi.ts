import type { CalcRequest, CalcResponse } from "../types/calc"

const API_URL = "http://localhost:8080/api/calc"


export async function calculate(
  request: CalcRequest
): Promise<CalcResponse> {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error)
  }

  return data
}