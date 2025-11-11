import { NextResponse } from 'next/server'

// Comprehensive list of Russian cities with student communities
const cities = [
  { id: 1, name: 'Moscow', region: 'Central Federal District', population: '12.5M', universities: 50 },
  { id: 2, name: 'St. Petersburg', region: 'Northwestern Federal District', population: '5.4M', universities: 30 },
  { id: 3, name: 'Novosibirsk', region: 'Siberian Federal District', population: '1.6M', universities: 15 },
  { id: 4, name: 'Kazan', region: 'Volga Federal District', population: '1.2M', universities: 20 },
  { id: 5, name: 'Yekaterinburg', region: 'Ural Federal District', population: '1.5M', universities: 18 },
  { id: 6, name: 'Nizhny Novgorod', region: 'Volga Federal District', population: '1.2M', universities: 12 },
  { id: 7, name: 'Chelyabinsk', region: 'Ural Federal District', population: '1.1M', universities: 10 },
  { id: 8, name: 'Samara', region: 'Volga Federal District', population: '1.1M', universities: 14 },
  { id: 9, name: 'Omsk', region: 'Siberian Federal District', population: '1.1M', universities: 11 },
  { id: 10, name: 'Rostov-on-Don', region: 'Southern Federal District', population: '1.1M', universities: 13 },
  { id: 11, name: 'Ufa', region: 'Volga Federal District', population: '1.1M', universities: 9 },
  { id: 12, name: 'Krasnoyarsk', region: 'Siberian Federal District', population: '1.0M', universities: 8 },
  { id: 13, name: 'Voronezh', region: 'Central Federal District', population: '1.0M', universities: 10 },
  { id: 14, name: 'Perm', region: 'Volga Federal District', population: '1.0M', universities: 7 },
  { id: 15, name: 'Volgograd', region: 'Southern Federal District', population: '1.0M', universities: 9 },
  { id: 16, name: 'Krasnodar', region: 'Southern Federal District', population: '0.9M', universities: 8 },
  { id: 17, name: 'Saratov', region: 'Volga Federal District', population: '0.8M', universities: 7 },
  { id: 18, name: 'Tyumen', region: 'Ural Federal District', population: '0.8M', universities: 6 },
  { id: 19, name: 'Tomsk', region: 'Siberian Federal District', population: '0.6M', universities: 5 },
  { id: 20, name: 'Vladivostok', region: 'Far Eastern Federal District', population: '0.6M', universities: 6 },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const region = searchParams.get('region')

    let filteredCities = cities

    // Filter by region if provided
    if (region && region !== 'all') {
      filteredCities = filteredCities.filter((city) => city.region === region)
    }

    // Filter by search query if provided
    if (search) {
      const query = search.toLowerCase()
      filteredCities = filteredCities.filter(
        (city) =>
          city.name.toLowerCase().includes(query) ||
          city.region.toLowerCase().includes(query)
      )
    }

    // Sort alphabetically
    filteredCities.sort((a, b) => a.name.localeCompare(b.name))

    return NextResponse.json({
      success: true,
      data: filteredCities,
      count: filteredCities.length,
      total: cities.length,
    })
  } catch (error) {
    console.error('Error fetching cities:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch cities' },
      { status: 500 }
    )
  }
}

