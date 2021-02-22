import React, {Component} from 'react'
import avatar from './../avatar.jpg'
export default class Organizer extends Component {
    render()
    {
        return (
        <div>
          <div class="organizer">
                 <div class="organizer__title">THAM GIA ĐÀO TẠO</div>
                 <div class="dash"></div>
                 <div class="organizer__content">
                    <div class="orgranizer__container">
                        <div class="person">
                            <div class="avatar">
                                <img src={avatar} alt="" />
                            </div>
                            <div class="person__content">
                               <h1>VÕ VĂN BI</h1>
                               <p>Dev backend</p>
                            </div>
                        </div>
                    </div>
                    <div class="orgranizer__container">
                        <div class="person">
                            <div class="avatar">
                                <img src={avatar} alt="" />
                            </div>
                            <div class="person__content">
                               <h1>VÕ VĂN BI</h1>
                               <p>Dev backend</p>
                            </div>
                        </div>
                    </div>
                    <div class="orgranizer__container">
                        <div class="person">
                            <div class="avatar">
                                <img src={avatar} alt="" />
                            </div>
                            <div class="person__content">
                               <h1>VÕ VĂN BI</h1>
                               <p>Dev backend</p>
                            </div>
                        </div>
                    </div>
                     <div class="orgranizer__container">
                        <div class="person">
                            <div class="avatar">
                                <img src={avatar} />
                            </div>
                            <div class="person__content">
                               <h1>VÕ VĂN BI</h1>
                               <p>Dev backend</p>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
        </div>
        )
       
    }
}