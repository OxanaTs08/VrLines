import {Button, styled} from '@mui/material'


const StyledButton = styled(Button) ({
    padding: '17px 66px',
    backgroundColor: 'rgba(223, 112, 33, 1)',
    color: 'rgba(255, 255, 255)',
})

const MainButton = ({buttonText}) => {
  return (
    <StyledButton variant="contained">{buttonText}</StyledButton>
  )
}

export default MainButton