import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo.png'
import {Divider, Image} from 'antd'
import { useState } from 'react'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', background:'rgba(0,0,0,0.3', height:'100vh'}}>
    <div style={{width:'800px',height:'445px', borderRadius:'20px', background:'#FFF8EA', display:'flex'}}>
    <WrapperContainerLeft>
      <h2>Cái Quán Cà Phê Chào Bạn Nhaa!</h2>
      <p style={{fontSize:'18px'}}>Đăng Nhập</p>
      <div style={{marginBottom:'20px'}}>
        <InputForm placeholder="Nhập Tài khoản" />
      </div>
      <div  style={{marginBottom:'20px', position:'relative'}}>
        <span  onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}>
                {
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }

        </span>
        <InputForm placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"}/>
      </div>
      <div style={{ position: 'relative' }}>
      <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
        <InputForm placeholder="comfirm password" type={isShowConfirmPassword ? "text" : "password"}/>
      </div>
      
      <ButtonComponent
                  size = {20}
                  styleButton = {{background: '#a0816c',
                  height:'48px',
                  width:'100%',
                  margin:'26px 0 10px '
              
              }}
                  textButton = {'Đăng Nhập'}
                  styleTextButton = {{color: '#fff'}} 
              >
              </ButtonComponent>
              <p><WrapperTextLight>Đã có tài khoản rùi phải hem? </WrapperTextLight><WrapperTextLight><u>Nhấn sang đây nhaa</u></WrapperTextLight></p>
    </WrapperContainerLeft>

    <WrapperContainerRight>
           <Image 
            src={imageLogo} 
            alt='Logo-Cái-Quán-Cà-Phê' 
            preview={false}
            height="300px" 
            width="300px"/>
    </WrapperContainerRight>
  </div>

  </div>
  )
}

export default SignUpPage
