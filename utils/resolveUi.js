export const resolveCommonColor = status => {
    if (status === 'paid')      return 'info'
    if (status === 'active')    return 'warning'
    if (status === 'pending')   return 'error'

    return 'secondary'
}