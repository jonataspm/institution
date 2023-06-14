import { BarCont, InputSearchBar, ProjectDiv } from './style'

//Material
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'var(--Pcolor)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'var(--SubColor)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(
  name: string,
  situation: string,
  submition: number,
  actions: any
) {
  return { name, situation, submition, actions }
}

const rows = [
  createData('Lecionar Aulas de Musica', 'Ativo', 1, 'no actions'),
  createData('Manutenção e Suporte Técnico', 'fechado', 3, 'no actions'),
  createData('Ambulatório', 'fechado', 6, 'no actions'),
]

export const Projects = () => {
  return (
    <div style={{ margin: 16 }}>
      <h1>Projetos</h1>
      <ProjectDiv>
        <BarCont>
          <h3>Lista de Projetos</h3>
          <div className='filterSide'>
            <InputSearchBar>
              <SearchIcon className='icon' />
              <input type='text' placeholder='Pesquisar' />
            </InputSearchBar>
            <FilterListIcon className='icon2' />
          </div>
        </BarCont>
        <div className='TableDiv'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='center'>
                    {' '}
                    <b>Nome</b>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <b>Situação</b>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <b>Submição</b>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <b>Ações</b>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align='center' component='th' scope='row'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.situation}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.submition}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.actions}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <a className='AddProject'>
          <p>Adicionar Projeto</p>
          <div className='div-line-holder'>
            <AddCircleIcon className='addcicleIco' />
            <hr className='line-holder'></hr>
            <HexagonOutlinedIcon className='addhexaIco' />
          </div>
        </a>
      </ProjectDiv>
    </div>
  )
}
