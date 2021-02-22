import React, {Component} from 'react'
import logo from './../logo1.png'
export default class Header extends Component {
    render()
    {
        return (
            <div>
            <div class="cme__header">
                <div class="cme__header__wrapper">
                    <div class="cme__header__content">
                        <div class="logo__cme"> <img src={logo} alt=""/> </div>
                        <p class="cme__header__title__logo">HỘI CHÉM GIÓ VIỆT NAM</p>
                        <h3 class="cme__header__title">CHƯƠNG TRÌNH</h3>
                        <h3 class="cme__header__title1">REACT 2021</h3>
                    </div>
                    <div class="cme__address">
                    
                            <h4>Đà Nẵng, 1/2021</h4>
                
                    </div>
                </div>
            </div>
        </div>
        )
       
    }
}