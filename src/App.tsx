import HorizontalCalendar from './components/horizontal-calendar/horizontal-calendar';
import './App.scss'

function App() {
  return (
    <div className='container'>
      <h1>Horizontal Calendar</h1>

      <div className='box'>
        <section>
          <p>Calendar with current Date</p>

          <HorizontalCalendar day={new Date()} />
        </section>

        <section>
          <p>Calendar with Holidays <span className='Green'>(Green Theme)</span></p>

          <HorizontalCalendar
            day={new Date('2022-07-01 17:36:31.556917+00')}
            holidays={[new Date('2022-07-02 17:36:31.556917+00'), new Date('2022-06-29 17:36:31.556917+00')]}
          />
        </section>


        <section>
          <p>Calendar with Holidays <span className='Blue'>(Blue Theme)</span></p>

          <HorizontalCalendar
            theme='blue'
            day={new Date('2022-07-01 17:36:31.556917+00')}
            holidays={[new Date('2022-07-02 17:36:31.556917+00'), new Date('2022-06-29 17:36:31.556917+00')]}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
