import React from 'react'
import {useForm} from 'react-hook-form'
import moment from 'moment'
import { useStateMachine } from 'little-state-machine'
import updateAction from './updateAction'
require('moment/locale/pt-br')
moment.locale('pt-br')
// console.log(moment.locale())

export const Appointment4 = () => {
  const {register, handleSubmit} = useForm()
  const { state, action } = useStateMachine(updateAction)

  // const onSubmit = (data) => console.log(JSON.stringify(data))
  const onSubmit = data => {
    action(data)
    // console.log(state.data.days[0].cafe)
  }

  var newDays = []
  for (var i = 1; i < 8; i++) {
    // console.log(i)
    newDays[i-1] = moment().add(i, 'days')
  }
  // console.log(newDays[1].format('D/MM/YYYY'))
  // const formato = 'D/MM/YYYY ddd'


  return (
    <>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h6 className="border-bottom border-gray pb-2 mb-0">Reserva Refeições</h6>
          <div className="table-responsive">
            
            <table className="table">
              <thead>
                <tr className="d-flex">
                    <th className="col py-0"></th>
                    {/* {
                      newDays.map(item => 
                        <th className="col text-center"  key={item}>
                          <label className='mb-0'>{ item.format(formato) }</label>
                        </th>
                      )
                    } */}
                    {
                      newDays.map((item, index) => 
                        {const fieldName = `days[${index}]`;
                          return (
                          <th className="col text-center pb-0 pt-1" key={item}>
                            {/* <label className='mb-0'>{ item.format(formato) }</label> */}
                            <p className='h6 text-capitalize'>{ item.format('ddd') }</p>
                            <p className='h5 font-weight-bold'>{ item.format('DD') }</p>
                            <p className='h6 text-capitalize'>{ item.format('MMM') }</p>
                            <input 
                              type="date" 
                              className="form-control d-none"
                              name={`${fieldName}.date`} 
                              defaultValue={item.format('YYYY-MM-DD')}
                              ref={register} 
                            />
                          </th>
                          )
                        }
                      )
                    }
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex">
                    <th className="col">Café</th>
                    {
                      newDays.map((item, index) => 
                        {const fieldName = `days[${index}]`;
                          return (
                          <th className="col text-center form-check" key={item}>
                            <input 
                              className='form-check-input ml-0' 
                              name={`${fieldName}.cafe`}
                              type='checkbox' 
                              ref={register} 
                            />
                          </th>
                          )
                        }
                      )
                    }
                </tr>
                <tr className="d-flex">
                    <th className="col">Almoço</th>
                    {
                      newDays.map((item, index) => 
                        {const fieldName = `days[${index}]`;
                          return (
                          <th className="col text-center form-check" key={item}>
                            <input 
                              className='form-check-input ml-0' 
                              name={`${fieldName}.almoco`}
                              type='checkbox' 
                              ref={register} 
                            />
                          </th>
                          )
                        }
                      )
                    }
                </tr>
                <tr className="d-flex">
                    <th className="col">Jantar</th>
                    {
                      newDays.map((item, index) => 
                        {const fieldName = `days[${index}]`;
                          return (
                          <th className="col text-center form-check" key={item}>
                            <input 
                              className='form-check-input ml-0' 
                              name={`${fieldName}.jantar`}
                              type='checkbox' 
                              ref={register} 
                            />
                          </th>
                          )
                        }
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
          {/* {state.data.days.map((item, index) => <p key={index}>{ item.date }</p>)} */}
          {/* {state.data.days === undefined ? '' : state.data.days.map((item, index) => JSON.stringify(item.almoco) === 'true' ? <p key={index}>{ item.date } </p> : '' ) } */}
          {/* {state.data.days === undefined ? '' : state.data.days.map((item, index) => JSON.stringify(item.cafe) === 'true' ? <p key={index}>{ item.date } </p> : '' ) } */}
            <ul className="list-unstyled mt-2">
              <li><b>Café</b>
                <ul>
                {state.data.days === undefined ? '' : state.data.days.map((item, index) => JSON.stringify(item.cafe) === 'true' ? <li key={index}>{ moment(item.date).format('DD/MM/YYYY') } </li> : '' ) }
                </ul>
              </li>
            </ul>
          </div>
          <div className='col-sm'>
            <ul className="list-unstyled mt-2">
              <li><b>Almoço</b>
                <ul>
                {state.data.days === undefined ? '' : state.data.days.map((item, index) => JSON.stringify(item.almoco) === 'true' ? <li key={index}>{ moment(item.date).format('DD/MM/YYYY') } </li> : '' ) }
                </ul>
              </li>
            </ul>
          </div>
          <div className='col-sm'>
            <ul className="list-unstyled mt-2">
              <li><b>Jantar</b>
                <ul>
                {state.data.days === undefined ? '' : state.data.days.map((item, index) => JSON.stringify(item.jantar) === 'true' ? <li key={index}>{ moment(item.date).format('DD/MM/YYYY') } </li> : '' ) }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
