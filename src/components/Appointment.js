import React from 'react'
import {useForm} from 'react-hook-form'
import moment from 'moment'
require('moment/locale/pt-br')
moment.locale('pt-br')
console.log(moment.locale())


export const Appointment = () => {
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => console.log(data)

  var newDays = []
  for (var i = 1; i < 8; i++) {
    // console.log(i)
    newDays[i-1] = moment().add(i, 'days')
  }
  // console.log(newDays[1].format('D/MM/YYYY'))
  const formato = 'D/MM/YYYY dddd'
  const formato2 = 'D/MM/YYYY'


  return (
    <>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h6 className="border-bottom border-gray pb-2 mb-0">Reserva Refeições</h6>
          <div className="table-responsive">
            
            <table className="table">
              <thead>
                <tr className="d-flex">
                    <th className="col align-text-bottom"></th>
                    {
                      newDays.map(item => 
                        <th className="col text-center"  key={item}>
                          { item.format(formato) }
                        </th>
                      )
                    }
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex">
                    <th className="col">Café</th>
                    {
                      newDays.map(item => 
                        <th className="col text-center form-check" key={item}>
                          <input 
                            className='form-check-input ml-0' 
                            name='cafe' 
                            value={ item.format(formato2) } 
                            type='checkbox' 
                            ref={register} 
                          />
                        </th>
                      )
                    }
                </tr>
                <tr className="d-flex">
                    <th className="col">Almoço</th>
                    {
                      newDays.map(item => 
                        <th className="col text-center form-check" key={item}>
                          <input 
                            className='form-check-input ml-0' 
                            name='almoco' 
                            value={ item.format(formato2) } 
                            type='checkbox' 
                            ref={register} 
                          />
                        </th>
                      )
                    }
                </tr>
                <tr className="d-flex">
                    <th className="col">Jantar</th>
                    {
                      newDays.map(item => 
                        <th className="col text-center form-check" key={item}>
                          <input 
                            className='form-check-input ml-0' 
                            name='jantar' 
                            value={ item.format(formato2) } 
                            type='checkbox' 
                            ref={register} 
                          />
                        </th>
                      )
                    }
                </tr>
                
              </tbody>
            </table>
            
          </div>
          <small className="d-block text-right mt-3">

            <button type="button" className="btn btn-danger btn-sm">Cancelar</button>
            {' '}
            <input type="submit" className="btn btn-success btn-sm" value='Salvar' />
          </small>
        </form>
      </div>

      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <h6 className="border-bottom border-gray pb-2 mb-0">Refeições Agendadas</h6>
        <div className='row'>
          <div className='col-sm'>
          <label className="form-custom">One
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
            <ul className="list-unstyled mt-2">
              <li><b>Café</b>
                <ul>
                  <li>18/05/2020</li>
                  <li>19/05/2020</li>
                  <li>20/05/2020</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='col-sm'>
            <ul className="list-unstyled mt-2">
              <li><b>Almoço</b>
                <ul>
                  <li>18/05/2020</li>
                  <li>19/05/2020</li>
                  <li>20/05/2020</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='col-sm'>
            <ul className="list-unstyled mt-2">
              <li><b>Jantar</b>
                <ul>
                  <li>18/05/2020</li>
                  <li>19/05/2020</li>
                  <li>20/05/2020</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
