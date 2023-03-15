// ——— Get Initial Text from name ——————— //

export const getInitialName = fullName =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fullName
    .split(" ")
    .map(n => n[0])
    .join('')

export const avatarText = value => {
  if (!value) return ''
  const nameArray = value.split(' ')

  return nameArray.map(word => word.charAt(0).toUpperCase()).join('')
}

export const kFormatter = (num, fraction = 2) => (
  num > 999 ? `${(num / 1000).toFixed(fraction)}k` : num
  )

// *===============================================---*
// *--------- UI ---------------------------------------*
// *===============================================---*

export const resolveUserRoleVariant = role => {
  if (role === 'subscriber') return 'primary'
  if (role === 'author') return 'warning'
  if (role === 'maintainer') return 'success'
  if (role === 'editor') return 'info'
  if (role === 'admin') return 'error'

  return 'primary'
}

export const resolveUserStatusVariant = status => {
  if (status === 'pending') return 'warning'
  if (status === 'active') return 'success'
  if (status === 'inactive') return 'secondary'

  return 'primary'
}