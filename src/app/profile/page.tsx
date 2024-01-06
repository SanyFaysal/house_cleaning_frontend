'use client'

import PageLayout from "@/components/layout/PageLayout"
import { useAppSelector } from "@/redux/hook"

export default function page() {
  const { user } = useAppSelector(state => state.auth)
  return (
    <PageLayout>
      <div className="flex flex-col border p-5 justify-center items-center">
        <h1>{user?.fullName}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.role}</h1>
      </div>
    </PageLayout>
  )
}
