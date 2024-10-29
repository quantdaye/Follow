import { setWhoami } from "@client/atoms/user"
import { setIntegrationIdentify } from "@client/initialize/helper"
import { useSession } from "@client/query/auth"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"

export function Component() {
  return (
    <>
      <UserProvider />
      <Outlet />
    </>
  )
}

const UserProvider = () => {
  const { session } = useSession()

  useEffect(() => {
    if (!session?.user) return
    setWhoami(session.user)

    setIntegrationIdentify(session.user)
  }, [session?.user])

  return null
}