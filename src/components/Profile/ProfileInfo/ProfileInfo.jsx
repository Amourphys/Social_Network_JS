import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
          <div className={p.profileHeader}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="headerimage"/>
          </div>
          <div className={p.description}>
            ava + description
          </div>
          
      </div>
    )
}

export default ProfileInfo;