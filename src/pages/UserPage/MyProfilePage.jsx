import BodyContainer from '@/features/user/components/BodyContainer';
import MyProfileContainer from '@/features/user/components/MyProfileContainer';
import UserProfileContainer from '@/features/user/components/UserProfileContainer';
import Header from '@/layouts/Header';
import { getUserById } from '@/redux/slice/user-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function MyProfilePage() {
  const { authUser } = useSelector((state) => state.auth);

  return (
    <>
      <video
        className='-z-50'
        autoPlay
        loop
        muted
        style={{
          opacity: '0.8',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        {/* <source src='https://rr3---sn-o097znzk.googlevideo.com/videoplayback?expire=1710182672&ei=sPzuZan6O7Oui9oP9NuqwA4&ip=178.175.129.37&id=o-AAqtem8qrqPgA3s7X8BAttxo4h8xx5bVWThHGl595HmN&itag=247&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9f2yJ9hGlxU9bSe1Slk8gM8yirdZ-QeyJcgj4wC7RbUM&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=259465358&dur=1818.000&lmt=1602450854976630&keepalive=yes&fexp=24007246&c=ANDROID&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAOoIVwp_LlYB_idsmOtwbVtjb8O70YUXmqL85gkT0bpoAiBBy469pSDCRv5TywucMBtq0a-bYWmeaT-MNIcHaCP67g%3D%3D&rm=sn-pouxga5o-vu2s76,sn-4g5eks76&req_id=19d213dffb4da3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=PY&mip=118.175.138.177&mm=29&mn=sn-o097znzk&ms=rdu&mt=1710160509&mv=D&mvi=3&pl=0&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=APTiJQcwRgIhAO2BpH8j8wDa4GMXl0TX5D62qle_idxrLxMqvjqINW0nAiEAnTxOLNGKgv_LA46VGrGx9L-DS19LpBuL8e86kL4so_U%3D' /> */}
        <source src='https://rr2---sn-uvu-c33ek.googlevideo.com/videoplayback?expire=1710183600&ei=UADvZe3_F5_82_gPxZO0yAo&ip=102.129.152.110&id=o-AO0hFHSE05LhFVwPM8miwhw3li68Rf7eTHmxQZQVRpqC&itag=271&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9fxQ3HUk_eMTEp3uVnW3lFKeWrC9RC79z0zmxK0yrSUA&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=1770648201&dur=1812.000&lmt=1654874201427572&keepalive=yes&fexp=24007246&c=ANDROID&txp=5311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAINRMD0bDhrhCXlQ0Ly4L0yYfMbJB6K4kzmL8SEt_fyZAiA5gMksTTF7DnbPPaafNjraIz5r8jpeDJEdstTxRjXldA%3D%3D&redirect_counter=1&rm=sn-q4fezk7s&req_id=54a71642355fa3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=5e&mip=118.175.138.177&mm=31&mn=sn-uvu-c33ek&ms=au&mt=1710161578&mv=m&mvi=2&pcm2cms=yes&pl=26&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=APTiJQcwRQIhALvLSADHO7kSxJHMWSKJoIFyzyHsQpFHj7hYn2GDoq6OAiApwqKiwkZmUc15wl1eajW0dCHToSf1mVdInTv0YOngew%3D%3D' />
      </video>
      <div className='container grid h-screen grid-flow-row gap-4'>
        <MyProfileContainer user={authUser} />

        <BodyContainer user={authUser} />
      </div>
    </>
  );
}
