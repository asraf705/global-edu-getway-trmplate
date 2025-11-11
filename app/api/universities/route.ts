import { NextResponse } from 'next/server'

// Comprehensive list of Russian universities
const universities = [
  { id: 1, name: 'Moscow State University', city: 'Moscow', abbreviation: 'MSU' },
  { id: 2, name: 'St. Petersburg State University', city: 'St. Petersburg', abbreviation: 'SPbSU' },
  { id: 3, name: 'Novosibirsk State University', city: 'Novosibirsk', abbreviation: 'NSU' },
  { id: 4, name: 'Kazan Federal University', city: 'Kazan', abbreviation: 'KFU' },
  { id: 5, name: 'Tomsk State University', city: 'Tomsk', abbreviation: 'TSU' },
  { id: 6, name: 'Ural Federal University', city: 'Yekaterinburg', abbreviation: 'UrFU' },
  { id: 7, name: 'Peoples\' Friendship University', city: 'Moscow', abbreviation: 'RUDN' },
  { id: 8, name: 'Siberian Federal University', city: 'Krasnoyarsk', abbreviation: 'SibFU' },
  { id: 9, name: 'Southern Federal University', city: 'Rostov-on-Don', abbreviation: 'SFU' },
  { id: 10, name: 'Far Eastern Federal University', city: 'Vladivostok', abbreviation: 'FEFU' },
  { id: 11, name: 'ITMO University', city: 'St. Petersburg', abbreviation: 'ITMO' },
  { id: 12, name: 'Moscow Institute of Physics and Technology', city: 'Moscow', abbreviation: 'MIPT' },
  { id: 13, name: 'Higher School of Economics', city: 'Moscow', abbreviation: 'HSE' },
  { id: 14, name: 'Peter the Great St. Petersburg Polytechnic University', city: 'St. Petersburg', abbreviation: 'SPbPU' },
  { id: 15, name: 'Bauman Moscow State Technical University', city: 'Moscow', abbreviation: 'BMSTU' },
  { id: 16, name: 'Moscow Aviation Institute', city: 'Moscow', abbreviation: 'MAI' },
  { id: 17, name: 'Kazan State Medical University', city: 'Kazan', abbreviation: 'KSMU' },
  { id: 18, name: 'Sechenov University', city: 'Moscow', abbreviation: 'Sechenov' },
  { id: 19, name: 'Novosibirsk Technical University', city: 'Novosibirsk', abbreviation: 'NSTU' },
  { id: 20, name: 'Samara University', city: 'Samara', abbreviation: 'SamaraU' },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')
    const search = searchParams.get('search')

    let filteredUniversities = universities

    // Filter by city if provided
    if (city && city !== 'all') {
      filteredUniversities = filteredUniversities.filter((uni) => uni.city === city)
    }

    // Filter by search query if provided
    if (search) {
      const query = search.toLowerCase()
      filteredUniversities = filteredUniversities.filter(
        (uni) =>
          uni.name.toLowerCase().includes(query) ||
          uni.abbreviation.toLowerCase().includes(query) ||
          uni.city.toLowerCase().includes(query)
      )
    }

    // Sort alphabetically
    filteredUniversities.sort((a, b) => a.name.localeCompare(b.name))

    return NextResponse.json({
      success: true,
      data: filteredUniversities,
      count: filteredUniversities.length,
      total: universities.length,
    })
  } catch (error) {
    console.error('Error fetching universities:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch universities' },
      { status: 500 }
    )
  }
}

