import React from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper }   from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { styled } from '@mui/material';
import { CircularProgress } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
  table: {
    minWidth: 1080,
  },
}));

const StyledProgress = styled(CircularProgress)(({ theme }) => ({
    margin: theme.spacing(2)
}));

class App extends React.Component {
  
  state = {
    customers: "",
    completed: 0
  }

  componentDidMount() { // 모든 컴포넌트가 마운트되었을 때 실행됨
    this.timer = setInterval(this.progress, 20); // 0.02초마다 한번씩 프로그래스가 실행될 수 있도록 설정
    this.callApi()      // 준비가 완료 되었으니 api를 불러보기
    .then(res => this.setState({customers: res})) // 그럼 이제 아래의 body가 res라는 이름으로 가져와짐
    .catch(err => console.log(err));  // 오류가 발생할 경우 콘솔에 오류 출력
  }

  callApi = async () => {  // 비동기로 수행하도록
    const response = await fetch('/api/customers');
    const body = await response.json(); // 고객 목록이 json형태로 출력이 되는데 그걸 body에 넣어줄거임. 즉, react app에서 server에 접속을 해서 그 내용을 가져와서 json형태로 body에 저장
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0: completed + 1 });
  };

  render() {
    return (
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>no.</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
              return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);
            }) :
            <TableRow>
              <TableCell colSpan="6" align="center">
                <StyledProgress variant="indeterminate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }
}

export default App;
