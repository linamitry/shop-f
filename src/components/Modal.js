import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'


export const Modal = () => {
    useEffect( () => {
        window.M.updateTextFields()
    },[])
    return (
    <div>
        <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
    </div>



        // <div className="modal-window">
        // <div className="row valign-wrapper" style={{marginTop:'15%'}}>
        //     <div className="col s4 offset-s4">
        //       <div className="card blue darken-3">
        //         <div className="card-content white-text">
        //           <span className="card-title">Авторизация</span>
        //           <div>
        //             <div className="input-field">
        //                 <input 
        //                     placeholder="Введите email" 
        //                     type="text"
        //                     id="email"
        //                     name="email"
        //                 />
        //                 <label htmlFor="email">Email</label>
        //             </div>
        //             <div className="input-field">
        //                 <input 
        //                     placeholder="Введите пароль" 
        //                     type="password"
        //                     id="password"
        //                     name="password"
        //                 />
        //                 <label htmlFor="password">Пароль</label>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="card-action">
        //             <button
        //                 className="btn yellow darken-4"
        //                 style={{marginRight: 10}}
        //                 // disabled={loading}
        //                 // onClick={loginHandler}
        //                 >Войти
        //             </button>
        //             <button 
        //                 className="btn grey lighten-1 black-text"
        //                 // onClick={registerHandler}
        //                 // disabled={loading}
        //                 >Регистрация
        //             </button>
        //             </div>
        //       </div>
        //     </div>
        // </div>
        // </div>
    )
}
