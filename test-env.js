require('dotenv').config({ path: '.env.local' })

console.log('🔍 Testing Environment Variables...\n')

const requiredVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY'
]

let allPresent = true

for (const varName of requiredVars) {
  const value = process.env[varName]
  if (value) {
    console.log(`✅ ${varName}: ${value.substring(0, 20)}...`)
  } else {
    console.log(`❌ ${varName}: MISSING`)
    allPresent = false
  }
}

console.log('\n📊 Result:')
if (allPresent) {
  console.log('🎉 All required environment variables are present!')
  console.log('\nYour Supabase connection should now work properly.')
  console.log('Try running: npm run dev')
} else {
  console.log('⚠️  Some environment variables are missing.')
  console.log('\nPlease check your .env.local file contains all required variables.')
} 