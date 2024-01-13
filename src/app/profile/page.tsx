'use client'

import PageLayout from "@/components/layout/PageLayout"
import Profile from "@/components/profile_component/Profile"
import { useAppSelector } from "@/redux/hook"

export default function page() {
  const { user } = useAppSelector(state => state.auth)
  return (
    <PageLayout>
      <Profile />
    </PageLayout>
  )
}
