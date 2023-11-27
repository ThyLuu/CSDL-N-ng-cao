import React from 'react'
import {Col,Row,Image, Card, Space, InputNumber} from 'antd'
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber, WrapperBtnQualityProduct, WrapperContentProduct } from './style'
import imageProduct from '../../assets/images/coffee-1.jpg'
import {StarFilled, PlusOutlined, MinusOutlined} from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const ProductDetailsComponent = () => {
    const onChange = () =>{

    }

  return (
   <Row style={{padding:'5px', width:'100%', backgroundColor:'#fff'}}>
        <Col span={10}>
            <Image src={imageProduct} alt='Image Product' preview={true}/>
        </Col>

        <Col span={14} style={{paddingLeft:'20px', marginBottom:'10px'}}>
        <WrapperStyleNameProduct>Espresso </WrapperStyleNameProduct>

        <div>
            <StarFilled style={{fontsize:'12px',color:'rgb(253,216,54)'}} />
            <StarFilled style={{fontsize:'12px',color:'rgb(253,216,54)'}} />
            <StarFilled style={{fontsize:'12px',color:'rgb(253,216,54)'}} />
            <WrapperStyleTextSell>|Đã bán 1000+</WrapperStyleTextSell>
        </div>
            
            <WrapperPriceProduct>
            <WrapperPriceTextProduct>70.000 VNĐ</WrapperPriceTextProduct>
            </WrapperPriceProduct>

            <WrapperContentProduct>
                <div>Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la xay nhuyễn.</div>
            </WrapperContentProduct>

            <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className="address">Quận 1, phường Bến Nghé </span> - 
                <span className="change-address"> Đổi địa chỉ </span>
            </WrapperAddressProduct>

            <div>
                <div style={{fontSize:'20px', marginTop:'30px', marginBottom:'15px'}}>Số lượng</div>
                <div>
                <WrapperQualityProduct>
                    <button style={{border:'none'}}>
                        <MinusOutlined  style={{color: '#000', fontSize:'14px'}} />
                    </button>

                    <InputNumber defaultValue={1} onChange={onChange} size="small" />
                    
                    <button style={{border:'none'}}>
                     <PlusOutlined  style={{color: '#000', fontSize:'14px'}}/>
                   </button>
                </WrapperQualityProduct>
                </div>
            </div>

            <div style={{display:'flex', alignItem:'center',gap:'12px', marginTop:'40px'}}>
                <ButtonComponent
                    size = {20}
                    styleButton = {{background: '#a0816c',
                    height:'48px',
                    width:'220px'
                
                }}
                    textButton = {'Đặt hàng'}
                    styleTextButton = {{color: '#fff'}} 
                >
                </ButtonComponent>


                
            </div>
        </Col>
    </Row>


  )
}

export default ProductDetailsComponent
