import cron from 'node-cron'

const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active',
    membershipExpires: '2026-11-15',
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@gmail.com',
    status: 'inactive',
    membershipExpires: '2026-11-20',
  },
  {
    id: 3,
    name: 'Shannon Jackson',
    email: 'shannon@gmail.com',
    status: 'active',
    membershipExpires: '2026-11-10',
  },
]

const diasRestantes = fecha => {
  const hoy = new Date()
  const caducidad = new Date(fecha)
  return Math.ceil((caducidad - hoy) / (1000 * 60 * 60 * 24))
}

cron.schedule('0 8 * * *', () => {
  console.log('Buenos días! Son las 08:00')
})

cron.schedule('*/2 * * * *', () => {
  console.log('===== INFORME DE MEMBRESÍAS =====')

  members.forEach(member => {
    const dias = diasRestantes(member.membershipExpires)

    if (dias < 0) {
      console.log(`${member.name}: caducada hace ${Math.abs(dias)} días`)
    } else {
      console.log(`${member.name}: caduca en ${dias} días`)
    }
  })
})
