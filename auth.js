import { KEYS, ALLOW_ROLES } from "@/constants"
import { ROUTE } from "@/constants/route"
import { decodeToken } from "@/utils"
import Cookies from "js-cookie"

export default ({ redirect, $fireAuth, route }) => {
  const accessToken = Cookies.get(KEYS.ACCESS_TOKEN)

  if (
    !$fireAuth.currentUser ||
    !accessToken ||
    !ALLOW_ROLES.includes(decodeToken(accessToken)?.role)
  ) {
    return redirect(`${ROUTE.LOGIN}?redirect=${route.fullPath}`)
  }
}
