import { NextResponse } from 'next/server'
import { aboutData } from '../../../src/data/about'

export async function GET() {
  return NextResponse.json(aboutData)
}
