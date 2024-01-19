'use client'

import Link from "next/link"
import CommonPageTitle from "../ui/CommonPageTitle"
import { Button } from "antd"
import Profile from "./Profile"
import { useParams } from "next/navigation"
import { useAppSelector } from "@/redux/hook"


export default function DashboardProfile() {
  const { user } = useAppSelector(state => state.auth);
  const params = useParams();

  const handleEditProfile = () => {
    const id = user?.id;
    const data = {
      id

    };

  }
  return (
    <>
      <CommonPageTitle title='Profile' items={
        [
          { title: <Link href={`/`}>Home</Link> },
          { title: <p className=''>Profile</p> },
        ]
      } >
        <div >
          <Button onClick={handleEditProfile}>Edit Profile</Button>
        </div>

      </CommonPageTitle>
      <Profile />
    </>
  )
}
