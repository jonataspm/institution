import { ProfileImage } from "../../images"


const HomeContent = () => {
  return (
    <div style={{ margin: 16 }}>
      <h1>Dashboard</h1>
      <div className='displayContent1'>
        <img src={ProfileImage['fakeDash']} alt="" />
        </div>
    </div>
  )
}

export default HomeContent
