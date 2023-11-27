import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo.png'
import {Divider, Image} from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', background:'rgba(0,0,0,0.3', height:'100vh'}}>
      <div style={{width:'800px',height:'445px', borderRadius:'20px', background:'#FFF8EA', display:'flex'}}>
      <WrapperContainerLeft>
        <h2>Cái Quán Cà Phê Chào Bạn Nhaa!</h2>
        <p style={{fontSize:'18px'}}>Đăng Nhập</p>
        <div style={{marginBottom:'20px'}}>
          <InputForm placeholder="Tài khoản nèee" />
        </div>
        <div style={{position:'relative'}}>
          <span onClick={() => setIsShowPassword(!isShowPassword)} style={{zIndex:10, position:'absolute', top:'4px', right:'8px'}}>
          {
            isShowPassword ? (
              <EyeFilled/>
            ) : (
              <EyeInvisibleFilled />
            )
          }
          </span>
          <InputForm placeholder="password" type={isShowPassword?"text":"password"}/>
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
                <p style={{marginTop:'10px'}}><WrapperTextLight>Bạn quên mật khẩu phải hem?</WrapperTextLight></p>
                <p><WrapperTextLight>Chưa có tài khoản phải hem? </WrapperTextLight><WrapperTextLight><u>Tạo mới liềnnnn</u></WrapperTextLight></p>
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

export default SignInPage