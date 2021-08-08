import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <div>
          <img src='data:image/jpeg;base64,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' />
        </div>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} />
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;