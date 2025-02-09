import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/id/236/100/150',
    'name': 'Kim',
    'birthday': '980413',
    'gender': 'female',
    'job': 'developer'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/237/100/150',
    'name': 'Gwon',
    'birthday': '991213',
    'gender': 'male',
    'job': 'athlete'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/238/100/150',
    'name': 'Yoo',
    'birthday': '666666',
    'gender': 'female',
    'job': 'mom'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
