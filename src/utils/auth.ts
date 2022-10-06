import awsExports from '../aws-exports'

export const logout = () => {
  const logoutUrl = new URL(`https://${awsExports.oauth.domain}/logout`)
  logoutUrl.searchParams.append('client_id', awsExports.aws_user_pools_web_client_id)
  logoutUrl.searchParams.append('logout_uri', awsExports.oauth.redirectSignOut)

  window.location.href = logoutUrl.href
}
