import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import love from '../../assets/images/Love.png'
import passion from '../../assets/images/Passion.png'
import respect from '../../assets/images/Respect.png'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const HomePage = () => {
  const arr = ['Cà Phê', 'Trà', 'Đá Xay', 'Cacao & Chocolate', 'Mocktails', 'Cocktails']

  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
      </div>

      <div id="container" style={{ backgroundColor: '#FFF8EA', padding: '0 120px', height: '1200px', width: '100%' }}>
        <SliderComponent arrImages={[love, passion, respect]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>

        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
          <WrapperButtonMore
            textButton="Xem thêm"
            type="outline"
            styleButton={{ border: '1px solid rgb(11,116,229)', color: 'rgb(11,116,229)', width: '240px', height: '38px', borderRadius: '5px' }}
            styleTextButton={{ fontWeight: '500' }}
          />
        </div>

        {/* <NavbarComponent/> */}
      </div>
    </>
  )
}

export default HomePage
