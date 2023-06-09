import { Reorder } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const profilesData = [
  {
    id: 'o',
    firstName: 'Beby',
    lastName: 'Jovancy',
    profilePictureURL: '',
  },
  {
    id: 't',
    firstName: 'Aisyah',
    lastName: 'Zidni',
    profilePictureURL: '',
  },
  {
    id: 'p',
    firstName: 'Nirmala',
    lastName: 'Azalea',
    profilePictureURL: '',
  },
  {
    id: 'z',
    firstName: 'Bena',
    lastName: 'Kane',
    profilePictureURL: '',
  },
  {
    id: 'y',
    firstName: 'Firmino',
    lastName: 'Kudo',
    profilePictureURL: '',
  },
]
const ProfilesSlider = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const middleIndex = Math.round(profiles.length % 2);

  return (
    <ul className="grid grid-cols-5 gap-5">
      { profiles.map((profile, index) => (
        <ul
          key={profile.id}
          className={`text-center ${index === middleIndex ? 'bg-yellow-500' : ''}`}
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1663852297801-d277b7af6594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Unsplash"
            placeholder="blur"
            blurDataURL={"data:image/jpeg"}
            height={124}
            width={124}
            style={{ objectFit: 'cover' }}
            className="rounded-full border-2 border-white overflow-hidden w-32 h-32 mb-3 mx-auto"
          />
          <p className="text-white text-center">{ profile.firstName + ' ' + profile.lastName }</p>
        </ul>
      ))}
    </ul>
  )
}

export default ProfilesSlider;
