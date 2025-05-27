import ComponentsHeader from '../ComponentsHeader/ComponentsHeader'
import userManagementSystemAbout from "../../assets/userManagementSystemAbout.webp"
import style from './About.module.css'

export default function About() {
  return (
    <>
      <ComponentsHeader title='About us' />
      <section>
        <div className={`row ${style.AboutUsSection}`}>
          <div className='col-12 col-md-6'>
            <div className='h-100' style={{ backgroundImage: `url(${userManagementSystemAbout})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundOrigin: "border-box",backgroundPosition:"center center" }}></div>
          </div>
          <div className='col-12 col-md-6 ps-4'>
            <div className=' px-4 py-4 d-flex h-100 justify-content-center flex-column'>
              <h2 className='mb-3'> Our Story</h2>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe voluptas et minima sit quos laboriosam ab architecto, sequi, quisquam alias accusantium explicabo officia quae eius sunt iure necessitatibus? Architecto dolorum qui eligendi odio fugit. Ipsam repellendus cum possimus sint fugit quod rerum minima nulla, porro recusandae ipsum harum quaerat, non ea inventore itaque atque sed necessitatibus facilis pariatur. Maiores voluptatem sit, mollitia aliquam provident expedita pariatur! Quae debitis reiciendis amet tempore modi earum explicabo non, deserunt perferendis pariatur voluptatibus molestiae eos iure aut accusamus sapiente reprehenderit ad magni doloremque asperiores illo eum porro quo! Earum obcaecati officia explicabo cupiditate.
              </small>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
